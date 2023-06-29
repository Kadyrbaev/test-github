import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Product from './components/Product';
import Test from './components/Test';
import Wrapper from './components/Wrapper';
import Foma from './components/Foma';

const data = [
  {
    name: "TEST",
    email: "uwyg@s",
    pass: "1234567"
  },
  {
    name: "TEST-2",
    email: "uwyg@s",
    pass: "1234567"
  },
  // {
  //   name: "Sadyr-2",
  //   email: "sadyr@g",
  //   pass: "1234567"
  // },
]

function App() {

  const [product, setProduct] = useState(data)
  const [isForm, setIsForm] = useState(true)

  function showForm(){
    console.log("test");
    setIsForm((prev)=>!prev)
  }

  function getText(text){
    setProduct((prevState)=>[...prevState, text])
  }

  
  return (
    <div className="App">
      <Header onShowForm={showForm}/>
      {isForm && <Form onGetText={getText} />}
      {
        product.map((el)=>(
          <Product key={el.name} name={el.name} email={el.email} pass={el.pass} />
        ))
      }

      <Test>
        <h2>wuiefbiwj-2</h2>
      </Test>
      <Wrapper/>
    </div>
  );
}

export default App;





