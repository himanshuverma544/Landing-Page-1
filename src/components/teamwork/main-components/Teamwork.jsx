import Teammate from "../sub-components/Teammate";
import Brand from "../sub-components/Brand";

import Figma from "../../../assets/teamwork/brands/figma.svg?react";
import Linear from "../../../assets/teamwork/brands/linear.svg?react"
import Loom from "../../../assets/teamwork/brands/loom.svg?react";
import Doordash from "../../../assets/teamwork/brands/doordash.svg?react";

import Teammate1 from "../../../assets/teamwork/teammates/teammate1.svg";
import Teammate2 from "../../../assets/teamwork/teammates/teammate2.svg";
import Teammate3 from "../../../assets/teamwork/teammates/teammate3.svg";
import Teammate4 from "../../../assets/teamwork/teammates/teammate4.svg";
import Teammate5 from "../../../assets/teamwork/teammates/teammate5.svg";
import Teammate6 from "../../../assets/teamwork/teammates/teammate6.svg";


export default function Teamwork() {

  return (
    <section className="teamwork flex flex-col gap-5 px-20 py-10">
      <h1 className="text-5xl uppercase">
        High Voltage Teamwork
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna. Nullam venenatis arcu nec odio luctus, non laoreet erat consectetur. Proin quis augue sapien. Vestibulum non dapibus magna, non posuere nunc. Nullam at ligula lacus. Pellentesque et lacus vitae mi gravida consectetur.
      </p>

      <div className="brands-and-teammates h-[1200px] px-20 relative">
        <Brand icon={<Figma/>}/>
        <Brand icon={<Linear/>}/>
        <Brand icon={<Loom/>}/>
        <Brand icon={<Doordash/>}/>
        
        <Teammate
          className="absolute top-[5%] right-[61%]"
          name="Shivam Sharma"
          designation="CEO of PCSS"
          avatar={Teammate1}
        />
        <Teammate
          className="absolute top-[22%] right-[32%]"
          name="Shivam Sharma"
          designation="CEO of PCSS"
          avatar={Teammate2}
        />
        <Teammate
          className="absolute top-[5%] right-[6%] z-10"
          name="Shivam Sharma"
          designation="CEO of PCSS"
          avatar={Teammate3}
        />
        <Teammate
          className="absolute top-[43%] right-[58%]"
          name="Shivam Sharma"
          designation="CEO of PCSS"
          avatar={Teammate4}
        />
        <Teammate
          className="absolute top-[62%] right-[31%] z-10"
          name="Shivam Sharma"
          designation="CEO of PCSS"
          avatar={Teammate5}
        />
        <Teammate
          className="absolute top-[43%] right-[6%]"
          name="Shivam Sharma"
          designation="CEO of PCSS"
          avatar={Teammate6}
        />
      </div>


    </section>
  );
}
