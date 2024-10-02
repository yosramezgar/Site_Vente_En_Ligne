//import logo from './logo.svg';

import './App.css'
import Connexion from './component/Connexion';
import './component/Connexion.css'
import Compte from './component/Compte';
import './component/Compte.css'
import Acceuil from './component/Acceuil';
import './component/Acceuil.css'
import Formulaire from './component/Formulaire';
import './component/Formulaire.css'
import Collier from './component/Collier';
import './component/Collier.css'
import Bracelet from './component/Bracelet';
import './component/Bracelet.css'
import Bague from './component/Bague';
import './component/Bague.css'
import Montre from './component/Montre';
import './component/Montre.css'
import Boucle from './component/Boucle';
import './component/Boucle.css'
import Sac from './component/Sac';
import './component/Sac.css'
import Cheuveux from './component/Cheuveux';
import './component/Cheuveux.css'
import Telephone from './component/Telephone';
import './component/Telephone.css'
import Panier from './component/Panier';
import { Routes, Route } from 'react-router-dom';






function App() {
  
 
  return (
    <div className="App">
      <Routes>
          <Route path='Compte' element={<Compte/>}/>
          <Route path='Connexion' element={<Connexion/>}/>
          <Route path='/' element={<Acceuil/>}/>
          <Route path='Formulaire' element={<Formulaire/>}/>
          <Route path='Collier' element={<Collier/>}/>
          <Route path='Bracelet' element={<Bracelet/>}/>
          <Route path='Bague' element={<Bague/>}/>
          <Route path='Montre' element={<Montre/>}/>
          <Route path='Boucle' element={<Boucle/>}/>
          <Route path='Sac' element={<Sac/>}/>
          <Route path='Cheuveux' element={<Cheuveux/>}/>
          <Route path='Telephone' element={<Telephone/>}/>
          <Route path='Panier' element={<Panier/>}/>
          
          
       
          

      </Routes> 
      
  
    </div>
  );
}

export default App;