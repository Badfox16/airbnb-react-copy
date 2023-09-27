import React from 'react';

export default function Card(props) {
    return (
        <div className='card-container'>
            <div className='card'>
                <img src={`./img/${props.img}`} className='card-img' alt='Card'></img>
                <div>
                    <div className='card-stats'>
                    <img src={`./img/${props.star}`} className='card-star' alt='Star Card'></img>
                        <span>  {props.rating} </span> 
                        <span className='gray'> ({props.reviewCount})<strong>.</strong></span> 
                        <span className='gray'>{props.country}</span>
                    </div>
                </div>
                <div>
                    <p>{props.title}</p>
                    <p><span className='bold'>From ${props.price}</span> / person</p>
                </div>
            </div>
        </div>
    )
}