const Avatar = ({ className = "avatar", src, alt, size = 50, onClick}) => {

  return (
    <div
      className={`${className}`}
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
    >
      <img className="rounded-[50%] w-full h-full object-cover" src={src} alt={alt}/>
    </div>
  );
}

export default Avatar;