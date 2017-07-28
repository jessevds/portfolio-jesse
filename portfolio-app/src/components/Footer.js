/**
 * Created by Jesse on 13/06/2017.
 */


import React from 'react';
import CV from './../assets/CV-jesse-nederlands.pdf';
import Mailto from 'react-mailto'

export default class Footer extends React.Component {
    /*constructor() {
     super();
     } */

    render() {
        return (

            <footer>
                <div className="content">

                    <div className="my-info">

                        <h1>That's me</h1>

                        <p>also check out my:</p>
                        <ul>
                            <li className="link-left">
                                <a target="_blank" href={CV}>CV</a>
                            </li>
                            <li>
                                <a className="linked-in" href="https://www.linkedin.com/in/jesse-van-der-scheer-10bb57a/" target="_blank"><span></span></a>
                            </li>
                        </ul>

                    </div>

                    <div className="contact">

                        <h1>who are you?</h1>
                        <p>Contact me and i'll get back to you as soon as possible</p>

                        <form>
                            <Mailto className="button primary" email="jesse.vanderscheer@gmail.com">Email me</Mailto>
                        </form>


                    </div>

                </div>


            </footer>


        );

    }
}
