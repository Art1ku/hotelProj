import { React } from 'react';
import { useSwiper } from 'swiper/react';


export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className='.swiper-button-next z-10 absolute right-0 top-[35%] w-[150px] h-[150px] ' onClick={() => swiper.slideNext()}>
      <img className='h-[150px] w-[150px] rotate-180' src='/arrow/arrow.svg'></img>
    </button>
  );
}