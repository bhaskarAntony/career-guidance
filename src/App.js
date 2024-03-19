import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
ReactGA.initialize('G-C8KREWK8L7');

function App() {
  ReactGA.event({
    category: 'User',
    action: 'Clicked Button',
    label: 'Homepage',
  });

  useEffect(() => {
    // Extract UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    // Track pageview with UTM parameters
    ReactGA.pageview(window.location.pathname + window.location.search, [], {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    });
  }, []);
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
