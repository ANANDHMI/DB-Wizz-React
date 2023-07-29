import React, { useState } from 'react';
import './FormComponent.css'
import apiService from '../../config/apiService';


const DeleteFormComponent = () => {
    const [variable, setVariable] = useState('');
  

  
    const handleChange = (event) => {
        const { value } = event.target;
        setVariable(value);
      };
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      
      apiService.deleteConfig(variable)
        .then((response) => {
          // Handle the API response data here
          console.log('API response:', response);
        })
        .catch((error) => {
          console.error('Error sending API request:', error);
        });
  
  
      // You can perform any action with the form data here
      console.log('variable data:', variable);
  
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
            value={variable}
            onChange={handleChange}
            required
          />
        </div>
  
        <button type="submit">Delete</button>
      </form>
      </div>
    );
  };

  export default DeleteFormComponent;