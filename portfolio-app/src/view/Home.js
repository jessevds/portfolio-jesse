/**
 * Created by Jesse on 13/06/2017.
 */

import React from 'react';
import TimelineEvent from "./../components/TimelineEvent";
//import {Link} from 'react-router-dom';
import Footer from "./../components/Footer";
import HeaderIndex from "./../components/HeaderIndex";
import HeaderTitle from "./../components/HeaderTitle";
import brain from "./../assets/images/brain-section.png"
import hand from "./../assets/images/skills-section.png"
import heart from "./../assets/images/heart-section.png"

export default class Home extends React.Component {
    /* constructor() {
     super();
     } */

    render() {
        return (

            <div className="home-page">

                <header>
                    <HeaderIndex/>
                    <HeaderTitle/>

                </header>


                    <section className="content about">

                        <h1>about me</h1>
                        <p className="quote">“As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill. Because of this I have a
                            lot of interests and often see possibilities to explore further. What I am most enthusiastic
                            about is making technology and information understandable and usable for people. From my
                            education and other experiences I know what a good design process is and how to take the
                            users of a product into account here. In this I also use my technological knowledge and
                            feeling for design. Although I can be a bit chaotic at times, I can guarantee creativity,
                            intelligence and a social attitude.”
                        </p>

                        <div className="location">
                            <div>
                                <span></span>
                                <p className="quote">Deventer, the Netherlands</p>
                            </div>
                        </div>

                    </section>

                    <section id="#experience-section" className="content experience">
                        <h1>experience</h1>

                        <div className="timeline">

                            <TimelineEvent projectname="Bsc. Industrial Design" company="University of Twente" description="As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill" link="/bsc"/>
                            <TimelineEvent projectname="MSc. IDE" company="University of Twente" description="I can guarantee creativity,
                            intelligence and a social attitude.”" link="/msc"/>
                            <TimelineEvent projectname="Network World" company="Museon" description="I can guarantee creativity,
                            intelligence and a social attitude.”" link="/network-world"/>
                            <TimelineEvent projectname="ParnasSys" company="Topicus Education" description="I can guarantee creativity,
                            intelligence and a social attitude.”" link="/parnassys"/>
                            <TimelineEvent projectname="Geon" company="Topicus Education" link="/geon" description="As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill"/>
                            <TimelineEvent projectname="Pupil" company="Topicus Education" link="/pupil" description="As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill"/>
                            <TimelineEvent projectname="Wise-r" company="Topicus Education" link="/wise-r" description="As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill"/>
                            <TimelineEvent projectname="Graphical & branding" company="several clients" description="As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill" link="/graphical"/>
                        </div>
                    </section>


                <section id="#skills-section" className="content info skills">

                    <hr></hr>

                    <h1>skills</h1>

                    <div className="visual">
                        <div>
                            <img src={hand} alt="skills visual" />
                        </div>
                    </div>

                    <div className="description">

                        <ul>
                            <li>
                                <h3>Visual design</h3>
                                <p>I'm skilled in sI know my way around around Adobe Photoshop, Illustrator & Indesign .</p>
                            </li>
                            <li>
                                <h3>description title</h3>
                                <p>researching things comes natural to me. I want to know how stuff works and what
                                    the view is on top of a hill. Because of this I have a lot of interests and
                                    often see possibilities to explore further.</p>
                            </li>
                            <li>
                                <h3>description title</h3>
                                <p>researching things comes natural to me. I want to know how stuff works and what
                                    the view is on top of a hill. Because of this I have a lot of interests and
                                    often see possibilities to explore further.</p>
                            </li>
                            <li>
                                <h3>description title</h3>
                                <p>researching things comes natural to me. I want to know how stuff works and what
                                    the view is on top of a hill. Because of this I have a lot of interests and
                                    often see possibilities to explore further.</p>
                            </li>
                            <li>
                                <h3>description title</h3>
                                <p>researching things comes natural to me. I want to know how stuff works and what
                                    the view is on top of a hill. Because of this I have a lot of interests and
                                    often see possibilities to explore further.</p>
                            </li>
                        </ul>

                    </div>


                </section>


                    <section id="#knowledge-section" className="content info knowledge">

                        <hr></hr>

                        <h1>knowledge</h1>


                        <div className="visual">
                            <div>
                                <img src={brain} alt="knowledge visual" />
                            </div>
                        </div>

                        <div className="description">

                            <ul>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                            </ul>
                        </div>
                    </section>


                    <section id="#interests-section" className="content info interests">


                        <hr></hr>

                        <h1>interests</h1>


                        <div className="visual">
                            <div>
                                <img src={heart} alt="interests visual" />
                            </div>
                        </div>

                        <div className="description">

                            <ul>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                                <li>
                                    <h3>description title</h3>
                                    <p>researching things comes natural to me. I want to know how stuff works and what
                                        the view is on top of a hill. Because of this I have a lot of interests and
                                        often see possibilities to explore further.</p>
                                </li>
                            </ul>

                        </div>

                    </section>


                <Footer />
            </div>

        );
    }
}
