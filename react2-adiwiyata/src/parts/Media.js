import React, { useEffect } from 'react'
import M from 'materialize-css'

const Media = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {
            
        });
    })
    return(
        <div class="slider">
            <ul class="slides fullscreen">
            <li>
                <img src="https://lorempixel.com/580/250/nature/1" alt="img"/>
                <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="https://lorempixel.com/580/250/nature/2" alt="img"/>
                <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="https://lorempixel.com/580/250/nature/3" alt="img"/>
                <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="https://lorempixel.com/580/250/nature/4" alt="img"/>
                <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
            </li>
            </ul>
        </div>
    )
}

export default Media