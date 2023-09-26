import React from 'react';
import star from './img/star.svg';
import katie from './img/katie.png';

export default function Card() {
    return (
        <div className='card-container'>
            <div className='card'>
                {/* <span>SOLD OUT</span> */}
                <img src={katie} className='card-img' alt='Card'></img>
                <div>
                    <div className='card-stats'>
                    <img src={star} className='card-star' alt='Star Card'></img>
                        <span>5.0</span> 
                        <span className='gray'>(6) <strong>.</strong></span> 
                        <span className='gray'>USA</span>
                    </div>
                </div>
                <div>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className='bold'>From $136</span> / person</p>
                </div>
            </div>
        </div>
    )
}