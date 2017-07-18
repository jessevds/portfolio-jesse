/**
 * Created by Jesse on 12/06/2017.
 */

import React from 'react';
var Scroll    = require('react-scroll');
var scrollSpy  = Scroll.scrollSpy;
var Link       = Scroll.Link;
var scroll     = Scroll.animateScroll;
var Events     = Scroll.Events;

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


        scrollSpy.update();
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

    scrollToTop() {
        scroll.scrollToTop();
    }


    render(){

        const {enter, exit} = this.props;

        return (

            <header id="header" className={this.state.headerSticky ? "sticky-on" : "sticky-off"}
                 data-sticky
                 data-sticky-enter={enter}
                 data-sticky-exit={exit}
            >
                <div className="header-index">

                    <div className="road"></div>
                    <div className="header-background">
                        <nav>
                            <Link activeClass="active" className="experience" to="experience-element" spy={true}
                                  smooth={true} offset={-100} duration={500}>experience</Link>
                            <Link activeClass="active" className="skills" to="skills-element" spy={true} smooth={true}
                                  duration={500}>skills</Link>
                            <a onClick={() => scroll.scrollToTop()} className="headlink"></a>
                            <Link activeClass="active" className="knowledge" to="knowledge-element" spy={true}
                                  smooth={true} duration={500}>knowledge</Link>
                            <Link activeClass="active" className="interests" to="interests-element" spy={true}
                                  smooth={true} duration={500}>interests</Link>
                        </nav>
                    </div>

                </div>
                <div className="header-title">
                    <h1>Jesse van der Scheer</h1>
                    <h2>product & interaction designer</h2>
                </div>
            </header>

        );
    }
}

/* HeaderTitle.propTypes = {

    enter: React.PropTypes.string,
    exit: React.PropTypes.string,

}; */
