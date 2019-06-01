import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Backdrop from './components/Backdrop/backdrop';
import SideDrawer from './components/SideDrawer/sideDrawer';
import About from './components/About/about';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from './components/Resume/resume';
import ReallySmoothScroll from 'really-smooth-scroll';
import  LoadingScreen from 'react-loading-screen';
import Spinner from './assets/img/spinner.gif';

ReallySmoothScroll.shim();
class App extends Component {
  state = {
    sideDrawerOpen: false,
    loading: true
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        loading: false
      })
    },1500)
  }
  toggleClick = ()=> {
    this.setState((prevState)=> {
      return{ sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }
  backdropClick = ()=> {
    this.setState({sideDrawerOpen: false});
  }
  
  render(){
    let backdrop;
    if( this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClick}/>
    }
    return (
      <Router>
      <LoadingScreen
        loading={this.state.loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        logoSrc={Spinner}
        text="You are nice.."
      >
      <div className="App" style={{ height: '100%'}}>
        <Navbar drawerClick = { this.toggleClick }/>
        <SideDrawer show={ this.state.sideDrawerOpen} 
        />
          { backdrop }
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
        </Switch>
      </div>
      </LoadingScreen>
      </Router>
    );
  }
}

export default App;
