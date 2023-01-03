import './App.css';
import {useFormik} from 'formik';
import * as yup from "yup";

//validasyon işlemlerinde yupjs kütüphanesi kullanılır


function App() {
  
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password:yup.string.min(5).required, 
    passwordConfirm:yup.string().oneOf([yup.ref("password")]).required(),

  });
  const {handleSubmit, handleChange,values} = useFormik({
    initialValues:{
      email:"",
      password:"",
      passwordConfirm:""
    },
    onSubmit:(values)=>{
      console.log(values);
    }
    validationSchema:validations,
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
       <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" value={values.email} onChange={handleChange}/>
        <br/>
        <br/>
        <label >Password</label>
        <input name="password" value={values.password} onChange={handleChange}/>
        <br/>
        <br/>
        <label>Confirm Password</label>
        <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange}/>
         <br/>
         <br/>
        <button type="submit">Submit</button> {JSON.stringify(values)}
      </form>

    </div>
  );
}

export default App;
