/**
 * Created by Jesse on 13/06/2017.
 */

import React from 'react';
import TimelineEvent from "./../components/TimelineEvent";
import Footer from "./../components/Footer";
//import HeaderIndex from "./../components/HeaderIndex";
import HeaderTitle from "./../components/HeaderTitle";

import brain from "./../assets/images/brain-section.png"
import hand from "./../assets/images/skills-section.png"
import heart from "./../assets/images/heart-section.png"

var Scroll    = require('react-scroll');

//var Link       = Scroll.Link;
//var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;





export default class Home extends React.Component {

    /* constructor() {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    } */

    componentDidMount () {

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }

    /*


   scrollToBottom () {
        scroll.scrollToBottom();
    }

   /* scrollTo () {
        scroll.scrollTo(100);
    }

,
    scrollMore:

    function () {
        scroll.scrollMore(100);
    }

,
    handleSetActive:

    function (to) {
        console.log(to);
     },  */

    render() {
        return (

            <div className="home-page">


                    <HeaderTitle/>



                    <section className="content about">

                        <h1>about me</h1>

                        <div className="photo">
                            <figure></figure>
                        </div>

                        <p className="quote">“As a curious person, researching things comes natural to me. I want to
                            know how stuff works and what the view is like on top of a hill. Because of this I have a
                            lot of interests and often see possibilities to explore further. What I am most enthusiastic
                            about is making technology and information understandable and usable for people. From my
                            education and work experience I know what a good design process is and how to take the
                            users of a product into account. I use my technological knowledge and
                            feeling for design to contribute in development. Although I can be a bit chaotic at times, I can guarantee creativity,
                            intelligence and a social attitude.”
                        </p>

                        <div className="location">
                            <div>
                                <span></span>
                                <p className="quote">Deventer, the Netherlands</p>
                            </div>
                        </div>

                    </section>

                    <Element name="experience-element" className="content experience">
                        <h1>experience</h1>

                        <div className="timeline">

                            <TimelineEvent projectname="Bsc. Industrial Design" company="University of Twente" description="Inventing things was my motivation to do a Bachelor in Industrial Design. I learned about the many aspects involved in product development and how to apply this in a proper design process." link="/bsc"/>
                            <TimelineEvent projectname="MSc. IDE" company="University of Twente" description="I got my masters degree specialising in User centred design and product interaction. I followed courses on human media interaction, scenario based design and artificial intelligence. My interest in designing for education also got me into learning with multimedia and gamification." link="/msc"/>
                            <TimelineEvent projectname="Network World" company="Museon" description="For my graduation project I helped out Museon, a museum for science and education aimed at families with young children, with their renovation plans. I developed Network World, an interactive exhibition concept intended to give incoming visitors an overview of the exhibition and improve way finding in the museum." link="/network-world"/>
                            <TimelineEvent projectname="ParnasSys" company="Topicus Education" description="Starting out at Topicus Education I was involved in improving ParnasSys, a complex student information system with a large user base in the Netherlands. Working together with developers, business analysts, marketing and servicedesk I was responsible for visual design, UX and front-end." link="/parnassys"/>
                            <TimelineEvent projectname="Geon" company="Topicus Education" link="/geon" description="In project Geon I worked on the concept and first implementation of a mobile app for teachers. Geon allows them to quickly process student information and easily communicate with parents. I spent time on design sprints, prototyping and learned about lean and mobile development. "/>
                            <TimelineEvent projectname="Pupil" company="Topicus Education" link="/pupil" description="In a few months time a first version of Pupil, a Single-Sign-On portal for primary school children was build. I contributed by working on feature analysis, design and front-end. The challenge of this project was to offer a secure and easy to use login procedure for children and cope with different usage scenario’s both at home and and in school."/>
                            <TimelineEvent projectname="Wise-r" company="Topicus Education" link="/wise-r" description="My most recent efforts at Topicus have been on improving Wise-r, a platform for connecting educational applications to our student information systems. I have been involved in improving the wise-r webshop, solving issues in data privacy, stakeholder/value mapping and integrating design in our sprint process as a scrum master."/>
                            <TimelineEvent projectname="Graphical & branding" company="several clients" description="I like to do a graphic design side project every once in a while. I know about branding and enjoy working together with a client to figure out what a the identity of a product should be. I have experience translating this to style-guides, logo’s and print design." link="/graphical"/>
                        </div>
                    </Element>


                <Element name="skills-element" className="content info skills">

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
                                <p>I know my way around Adobe’s Photoshop, Illustrator and Indesign. For designing interfaces I prefer Sketch though. It is what you want in iterating from low fidelity screen flows to detailed designs. Drawing with pen and paper or on a whiteboard is always the first step however. I do this a lot to develop and communicate idea’s.</p>
                            </li>
                            <li>
                                <h3>User research</h3>
                                <p>Holding interviews to find out what people really need, translating this to persona’s and scenario’s, validating usability, monitoring analytics to track user behaviour and, most importantly, empathy. This is what I use to make products match their intended users.</p>
                            </li>
                            <li>
                                <h3>Prototyping</h3>
                                <p>I have experience using a variety of prototyping tools for screen flows and product demo’s. Pen, paper and scissors, Axure, Balsamiq, Pixate, Flinto, HTML and Invision. The tool depends on the use-case and level of fidelity really. Therefore the question is what do you really need to simulate?</p>
                            </li>
                            <li>
                                <h3>Front-end development</h3>
                                <p>I write semantic HTML and can structure my CSS for modular design. With Sass/Less pre-processors, smart grids and flex-box, fixing layouts has even become enjoyable. I also have a basic knowledge of javascript and it’s frameworks Ember.js and React.js. I find Git a blessing for teamwork and recovering from mistakes.
                                </p>
                            </li>

                        </ul>

                    </div>


                </Element>


                    <Element name="knowledge-element" className="content info knowledge">

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
                                    <h3>Product development</h3>
                                    <p>I know a bit about the many aspects involved in product development; market research, business plans, requirement engineering, ergonomics, branding and production techniques. I think that a product is more than just a physical thing or application. Still the differences in development process between these two are fascinating.</p>
                                </li>
                                <li>
                                    <h3>Design thinking</h3>
                                    <p>I understand design thinking and how to facilitate a creative session with a group of people. I know scenario, problem and stakeholder mapping, how to generate ideas through different techniques, narrow them down, get consensus and do a next iteration for further refinement.</p>
                                </li>
                                <li>
                                    <h3>Agile & Scrum</h3>
                                    <p>Having worked in different Scrum teams and shortly been a Scrummaster myself, I know about agile development, user stories, refinement, backlogs and burndown charts. I like the LEAN startup methodology, creating a minimal viable product before learning from metrics and stakeholder input how to improve.</p>
                                </li>
                                <li>
                                    <h3>Usability</h3>
                                    <p>I know a thing or two about how humans process information and what this means for design. Using icons or labels, how to provide affordances, hierarchy and spatial grouping, creating physical metaphors and sticking to custom interface and navigation patterns. I also value a technique like card sorting for creating a sensible information architecture and the HTML nav element and alt tag for improving accessibility.</p>
                                </li>
                                <li>
                                    <h3>Education & learning</h3>
                                    <p>I know how education in the Netherlands is organised and have some ideas for improving it. Besides that i know a few things about developing instruction; activating prior knowledge, chunking, summarising information, and why using both images and sound is good for memory. I also have a <a href="https://www.youtube.com/watch?v=7ZGCPap7GkY" target="_blank">favourite talk on gamification.</a></p>
                                </li>
                            </ul>
                        </div>
                    </Element>


                    <Element name="interests-element" className="content info interests">


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
                                    <h3>Travelling</h3>
                                    <p>I like to get out every now and then to explore a new environment and find a different perspective. i’m fond of camping and nature and like to combine this with a different culture and mountains when i have some more time to spend. My bucket list is not empty yet.</p>
                                </li>
                                <li>
                                    <h3>Sports</h3>
                                    <p>I’m fond of sports and would stay home to see a Tour de France mountain stage, shorttrack event or Roland Garros final. Besides that I like to stay active myself as well through cycling, running or peddling in a canoe. </p>
                                </li>
                                <li>
                                    <h3>Technology</h3>
                                    <p>I like to find out how stuff works and think about solving design problems. Still i find it most interesting to contemplate or discuss more philosophical technology questions. How did the invention of the clock influence analytical thinking? How does the smartphone change human relationships?
                                    </p>
                                </li>
                                <li>
                                    <h3>Reading</h3>
                                    <p>I have devoured the Lord of the Rings, many detectives and Pinguin classics. I'm fond of writers like George Orwell and Tom Wolfe for their insightful descriptions of events. Besides that I love spending my Sunday morning with a newspaper, long breakfast and coffee.</p>
                                </li>
                                <li>
                                    <h3>Games</h3>
                                    <p>I love to play games when there is strategy, interaction and roleplaying involved. This is most enjoyable with a good boardgames and some friends, beers and snacks. I can also enjoy myself in the digital realm having wasted plenty of time on the Assassins Creed series and World of Warcraft in it’s heydays.</p>
                                </li>
                            </ul>

                        </div>

                    </Element>


                <Footer />
            </div>

        );
    }
}
