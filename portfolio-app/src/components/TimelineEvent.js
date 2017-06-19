/**
 * Created by Jesse on 12/06/2017.
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default class TimelineEvent extends React.Component {
    /* constructor() {
     super();
     } */

    render() {
        return (

            <div className="timeline-event">

                <span className="project-block"> </span>

                <div className="event-content">
                    <h3>{this.props.projectname}</h3>
                    <h4>{this.props.company}</h4>
                    <hr></hr>
                <p>{this.props.description} <Link to="/project"> read more </Link></p>

                </div>

            </div>

        );
    }
}
