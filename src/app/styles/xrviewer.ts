import styled,{ createGlobalStyle } from 'styled-components';

export const XRViewerGlobalrtyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        font-size: 10px;
        text-align: center;
        /* margin: 20px; */
        margin:0px !important;
        color: #ccc;
        background-color: #1d1e20;
        overflow: hidden;
        height: 100vh;
    }
    .xr-button{
       
        opacity: 1;
        user-select: auto;
        padding: 8px 12px 8px 12px;
        font-family: sans-serif;
        border-radius: 100px;
        line-height: 24px;
        font-size: 10px;
        border-radius: 12px;
        // box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);
        border:1px solid #cacaca;
        filter:invert(1) hue-rotate(180deg) brightness(1.5);
        // color: rgba(255,255,255,0.9);
        // background: rgba(29,53,59,0.7);
        // backdrop-filter: blur(14px);
        // border-bottom: 1px solid rgba(255,255,255,0.08);
        font-family: 'Inter', 'Helvetica', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color:rgba(0,0,0,0.9);
        background:white;
        margin:8px 5px;
        z-index: 11;
        cursor: pointer;
    }

    .xr-button:hover{
        // background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        // border-bottom: 1px solid rgba(255,255,255,0.24);
        color:rgba(255,255,255,0.9);
        background:#40aeff;
    }

`;

export const WebXRContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
export const ImageListContainer = styled.div`
    // width: calc(100% - 40px);
    // width:calc(100% - 559px);
    //width:calc(100% - 548px);
    //transform: translate(263px, 0px);
    // padding: 10px;
    //padding: 10px 0px 10px 0px;
    width: calc(100% - 700px);
    height:90px;
    transform: translate(-50%,0px);
    left: 50%;
    background: white;
    // border-radius: 12px;
    border-radius: 12px 12px 4px 4px;
    padding: 10px 10px 10px 10px;
    gap: 1rem;
    overflow-x: auto;
    z-index: 100;
    bottom: 8px;
    position: absolute;
    display: flex;
    flex-flow: row;
    align-items: baseline;
    filter: invert(1) hue-rotate(180deg) brightness(1.2);
    border:1px solid #cacaca;
    ::-webkit-scrollbar {
        height: 6px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #40aeff;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px rgb(255 255 255 / 30%);
        background-color: rgba(40,43,47,0.8);
        border-radius: 100px;
    }
`

export const ImageInList = styled.img`
    padding:20px;
    transition:all 0.15s;
    scroll-snap-align: start;
    // flex: 0 0 60px;
    // width: 60px;
    // height: 60px;
    flex: 0 0 60px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    object-fit: contain;
    padding: 12px;
    box-shadow: inset 0 0 2px rgb(255 255 255 / 30%);
    // background-color: rgba(40,43,47,0.8);
    background-color: rgba(0,0,0,1.0);
    filter: invert(1) hue-rotate(180deg);
`

export const XRDivContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translate(-50%, 0);
    margin: 0 auto;
    z-index: 10;
    display:flex;
`

export const TopFixedBtn = styled.div`
    border-radius: 12px;
    opacity: 1;
    user-select: auto;
    padding: 8px 12px 8px 12px;
    // font-family: 'Inter', sans-serif;
    // border-radius: 100px;
    // line-height: 10px;
    line-height: 24px;
    font-size: 10px;

    // box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);
    border:1px solid #cacaca;
    filter:invert(1) hue-rotate(180deg) brightness(1.5);
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color:rgba(0,0,0,0.9);
    background:white;

    // color: rgba(255,255,255,0.9);
    // background: rgba(29,53,59,0.7);
    // backdrop-filter: blur(14px);
    //border-bottom: 1px solid rgba(255,255,255,0.08);
    margin:8px 5px;
    z-index: 11;
    cursor: pointer;

    &:hover {
        // background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        // border-bottom: 1px solid rgba(255,255,255,0.24);
        color:rgba(255,255,255,0.9);
        background:#40aeff;
    }
`

export const CanvasContainer = styled.div`
    flex: 1;
    height:100vh;
    width:100vw;
`