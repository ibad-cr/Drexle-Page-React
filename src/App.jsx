import React, { useContext } from 'react';
import Navbar from './assets/components/navbar';
import Footer from './assets/components/footer';
import Shop from './assets/components/shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/components/home';
import Blog from './assets/components/blog';
import BlogCardDetalis from './assets/components/BlogCardDetalis';
import AddToCard from './assets/components/AddToCard,';
import { ModeContext } from './assets/context/Mode';

const App = () => {
  const [mode, setMode] = useContext(ModeContext);

  return (
    <div className={`${mode === "Light" ? "Light" : "Dark"}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/productdetails/:slug' element={<BlogCardDetalis />}></Route>
          <Route path='/AddToCard' element={<AddToCard />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App; 
