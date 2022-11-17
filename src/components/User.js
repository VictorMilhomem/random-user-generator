import React from 'react';
import './User.css';

import InfoDisplay from './InfoDisplay';

const User = ({user}) => {
    if (user != null){
    return(
        <div className="user-display">         
            <div className="container">
                   {user.map((item) => (
                        <>
                            <img className="random-user-img" src={item.picture.large} alt={item.name.first}/>
                            <div className="user-info">
                                <InfoDisplay key={item.gender} title={"Gender"} info={item.gender}/>
                                <InfoDisplay key={item.name} title={"Name"} info={item.name.first + " " + item.name.last}/>
                                <InfoDisplay key={item.email} title={"Email"} info={item.email}/>
                                <InfoDisplay key={item.dob.age} title={"Age"} info={item.dob.age}/>
                                <InfoDisplay key={item.dob.date} title={"Birth"} info={item.dob.date}/>
                                <InfoDisplay key={item.nat} title={"Nationality"} info={item.nat}/> 
                                <InfoDisplay key={item.phone} title={"Phone"} info={item.phone}/> 
                                <InfoDisplay key={item.location.city} title={"City"} info={item.location.city}/>  
                                <InfoDisplay key={item.location.state} title={"State"} info={item.location.state}/> 
                                <InfoDisplay key={item.location.country} title={"Country"} info={item.location.country}/> 
                                <InfoDisplay key={item.location.postcode} title={"PostCode"} info={item.location.postcode}/> 
                                <InfoDisplay key={item.location.street.number} title={"Location"} info={item.location.street.name + " " + item.location.street.number}/>  
                            </div>
                        </>
                    ))}
            </div>
        </div>
    
    )
    }
    return (
        <div>
            <p style={{color: "white", marginTop: "50px", fontWeight: "bold", fontSize: "20px"}}>Loading...</p> 
        </div>
    )

}

export default User
