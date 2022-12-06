import React, {useEffect,useState} from 'react'
import { webRootURL } from '@Config';
import { IPluginApp } from '@CustomTypes';
import {dataToPHPServer,postData} from '@Utils/server.js'
import {Container,FlexContainer,FigmaButton,LoadingContainer,Loading} from '@Styles/Plugin'
import {nginxUploadFolder,nginxDirLink} from '@Config'

const PluginApp: React.FC<IPluginApp> = ({platform}:IPluginApp) => {
  const [isLoading,setIsLoading] = useState(true);
  const [loadingText,setLoadingText] = useState('Uploading...');
  useEffect(()=>{
    
    parent.postMessage({ pluginMessage: { type: 'get_data' } }, '*')

    window.onmessage = (event) => {
      const {type,value} = event.data.pluginMessage;
  
      if(type == 'finished_msg'){
  
        if(platform != 'localserver'){
          const fileKey = value[0]
          const fileName = value[1]
          const nodeId = value[2];
          //const platform = value[3];
          setIsLoading(false);
          window.open(`${webRootURL}${platform === 'webxr'?'index':'importer'}.html?query_token=auth_everytime&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
          parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
     
        }
        else{
          const fileKey = value[0]
          const fileName = value[1]
          const nodeId = value[2];
          const data = value[3];
          const nodeJSON = value[4];
          //const platform = value[3];
          // console.log('fileKey: ' + fileKey);
          // console.log('fileName: ' + fileName);
          // console.log('nodeId: ' + nodeId);
          // console.log(data)
          // console.log(nodeJSON)
          setIsLoading(true)
          setLoadingText('Uploading...')
          let loadingNum = 0;
          const totalLoadingNum = data.length + 1;

          // ############### upload json data ###############
          console.log(nodeJSON);
          console.log(nodeId)
          const jsonbb = new Blob([JSON.stringify(nodeJSON)]);
          const jsonBlob = URL.createObjectURL(jsonbb);

          const finishCBFunc = () =>{setTimeout(()=>{
            setIsLoading(false)
            window.open(`${webRootURL}index.html?query_token=local_server&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
            parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
          },1000);setLoadingText('Finished!');}
          
          // ############### upload json data ###############
          postData(jsonBlob, `${nginxUploadFolder}/${fileKey}/${nodeId}/`, `data.json`,()=>{},
            ()=>{
              loadingNum++;
              if(loadingNum === totalLoadingNum){finishCBFunc()}
            },
          )
          // ############### upload imag array ###############
          for(var i=0;i<data.length;i++){ 
            let index = i;
            const bb = new Blob([data[i].imageData]);
            const blob = URL.createObjectURL(bb);
            // # plain img data
            if(!data[index].name.includes('.gltf') && !data[index].name.includes('https://')){
              postData(blob, `${nginxUploadFolder}/${fileKey}/${nodeId}/`, `${data[index].name}.png`,()=>{},
                ()=>{loadingNum++;if(loadingNum === totalLoadingNum){finishCBFunc()}},
              )
            }
            else{
              // # model img data
              const name = data[index].name.split('/')[data[index].name.split('/').length - 1];
              postData(blob,`${nginxUploadFolder}/${fileKey}/${nodeId}/`, `${name}.png`,()=>{},
                ()=>{loadingNum++;if(loadingNum === totalLoadingNum){finishCBFunc()}},
              )
            }
          }
        }

      }
      
    };
  },[]);  

  const onCancel = () =>{
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  return (
    <>
    <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
      <h1 style={{marginTop:'0px'}}>{platform}</h1>
      <div style={{textAlign:'center'}}>
        <button style={{
          fontSize:'14px',
          lineHeight:'16px',
          padding: '4px 8px 4px 8px',
          borderRadius: '6px',
          background: '#10bd4e',
          color: 'white',
          border: '1px solid #ffffff87',
          cursor: 'pointer',
        }   
        }onClick={onCancel}>Cancel</button>
      </div>
    </div>
    <LoadingContainer style={{zIndex:`${isLoading?'1':'-1'}`,opacity:`${isLoading?'1':'0'}`}}><Loading>{loadingText}</Loading></LoadingContainer>
    </>
  )
}
export default PluginApp;