import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronForwardOutline, IoChevronBackSharp } from "react-icons/io5";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla z-0 relative" ref={emblaRef}>
      <div className="embla__container text-white">
        <div className="embla__slide relative flex items-center justify-center">
          <img
          className="object-cover"  
            src="https://images.pexels.com/photos/5864264/pexels-photo-5864264.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="absolute">
            <h1 className="text-center text-[50px] font-bold md:text-[80px] lg:text-[120px]">
              FASHIONISTA
            </h1>
            <p className="text-center text-xl md:text-2xl lg:text-3xl">
              Yout fashion brand
            </p>
          </div>
        </div>
        <div className="embla__slide relative flex items-center justify-center">
          <img
          // className="object-cover"
            src="https://media.istockphoto.com/id/671217220/photo/clothes-hang-on-clothing-rack.jpg?b=1&s=612x612&w=0&k=20&c=CV3UxN3sIUD37QTlnZsnACSdntpkvwNXTRizzX25kdw="
            alt=""
          />
          <div className="absolute">
            <h1 className="text-center text-[50px] font-bold md:text-[80px] lg:text-[120px]">
              FASHIONISTA
            </h1>
            <p className="text-center text-xl md:text-2xl lg:text-3xl">
              Yout fashion brand
            </p>
          </div>
        </div>
        <div className="embla__slide relative flex items-center justify-center">
          <img
          // className="object-cover"
            src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="absolute">
            <h1 className="text-center text-[50px] font-bold md:text-[80px] lg:text-[120px]">
              FASHIONISTA
            </h1>
            <p className="text-center text-xl md:text-2xl lg:text-3xl">
              Yout fashion brand
            </p>
          </div>
        </div>
      </div>
      <button
        className="embla__prev absolute top-[50%] w-[35px] h-[50px] bg-[#DDDCDB] pl-[5px] hover:bg-[#310000] hover:text-[#FE5F38]"
        onClick={scrollPrev}
      >
        <IoChevronBackSharp size={20} />
      </button>
      <button
        className="embla__next absolute top-[50%] right-[0] w-[35px] h-[50px] bg-[#DDDCDB] pl-[10px] hover:bg-[#310000] hover:text-[#FE5F38]"
        onClick={scrollNext}
      >
        <IoChevronForwardOutline />
      </button>
    </div>
  );
};

// 310000
// FE5F38
