// config.js
const config = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_KEY: process.env.REACT_APP_API_KEY,
};
console.log(process.env.REACT_APP_BASE_URL,"url");

if (process.env.NODE_ENV === 'production') {
  // Do something for production if needed
  console.log('Production environment');
}

export default config;
