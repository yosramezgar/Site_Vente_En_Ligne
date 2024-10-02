import React from 'react';
import './Formulaire.css'; // Fichier CSS externe pour les styles
import Byfoufaa from '../Image/Byfoufaa.jpg';
import Panier from '../Image/Panier.png';
import signup from '../Image/signup.png';
import login from '../Image/login.png';

const Formulaire = () => {
  return (
    <div>

<div className="container">
        <header>
          <div  >
            <div className='block' ><h3>By-foufaa</h3></div>
            <div className='block' id="société">
            <img className='image' src={Byfoufaa} alt="logo by-foufaa"></img>   
            </div>
      
            <div className='block' id="search"> 
              <input  style={{ height: '40px' }} type="search" placeholder="Rechercher..." /> 
            </div>
            
            <div className='block' id="lien"> 
              <nav>
                <ul>
                  <li><a href="/Connexion"><img src={login} width= '40px'  height='40px' ></img></a></li>
                  <li><a href="/Compte"><img src={signup} width= '40px'  height='40px'></img></a></li>
                  <li><a href="/panier" > <img src={Panier} width= '50px'  height='50px'></img></a></li>
                </ul>
              </nav>
            </div>
          </div>
          </header>
          </div>


          
    <div className="form-container">
      <h2>Formulaire</h2>

      <form className='login-container'>
        <div className="form-group">
          <label htmlFor="nom">Nom </label>
          <input  style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }} type="text" id="nom" />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom </label>
          <input style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }} type="text" id="prenom" />
        </div>

        <div className="form-group">
          <label htmlFor="tel">Téléphone </label>
          <input style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }} type="text" id="tel" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }} type="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Adresse </label>
          <input style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }} type="text" id="adresse" />
        </div>
        

        <button style={{ color: '#ffffff', backgroundColor: '#c5aab1' , width: '430px'}} type="submit">Envoyer</button>
      </form>
    </div>
    </div>
  );
};

export default Formulaire;