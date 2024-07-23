import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/about/main-components/About';
import OurServices from './components/our-services/main-components/OurServices';
import Teamwork from './components/teamwork/main-components/Teamwork';
import Testimonials from './components/testimonials/main-components/Testimonials';
import HaveProject from './components/have-project/main-components/HaveProject';


function App() {

  return (
    <>
      <Header/>
      <main>
        <About/>
        <OurServices/>
        <Teamwork/>
        <Testimonials/>
        {/* <HaveProject/> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
