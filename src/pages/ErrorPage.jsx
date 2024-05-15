import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
    <div className='error-page'>
        <div className='error-page-container'>
            <h1>404 ERROR</h1>
            <Link to='/'>Go To Home</Link>
        </div>
    </div>

  )
}
