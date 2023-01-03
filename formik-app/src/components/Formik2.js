import './App.css';
import { Formik} from 'formik';

//form elemanları yerine html etiketleri kullanılmasına denir. 
//Form yerine form , field yerine input yazılır
//html etiketlerini kullanabilmek için handleChange ve handleSubmit kullanılmalı.

function App() {
  return (
 
    <div className="App">
      <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: 'zuhal',
        lastName: 'ozdemir',
        email: 'z@gmail.com',
        gender:'female',
        hobies:[] , //checkbox tipi array olur
        country: "usa"
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      
    >
      {
        ({handleSubmit,handleChange,values}) => (
          <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane"  value={values.firstName} onChange={handleChange} />
        <br/>
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" value={values.lastName}onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onChange={handleChange}
          
        />
        <br/>
        <br/>
        
        <span>Male</span>
        <input type="radio" name="gender" value="male" onChange={handleChange} />
        <span>Female</span> 
        <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender==="female"}/>
        <br/>

        <div>Reading
        <input type="checkbox" name="hobies" value="reading" onChange={handleChange}/>
        </div>
        <div>Cinema
        <input type="checkbox" name="hobies" value="cinema" onChange={handleChange}/>
        </div>
        <div>Walking
        <input type="checkbox" name="hobies" value="walking" onChange={handleChange}/>
        </div>
      
      <select name="country" value={values.country} onChange={handleChange} >
        <option value="usa">the usa</option>
        <option value="eng">england</option>
        <option value="ger">germany</option>
      </select>

        <button type="submit">Submit</button>
        {JSON.stringify(values)}
      </form>
        )
      }
    </Formik>
    </div>
  );
}

export default App;
