import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Laptop', price:'$450'},
    {name: 'Desktop', price:'$300'},
    {name: 'Tablet', price:'$500'}
  ]
  return (
    <div className="App">
      <header className="App-header">
          <p>This is for check...</p>
          <Products product = {products[0]}></Products>
          <Products product = {products[1]}></Products>
          <Products product = {products[2]}></Products>
          <Person name="Wahidul Islam" jobTitle="Front-end-developer"></Person>
          <Person name="Jhanker Mahbub" jobTitle="Sr. Front-end developer"></Person>
          <Person name="Waqar Younus" jobTitle="Cricketer"></Person>
          <Person name="Abdul Kadir" jobTitle="Scientist"></Person>
      </header>
    </div>
  );
}
function Products(props) {
 
  const productStyles = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'gray',
    height: '250px',
    width: '250px',
    margin: '10px',
    float:'left'
  };
  const {name, price} = props.product;
  return (
    <div style ={productStyles}>
      <h3>{name}</h3>
      <h5>Price:{price} </h5>
      <button>Buy now</button>
    </div>
  )
}


function Person(props) {
const personStyle = {
  border:"5px solid yellow ",
  color:"white",
  margin:"10px"
}

  return <div style={personStyle}>
    <h1>Name:{props.name} </h1>
    <h2>Job: {props.jobTitle} </h2>
  </div>
}

export default App;
