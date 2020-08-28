import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {edge:"right"});
          });
        
    }
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper blue-grey darken-2">
                        <div className="container">
                        <a href="#" class="brand-logo">Adi Wiyata</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/haribesar">Hari Besar</Link></li>
                            <li><a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                        <div class="background">
                        <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span class="white-text name">John Doe</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;