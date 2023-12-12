import React from 'react'

export default function AnimationCard() {
  return (
    <>
    
    <div className="profile-card">
        
        <img id="profile-img" src={process.env.PUBLIC_URL + "/images/djstephensprofil.jpg"} alt="profile-img" />
        
          
        <div className="profile-info">
          <p className="profile-name">DJ Stephens</p>
          <p className="profile-work">Numéro : 20 (Grizzlies de Memphis / Ailier)</p>
        </div>
      </div>
    </>
  )
}
