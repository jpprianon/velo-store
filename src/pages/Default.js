import React from 'react';
import {Link} from 'react-router-dom'

export default function Default() {
    return (
        <>
                <h2 className="text-uppercase">page not found</h2>
            
            <Link to="/" className="main-link"> style={{
                marginTop: "2rem"
            }}
                accueil
            </Link>
        </>
    );
}
