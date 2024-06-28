import Carousel from 'react-multi-carousel';

import Avatar from "../sub-components/Avatar";

import Client1 from "../../../assets/testimonials/client1.jpg";
import Client2 from "../../../assets/testimonials/client2.png";
import Client3 from "../../../assets/testimonials/client3.jpg";
import Client4 from "../../../assets/testimonials/client4.png";
import Client5 from "../../../assets/testimonials/client5.jpeg";
import Client6 from "../../../assets/testimonials/client6.jpeg";
import Client7 from "../../../assets/testimonials/client7.jpg";


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


export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section className="testimonials flex flex-col items-center pb-10 mb-10">
      <h1 className="text-5xl font-bold">
        Testimonials
      </h1>

      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container w-[95vw] h-80"
      >
        {data.map(item => (
          <div 
            key={item.id} 
            className="flex flex-col justify-center items-center gap-5 p-5 mx-5 border rounded-lg"
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
    </section>
  );
}
