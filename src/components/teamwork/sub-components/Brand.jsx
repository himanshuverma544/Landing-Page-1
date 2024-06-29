export default function Brand({ className = '', icon }) {
  return (
    <div className={`brand ${className} w-[100px] h-[100px] md:w-[10%] md:h-[10%] flex justify-center items-center rounded-[50%] bg-[#091314]`}>
      {icon}
    </div>
  );
}