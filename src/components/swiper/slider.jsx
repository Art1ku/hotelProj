import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data.json"

export default function MainSlider() {
  return (
    <>
      <DemoSlider data={dataSlider} />
    </>
  );
}
