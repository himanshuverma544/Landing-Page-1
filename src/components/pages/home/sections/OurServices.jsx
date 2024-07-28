import OurVisionImage from "../../../../assets/pages/home/sections/our-services/our-vision.jpg";
import OurMissionImage from "../../../../assets/pages/home/sections/our-services/our-mission.jpg";
import ValueImage from "../../../../assets/pages/home/sections/our-services/value.jpg";

  const data = [
    { 
      id: 1,
      heading: "Our Vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur.",
      image: OurVisionImage
    },
    {
      id: 2,
      heading: "Our Mission",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur.",
      image: OurMissionImage
    },
    {
      id: 3,
      heading: "Value",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur.",
      image: ValueImage
    }
  ];

export default function OurServices() {

  return (
    <section className="our-services flex flex-col items-center gap-12 py-10 my-10 lg:px-20 lg:mx-20">
      <div className="heading-text flex flex-col gap-5 px-7">
        <h1 className="text-xs font-bold uppercase md:text-center">
          Our Services
        </h1>
        <h2 className="text-5xl font-bold md:text-center">
          Vision, Mission, Value
        </h2>
      </div>

      <div className="content-items w-full flex flex-col md:gap-1">
        {data.map(item => (
          <div key={item.id} className="img-cont relative h-[27rem]">
            <img
              className="w-full h-full object-cover"
              src={item.image} 
              alt={item.heading}
            />
            <div
              className="w-4/5 flex flex-col items-center gap-5 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-11 bg-white backdrop-blur bg-opacity-20 text-white"
            >
              <h3 className="text-4xl font-bold underline">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
