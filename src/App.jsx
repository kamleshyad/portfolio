import Home from './(routes)/home/Home';
import About from './(routes)/about/About';
import Experience from './(routes)/experience/Experience';
import Projects from './(routes)/projects/projects';
import Contact from './(routes)/contact/Contact';
import CopyrightComp from './component/global/CopyrightComp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/global/Header';
import Footer from './component/global/Footer';
import Banner from './component/global/BannerComp';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#contact" element={<Contact />} />
      </Routes>
      <Footer />
      <CopyrightComp />
    </BrowserRouter>
  );
}

export default App;