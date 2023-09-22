import React, { Fragment } from 'react';
import './homePage.css';
import Navbar from '../navbar/Navbar';

function HomePage() {
    const cardsData = [
        { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 
        title: "Frontend developer", description: "UX/UI Design, material UI, React, AngularJs, VueJs, flutter " },
        { src: "https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RCVDMyVBOXZlbG9wcGV1ciUyMEZ1bGwlMjBTdGFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
         title: "Full Stack Developer", description: "Java JEE Sprint boot, sprint data, sprint security, Ci/CD" },
        { src: "https://media.istockphoto.com/id/1423550628/photo/multi-tasking-computer-programmers-working-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=_qCRmcaq96cNFAd35YsQ6JUcXbCjUykDZ4YllEpE5wo=", 
        title: "Project team", description: "We analyze your project. From analysis to design, testing and production. " },
        { src: "https://media.istockphoto.com/id/1423550628/photo/multi-tasking-computer-programmers-working-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=_qCRmcaq96cNFAd35YsQ6JUcXbCjUykDZ4YllEpE5wo=", 
        title: "Project team", description: "We analyze your project. From analysis to design, testing and production. " },
        //... Ajoutez plus de cartes si nécessaire
    ];

    return (
        <Fragment>
            <Navbar/>
            <div className="home-page">
                <h1>Bienvenue sur notre site !</h1>
                <div className="card-container">
                    {cardsData.map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.src} alt={card.title} />
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;
