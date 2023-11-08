import React, {useEffect, useState} from 'react';
import data from "./data";
import {FaQuoteRight} from "react-icons/fa";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Slider = () => {
    const [portfolio, setPortfolio] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = portfolio.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, portfolio]);

    useEffect(() => {
        let slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 7000);
        return () => {
            clearInterval(slider);
        }
    }, [currentIndex])

    

    return (
        <section className='section'>
            <div className='title-slider'>
                <h2>
                    <span className='slesh'>/</span>Portfolio
                </h2>
            </div>
            <div className='section-center'>
                {portfolio.map((person, personIndex) => {
                    const {id, image, name, title, quote} = person;

                    let position = 'nextSlide';
                    if (personIndex === currentIndex) {
                        position = 'activeSlide';
                    }

                    if (personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === portfolio.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='person-img'/>
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })}

                <button className='prev' onClick={() => setCurrentIndex(prevState => prevState - 1)}>
                   <FiChevronLeft />
                </button>

                <button className='next' onClick={() => setCurrentIndex(prevState => prevState + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Slider;