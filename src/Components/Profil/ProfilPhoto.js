import React from 'react'
import MyProfilPhoto from "../../imgSrc.jpg" 
import "./style.css"; 
function ProfilPhoto() {
  return (
    <div>
      <img
        src={MyProfilPhoto}
        alt="ProfilePhoto"
        
      />
    </div>
  );
}

export default ProfilPhoto