import React, { useState } from 'react';
import './Compte.css' // Importer le fichier CSS pour le style
import Byfoufaa from '../Image/Byfoufaa.jpg';
import Panier from '../Image/Panier.png';
import signup from '../Image/signup.png';
import login from '../Image/login.png';


const Compte = () => {
  const [name, setName] = useState('');
  const [lastname, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameameChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour la soumission du formulaire d'inscription
    console.log('Nom:', name);
    console.log('Prenom:',lastname)
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

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

    <div className="my-background">
     
      <h2>Créez votre compte</h2>
      <form className='signup-container' onSubmit={handleSubmit}>
        <div className="form-group form-row">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange} required
            style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }}
          />
        </div>
        <div className="form-group form-row">
          <label htmlFor="lastname">Prenom:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={handleLastNameameChange} required
            style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }}
          />
        </div>
        <div className="form-group form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange} required
            style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }}
          />
        </div>
        <div className="form-group form-row">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange} required
            style={{ width: '300px' , height: '30px' , border: '2px solid #e7daaf' }}
          />
        </div>
        <button style={{ color: '#ffffff', backgroundColor: '#c5aab1' , width: '430px'}} type="submit">S'inscrire</button>
      </form>
    </div>
    </div>
  );
};

export default Compte;