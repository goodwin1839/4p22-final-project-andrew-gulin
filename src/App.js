import './App.css';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { useEffect, useState } from 'react';
import Counter from './components/Counter/Counter';

function App() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
      console.log('useEffect');
      fetch('/4p22-final-project-andrew-gulin/data.json')
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
        });
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Counter/>
      <div className="App-container">
        {
          products.map((item, index) => {
            return <Card key={index} title={item.title} 
                         description={item.description}
                         onClick={(event) => console.log('click on', event)}
                         img={item.image}
                         price={item.price}/>
          })
        }
      </div>
      <div className="App-newsletter">
        <h2>Подписаться на новости компании</h2>
        <Input type="email" placeholder="Введите email" name="email" id="email" />
        <Button>Подписаться</Button>
      </div>
    </div>
  );
}

export default App;
