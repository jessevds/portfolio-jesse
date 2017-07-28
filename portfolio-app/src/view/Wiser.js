import React from 'react';
import {Link} from 'react-router-dom';
import infographic from './../assets/images/wiser/infographic.jpg';
import wiser from './../assets/images/wiser/showcase-wiser.png';
import Portal from './../assets/images/wiser/showcase-portal.png';

export default class Wiser extends React.Component {
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
                        <h1>Wise-r</h1>
                        <h2>Topicus Education 2014/15</h2>

                        <hr></hr>
                    </div>

                        <p>My most recent efforts at Topicus have been on improving Wise-r, a platform for connecting educational applications to our student information systems. I have been involved in improving the wise-r website, through research and front-end developement.</p>

                    <h3>Wise-r concept</h3>

                        <img src={infographic} alt="wise-r infographic" />

                    <p>The infographic above, made by Justin Kloppers, shows a schematic overview of Wise-r. As IT becomes more important in education, schools use an increasing number of applications. This causes challenges in managing, accessing and overseeing IT infrastructure. Also a lot of interesting new applications are being developed. It is hard for new developers to compete with big publishers and find their way into schools. Wise-r is a platform that lets teachers discover new content. They can easily create trial accounts and provide logins based on information in student administration systems. Meanwhile developers can get in touch with schools and offer to extend their service.</p>
                        <h3>Wise-r Platform</h3>
                        <img src={wiser} alt="wise-r platform" />
                        <p>The wise-r platform can be used by teachers to find educational content. After login they can start a free application trials with Single Sign On through wise-r. I have looked into; privacy issues when using user-data, setting up a product ordering process and user validation in schools. The majority in design and implementation was done by others. As a scrum master I supported the design process and its integration in our development sprints. <a href="https://wise-r.nl/" target="_blank"> Visit wise-r</a></p>

                        <h3>Partner Portal</h3>
                        <img src={Portal} alt="wise-r partner portal" />
                        <p>The wise-r partner portal is a support website for educational partners. Here they can find information about application use and wise-r API documentation. I contributed to conceptual development and front-end implementation of a redesign anc contributed to improvements in API documentation. <a href="https://developer.wise-r.nl/" target="_blank">Visit the wise-r partner portal</a></p>
                    </div>
                </div>


                <div className="page-navigation">
                    <nav>
                        <Link className="button previous" to="/pupil">previous</Link>
                        <div className="project-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                        </div>
                        <Link className="button next" to="/graphical">next</Link>
                    </nav>
                </div>
            </div>

        );
    }
}