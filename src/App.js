import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const players = ['Ross Taylor', 'Adam Milne',  'Jimmy nesham', 'Trent Boult', 'Lockie Farguson'];
  const products = [
    {name: 'Laptop', price:'$450.99'},
    {name: 'Desktop', price:'$300.99'},
    {name: 'Tablet', price:'$500.99'},
    {name: 'iPhone', price:'$540.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
          <p>This is for check...</p>
          <ul>
            {players.map(player => <li>{player}</li>)}
          </ul>
          <Posts></Posts>
          {products.map(pd => <Products product ={pd}></Products>)}
          <Person name="Wahidul Islam" jobTitle="Front-end-developer"></Person>
          <Person name="Jhanker Mahbub" jobTitle="Sr. Front-end developer"></Person>
          <Person name="Waqar Younus" jobTitle="Cricketer"></Person>
          <Person name="Abdul Kadir" jobTitle="Scientist"></Person>
      </header>
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() =>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => setPosts(data))
  })
  
  return(
    <div>
      <h1>Total Posts:{posts.length}</h1>
      
        <ul>
            {
              posts.map(post =><li>{post.title}</li>)
            }
        </ul>
      
    </div>
  )
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
