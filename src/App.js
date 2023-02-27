
import React from 'react';
import './App.css';
import './menu.css';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Nav from './Nav';
import Welcome from "./welcome";
import Menu from "./Menu";
import Briyani from './Briyani';
import Sandwich from './Sandwich';
import Roll from './Roll';
import Noodles from './Noodles';
import Chicken from './Chicken';
import Not from './Not';
import Offer  from './Offer';
import Contact from './Contact';



function App() {
  return (
    <>
     <Nav/>
     
   
   <Switch>
      <Route path='/menu' exact component={Menu} />
      <Route path='/' exact component={Welcome} />
      <Route path='/Briyani'  exact component={Briyani}/>
      <Route path='/Sandwich'  exact component={Sandwich}/>
      <Route path='/Roll'  exact component={Roll}/>
      <Route path='/Noodles'  exact component={Noodles}/>
      <Route path='/Chicken'  exact component={Chicken}/>
      <Route path='/Not'  exact component={Not}/>
      <Route path='/Offer'  exact component={Offer}/>
      <Route path='/Contact'  exact component={Contact}/>
     </Switch> 

    </>
  );
}

export default App;
