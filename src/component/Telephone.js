import React from 'react';
import './Telephone.css';
import Byfoufaa from '../Image/Byfoufaa.jpg';
import Panier from '../Image/Panier.png';
import signup from '../Image/signup.png';
import login from '../Image/login.png';
import tel1 from '../Image/tel1.jpg';
import tel2 from '../Image/tel2.jpg';
import tel3 from '../Image/tel3.jpg';
import tel4 from '../Image/tel4.jpg';
import tel5 from '../Image/tel5.jpg';
import tel6 from '../Image/tel6.jpg';
import tel7 from '../Image/tel7.jpg';
import tel8 from '../Image/tel8.jpg';
import tel9 from '../Image/tel9.jpg';
import tel10 from '../Image/tel10.jpg';
import tel11 from '../Image/tel11.jpg';
import tel12 from '../Image/tel12.jpg';
import tel13 from '../Image/tel13.jpg';
import tel14 from '../Image/tel14.jpg';
import tel15 from '../Image/tel15.jpg';
import tel16 from '../Image/tel16.jpg';
import tel17 from '../Image/tel17.jpg';
import tel18 from '../Image/tel18.jpg';
import tel19 from '../Image/tel19.jpg';
import image8 from '../Image/image8.jpg';




function Telephone() {
    return (
      <div>
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
          <div>
          <a href='/'>Acceuil</a>
          <h1>Téléphone</h1>
        </div>
        <div className='tableau'>
            <tr>
                <td> <img src={tel1} width= '280px'  height='280px'></img></td>
                <td> <img src={tel2} width= '280px'  height='280px'></img></td>
                <td> <img src={tel3} width= '280px'  height='280px'></img></td>
                <td> <img src={tel16} width= '280px'  height='280px'></img></td>
            </tr>
            <tr>
                <td>7 TND   <a href='/tel'>Acheter</a></td>
                <td>10 TND   <a href='/tel'>Acheter</a></td>
                <td>7 TND   <a href='/tel'>Acheter</a></td>
                <td>5 TND   <a href='/tel'>Acheter</a></td>
            </tr>
            <tr>
                <td> <img src={tel4} width= '280px'  height='280px'></img></td>
                <td> <img src={tel5} width= '280px'  height='280px'></img></td>
                <td> <img src={tel6} width= '280px'  height='280px'></img></td>
                <td> <img src={tel8} width= '280px'  height='280px'></img></td>
            </tr>
            <tr>
                <td>8 TND   <a href='/tel'>Acheter</a></td>
                <td>10 TND   <a href='/tel'>Acheter</a></td>
                <td>6 TND   <a href='/tel'>Acheter</a></td>
                <td>6 TND   <a href='/tel'>Acheter</a></td>


            </tr>
            <tr>
                <td> <img src={tel7} width= '280px'  height='280px'></img></td>
                <td> <img src={image8} width= '280px'  height='280px'></img></td>
                <td> <img src={tel9} width= '280px'  height='280px'></img></td>
                <td> <img src={tel17} width= '280px'  height='280px'></img></td>
            </tr>
            <tr>
                <td>12 TND   <a href='/tel'>Acheter</a></td>
                <td>8 TND   <a href='/tel'>Acheter</a></td>
                <td>6 TND   <a href='/tel'>Acheter</a></td>
                <td>5 TND   <a href='/tel'>Acheter</a></td>

            </tr>
            <tr>
                <td> <img src={tel10} width= '280px'  height='280px'></img></td>
                <td> <img src={tel11} width= '280px'  height='280px'></img></td>
                <td> <img src={tel12} width= '280px'  height='280px'></img></td>
                <td> <img src={tel18} width= '280px'  height='280px'></img></td>
            </tr>
            <tr>
                <td>7 TND   <a href='/tel'>Acheter</a></td>
                <td>5 TND   <a href='/tel'>Acheter</a></td>
                <td>6 TND   <a href='/tel'>Acheter</a></td>
                <td>6 TND   <a href='/tel'>Acheter</a></td>
            </tr>
            <tr>
                <td> <img src={tel13} width= '280px'  height='280px'></img></td>
                <td> <img src={tel14} width= '280px'  height='280px'></img></td>
                <td> <img src={tel15} width= '280px'  height='280px'></img></td>
                <td> <img src={tel19} width= '280px'  height='280px'></img></td>
            </tr>
            <tr>
                <td>7 TND   <a href='/tel'>Acheter</a></td>
                <td>7 TND   <a href='/tel'>Acheter</a></td>
                <td>7 TND   <a href='/tel'>Acheter</a></td>
                <td>8 TND   <a href='/tel'>Acheter</a></td>
            </tr>
           
        </div>
      </div>
          <div>
        <footer>
          <div >
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
        </footer>
      </div>
      </div>
       
    
      

      


    )
}

export default Telephone;

