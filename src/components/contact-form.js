import * as React from "react"
import { useForm, ValidationError } from "@formspree/react"

import { form, fieldErrors, formErrors } from "./contact-form.module.css"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdojygpa") // formspree formId this is free account so you will not permitted to upload files

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <form className={form} onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <ValidationError
        className={fieldErrors}
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError
        className={fieldErrors}
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="attachment">File upload</label>
      <input id="attachment" type="file" name="attachment" />
      <ValidationError
        className={fieldErrors}
        prefix="attachment"
        field="attachment"
        errors={state.errors}
      />
      <label htmlFor="comment">Comment</label>
      <textarea id="comment" name="comment" />
      <ValidationError
        className={fieldErrors}
        prefix="Comment"
        field="comment"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError className={formErrors} errors={state.errors} />
    </form>
  )
}
