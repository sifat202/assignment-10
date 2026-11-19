import axios from 'axios';
import { useAuth } from '../Authprovider/CustomAuthhook';
// const TO =()=>{
//   const {accessToken} =useAuth();
// return accessToken
// }
// Create a custom instance of Axios
const api = axios.create({
    
  // Set the base URL for all requests made using this instance
  baseURL: 'https://assignment-10-server-zeta-jet.vercel.app', 
  headers: {
    'Content-Type': 'application/json',
    // Add any global headers like authorization tokens here
  }
});

export default api;
// http://localhost:3000