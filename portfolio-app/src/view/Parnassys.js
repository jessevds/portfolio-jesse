import React from 'react';
import {Link} from 'react-router-dom';
import parTransition from './../assets/images/Parnassys/transition.gif';
import accountstructuur from './../assets/images/Parnassys/accountstructuur.jpg';
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

                    <p>Starting out at Topicus Education I was involved in improving ParnasSys, a complex student information system with a large user base in the Netherlands. Working together with developers, business analysts, marketing and servicedesk I was responsible for visual design, UX and front-end. In two years I helped to improve the system on different aspects.
                    </p>



                        <h2>ParnasSys redesign</h2>

                        <img src={parTransition} alt="redesign transition" />
                        <p>ParnasSys has been developed with a technical mindset. It consists of a lot of re-usable interface components and there is a lot of standardisation. This way features can be added quickly while the system remained maintainable and affordable. In this process little attention was given to Ux and visual design however. Therefore I was asked to make a redesign for the application. The main motivation was to extend the life-time of ParnasSys with a couple of years while working on other innovations. Hence it would be to big an investment to completely overhaul the application. The choice was made to focus on visual improvements of the interface. Shared components like the header, footer and datapanels were redesigned to quickly make an impact on overall user experience. The existing page structure and information architecture was kept intact. A functional styleguide was developed to enforce consistent (re)design of pages in future development.</p>


                        <h2>account structure refactor</h2>
                        <img src={accountstructuur} alt="accountstructuur" />
                        <p>As an analyst and Ux designer I was involved in refactoring the account structure in the ParnasSys application. Over the years the existing model had grown to complex and no longer matched market needs. I started this project doing multiple interviews with school board members and application moderators to map and prioritise their needs. this was done by playing through and discussing multiple scenario’s. It turned out that human resources for schools are mostly managed from a parental organisation. Also it is a common scenario that a teacher want’s to use her existing ParnasSys account for accessing other schools within the same organisation. In cooperation with the development team a new account model was designed. it made a lot of sense to accommodate all user accounts in the parent organisation while making it possible to manage authorisation on a school level. In building this new model I acted as user owner and supplied screen designs to create, manage and migrate accounts.</p>

                        <h2>Customer service portal</h2>

                        <img src={kennisportaal} alt="kennisportaal" />
                        <p>I coöperation with ParnasSys servicedesk I implemented a new knowledge base and user-forum in Zendesk. The goal of this project was two-sided. On the one hand we wanted to give our product development department better insights in our end-user’s needs. On the other hand we wanted to reduce the workload at our servicedesk. We did this by offering better online resources for support and better match the support website with servicedesk work routines. I developed multiple concepts for information structure and applied this in the customisation of a Zendesk template. I also set up Google Analytics to monitor key aspects of the kennisportaal user flow. This enabled us to improve our online support and further reduce the number of support requests received over the past year.</p>

                    </div>
                </div>


                <div className="page-navigation">

                    <nav>
                        <Link className="button previous" to="/network-world">previous</Link>
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
                        <Link className="button next" to="/geon">next</Link>
                    </nav>

                </div>


            </div>

        );
    }
}