import React, { useEffect } from 'react'
import M from 'materialize-css'

const Carousel = () => {
    // untuk menggunakan parts harus dengan useEffect
    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });
    });
    return(
    <div class="carousel carousel-slider mt40 mb40 border hoverable">
        <a class="carousel-item" href="#one!">
            <img src="https://lorempixel.com/800/400/nature/1" alt="img_1"/>
        </a>
        <a class="carousel-item" href="#two!">
            <img src="https://lorempixel.com/800/400/nature/2" alt="img_2"/>
        </a>
        <a class="carousel-item" href="#three!">
            <img src="https://lorempixel.com/800/400/nature/3" alt="img_3"/>
        </a>
        <a class="carousel-item" href="#four!">
            <img src="https://lorempixel.com/800/400/nature/4" alt="img_4"/>
        </a>
    </div>
    )
};

export default Carousel;