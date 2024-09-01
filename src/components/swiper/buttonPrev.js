import { React } from 'react';
import { useSwiper } from 'swiper/react';


export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className='.swiper-button-prev z-10 absolute top-[38.5%] left-0 w-[150px] h-[150px]  ' onClick={() => swiper.slidePrev()}>
      <img className='h-[150px] w-[150px]' src='/arrow/arrow.svg'></img>
    </button>
  );
}