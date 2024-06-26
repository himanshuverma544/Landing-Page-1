export default function Brand({ className = '', icon }) {
  return (
    <div className={`brand ${className} w-[120px] h-[120px] flex justify-center items-center rounded-[50%] bg-[#091314]`}>
      {icon}
    </div>
  );
}