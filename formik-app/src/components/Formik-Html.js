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
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      
    >
      {
        ({handleSubmit,handleChange}) => (
          <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane"  />
        <br/>
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        />
        
        <button type="submit">Submit</button>
      </form>
        )
      }
    </Formik>
    </div>
  );
}

export default App;
