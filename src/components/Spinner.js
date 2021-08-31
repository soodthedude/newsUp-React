import React from 'react'
import loading from './loading.gif'

const Spinner =()=> {
    
        return (
            <div className="text-center">
                <img style={{padding:'20px'}} src={loading} alt="loading" />
            </div>
        )
    
}

export default Spinner;
