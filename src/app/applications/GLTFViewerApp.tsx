import React,{ useCallback,useEffect,useRef,useState } from 'react'
import arrayBufferToString from '@Utils/gltf/arrayBufferToString'
import useStore from '@Utils/gltf/store'
import Result from '@Components/gltf/Result'
import { IGLTFViewerApp } from '@CustomTypes';
import { Container,AlignContainer,AlignPara,CommentPara } from '@Styles/Plugin'
import DragCorner from '@Components/DragCorner';

const GLTFViewerApp: React.FC<IGLTFViewerApp> = ({envBuild,width,height}:IGLTFViewerApp) => {

  const { buffer } = useStore((state) => ({
    buffer: state.buffer,
  }))
  const [fileName,setFileName] = useState();

  const [dragActive, setDragActive] = React.useState(false);
  const overlayRef = useRef();
  const resultRef = useRef();

  const handleDragEnter = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);

    if(overlayRef.current){
      overlayRef.current.style.zIndex= '10000';
    }
    if(resultRef.current){
      resultRef.current.style.pointerEvents = 'none';
    }
  };

  const handleDragOver = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };



  const handleDragLeave = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if(overlayRef.current){
      overlayRef.current.style.zIndex= '0';
    }
    if(resultRef.current){
      resultRef.current.style.pointerEvents = 'initial';
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if(e.dataTransfer.files.length === 1){
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader()
        reader.onabort = () => console.error('file reading was aborted')
        reader.onerror = () => console.error('file reading has failed')
        reader.onload = async () => {
          console.log('loaded');
          const data = reader.result
          useStore.setState({ buffer: data, fileName: file.name })
          setFileName(file.name);
        }
        reader.readAsArrayBuffer(file)
      }
    }else{
    }
  };

  useEffect(()=>{
    parent.postMessage({ pluginMessage: { type: 'get_data' } }, '*')
    window.onmessage = (event) => {
      if(event.data.pluginMessage != undefined){
        const {type,value} = event.data.pluginMessage;
        if(type === 'finished_msg'){
          console.log(value)
          const fileKey = value[0]
          const fileName = value[1]
          const nodeId = value[2];
          useStore.setState({ figmaMsg: value})
          console.log('fileKey: ' + fileKey);
          console.log('fileName: ' + fileName);
          console.log('nodeId: ' + nodeId);
        }
      }
      
    };
  },[]);  

  return (
    <>
    <Container 
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver} 
      onDragLeave={handleDragLeave} 
      onDrop={handleDrop}>

      <AlignContainer
        style={{
          opacity:dragActive?'1':(buffer?'0':'1'),
        }}
        ref={overlayRef}
        >
        {dragActive ? 
        
        (
          <AlignPara>Drop the files here ...</AlignPara>
        ) 
          : 
        (
          <div style={{
            width: '100%',
            textAlign: 'center'
          }}>
          <AlignPara>
            Drag {"'"}n{"'"} drop your <span style={{color:'blue'}}>GLTF</span> file <span className="text-blue-600">here </span> 
          </AlignPara>
          <CommentPara>
            only support 1 file with <span style={{color:'green'}}>.glb</span> or <span style={{color:'green'}}>.gltf</span> extension
          </CommentPara>
          </div>
        )}
      </AlignContainer>

        {buffer?<Result ref={resultRef} envBuild={envBuild} width={width} height={height}>{fileName}</Result>:<></>}

      <DragCorner minWidth={400} minHeight={400} />
    </Container>
    
    
    </>
  )
}
export default GLTFViewerApp;