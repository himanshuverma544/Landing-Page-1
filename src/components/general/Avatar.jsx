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
      <img className="size-full rounded-[50%] object-cover" src={src} alt={alt}/>
    </div>
  );
}

export default Avatar;