import React from 'react';
import {Link} from 'react-router-dom';
import breeze from './../assets/images/Studie/Breeze.jpg';
import cube from './../assets/images/Studie/cube.jpg';
import cubepackaging from './../assets/images/Studie/cube-packaging.png';


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

                    <p>Inventing things was my motivation to do a Bachelor in Industrial Design. I learned about the many aspects involved in product development and how to apply this in a proper design process. I’ll tell you a bit more about the projects I have worked on.</p>


                        <h3>Philips Breeze</h3>

                        <img src={breeze} alt="breeze"/>

                        <p>Together with three other students I worked on a concept for a new robotic vacuum cleaner. The problem with other robotic cleaners at the time was that the nozzle is in the center underneath the device. Hence it is impossible to clean in corners or right next to a wall. We conceptually solved this by designing an exterior nozzle. The nozzle will rotate when colliding with a wall or object and is kept in place using a torsion spring. In this project I spend time on designing mechatronics, making a prototype of the device and programming it’s algorithm. With a usability test we evaluated the cleaner’s interface. </p>


                        <h3>DGT Cube</h3>

                        <img src={cube} alt="DGT cube" />
                        <p>For my graduation project I worked at Digital Game Technology (DGT) in Enschede. At the time they were in the final stages of developing an innovative board game timer and needed help working towards market introduction. I contributed by developing packaging and a manual for the product, designing stand material for the Nürnberg International Toy Fair and consulting on product interface. While the focus of my work was on marketing, branding and graphic design, the big challenge was project management. I had to synchronise my efforts with production and stand planning. Meanwhile coöperating with a Dutch design company, animator, graphic designer and Chinese manufacturer.
                        </p>

                        <h3>DGT Cube 10ps packaging</h3>
                        <img src={cubepackaging} alt="DGT cube packaging" />


                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous hidden" to="/project" disabled>previous</Link>
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