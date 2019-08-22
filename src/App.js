import React from 'react';
import './App.css';

import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import Content from './components/content/content'

export class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      categories : [
        {'categoryName':'Home'},
        {'categoryName':'Page'},
        {'categoryName':'Blog'},
        {'categoryName':'Contact us'},
        {'categoryName':'About us'}],
      products: [
        {productName: 'High-Top Sneakers', productPrice: 5.90},
        {productName: 'Matte Browline', productPrice: 34.90},
        {productName: 'Leather Bomber Jacket', productPrice: 39.90},
        {productName: 'Ribbed Knit Beanie', productPrice: 9.00},
        {productName: 'Classic Woven Dress', productPrice: 20.99},
        {productName: 'Keds Roster Sneakers', productPrice: 50.00},
        {productName: 'Men Ettika Leather Bracelet', productPrice: 28.00}
      ]
    }
  }

  render(){
    return (
       <div className="wrapper">
        <Sidebar />

        <div className="main" id="main">
            <Header categories={this.state.categories}/>
            <Content products={this.state.products}/>
        </div>
    </div>

    )
  }
}

export default App;
