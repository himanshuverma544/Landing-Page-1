import React from "react";

import { useMediaQuery } from '@react-hook/media-query';

import Carousel from 'react-multi-carousel';

import Avatar from "../sub-components/Avatar";

import Client1 from "../../../assets/testimonials/clients/client1.jpg";
import Client2 from "../../../assets/testimonials/clients/client2.png";
import Client3 from "../../../assets/testimonials/clients/client3.jpg";
import Client4 from "../../../assets/testimonials/clients/client4.png";
import Client5 from "../../../assets/testimonials/clients/client5.jpeg";
import Client6 from "../../../assets/testimonials/clients/client6.jpeg";
import Client7 from "../../../assets/testimonials/clients/client7.jpg";

import ArrowActive from "../../../assets/testimonials/miscellaneous/arrow-active.svg?react";
import ArrowDisabled from "../../../assets/testimonials/miscellaneous/arrow-disabled.svg?react";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function Testimonials() {

  const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

  const [isDisabled, setIsDisabled] = React.useState({
    leftArrowBtn: true,
    rightArrowBtn: false,
  });

  const carouselRef = React.useRef(null);
  const leftArrowBtnRef = React.useRef(null);
  const rightArrowBtnRef = React.useRef(null);

  const disableArrowBtn = React.useCallback(setIsDisabled => {

    const { 
      listRef: {
        current : { 
          nextElementSibling  : { 
            firstElementChild: firstDot,
            lastElementChild: lastDot
          } 
        }
      } 
    } = carouselRef.current;

    const activeClassName = 'react-multi-carousel-dot--active';

    if (firstDot.classList.contains(activeClassName)) {
      setIsDisabled({ leftArrowBtn: true, rightArrowBtn: false });
    }
    else if (lastDot.classList.contains(activeClassName)) {
      setIsDisabled(prev => ({ ...prev, rightArrowBtn: true }));
    }
    else {
      setIsDisabled(prev => ({ ...prev, leftArrowBtn: false }));
    }
  }, []);

  return (
    <section className="testimonials flex flex-col items-center gap-10 pb-10 mb-10">
      <h1 className="text-5xl font-bold">
        Testimonials
      </h1>

      <div className="carousel-parent-cont">
        <Carousel
          ref= {carouselRef}
          responsive={responsive}
          showDots
          rewind
          rewindWithAnimation
          autoPlay
          keyBoardControl
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass="carousel-container w-[97vw] pb-10"
          itemClass="sm:px-5"
          afterChange={(...rest) => 
            isMobileOrTablet && disableArrowBtn(setIsDisabled)
          }
        >
          {data.map(item => (
            <div 
              key={item.id} 
              className="flex flex-col justify-center items-center gap-5 p-5 border rounded-lg"
            >
              <p className='text-center'>{item.text}</p>
              <div className="avatar-details flex gap-5">
                <Avatar 
                  src={item.avatar.profilePic}
                  alt={`${item.avatar.name} Avatar`}
                />
                <div className="info">
                  <div className='name'>{item.avatar.name}</div>
                  <div className='location'>{item.avatar.location}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="carousel-arrows flex justify-between lg:hidden">
          <button
            ref={leftArrowBtnRef}
            className="left-arrow-btn"
            disabled={isDisabled.leftArrowBtn}
            onClick={() => carouselRef.current.previous()}
          >
            {!isDisabled.leftArrowBtn ?
              <ArrowActive className="left-arrow-active rotate-180"/> :
              <ArrowDisabled className="left-arrow-disabled "/>
            }
          </button>
          <button
            ref={rightArrowBtnRef}
            className="right-arrow-btn"
            disabled={isDisabled.rightArrowBtn}
            onClick={() => carouselRef.current.next()}
          >
            {!isDisabled.rightArrowBtn ?
              <ArrowActive className="right-arrow-active"/> :
              <ArrowDisabled className="right-arrow-disabled rotate-180"/>
            }
          </button>
        </div>
      </div>
    </section>
  );
}