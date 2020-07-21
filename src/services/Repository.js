import axios from 'axios';
// import cookieService from './cookie.service';

const baseDomain = 'https://api.petfinder.com';
const baseURL = `${baseDomain}/v2`;

// const token = cookieService.getCookie('pf-token');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtV1Z0V2pmaWRBUXh6R09RUTc0RGdFQ2VEZnZMOGYzN0hOZXJpVk13cUZlZ1JPZkJIMiIsImp0aSI6IjIyZDFiOWFmYzE4ZDQ4YjY4YjcwM2FlYmM0M2FiMDM3ODQyZTVjZTgxZDZmNWM2NmVhNmE1MWUxZmE1YzM2Njg5NTZjY2Y5ZDUxYTMwNWU4IiwiaWF0IjoxNTkyODg2NjM4LCJuYmYiOjE1OTI4ODY2MzgsImV4cCI6MTU5Mjg5MDIzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.q2IXJis2kF4h6Q80zrniHS4z0REwVrmmhemaiPA1p2B7K_agKyj4r88923C-2SR1dxvpFX83RttE6abXoYVgUjS03oFtvwqmTax0HDSfsCMJRclr9qpFMSWsRc1c9JHMHHRJtAs0cRdzrAXbT2oV5TM1JtJ4a64qMXSiTJFYQwm2PCFblUPc0ChInsEXbbSAIWPpJR6kOHfHFeQqoQl_ZmhuLLtgNe9pOKATQuxxekrldpFfEmQQFjcg7FVUbKHWhexOPUpZZey_ACtepzIoRi80P1mBWmPPH5uj_5UqbJlW8if_Z6qSUQQgE8lAeXSMpKYjimP2igM8B7tV9YRCJw';

export default axios.create({
  baseURL,
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
    'credentials': true,
  }
});