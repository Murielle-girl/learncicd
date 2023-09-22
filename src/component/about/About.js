import React, { Fragment } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function About() {
    return (

       <Fragment>
            <Navbar/>
            <div className="about-container">
                <h1>À propos de nous</h1>
                <p>Nous sommes une entreprise dédiée à offrir les meilleures solutions technologiques
                    pour nos clients. Avec une expérience de plusieurs années dans le domaine,
                    notre équipe est prête à relever tout défi et à proposer des solutions
                    innovantes pour vos besoins spécifiques.
                </p>
                <Link to="/" className="return-link">Retour </Link>  
            </div>
       </Fragment>
    );
}

export default About;
