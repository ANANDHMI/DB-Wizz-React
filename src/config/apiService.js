import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8080/dbWizz'; // Replace this with your Java API URL

const apiService = {
  fetchData: async () => {
    try {
      const response = await axios(`${BASE_URL}/repo/config`);
      console.log("DATA",response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
  addConfig : (data) => {
    // Make the API call using Axios
    return axios.post(`${BASE_URL}/repo/config/add`, data);
  },

  deleteConfig :(variable) =>{
    return axios.delete(`${BASE_URL}/repo/config/delete/variable/{variable}?variable=${variable}`);
  },

  updateConfig : (data)=>{

    return axios.post(`${BASE_URL}/repo/config/update`, data); 
  },



};

export default apiService;
