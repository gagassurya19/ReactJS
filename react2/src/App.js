import React, { Component } from 'react';
import Utama from './components/Utama';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {draggable:true,edge:"right"});
    });
  }
  
  render() {
    return (
      <div> 
        <nav>
          <div class="nav-wrapper blue">
          <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
            <div className="container">
            <a href="#" class="brand-logo">React Router</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/tentangsaya">Tentang Saya</Link></li>
              <li><Link to="/karya">Karya</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
            </ul>
            </div>
          </div>
        </nav>
        {/* Side Nav */}
        <ul id="slide-out" class="sidenav">
          <li><div class="user-view">
            <div class="background">
              <img src="/assets/mern.jpeg" />
            </div>
            <a href="#user"><img class="circle" src="/assets/pp.jpeg" /></a>
            <a href="#name"><span class="white-text name">Gagas Surya</span></a>
            <a href="#email"><span class="white-text email">Gagassurya19@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>

        <div className="container center-align">
          <p><Utama/></p>
          <h4>UI by Materialize</h4>
        </div>
      </div>
    );
  }
}

export default App;
