import React from 'react'
import { BsStarFill, BsStar } from 'react-icons/bs'

export default function Stars(rating) {

    let rate = rating.rating
    console.log(rate)
    return (
        <div>
            {rate > 2 ? <BsStarFill style={{color:'orange'}}className="mb-1"/>:<BsStar style={{color:'orange'}}className="mb-1"/>}
            {rate > 4 ? <BsStarFill style={{color:'orange'}}className="mb-1"/>:<BsStar style={{color:'orange'}}className="mb-1"/>}
            {rate > 6 ? <BsStarFill style={{color:'orange'}}className="mb-1"/>:<BsStar style={{color:'orange'}}className="mb-1"/>}
            {rate > 8 ? <BsStarFill style={{color:'orange'}}className="mb-1"/>:<BsStar style={{color:'orange'}}className="mb-1"/>}
            {rate === 10 ? <BsStarFill style={{color:'orange'}}className="mb-1"/>:<BsStar style={{color:'orange'}}className="mb-1"/>}
        </div>
    )
}
