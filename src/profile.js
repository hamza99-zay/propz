import React from 'react'
import './App.css'
 function Profile() {
    return (
        <div className="list">
            {props.x.map((profile) =>(
            <div className="card">
                <picture>
                    <img width="100px" height="150px" src={profile.image} alt="avatar"/>
                </picture>
<h1>{profile.name}</h1>
<h2>{profile.prof}</h2>
<p>{profile.bio}</p>
            </div>
             )) }   
        </div>
    );
}
export default Profile;