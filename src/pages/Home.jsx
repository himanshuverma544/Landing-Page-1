import About from '../components/pages/home/sections/About';
import OurServices from '../components/pages/home/sections/OurServices';
import Teamwork from '../components/pages/home/sections/teamwork/Teamwork';
import Testimonials from '../components/pages/home/sections/testimonials/Testimonials';
import HaveProject from '../components/pages/home/sections/HaveProject';


export default function Home() {

  return (
    <div className="home-page">
      <About/>
      <OurServices/>
      <Teamwork/>
      <Testimonials/>
      {/* <HaveProject/> */}    
    </div>
  );
}
