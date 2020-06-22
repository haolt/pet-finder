import axios from 'axios';

const baseDomain = 'https://api.petfinder.com';
const baseURL = `${baseDomain}/v2`;

export default axios.create({
  baseURL,
});
