import HaveProjectImage from "../../../assets/have-project/have-project.png";

export default function HaveProject() {
  return (
    <section className={`have-project h-[30rem] flex items-center px-20`} style={{backgroundImage: `url(${HaveProjectImage})`}}>
      <div className="w-2/5 text-5xl mt-32">
        Have a Project in Mind
      </div>
      <div className="w-4/5 flex justify-end mt-28">
        <button>
          Let's Chat
        </button>
      </div>
    </section>
  );
}
