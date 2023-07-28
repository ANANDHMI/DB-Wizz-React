import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8080/dbWizz'; // Replace this with your Java API URL

const AddService = {
  addConfigData: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/repo/addConfig`,formData);
      console.log("DATA",response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
};

export default AddService;
