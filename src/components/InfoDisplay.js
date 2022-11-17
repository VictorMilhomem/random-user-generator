import React from 'react';
import './InfoDisplay.css'

const InfoDisplay = ({title, info, key}) => {

    return(
        <div className="compact">
            <h3>{title}</h3>
            <p key={key}>{info}</p>
        </div>
    )

}

export default InfoDisplay
