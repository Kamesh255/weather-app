 
import './App.css';
import CityWeather from './components/CityWeather';
import SearchCity from './components/SearchCity';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <SearchCity/>}/>
        <Route path='/city-weather' element={ <CityWeather/>}/>  
      </Routes>
     
    </div>
  );
}

export default App;
