import React from 'react'
import notFound from '../../imgaes/notFound.svg'
import './notfound.css'
export default function NotFound() {
    return (
        <div className="notFound">
            <img src={notFound} alt=""/>
        </div>
    )
}
