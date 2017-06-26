import React from 'react';
import {Link} from 'react-router-dom';
import adappt from './../assets/images/Studie/add-appt.png';
import highway from './../assets/images/Studie/SmartHighway.jpg';
import traffic from './../assets/images/Studie/trafficgame.jpg';

export default class ProjectPage extends React.Component {

    //var ScrollPosition = 400;

    componentDidMount(){

        window.scrollTo(0, 0);
    }

    render() {
        return (

            <div className="project-page">


                <div className="project-timeline">

                        <div>
                            <span className="line"></span>
                        </div>
                </div>

                <div className="up">
                    <nav>
                        <Link to="/">
                            <span className="head"></span>
                        </Link>
                    </nav>
                </div>


                <div className="portfolio-heading">
                    <h1>Portfolio</h1>
                    <h4>Jesse van der Scheer</h4>
                </div>

                <div className="project-content education">


                    <div className="layout-article">

                    <div>
                        <h1>MSc. Industrial Design Engineering</h1>
                        <h2>University of Twente <span>2011-2013</span></h2>

                        <hr></hr>
                    </div>

                    <p>In my master I specialised in User Centered Design of interactive products. I took courses on ea. artificial intelligence, human media interaction and scenario based design. I was esspecialy drawn to designing for education. Hence I also studied learning with multimedia, games and simulations.</p>

                        <h2>Public transport assistant</h2>

                        <img src={adappt} als="OV AdAppt - public transport assistant"/>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>

                        <h2>Educational traffic game</h2>
                        <img src={traffic} als="Educational traffic game"/>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>


                        <h2>Energy efficient road sign</h2>

                        <img src={highway} als="Smart Highway sign"/>

                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>


                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/bsc">previous</Link>
                        <div className="project-dots">
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link className="button next" to="/parnassys">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}