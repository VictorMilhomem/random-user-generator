import React from 'react';
import './User.css';


const User = ({user}) => {
    if (user != null){
    return(
        <div className="user-display">         
            <div className="container">
                   {user.map((item) => (
                        <>
                            <img className="random-user-img" src={item.picture.large} alt={item.name.first}/>
                            <div className="user-info">
                                <div className="compact">
                                    <h3>Gender</h3>
                                    <p>{item.gender}</p>
                                </div>
                                <div className="compact">
                                    <h3>Name</h3>
                                    <p>{item.name.first + " " + item.name.last}</p>
                                </div>
                                <div className="compact">
                                    <h3>Email</h3>
                                    <p>{item.email}</p>
                                </div>
                                <div className="compact">
                                    <h3>Age</h3>
                                    <p>{item.dob.age}</p>
                                </div>
                                <div className="compact">
                                    <h3>Birth</h3>
                                    <p>{item.dob.date}</p>
                                </div>
                                <div className="compact">
                                    <h3>Nationality</h3>
                                    <p>{item.nat}</p>
                                </div>
                                <div className="compact">
                                    <h3>Phone</h3>
                                    <p>{item.phone}</p>
                                </div>
                                <div className="compact">
                                    <h3>City</h3>
                                    <p>{item.location.city}</p>
                                </div>
                                <div className="compact">
                                    <h3>State</h3>
                                    <p>{item.location.state}</p>
                                </div>
                                <div className="compact">
                                    <h3>Country</h3>
                                    <p>{item.location.country}</p>
                                </div>
                                <div className="compact">
                                    <h3>PostCode</h3>
                                    <p>{item.location.postcode}</p>
                                </div>
                                <div className="compact">
                                    <h3>Location</h3>
                                    <p>{item.location.street.name + " " + item.location.street.number}</p>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        </div>
    
    )
    }
    return (
        <div>
            <p style={{color: "white", marginTop: "15px"}}>Generate a random user clicking on the button</p> 
        </div>
    )

}

export default User
