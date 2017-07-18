import React from 'react';
import {Link} from 'react-router-dom';
import hemelvaart from './../assets/images/grafisch/hemelvaart.jpg';
import pastries from './../assets/images/grafisch/qualitypastries.png';
import amarant from './../assets/images/grafisch/amarant.png';
import keyhub from './../assets/images/grafisch/keyhub.jpg';
//import australia from './../assets/images/grafisch/australia-app.png';

export default class Graphical extends React.Component {
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
                        <h1>Graphical & Branding </h1>
                        <h2>several clients 2012/16</h2>

                        <hr></hr>
                    </div>



                        <p>I like to do a graphic design side project every once and a while. I know about branding, print design and enjoy working together with a client to figure out what a the identity of a product should be.</p>

                        <h2>Keyhub logo</h2>

                        <img src={keyhub} alt="keyhub logo"/>
                        <p> <a href="https://www.topicus-keyhub.com/">Topicus Keyhub,</a> an application for in-company access and password management. The letters Y and H are shaped as keys and locked together. This element can also be used as a visual detail. A single key is used as an App icon for both browser plugins and mobile apps which provides users credentials for authentication.</p>

                        <h2>Pastries frontpage graphic</h2>
                        <img src={pastries} alt="quality pastries marketing cover"/>
                        <p>Someone at <a target="_blank" href="http://www.quality-pastries.nl/">Quality Pastries</a> asked me to make a frontpage visual for their marketing plan. Their plan was to increase pastries revenue in the US and Western Europe and hence increase their share of the global market. The visual combines this goal with the company logo.</p>

                        <h2>Branding Bouquetterie Amarant</h2>
                        <img src={amarant} alt="quality pastries marketing cover"/>
                        <p>This composition shows the branding for Bouquetterie Amarant, my sister's small quality flower shop. Besides the logo I developed all print design: businesscards, order forms, stickers and coupons.</p>

                        <h2>Cycling Poster</h2>
                        <img src={hemelvaart} alt="quality pastries marketing cover"/>
                        <p>This poster is another personal project. It refers to the Dutch tradition of cycling which is reflected in the imagery, typography and language.</p>

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