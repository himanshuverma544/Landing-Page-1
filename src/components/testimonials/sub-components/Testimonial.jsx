import Avatar from './Avatar';


export default function Testimonial({ testimonial, highlightItem }) {

  return (
    <div 
      className={`
        flex flex-col justify-center items-center gap-5
        p-5 border rounded-lg 
        transition-all duration-500 ease-in
        ${highlightItem == (testimonial.id - 1) ? "lg:py-10 xl:py-12" : ""}
      `}
      data-id={testimonial.id - 1}
    >
      <p className='text-center'>
        {testimonial.text}
      </p>
      <div className="avatar-details flex gap-5">
        <Avatar
          src={testimonial.avatar.profilePic}
          alt={`${testimonial.avatar.name} Avatar`}
        />
        <div className="info">
          <div className='name'>
            {testimonial.avatar.name}
          </div>
          <div className='location'>
            {testimonial.avatar.location}
          </div>
        </div>
      </div>
    </div>
  );
}