import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';
import Home from "./view/Home";
import ProjectPage from './view/ProjectPage';



class App extends Component {
    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/project" component={ProjectPage}/>
                    </div>

                </Router>



            </div>
        );
    }
}

export default App;
