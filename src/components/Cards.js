import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC's Lessons</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {/* BIG CARDS IN HOME */}
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore the hidden Freedom"
                    label='Adventure'
                    path='/lessons'
                    />
                    <CardItem 
                    src="images/img-2.jpg"
                    text="Kiting through the Islands of Bali in a Private Cruise"
                    label='Luxury'
                    path='/lessons'
                    />
                </ul> 
                {/* SMALL CARDS IN HOME */}
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-8.jpg"
                    text="Explore the hidden Freedom"
                    label='Wild'
                    path='/lessons'
                    />
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Kiting through the Islands of Bali in a Private Cruise"
                    label='Luxury'
                    path='/lessons'
                    />
                    <CardItem 
                    src="images/img-4.jpg"
                    text="Kiting through the Islands of Bali in a Private Cruise"
                    label='Adventure'
                    path='/lessons'
                    />
                </ul> 
            </div>
            </div> 
        </div>
    )
}

export default Cards
