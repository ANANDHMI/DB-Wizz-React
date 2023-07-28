import React, { useState } from 'react';
import AddService from '../config/AddService.js';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    id : '',
    variable: '',
    value: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {

    AddService.addConfigData(formData);
  };

  return (
    <div>
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
      <div>
            <label htmlFor="id">id:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
      </div>

      <div>
            <label htmlFor="variable">Variable:</label>
            <input
              type="text"
              id="variable"
              name="variable"
              value={formData.variable}
              onChange={handleChange}
            />
      </div>

      <div>
            <label htmlFor="value">value:</label>
            <input
              type="value"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
            />
      </div>
            <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
