import React, { useState, useEffect } from 'react';
import apiService from './apiService';
import './TextBox.css'
import { ToggleSwitch } from '../Component/ToggleSwitch/ToggleSwitch';
import FormComponent from '../Component/FormComponent.js';


const SpwCommon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const data = await apiService.fetchData()
      setData(data);
      console.log("RESPONSE",data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const logState = state => {
    console.log("Toggled:", state)
};


  return (
    <div>
     <FormComponent/>
      <h1>Data Display</h1>
     
        {data.map(item => (
          <div>
            <div className="fixed-text-box">
              {item.id}
            </div>

            <div className="fixed-text-box">
              {item.variable}
            </div>

            <div className="fixed-text-box">
              {item.value}
            </div>
              
             <ToggleSwitch label="on/off" toggled= {item.active} onClick={logState}/>
           
          </div>
        ))}
    
    </div>
  );
};
export default SpwCommon;
