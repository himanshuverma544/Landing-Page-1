import { useRef } from "react";

import Carousel from 'react-multi-carousel';

import Testimonial from '../sub-components/Testimonial';

import useWindowSize from "../../../../utilities/hooks/general/useWindowSize";
import useHighlightItem from "../../../../utilities/hooks/react-multi-carousel/useHighlightItem";
import useCarouselArrows from "../../../../utilities/hooks/react-multi-carousel/useCarouselArrows";

import { getCarouselResponsive } from "../../../../utilities/functions";

import ArrowActive from "../../../assets/testimonials/miscellaneous/arrow-active.svg?react";
import ArrowDisabled from "../../../assets/testimonials/miscellaneous/arrow-disabled.svg?react";

import Client1 from "../../../assets/testimonials/clients/client1.jpg";
import Client2 from "../../../assets/testimonials/clients/client2.png";
import Client3 from "../../../assets/testimonials/clients/client3.jpg";
import Client4 from "../../../assets/testimonials/clients/client4.png";
import Client5 from "../../../assets/testimonials/clients/client5.jpeg";
import Client6 from "../../../assets/testimonials/clients/client6.jpeg";
import Client7 from "../../../assets/testimonials/clients/client7.jpg";


const data = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Virendra Gupta",
      location: "Jaipur, Rajasthan",
      profilePic: Client1
    }
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Shivani Sharma",
      location: "Gurugram, Haryana",
      profilePic: Client2
    }
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Vikas Garg",
      location: "Delhi, NCR",
      profilePic: Client3
    }
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Himanshu Verma",
      location: "Dehradun, Uttarakhand",
      profilePic: Client4
    }
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Vaibhav Kumar",
      location: "Nainital, Uttarakhand",
      profilePic: Client5
    }
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "Nitin Kashyap",
      location: "Haldwani, Uttarakhand",
      profilePic: Client6
    }
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.",
    avatar: {
      name: "John Smith",
      location: "New York, United States",
      profilePic: Client7
    }
  }
];

const responsive = getCarouselResponsive();


export default function Testimonials() {
 
  const carouselRef = useRef(null);

  const { highlightItem, highlightMiddleItems } = useHighlightItem({ carouselRef });

  const { CarouselArrows, disableArrowBtn } = useCarouselArrows({ 
    carouselRef,
    activeArrowIcon: ArrowActive,
    inactiveArrowIcon: ArrowDisabled
  });

  const { breakpoints: { lg }, screenWidth } = useWindowSize();

  return (
    <section className="testimonials flex flex-col items-center gap-10 pb-10 mb-10">
      <h1 className="text-5xl font-bold">
        Testimonials
      </h1>

      <div className="carousel-cont-&-arrows-wrapper">
        <Carousel
          ref= {carouselRef}
          responsive={responsive}
          showDots
          rewind
          rewindWithAnimation
          autoPlay
          keyBoardControl
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass="w-screen pb-10"
          sliderClass="flex items-center lg:h-[35vw] lg:max-h-[350px] xl:max-h-[300px]"
          itemClass="fix-drag select-none px-5"
          beforeChange={(..._) => screenWidth > lg && highlightMiddleItems()}
          afterChange={(..._) => screenWidth < lg && disableArrowBtn()}           
        >
          {data.map(testimonial => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
              highlightItem={highlightItem}
            />
          ))}
        </Carousel>
        {screenWidth < lg &&
          <CarouselArrows/>
        }
      </div>
    </section>
  );
}