import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full md:h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl " />
          <div className="absolute h-full rounded-xl flex items-center justify-between bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-6 p-12">
              <h1 className="text-xl md:text-5xl font-bold text-white">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="text-sm md:text-lg font-normal text-white">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-5 text-lg font-semibold">
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Discover More
                </button>
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Latest Service
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-3">
            <a
              href="#slide6"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl " />
          <div className="absolute h-full rounded-xl flex items-center justify-between bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-6 p-12">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-5 text-lg font-semibold">
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Discover More
                </button>
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-3">
            <a
              href="#slide1"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl " />
          <div className="absolute h-full rounded-xl flex items-center justify-between bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-6 p-12">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-5 text-lg font-semibold">
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Discover More
                </button>
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-3">
            <a
              href="#slide2"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl " />
          <div className="absolute h-full rounded-xl flex items-center justify-between bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-6 p-12">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-5 text-lg font-semibold">
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Discover More
                </button>
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-3">
            <a
              href="#slide3"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl " />
          <div className="absolute h-full rounded-xl flex items-center justify-between bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-6 p-12">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-5 text-lg font-semibold">
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Discover More
                </button>
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-3">
            <a
              href="#slide4"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl " />
          <div className="absolute h-full rounded-xl flex items-center justify-between bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-6 p-12">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For <br /> Car Servicing
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div className="flex items-center gap-5 text-lg font-semibold">
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Discover More
                </button>
                <button className="md:btn btn-sm p-2 btn-outline md:btn-outline md:transform md:duration-1000 hover:bg-[#ff3811] md:text-white  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-3">
            <a
              href="#slide5"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-outline bg-[#FFFFFF33] border-none hover:bg-[#FF3811] "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
