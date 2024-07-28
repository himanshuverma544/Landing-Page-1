import AboutImage from "../../../../assets/pages/home/sections/about/about.png";


export default function About() {

  return (
    <section className="about flex flex-col gap-5 px-7 py-10 md:px-20">

      <div className="flex flex-col md md:flex-row gap-10 ">
        <h2 className="text-5xl font-bold md:w-1/2"> 
          About PCSS: where excellence meets innovation
        </h2>

        <div className="flex flex-col items-start gap-5 md:w-1/2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur.</p>
          <button>
            Learn More
          </button>
        </div>
      </div>

      <img
        className="h-[60vw] max-h-[250px] border-2 rounded-[2rem] lg:h-[30vw] lg:max-h-[400px] border-black"
        src={AboutImage}
        alt="Hero Image"
      />
    </section>
  );
}
