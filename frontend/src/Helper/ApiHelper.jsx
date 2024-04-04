import axios from 'axios';

class ApiHelper {
   static baseUrl = "http://localhost:3000";
    static async get(request){
        
        console.log(request);
       return (await axios.get(`${this.baseUrl}/${request.path}`))
    }
    static async  post(request){
        return (await axios.post(`${this.baseUrl}/${request.path}`,request.data)).data
    }
    static async  delete(request){
        const requestData = { email: request.data };
        return (await axios.delete(`${this.baseUrl}/${request.path}`, { data: requestData })).data
    }
    static async  put(request){
        console.log(request);
       const email = request.data
       console.log(email);
        return (await axios.put(`${this.baseUrl}/${request.path}`, {email}));
    }

}
export default ApiHelper