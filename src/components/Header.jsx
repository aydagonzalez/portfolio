import React from 'react';

function Header() {
    return (
        <header>
            {/* <h1>Header</h1> | */}
            <div className='nav-div' >About</div> |
            <div className='nav-div' >Technologies</div> |
            <div className='nav-div' >Projects</div> |

            <div className='nav-div' >Experience</div> |
            <div className='nav-div' >Contact</div>
        </header>
    );
}

export default Header;
