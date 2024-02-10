import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div id="about" className="md:hero md:hero-content md:pr-12 gap-2 my-2 px-2 md:my-12">
      <div className="">
        <div className="relative">
          <img
            src={person}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="3000"
            className="md:w-3/4 w-full shadow-2xl rounded-lg"
            alt=""
          />
          <img
            src={parts}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="3000"
            className="md:w-1/2 w-full hidden md:block absolute top-1/2 right-5 shadow-2xl border-8 border-white rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div
        className="space-y-3"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="3000"
      >
        <h1 className="text-[#FF3811] text-xl font-bold">About Us</h1>
        <h1 className="text-xl md:text-4xl font-bold">
          We are qualified & of experience in this field
        </h1>
        <h1 className="text-base font-normal text-[#737373] text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or words which do not look even slightly believable.{" "}
        </h1>
        <h1 className="text-base font-normal text-[#737373] text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or words which do not look even slightly believable.{" "}
        </h1>
        <button
          className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white"
          data-aos="fade-up-left"
          data-aos-delay="50"
          data-aos-duration="3000"
        >
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
