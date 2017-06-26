import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';
import Home from "./view/Home";
import ProjectPage from './view/ProjectPage';
import Bsc from './view/Bsc';
import Msc from './view/Msc';
import NetworkWorld from './view/NetworkWorld';
import Parnassys from './view/Parnassys';
import Graphical from './view/Graphical';
import Pupil from './view/Pupil';
import Wiser from './view/Wiser';
import Datazoo from './view/Datazoo';
import Geon from './view/Datazoo';



class App extends Component {

    componentDidMount(){

        this.element.classList;

    };


    render() {

        return (
            <div className="App" ref={ref=>{this.element = ref}} >

                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/project" component={ProjectPage}/>
                        <Route path="/bsc" component={Bsc}/>
                        <Route path="/msc" component={Msc}/>
                        <Route path="/network-world" component={NetworkWorld}/>
                        <Route path="/parnassys" component={Parnassys}/>
                        <Route path="/graphical" component={Graphical}/>
                        <Route path="/pupil" component={Pupil}/>
                        <Route path="/geon" component={Geon}/>
                        <Route path="/wise-r" component={Wiser}/>
                        <Route path="/wise-r" component={Datazoo}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
