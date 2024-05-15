import React from 'react';
import { Link } from 'react-router-dom';

import './CSS/ErrorPage.css';

export default function ErrorPage() {
    return (
    <div className='error-page'>
        <div className='error-page-container'>
            <h1>404 NOT FOUND</h1>
            <Link to='/' className='link'>Back To Home</Link>
        </div>
    </div>

  )
}
