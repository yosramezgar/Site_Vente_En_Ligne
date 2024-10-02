// Acceuil.js
import React from 'react';
import './Acceuil.css';
import Byfoufaa from '../Image/Byfoufaa.jpg';
import Panier from '../Image/Panier.png';
import signup from '../Image/signup.png';
import login from '../Image/login.png';
import image1 from '../Image/image1.jpg';
import image2 from '../Image/image2.jpg';
import image3 from '../Image/image3.jpg';
import image4 from '../Image/image4.jpg';
import image5 from '../Image/image5.jpg';
import image6 from '../Image/image6.jpg';
import image7 from '../Image/image7.jpg';
import image8 from '../Image/image8.jpg';
import Byfoufaaa from '../Image/Byfoufaaa.mp4';


function Acceuil() {
  return (
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
        
          <div id="catégorie">
            <div>
              <h2 id="h2">Catégorie</h2>
            </div>
            <table >
            <tr>
              <td>Collier</td>
              <td><a href="/Collier"><img src={image1} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Bracelet</td>
              <td><a href="/Bracelet"><img src={image2} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Bague</td>
              <td><a href="/Bague"><img src={image3} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Montre</td>
              <td><a href="/Montre"><img src={image4} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Boucles d'oreilles</td>
              <td><a href="/Boucle"><img src={image5} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Sac</td>
              <td><a href="/Sac"><img src={image6} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Cheuveux</td>
              <td><a href="/Cheuveux"><img src={image7} width= '150px'  height='100px'></img></a></td>
            </tr>
            <tr>
              <td>Téléphone</td>
              <td><a href="/Telephone"><img src={image8} width= '150px'  height='100px'></img></a></td>
            </tr>
        
            </table>
          </div>
          <div id="affiche">
            <h2 className='h'> Bienvenue sur notre plateforme de vente en ligne!</h2>
          
            <video controls width="700" >
              <source  src={Byfoufaaa} type='video/mp4' ></source>
            </video>
            
          
          </div>
        
        
        
        
      <div>
        
          <div id="foot" >
            <div id="footer-left">
              <h3>Contactez-nous</h3>
              <p>MasjedAissa, Monastir</p>
              <p>+216 27 820 895</p>
              <p>by-foufaa</p>
            </div>
            <div id="footer-center">
              <h3>Nos catégories</h3> 
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100093195588711">Facebook</a></li>
                <li><a href="27820895">whatsapp</a></li>
                <li><a href="https://www.instagram.com/by_foufaa/">Instagram</a></li>
              </ul>
            </div>
            <div id="footer-right">
              <h3>Suivez-nous</h3>
              <ul>
                <li><a href="/Collier">Collier</a></li>
                <li><a href="/Bracelet">Bracelet</a></li>
                <li><a href="/Boucles">Boucles d'oreilles</a></li>
		            <li><a href="/Cheuveux">Cheuveux</a></li>
              </ul>
            </div>
            <div id="footer-right1">
              <ul >
                <li><a href="/Sac">Sac</a></li>
                <li><a href="/Telephone">Téléphone</a></li>
		            <li><a href="/Bague">Bague</a></li>
		            <li><a href="/Montre">Montre</a></li>
              </ul>
            </div>
            <div id="footer-bottom">
              <p>&copy; 2023 Plateforme de vente en ligne. Tous droits réservés.</p>
            </div>
          </div>
       
      </div>
    </div>
  );
}

export default Acceuil;
