import React from "react"
import Carousel from "./Carousel/Carousel"
import logo1 from "./logos/1.png"
import logo2 from "./logos/2.png"
import logo3 from "./logos/3.png"
import logo4 from "./logos/4.png"
import logo5 from "./logos/5.png"
import logo6 from "./logos/6.png"
import logo7 from "./logos/7.png"
import logo8 from "./logos/8.png"
import logo9 from "./logos/9.png"
import logo10 from "./logos/10.png"
import logo11 from "./logos/11.png"
import logo12 from "./logos/12.png"
import logo13 from "./logos/13.png"
import logo14 from "./logos/14.png"
import logo15 from "./logos/15.png"
import logo16 from "./logos/16.png"
import logo17 from "./logos/17.png"
import logo18 from "./logos/18.png"
import logo19 from "./logos/19.png"
import logo20 from "./logos/20.png"
import logo21 from "./logos/21.png"
import logo22 from "./logos/22.png"
import logo23 from "./logos/23.png"
import logo24 from "./logos/24.png"
import logo25 from "./logos/25.png"
import logo26 from "./logos/26.png"
import logo27 from "./logos/27.png"
import "./Carousel/Carousel.css"
const Clients = () => {
  return (
    <section className="flex justify-center items-center flex-col mt-36 mb-20 text-white">
      <h2 className="uppercase font-title font-bold text-xs mb-10">
        Some clients
      </h2>
      <div
        className="flex justify-around items-center h-full w-11/12"
        data-sal="zoom-in"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
      >
        <Carousel show={4} infiniteLoop withIndicator>
          <h2 data-testid="carousel-item-1">
            <img src={logo1} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo2} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo3} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo7} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo8} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo9} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo10} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo11} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo12} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo4} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo5} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo6} alt="logo" className="w-32 imageBlack" />
          </h2>

          <h2 data-testid="carousel-item-1">
            <img src={logo13} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo14} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo15} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo16} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo17} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo18} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo19} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo20} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo21} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo22} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo23} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo24} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-1">
            <img src={logo25} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-2">
            <img src={logo26} alt="logo" className="w-32 imageBlack" />
          </h2>
          <h2 data-testid="carousel-item-3">
            <img src={logo27} alt="logo" className="w-32 imageBlack" />
          </h2>
        </Carousel>
      </div>
    </section>
  )
}
export default Clients
