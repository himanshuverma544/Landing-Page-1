export default function Teammate({ className, name, designation, avatar }) {
  return (
    <div className={`teammate ${className} w-1/3 flex flex-col items-center rounded-[50%] bg-[#091314] text-white`}>
      <div className="name font-bold text-xs mt-8">
        {name}
      </div>
      <div className="designation uppercase font-bold">
        {designation}
      </div>
      <div className="avatar w-11/12">
        <img className="rounded-[50%]" src={avatar} alt={`${name} Avatar`}/>
      </div>
    </div>
  )
}
