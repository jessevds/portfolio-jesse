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

                        <p>For my graduation project I helped out Museon, a museum for science and education targeting families with young children, with their renovation plans. I developed Network World, an interactive exhibition concept intended to give incoming visitors an overview of the exhibition and improve way finding in the museum.</p>

                        <img src={networkworld} alt="network world" />


                        <h2>The context</h2>

                    <p>The Museon is a divers museum with a large collection. Their permanent exhibition included e.a. cultural objects from around the world, geological objects, a lot of stuffed animals, dinosaur skeletons and electronic devices. This gives the opportunity to present exhibitions about a lot of different topics. The downside however is that the museum does not have a clear identity and people don’t know what to expect from it. This makes it hard for the Museon to communicate their relevance and had a negative impact on visitor numbers. This was the reason to initiate a renovation plan transforming the Museon into the museum about globalisation it is today.  For my graduation project I was asked to develop a concept for a new Museum introduction zone intended to: give visitors a good first impression of the new museum, inform them about what to find inside and show them how to get there. As renovation plans were still in an early stage there was little concencus on how the new Museon should present itself. This made it unclear for me what I should introduce. Also it provided struggles for the Museum itself in selecting which parts of the exhibition to keep or dispose.</p>



                        <h2>The process</h2>


                            <img src={networkconcept1} alt="concept presentation" />
                           <div className="auto-height">
                                <img className="layout-two" src={networkconcept2} alt="concept evaluation" />
                                <img className="layout-two right" src={networkconcept3} alt="concept comparison"/>
                           </div>

                        <p>The first step in this project wat to dig deeper into the Museon’s target group and renovation plans. For this I did interviews with museum staff and facilitated multiple creative sessions to help refine renovation scope. I also did research on globalisation and it’s aspects. With this I developed a framework that could be used to organise a new exhibition thematically. The assumption was made that the Museon would present different area’s in the world (North Pole, Mexico, Shanghai, Borneo, Mali and the sea).
                            This framework was used as a baseline for developing the introduction zone concept. In idea generation I deviated between personal and practical solutions with a focus on either the global museum theme or it’s specific content. The introduction needed to grab the attention of children. Therefore appealing (tangible) interaction was an important requirement. With my ideas converged to three different concepts I did paper prototype tests with visitors of the Museon. I got a good impression of concept interpretation, if visitors were keen to approach and interact and usability. The results of this tests were included in concept presentations discussed with museum management. Based on this a choice was made to further develop ‘Network World’.</p>


                        <h2>The concept</h2>
                        <p>Network world consists of a large main screen on which a map of the world is projected. Animation of the map shows the process of globalisation. This grabs the visitor’s attention and gives them a good first impression of the Museon. Placed on either side of this main screen are panels showing an introduction text, a map and way finding for the museum. The different area’s have been color coded. This can be used throughout the Museon for recognition. In front of the main screen a number of ‘discovery monitors’ are placed. These displays shaped as binoculars can be used to orient on the world map to get more information about different area’s. A first prototype of the installation was made and tested with Museon visitors which resulted in validation and more recommendations for further development.</p>


                        <h3>wayfinding sidepanel</h3>
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