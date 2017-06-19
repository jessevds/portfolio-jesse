import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectPage extends React.Component {
    /* constructor() {
     super();
     } */

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
                        <h1>project title</h1>
                        <h2>company name 2014/15</h2>

                        <hr></hr>
                    </div>

                    <h3>Description</h3>
                    <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                        From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>



                        <h3>Description</h3>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>


                        <h3>Description</h3>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>



                        <h3>Description</h3>
                        <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids. From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude.

                            From my education and other experiences I know what a good design process is and how to take the users of a product into account here. In this I also use my technological knowledge and feeling for design. Although I can be a bit chaotic  at times, I can guarantee creativity, intelligence and a social attitude  </p>


                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/project">previous</Link>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Link className="button next" to="/project">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}