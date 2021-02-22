import React from "react"
import FormInputs from "./form"
import Phone from "./assets/phone.svg"
import Email from "./assets/email.svg"
import Gps from "./assets/gps.svg"
const Form = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-60 mb-20">
      <div>
        <h1 className="text-4xl font-header font-bold ">
          Let us handle your <br /> project, professionally.
        </h1>
        <p className="mt-8 mb-10 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          tortor, malesuada magna volutpat pulvinar.
        </p>
        <div className="my-9">
          <div className="flex items-center mb-8">
            <Phone className="mr-5 " />
            <div>+20 155 535 4072</div>
          </div>
          <div className="flex items-center mb-8">
            <Email className="mr-5" />
            <div>info@digitagestudio.com</div>
          </div>{" "}
          <div className="flex items-cente ">
            <Gps className="mr-5" />
            <div>20 Samir Abd El-Raouf St. Nasr City, Cairo, Egypt.</div>
          </div>
        </div>
      </div>
      <div className=" lg:col-start-2 lg:col-end-4">
        <FormInputs />
      </div>
    </section>
  )
}

export default Form
