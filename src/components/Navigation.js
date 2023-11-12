import React from "react";
import { NavLink } from "react-router-dom";




const Navigation = () => {
  // pour creer une navigation on import les navlink de react router qui se trouve dans app.j
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
            <img src="../mediasrc/photocv.jpg" alt="" />
            <h3> Nayé SOUMARE</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="bi bi-house-door-fill">
                
              </i>
              <span>Accueil</span>
            </NavLink>
            </li>

            <li>
            <NavLink exact to="/competence">
            
              <i class="bi bi-clipboard-fill">
              </i>
              <span>Compétence</span>
                
            </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                <i class="bi bi-person-lines-fill">
                  
                </i>   
                <span>Contact</span>
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/porteFolio" >
                <i class="bi bi-folder-symlink">
                  
                </i>
                <span>PorteFolio</span>
              </NavLink>
            </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <i class="bi bi-instagram"></i>
              <a href="https://www.instagram.com"></a>
          </li>
          <li>
          <i class="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com"></a>
          </li>
          <li>
          <i class="bi bi-twitter"></i>
            <a href="https://www.twitter.com"></a>
          </li>
         
        </ul>
        <div className="signature">
          <p>super nayé - 2023</p>
        </div>
      </div>
    </div>


  );
};

export default Navigation;
