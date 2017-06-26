/**
 * Created by Jesse on 12/06/2017.
 */

import React from 'react';

export default class HeaderTitle extends React.Component {

  constructor() {

        super();

        this.state = {
            headerSticky:false
        };
    }

    componentDidMount() {

        const initialHeight = 340;
      //const initialHeight = document.getElementById('header-title').getBoundingClientRect().top;
        var self = this;
        window.addEventListener('scroll', function(){self.handleScroll(initialHeight)});
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll());
    }

    handleScroll = (height) => {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
        const stickyEnter = height;
        const stickyExit = bottom;

        if (top >= stickyEnter && top <= stickyExit) {
            this.setState({headerSticky:true});
           // console.log("true");
        }
        else {
            this.setState({headerSticky:false});
            //console.log("false");
        }
       // console.log(this.state.headerSticky + "scroll");
    };


    render(){

        const {enter, exit} = this.props;

        return (

            <div id="header-title" className={this.state.headerSticky ? "sticky-on" : "sticky-off"}
                data-sticky
                data-sticky-enter={enter}
                data-sticky-exit={exit}
            >
                <h1>Jesse van der Scheer</h1>
                <h4>product & interaction designer - limited edition</h4>



            </div>

        );
    }
}

/* HeaderTitle.propTypes = {

    enter: React.PropTypes.string,
    exit: React.PropTypes.string,

}; */
