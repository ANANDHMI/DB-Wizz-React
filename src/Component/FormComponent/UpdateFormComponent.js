import React,{useState} from "react";
import apiService from "../../config/apiService";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";


const UpdateFormComponent = () =>{
    const [formData, setFormData] = useState({
        variable: '',
        value: '',
        active : true,
      });

      const handleToggle = () => {
        // Toggle the active state when the toggle switch is clicked
        setFormData((prevData) => ({ ...prevData, active: !prevData.active }));
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
        const data = {
          variable: formData.variable,
          value: formData.value,
          active: formData.active,
        };
        
        apiService.updateConfig(data)
          .then((response) => {
            // Handle the API response data here
            console.log('API response:', response);
          })
          .catch((error) => {
            console.error('Error sending API request:', error);
          });
    
    
        // You can perform any action with the form data here
        console.log('Form data:', formData);
    
        // For example, you might send the form data to the server using an API call
      };


      return (
        <div className = "form-box">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="variable" className='form-component-label'>Variable:</label>
            <input
              type="text"
              id="variable"
              name="variable"
              value={formData.variable}
              onChange={handleChange}
              required
            />
          </div>
    
          <div>
            <label htmlFor="value" className='form-component-label'>Value:</label>
            <input
              type="text"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
              required
            />
          </div>
          
          <ToggleSwitch label="on/off" toggled="true"  onClick={handleToggle}/>
    
          <button type="submit">Update</button>
        </form>
        </div>
      );
}

export default UpdateFormComponent;