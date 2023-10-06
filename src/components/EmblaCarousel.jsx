import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";

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
            src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="absolute">
            <h1 className="text-center ">Fashionsta</h1>
            <p className="text-center">Yout fashion brand</p>
          </div>
        </div>
        <div className="embla__slide relative flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/671217220/photo/clothes-hang-on-clothing-rack.jpg?b=1&s=612x612&w=0&k=20&c=CV3UxN3sIUD37QTlnZsnACSdntpkvwNXTRizzX25kdw="
            alt=""
          />
          <div className="absolute">
            <h1 className="text-center">Fashionsta</h1>
            <p className="text-center">Yout fashion brand</p>
          </div>
        </div>
        <div className="embla__slide relative flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="absolute">
            <h1 className="text-center text-[150px]">Fashionsta</h1>
            <p className="text-center text-[50px]">Yout fashion brand</p>
          </div>
        </div>
      </div>
      <button
        className="embla__prev absolute top-[50%] w-[30px] h-[60px] bg-[#DDDCDB]"
        onClick={scrollPrev}
      >
        <GrFormPrevious size={20} />
      </button>
      <button
        className="embla__next absolute top-[50%] right-[0] w-[30px] h-[60px] bg-[#DDDCDB]"
        onClick={scrollNext}
      >
        <IoChevronForwardOutline />
      </button>
    </div>
  );
};
