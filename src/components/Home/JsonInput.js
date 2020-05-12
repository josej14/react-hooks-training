import './JsonInput.scss';
import React from "react";
import { useForm } from "react-hook-form";
import texts from '../../config/texts';

const JsonInput = ({ data, setJsonObj }) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    try {
      const jsonData = JSON.parse(data.json);
      setJsonObj(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className='form-container'>
      <form 
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='form-label' htmlFor="json">{texts.HOME.insert}</label>
        <textarea
          className='form-input'
          ref={register}
          rows="20" 
          cols="75"
          name={'json'}
          value={data.json}
        />

        <button className='form-button'>
          {texts.HOME.generate}
        </button>

      </form>
    </div>
  )
};

export default JsonInput;
