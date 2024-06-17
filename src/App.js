import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import NewHeader from './Components/Header/NewHeader';
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'
// import Privacy from './Components/Privacy/Privacy';



function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      {/* <NewHeader/>      This is Navbar */}
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}/>
        <Route path='/contactus' element={<ContactUs></ContactUs>} />
        {/* <Route path='/privacy' element={<Privacy></Privacy>} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;