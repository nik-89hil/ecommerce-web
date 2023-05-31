import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const loader = () => {
    return (
        <div>
            <Spinner animation="border" role="status" style={{width:"100px",height:"100px",margin:"auto", display:"block",marginTop:"15vh"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>

        </div>
    )
}

export default loader
