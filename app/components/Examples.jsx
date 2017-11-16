import React from 'react';
import {Link} from 'react-router';

var Examples = () => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Piła'>Piła, PL</Link>
                </li>
                <li>
                    <Link to='/?location=Poznań'>Poznań, PL</Link>
                </li>
            </ol>
        </div>
    );
}
module.exports = Examples;