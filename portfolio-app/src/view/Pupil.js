import React from 'react';
import {Link} from 'react-router-dom';
import pupilLogin from './../assets/images/pupil/pupil-login.png';
import pupilOffline from './../assets/images/pupil/pupil-offline.png';
import pupilLowfi from './../assets/images/pupil/pupil-lowfi.jpg';

export default class Pupil extends React.Component {
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
                        <h1>Pupil</h1>
                        <h2>Topicus Education 2016</h2>

                        <hr></hr>
                    </div>

                        <p>In a few months time a first version of Pupil, a Single-Sign-On portal for primary school children was build. I contributed by working on feature analysis, design and front-end. The challenge of this project was to offer a secure and easy to use login procedure for children and cope with different usage scenario’s both at home and in school.</p>

                        <div>

                            <img className="layout-two" src={pupilLogin} alt="pupil login" />

                            <img className="layout-two right" src={pupilOffline} alt="pupil offline" />

                        </div>

                    <h3>Context</h3>
                    <p>With the desire to make education more personalised, schools more and more come to depend on IT. When learning online and being in control of their own learning process, children will need their own environment to provide feedback and keep track of things. Also, teachers will need assistance in monitoring all children when they work on different things in their own time. The most significant hurdle however is that using different software packages and login procedures complicates classroom management. Hence children will need one simple login procedure to access al their applications independently.</p>


                        <h3>Process</h3>

                        <img src={pupilLowfi} alt="pupil lowfi screenflow" />


                        <p>With the initial implementation of Pupil we took a first step towards a personalised learning environment for children. A child needs its own digital ‘space’. Hence the playful astronaut theme. Before implementation I mapped the most important user-stories into a high level screenflow, shown above. This flow was used as a roadmap and facilitated design discussions. As a second iterations I worked on detailed designs and front-end for implementation of specific stories.</p>

                        <h3>Result</h3>
                        <p>The application focusses on an easy, yet secure login procedure for children that can be managed by teachers and parents. The challenge is that children have difficulty using long passwords and usernames. Therefore a username, of QR-code scan, is stored in the browser and only needs to be entered once in a trusted environment. Instead of a password a child can enter a, non-critical, 4 digit pincode. As there was time pressure on the project, we could only do some in company user testing and had to rely a lot on proven methods. In a second development iteration a child friendly search engine was integrated. At the moment Pupil is activated for a few pilot schools.</p>

                        <h3>teacher flow</h3>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7sE2q2cCqVM?ecver=1" frameborder="0" allowfullscreen></iframe>

                        <h3>wisenose search integration</h3>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/CWELW7lpH1o?ecver=1" frameborder="0" allowfullscreen></iframe>

                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/geon">previous</Link>
                        <div className="project-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link className="button next" to="/wise-r">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}