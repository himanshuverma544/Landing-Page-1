import OurVisionImage from "../../../assets/our-services/our-vision.jpg";
import OurMissionImage from "../../../assets/our-services/our-mission.jpg";
import ValueImage from "../../../assets/our-services/value.jpg";

  const data = [
    { 
      id: 1,
      heading: "Our Vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur. Proin quis augue sapien. Vestibulum non dapibus magna, non posuere nunc. Nullam at ligula lacus. Pellentesque et lacus vitae mi gravida consectetur.",
      image: OurVisionImage
    },
    {
      id: 2,
      heading: "Our Mission",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur. Proin quis augue sapien. Vestibulum non dapibus magna, non posuere nunc. Nullam at ligula lacus. Pellentesque et lacus vitae mi gravida consectetur.",
      image: OurMissionImage
    },
    {
      id: 3,
      heading: "Value",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur. Proin quis augue sapien. Vestibulum non dapibus magna, non posuere nunc. Nullam at ligula lacus. Pellentesque et lacus vitae mi gravida consectetur.",
      image: ValueImage
    }
  ];

export default function OurServices() {

  return (
    <section className="our-services flex flex-col items-center gap-16 px-40 py-10 my-10">
      <div className="heading-text text-center">
        <h1 className="text-xs font-bold">
          OUR SERVICES
        </h1>
        <h2 className="text-5xl font-bold">
          Vision, Mission, Value
        </h2>
      </div>

      <div className="content-items w-full flex flex-col gap-5">
        {data.map(item => (
          <div
            key={item.id}
            className="img-cont w-full h-[500px] relative"
          >
            <img
              className="w-full h-full object-cover"
              src={item.image} 
              alt={item.heading}
            />
            <div className="w-3/5 flex flex-col items-center gap-5 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-11 bg-white backdrop-blur bg-opacity-20 text-white">
              <h3 className="text-4xl font-bold underline">{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
