import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
       <Counter></Counter>
       <EnternalUsers></EnternalUsers>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(0);
  
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div className=''>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
};

function EnternalUsers(props){
  const [users, setUsers] = useState([]);

  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return (
    <div className='users'>
      <h1>External Users</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='user'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;




// const products = [
//   {name: 'Laptop', price: '70000'},
//   {name: 'Phone', price: '20000'},
//   {name: 'Watch', price: '5000'},
//   {name: 'Bike', price: '150000'}
// ];

// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }

// function Product (props){
//   return (
    
//     <div className='product'>
//         <h1>Name: {props.name}</h1>
//         <p>Price: {props.price}</p>
//     </div>
//   )
// }

