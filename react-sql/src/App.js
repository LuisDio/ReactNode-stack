import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    products : [],
    product: {
      name: 'sample product',
      price: 20
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = _ => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => this.setState({ products: response.data }))
      .catch(err => console.error(err))
  }

  addProduct = _ => {

  }

  renderProduct = ({product_id, name}) => <div key={product_id}>{name}</div>

  render() {
    const { products, product } = this.state;
    return (

      <div className="App">
        {products.map(this.renderProduct)}

        <div>
          <input value={product.name} />
          <input value={product.price} />
        </div>
    </div>

    );
  }
}

export default App;
