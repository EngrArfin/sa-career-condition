import React from 'react'
import { Link } from 'react-router-dom';
import './fourOFour.css'

const ErrorPage = () => {
    return (
        <>
            <div id='notFound'>
                <div className='notFound'>
                        <img className='notFound-404' src="/images/404OOPS.png" alt="" />
                    <h2 className=''></h2>
                    <p className='text'>
                        We are Sorry, Page Not Found! <br />
                        The page you are looking for might have been removed or it is temporary unavailable.
                    </p>
                    <button className='font-4xl'><a href="/">Back to Home Page</a></button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;