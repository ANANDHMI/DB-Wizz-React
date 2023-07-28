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
  }
};

export default apiService;
