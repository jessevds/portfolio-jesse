import React from 'react';
import {Link} from 'react-router-dom';
import networkworld from './../assets/images/museon/networkworld.jpg';
import networkmap from './../assets/images/museon/networkmap.jpg';
import networkconcept1 from './../assets/images/museon/conceptpage-1.jpg';
import networkconcept2 from './../assets/images/museon/conceptpage-2.jpg';
import networkconcept3 from './../assets/images/museon/conceptpage-3.jpg';

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

                <div className="project-content">


                    <div className="layout-article">

                    <div>
                        <h1>Network World</h1>
                        <h2>Museon 2013</h2>

                        <hr></hr>
                    </div>

                        <img src={networkworld} alt="network world" />

                    <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                        From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>



                        <h2>Concept validation</h2>

                        <div>
                            <img src={networkconcept1} alt="concept sheet 1" /></div>
                        <div>
                            <img className="layout-two" src={networkconcept2} alt="concept sheet 1" />
                            <img className="layout-two right" src={networkconcept3} alt="concept sheet 1" />
                        </div>

                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>


                        <h2>wayfinding</h2>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>

                        <div>
                            <img src={networkmap} alt="network world" />
                        </div>




                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/msc">previous</Link>
                        <div className="project-dots">
                            <span></span>
                            <span></span>
                            <span className="active"></span>
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