
import Header from "./components/header";
import MainSlider from "./components/swiper/slider";
import Products from "./components/features/products/Products"

export default function Home() {


  return (
   <>
      <Header />
      <MainSlider />
      <Products />

      <div style={{height: '1000px'}}>
          
      </div>   
   </>
  );
}
