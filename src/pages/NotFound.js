import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Erreur 404</h2>

        <NavLink to="/">
            <h1> Retour à l'accueil <i className="fas fa-home"> </i></h1>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
