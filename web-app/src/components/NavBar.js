import React from 'react'

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1 text-light">{props.title}</span>
            </nav>
        </>
    )
}

export default Navbar
