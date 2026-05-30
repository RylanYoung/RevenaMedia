'use client'

import { useState, FormEvent } from 'react'

interface FormFields {
  firstName: string
  businessName: string
  email: string
  phone: string
  trade: string
}

interface FormErrors {
  firstName?: string
  businessName?: string
  email?: string
  phone?: string
  trade?: string
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}
  if (!fields.firstName.trim()) errors.firstName = 'First name is required'
  if (!fields.businessName.trim()) errors.businessName = 'Business name is required'
  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!fields.phone.trim()) errors.phone = 'Phone number is required'
  if (!fields.trade) errors.trade = 'Please select your trade'
  return errors
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    firstName: '',
    businessName: '',
    email: '',
    phone: '',
    trade: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="chk" aria-hidden="true">✓</div>
        <h3>You&apos;re booked in</h3>
        <p>We&apos;ll call you shortly to lock in your live demo. Keep your phone close.</p>
      </div>
    )
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit} noValidate aria-label="Book a free demo">
      <div className="ft">Book your free demo</div>
      <div className="fsub">15 minutes · live build · zero pressure</div>

      <div className="field">
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Dave"
          value={fields.firstName}
          onChange={handleChange}
          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          aria-invalid={!!errors.firstName}
          className={errors.firstName ? 'error' : ''}
          autoComplete="given-name"
        />
        {errors.firstName && (
          <div id="firstName-error" className="field-error" role="alert">
            {errors.firstName}
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor="businessName">Business name</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          placeholder="Dave's Electrical"
          value={fields.businessName}
          onChange={handleChange}
          aria-describedby={errors.businessName ? 'businessName-error' : undefined}
          aria-invalid={!!errors.businessName}
          className={errors.businessName ? 'error' : ''}
          autoComplete="organization"
        />
        {errors.businessName && (
          <div id="businessName-error" className="field-error" role="alert">
            {errors.businessName}
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="dave@daveselectrical.com.au"
          value={fields.email}
          onChange={handleChange}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          className={errors.email ? 'error' : ''}
          autoComplete="email"
          inputMode="email"
        />
        {errors.email && (
          <div id="email-error" className="field-error" role="alert">
            {errors.email}
          </div>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0400 000 000"
          value={fields.phone}
          onChange={handleChange}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          aria-invalid={!!errors.phone}
          className={errors.phone ? 'error' : ''}
          autoComplete="tel"
          inputMode="tel"
        />
        {errors.phone && (
          <div id="phone-error" className="field-error" role="alert">
            {errors.phone}
          </div>
        )}
      </div>

      <div className="field select-wrap">
        <label htmlFor="trade">What&apos;s your industry?</label>
        <select
          id="trade"
          name="trade"
          value={fields.trade}
          onChange={handleChange}
          aria-describedby={errors.trade ? 'trade-error' : undefined}
          aria-invalid={!!errors.trade}
          className={errors.trade ? 'error' : ''}
        >
          <option value="" disabled>Select your industry</option>
          <option value="dental">Dental / Clinic</option>
          <option value="medical">Medical / Allied Health</option>
          <option value="legal">Legal</option>
          <option value="realestate">Real Estate</option>
          <option value="trades">Trade Business</option>
          <option value="other">Other</option>
        </select>
        {errors.trade && (
          <div id="trade-error" className="field-error" role="alert">
            {errors.trade}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-purple btn-block btn-lg"
        style={{ marginTop: '6px' }}
      >
        Book my free demo
      </button>

      <div className="form-footnote">We&apos;ll call you back within one business hour.</div>
    </form>
  )
}
