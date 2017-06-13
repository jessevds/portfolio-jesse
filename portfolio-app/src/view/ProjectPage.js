import React from 'react';
import HeaderTitle from "../components/HeaderTitle";

export default class TimelineEvent extends React.Component {
    /* constructor() {
     super();
     } */

    render() {
        return (

            <div className="project-page">

                <HeaderTitle/>

                <div className="content">

                    <span className="project-timeline">yolo de bole</span>

                    <div>
                        <h1>project title</h1>
                        <h2>company name</h2>
                    </div>


                </div>

                <div className="project-info">


                    <h3>Description</h3>
                    <p>Short description of the project i have been working on. just to give an overview for getting visitors interested to. blablabla blablabla sids  </p>






                </div>
            </div>

        );
    }
}