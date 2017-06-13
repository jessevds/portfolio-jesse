import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/HeaderIndex';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import HeaderIndex from "./components/HeaderIndex";
import HeaderTitle from "./components/HeaderTitle";
import TimelineEvent from "./components/TimelineEvent";
import Footer from "./components/Footer";



class App extends Component {
  render() {
    return (
      <div className="App">

          <header>
            <HeaderIndex/>
            <HeaderTitle/>
          </header>
        <div className="app-content">

            <section className="content about">

                <h1>about</h1>
                <p className="quote">“As a curious person, researching things comes natural to me. I want to know how stuff works and what the view is like on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.  What I am most enthusiastic about is making technology and information understandable and usable for people. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.”
                </p>

                <div className="location">
                    <div>
                        <span></span>
                        <p className="quote">Deventer, the Netherlands</p>
                    </div>
                </div>

            </section>

           <section className="content experience">
               <h1>experience</h1>

               <div className="timeline">

                   <TimelineEvent/>
                   <TimelineEvent/>
                   <TimelineEvent/>
                   <TimelineEvent/>
                   <TimelineEvent/>
                   <TimelineEvent/>
                   <TimelineEvent/>
                   <TimelineEvent/>

               </div>
           </section>


            <section className="content info knowledge">

                <hr></hr>

                <h1>knowledge</h1>


                <div className="visual">

                </div>

                <div className="description">

                    <ul>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                    </ul>

                </div>

            </section>

            <section className="content info skills">

                <hr></hr>

                <h1>skills</h1>

                <div className="visual">

                </div>

                <div className="description">

                    <ul>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                    </ul>

                </div>


            </section>


            <section className="content info interests">

                <hr></hr>

                <h1>interests</h1>


                <div className="visual">

                </div>

                <div className="description">

                    <ul>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                        <li>
                            <h3>description title</h3>
                            <p>researching things comes natural to me. I want to know how stuff works and what the view is on top of a hill. Because of this I have a lot of interests and often see possibilities to explore further.</p>
                        </li>
                    </ul>

                </div>

            </section>

            <Footer />

        </div>
      </div>
    );
  }
}

export default App;
