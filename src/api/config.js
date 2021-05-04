'use strict';

const URL_API = {
  // local: 'https://server-mybook.vercel.app/api/',
  // local: 'http://192.168.20.102:1999/api/',
  local: 'http://localhost:1999/api/', // Note 4: Bật lên để dev
  // ngrok: 'https://b66cd0c7d917.ngrok.io/api/',
};
const BASE_URL_IMAGE = `${URL_API}/file/`;
export { URL_API,BASE_URL_IMAGE};
