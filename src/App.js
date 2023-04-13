import React,{ Component } from 'react';
import './App.css';
import MyMap from './Components/MyMap';
import {  BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import { createBrowserHistory } from 'history';
import Stats from './Components/Stats'
import MapHelper from './Components/MapHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Title from './Components/Title';
import SimpleForm from './Components/SimpleForm';
import styled from 'styled-components';
import Image from './Images/home.jpg';
import { Prediction_helper } from './Components/Prediction_helper';
import {About} from './Components/About';

class App extends Component {

  render(){
  return (
    <div>
    <Title></Title>
    <Navbar></Navbar>
    <Router>
    <Switch>
        <Route exact path='/' component={MapHelper}></Route>
        <Route exact path='/Stats' component={Stats}></Route>
        <Route exact path='/Prediction' component={Prediction_helper}></Route>
        <Route exact path='/About' component={About}></Route>
    </Switch>
    </Router>
   
  <Footer></Footer>
    </div>
  );
  }
}



export default App;

const AppContainer = styled.footer`
    .background_image{
      height: 1356;
      background: var(--mainDark);
      color: var(--mainWhite);
      backgroundImage: url(${Image}) ;
    }
`;