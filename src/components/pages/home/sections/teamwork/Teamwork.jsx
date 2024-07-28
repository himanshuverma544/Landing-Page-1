import Carousel from 'react-multi-carousel';

import Teammate from "./components/Teammate";
import Brand from "./components/Brand";

import useWindowSize from '../../../../../../utilities/hooks/general/useWindowSize';

import { getCarouselResponsive } from "../../../../../../utilities/functions";

import Figma from "../../../../../assets/pages/home/sections/teamwork/brands/figma.svg?react";
import Linear from "../../../../../assets/pages/home/sections/teamwork/brands/linear.svg?react"
import Loom from "../../../../../assets/pages/home/sections/teamwork/brands/loom.svg?react";
import Doordash from "../../../../../assets/pages/home/sections/teamwork/brands/doordash.svg?react";

import Teammate1 from "../../../../../assets/pages/home/sections/teamwork/teammates/teammate1.svg";
import Teammate2 from "../../../../../assets/pages/home/sections/teamwork/teammates/teammate2.svg";
import Teammate3 from "../../../../../assets/pages/home/sections/teamwork/teammates/teammate3.svg";
import Teammate4 from "../../../../../assets/pages/home/sections/teamwork/teammates/teammate4.svg";
import Teammate5 from "../../../../../assets/pages/home/sections/teamwork/teammates/teammate5.svg";
import Teammate6 from "../../../../../assets/pages/home/sections/teamwork/teammates/teammate6.svg";


export default function Teamwork() {

  const teammates = [
    {
      id: 1,
      name: "Shivam Sharma",
      designation: "Director of PCSS",
      avatar: Teammate1,
      brand: <Doordash/>
    },
    {
      id: 2,
      name: "Shivani Yadav",
      designation: "CEO OF PCSS",
      avatar: Teammate2,
      brand: <Figma/>
    },
    {
      id: 3,
      name: "Prateek Chauhan",
      designation: "COO of PCSS",
      avatar: Teammate3,
      brand: <Linear/>
    },
    {
      id: 4,
      name: "Ankush Kothiyal",
      designation: "CFO of PCSS",
      avatar: Teammate4,
      brand: <Loom/>
    },
    {
      id: 5,
      name: "Srideep Gurung",
      designation: "CMO of PCSS",
      avatar: Teammate5,
      brand: <Doordash/>
    },
    {
      id: 6,
      name: "Saumya Pant",
      designation: "CLO of PCSS",
      avatar: Teammate6,
      brand: <Figma/>
    }
  ];

  const [teammate1, teammate2, teammate3, teammate4, teammate5, teammate6] = teammates;

  const responsive = getCarouselResponsive();

  const { breakpoints: { md }, screenWidth } = useWindowSize();

  return (
    <section className="teamwork flex flex-col gap-5 px-7 pt-10">
      <h1 className="text-center text-5xl uppercase font-bold">
        High Voltage Teamwork
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur. Proin quis augue sapien. Vestibulum non dapibus magna, non posuere nunc. Nullam at ligula lacus. Pellentesque et lacus vitae mi gravida consectetur.
      </p>

      {/* For Mobile Devices */}

      {screenWidth < md &&
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass="carousel-container w-[87vw] h-[150vw] max-h-[560px]"
          itemClass="fix-drag select-none px-3"
        >
          {teammates.map(teammate => (
            <div key={teammate.id} className='relative mt-16'>
              {teammate.hasOwnProperty("brand") && 
                <Brand 
                  className="absolute left-1/2 bottom-[95%] ms-2 mb-5"
                  icon={teammate?.brand}
                />
              }
              <Teammate
                key={teammate.id}
                name={teammate.name}
                designation={teammate.designation}
                avatar={teammate.avatar}
              />
            </div>
          ))}
        </Carousel>
      }

      {/* For Tablets and above Devices */}

      { screenWidth >= md &&
        <div className="brands-and-teammates h-[95vw] px-20 my-14 relative">
        <Brand className="absolute top-[2vw] right-[30vw]" icon={<Figma/>}/>
        <Brand className="absolute top-[15vw] right-[49vw]" icon={<Linear/>}/>
        <Brand className="absolute top-[39vw] right-[76vw]" icon={<Loom/>}/>
        <Brand className="absolute top-[39vw] right-[6vw]" icon={<Doordash/>}/>
        
        <Teammate
          className="absolute top-[7vw] right-[59vw]"
          name={teammate1.name}
          designation={teammate1.designation}
          avatar={teammate1.avatar}
        />
        <Teammate
          className="absolute top-[24vw] right-[31vw]"
          name={teammate2.name}
          designation={teammate2.designation}
          avatar={teammate2.avatar}
        />
        <Teammate
          className="absolute top-[7vw] right-[6vw] z-10"
          name={teammate3.name}
          designation={teammate3.designation}
          avatar={teammate3.avatar}
        />
        <Teammate
          className="absolute top-[45vw] right-[55vw] z-10"
          name={teammate4.name}
          designation={teammate4.designation}
          avatar={teammate4.avatar}
        />
        <Teammate
          className="absolute top-[62vw] right-[28vw] z-10"
          name={teammate5.name}
          designation={teammate5.designation}
          avatar={teammate5.avatar}
        />
        <Teammate
          className="absolute top-[44vw] right-[6vw]"
          name={teammate6.name}
          designation={teammate6.designation}
          avatar={teammate6.avatar}
        />
        </div>
      }
    </section>
  );
}
