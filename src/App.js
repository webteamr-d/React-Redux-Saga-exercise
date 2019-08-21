import React from 'react';
import './App.css';

import Sidebar from './components/sidebar/sidebar'
import Header from './components/header/header'
import Content from './components/content/content'

export class App extends React.Component {
  render(){
    return (
       <div className="wrapper">
        <Sidebar />

        <div className="main" id="main">
            <Header />

            <Content />
        </div>
    </div>

    )
  }
}

export default App;
