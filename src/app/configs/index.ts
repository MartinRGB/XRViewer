export const isLocal = false;
export const rootURL = isLocal?`https://127.0.0.1:8887/`:`https://www.martinrgb.com/FigmaImporter/v4/`;
export const rendererURL = isLocal?`https://127.0.0.1:8887`:`https://www.martinrgb.com/FigmaImporter/v4/index.html`;
export const clientID = isLocal?'6clxS2O4bl9ADNcy1wh5rk':'2beFW69qeg7DvjBp6bKpm5';
export const secrectID = isLocal?'3RtOK3Qx3lMUm3svNfZuycyNAeouxq':'013RerD24yjKxvSIrUr4f6dESMYST8';
export const nginxDirLink = `https://172.22.0.20:8222`;
export const nginxUploadPHPLink = nginxDirLink + `/upload.php`;
export const nginxUploadFolder = `./zfile/figma`;
export const nginxAssetLink = nginxDirLink + nginxUploadFolder.replaceAll('.','');