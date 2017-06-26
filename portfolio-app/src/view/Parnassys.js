import React from 'react';
import {Link} from 'react-router-dom';
import parTransition from './../assets/images/Parnassys/transition.gif';
import kennisportaal from './../assets/images/Parnassys/showcase-kennisportaal.png';

export default class Parnassys extends React.Component {
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
                        <h1>Parnassys</h1>
                        <h2>Topicus Education 2014/16</h2>
                        <hr></hr>
                    </div>

                    <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                        From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>



                        <h2>ParnasSys redesign</h2>

                        <img src={parTransition} alt="redesign transition" />
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>


                        <h2>Customer service portal</h2>

                        <img src={kennisportaal} alt="kennisportaal" />
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>

                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/project">previous</Link>
                        <div className="project-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link className="button next" to="/project">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}