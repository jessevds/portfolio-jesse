/**
 * Created by Jesse on 13/06/2017.
 */


import React from 'react';

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
                        <figure></figure>

                        <p>also check out my:</p>
                        <ul>
                            <li className="link-left">
                                <a>CV</a>
                            </li>
                            <li>
                                <a>in</a>
                            </li>
                        </ul>

                    </div>

                    <div className="contact">

                        <h1>who are you?</h1>
                        <p>contact me when you have some awesome ferrytale to tell</p>

                        <form>
                            <input type="text" placeholder="your name"/>
                            <input type="text" placeholder="your emailadres"/>
                            <textarea placeholder="your message"></textarea>
                            <button className="primary">contact me</button>
                        </form>


                    </div>

                </div>


            </footer>


        );

    }
}
