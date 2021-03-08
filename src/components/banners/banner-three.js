import React from "react"
import eslamhesham from "../../eslamhesham.jpg"
import child from "../../images/child.png"
import car from "../../images/car.png"
import horse from "../../images/horse.png"

const BannerThree = () => {
  const companyProfile =
    "https://drive.google.com/u/0/uc?id=1K0KZJ8taqEbifGABAUZX4gqMwMM18mZP&export=download"
  const button = {
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 3.11%, rgba(248, 228, 255, 0) 114.83%)",
    boxShadow: "0px 4px 70px 0px #000000 30%",
    border: "1px solid #FFFFFF 10%",
  }
  return (
    <section className="flex flex-col items-center w-full my-16 ">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
          <img src={child} alt="Child" className="imageBlack" />
        </figure>
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="200" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
          <img src={car} alt="car" className="imageBlack" />
        </figure>
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
          <img src={horse} alt="horse" className="imageBlack" />
        </figure>
      </div>
      <button className=" bg-primary py-6 px-4 text-sm md:text-base md:py-6 md:px-10 uppercase tracking-wider  md:tracking-widest shadow-xl font-semibold rounded-xl mt-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
        <a href={companyProfile} download>
          OUR company profile
        </a>
      </button>
    </section>
  )
}

export default BannerThree
