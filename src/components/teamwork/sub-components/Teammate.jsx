export default function Teammate({ className, name, designation, avatar }) {
  return (
    <div className={`teammate ${className} w-full flex flex-col items-center rounded-[50%] bg-[#091314] text-white md:w-[31vw] md:h-[31vw]`}>
      <div className="name font-bold text-xs mt-8">
        {name}
      </div>
      <div className="designation uppercase font-bold">
        {designation}
      </div>
      <div className="avatar w-[90%] md:w-[27vw] md:h-[30vw] xl:mt-10 2xl:mt-16">
        <img className="rounded-[50%] w-full h-full object-cover" src={avatar} alt={`${name} Avatar`}/>
      </div>
    </div>
  );
}
