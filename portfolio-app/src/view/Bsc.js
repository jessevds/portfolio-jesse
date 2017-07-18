import React from 'react';
import {Link} from 'react-router-dom';
import breeze from './../assets/images/Studie/Breeze.jpg';
import cube from './../assets/images/Studie/cube.png';
import fogar from './../assets/images/Studie/fogar.jpg';


export default class ProjectPage extends React.Component {
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

                <div className="project-content education">


                    <div className="layout-article">

                    <div>
                        <h1>BSc. Industrial Design</h1>
                        <h2>University of Twente <span>2006 - 2010</span></h2>

                        <hr></hr>
                    </div>

                    <p> </p>


                        <h3>Description</h3>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>
                        <img src={cube} alt="DGT cube" />

                        <h3>Description</h3>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>

                        <img src={breeze} alt="breeze"/>

                        <h3>Description</h3>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>
                        <img src={fogar} alt="fogar manual" />

                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/project" disabled>previous</Link>
                        <div className="project-dots">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link className="button next" to="/msc">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}