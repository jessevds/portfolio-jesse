import React from 'react';
import {Link} from 'react-router-dom';
import story from './../assets/images/geon/story.png';
import geonscreens from './../assets/images/geon/geon-screens.png';
import geoncommunication from './../assets/images/geon/geon-communication.png';

export default class Geon extends React.Component {
    /* constructor() {
     super();
     } */

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
                    <h1>portfolio</h1>
                    <h4>jesse van der scheer</h4>
                </div>

                <div className="project-content">


                    <div className="layout-article">

                    <div>
                        <h1>Geon</h1>
                        <h2>Topicus Education 2015</h2>

                        <hr></hr>
                    </div>

                        <p>In project Geon I was involved in concept development and first implementation of a mobile app for teachers. Geon allows them to quickly process student information and easily communicate with parents. I spent time refining the concept and prototype in design sprints. For a minimal first implementation I worked on design and front-end.</p>

                    <h3>The context</h3>
                    <p>The major problem in primary education in the Netherlands is the workload on teachers. Besides teaching and preparing lessons they are busy registering student information, holding meetings to discuss student performance, organising events and communicate with parents. It is often after working hours that a teacher finds time to sit down behind a computer to do their mandatory registration. Because of the complexity of the administration system this takes a lot of time. Also it would also be an enormous help if parents were more involved with the school of their children. Transparent communication with parents could help, but often schools are hesitant to do so.</p>

                        <h3>The Concept</h3>

                        <img src={story} alt="geon storyboard" />
                        <p>Geon is designed to let teachers easily perform their most frequent daily tasks; Jotting down lesson observations and progress to share with colleagues, looking up the most important student information and sharing information with the parents of a child or whole group of children. For the latter it important that the teacher is in control of communication. Hence they have the initiative to share information or start a conversation. For the development we used the Lean startup methodology, to build a first version with the most important functionality. There was debate whether we should build a hybrid mobile app for all platforms or different native applications for Web, Android and iOS. After experimenting with a hybrid Ember app we found out that we should have gone native instead. </p>

                        <h3>Geon screenflow</h3>
                        <img src={geonscreens} alt="geon screens"/>
                        <img src={geoncommunication} alt="geon communication"/>

                        <p>In a followup project, principles and points of view from Geon were applied in developing <a href="https://parro.education/" target="_blank">Parro. </a> This teacher - parent communication app is now used by more than 100 schools in the Netherlands. However, as I’m not responsible for this next step I can take little credit for it.</p>

                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/parnassys">previous</Link>
                        <div className="project-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link className="button next" to="/pupil">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}