import './App.css';
import LoginForm from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Pages/Register';
import NotFound from './Pages/NotFound';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './Components/Navbar';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import Favorites from './Pages/Favorites'
import { useState } from 'react';
import { LanguageContext } from './Context/languageContext';

function App() {
  // const {contextLanguage , setContextLanguage} = useState(LanguageContext)


  return (
    <>
   <BrowserRouter>
   {/* <LanguageContext.Provider value={{contextLanguage, setContextLanguage}} > */}
   <Navbar/>
   <Switch>
   <Route path='/' exact component={LoginForm}/>
   <Route path='/Login' exact component={LoginForm}/>
   <Route path='/Register' exact component={RegisterForm}/>
   <Route path='/Movies' exact component={Movies} />
   <Route path='/MovieDetails/:id' exact component={MovieDetails} />
   <Route path='/Favorites' exact component={Favorites} />
   <Route path={'*'} exact component={NotFound}/>
    </Switch>
    {/* </LanguageContext.Provider> */}
   </BrowserRouter>
   </>
  );
}

export default App;
