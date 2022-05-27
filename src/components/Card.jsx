import React from 'react'
import {ImLocation2} from 'react-icons/im'
function Card(props) {
  return (
    <div className='card--container'>
        <div className='image--container'>
            <img src={props.imageUrl} alt="image" srcset="" />
        </div>
        <div className='data--container'>
            <div className='location'>
                <ImLocation2 className='location--icon'/>{props.location}
            </div>
            <div>
                <h1 className='title'>{props.title}</h1>
                
            </div>
            <div className='dates'>
                {props.startDate} - {props.endDate}
            </div>
            <div>
                {props.description}
            </div>
        </div>
    </div>
  )
}

export default Card