import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home } from './containers'; 

function App() {
  return (
  	  <Fragment>
  	    <Header />
	    <Switch>
	        <Route path="/" component={Home} exact/>        
	    </Switch>
	    <Footer />
	  </Fragment>  
  );
}

export default App;