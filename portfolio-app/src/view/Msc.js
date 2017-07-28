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

                        <img src={adappt} alt="OV AdAppt - public transport assistant"/>
                        <p>For the course ‘User centred design of new media’ I worked together with a software engineering student to create the ‘Ov AddAppt’ concept. This is a smartphone app intended to help autistic and visually impaired people cope with the public transport system in the Netherlands. This system can be stressful, especially with a handicap. You don’t always know what to do, where to find information or what your travel status is. The OV AddAppt can easily inform about; your travel history, your balance, nearby top-up points and whether you have checked-out. The endgoal is to be more confident and self-reliant when travelling. During this project I did; research on Autism and it’s challenges, user interviews, problem analysis of the current system, interface design, prototyping and usability tests.
                        </p>

                        <h2>Energy efficient road sign</h2>

                        <img src={highway} alt="Smart Highway sign"/>

                        <p>The goal of this project was to develop a concept for sustainable innovation used for the highway. Using innovation frameworks my partner and me came up with the ‘Smart Roadway Sign’. It is intended as an energy efficient alternative for matrix signs used to indicate speed or show traffic signs. These signs show information by radiating LED light and need a steady power supply. the information they need to represent does not change very often however. The Smart roadway sign uses the technology found in e-readers and does not need to be powered all the time. To get a bit technical: On an electro-magnetic grid, ink-particles are charged to shift between foreground and background. Hence they become visible or not. Only when their status needs to change the need to be charged again. Because of this, the whole sign can be powered by solar cells. and can do without a static energy source. This is convenient when you need portable signage for road maintenance.</p>

                        <h2>Educational traffic game</h2>
                        <img src={traffic} alt="Educational traffic game"/>
                        <p>In a course on learning with games and simulation  an ineffective traffic simulation was presented. I had to transform this in a game concept that does a better job in teaching traffic rules to primary school children. For this i needed to get into gamification theories; creating a recognisable game avatar, using a scenario and game goal that is motivating, using feedback at the right time, increasing difficulty in different levels and providing challenges to fail and overcome. In the resulting game a child had to ride around town to deliver invitations for his/her birthday party. In each trip to a friend’s different traffic situations are encountered. On each successful delivery the player is rewarded and will be able to invest in supplies for the party.</p>

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
                        <Link className="button next" to="/network-world">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}