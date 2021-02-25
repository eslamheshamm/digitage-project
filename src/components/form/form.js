import React from "react"
import { useForm } from "react-hook-form"

const FormInputs = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between font-body py-2"
      autoComplete="off"
      id="form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <label className="mb-5">
        <input
          name="email"
          type="email"
          placeholder="Your email address"
          ref={register({ required: true })}
          className="p-8 border rounded-2xl focus:ring-1 focus:ring-primary focus:outline-none block w-full"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label className="mb-5 w-full">
        <input
          name="name"
          type="text"
          placeholder="Your name / company’s name"
          className="p-8 border rounded-2xl focus:ring-1 focus:ring-primary focus:outline-none block w-full"
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label className="w-full mb-8">
        <textarea
          placeholder="Your message"
          name="message"
          ref={register({ required: true, minLength: 15, maxLength: 150 })}
          className="resize-none border rounded-2xl h-72 p-8  focus:ring-1 focus:ring-primary focus:outline-none w-full block"
        />
        {errors.message?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.message?.type === "minLength" && (
          <span>required to be more than 15 character</span>
        )}
        {errors.message?.type === "maxLength" && (
          <span>Should be less than 150 character </span>
        )}

        {/* {errors.message && <span>This field is required</span>} */}
      </label>
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
