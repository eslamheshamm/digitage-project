import React from "react"
import { useForm } from "react-hook-form"

const FormInputs = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between font-body"
      autoComplete="off"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        name="email"
        type="email"
        placeholder="Your email address"
        ref={register({ required: true })}
        className="p-8 border rounded-2xl mb-5 focus:ring-1 focus:ring-primary focus:outline-none"
      />

      <input
        name="name"
        type="text"
        placeholder="Your name / company’s name"
        className="p-8 border rounded-2xl mb-5 focus:ring-1 focus:ring-primary focus:outline-none"
        ref={register({ required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      <textarea
        placeholder="Your message"
        name="message"
        ref={register({ required: true, max: 200, min: 15 })}
        className="resize-none border rounded-2xl h-72 p-8 mb-8 focus:ring-1 focus:ring-primary focus:outline-none"
      />
      {errors.email && <span>This field is required</span>}

      <button
        type="submit"
        className="self-end py-5 px-20 rounded-2xl bg-primary font-semibold text-lg"
      >
        Sent
      </button>
    </form>
  )
}
export default FormInputs
