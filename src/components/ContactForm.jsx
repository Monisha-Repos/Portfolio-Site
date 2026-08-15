import { useForm, ValidationError } from '@formspree/react'
import socials from '../data/socials.js'

function ContactForm() {
    const [state, handleSubmit] = useForm('xgawlazz')

    if (state.succeeded) {
        return (
            <div className="contact-form contact-success" data-reveal role="status">
                <div className="success-badge" aria-hidden="true">✓</div>
                <h3>Message sent — thank you!</h3>
                <p>
                    I&apos;ll get back to you as soon as I can. In the meantime,
                    feel free to connect with me on{' '}
                    <a href={socials.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    .
                </p>
            </div>
        )
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} data-reveal noValidate>
            <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input
                    id="cf-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                />
            </div>

            <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input
                    id="cf-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="field-error"
                />
            </div>

            <fieldset className="chip-field">
                <legend>What&apos;s this about? <span className="optional">(optional)</span></legend>
                <div className="chips">
                    {['Internship', 'Collaboration', 'Just saying hi'].map((opt) => (
                        <label className="chip" key={opt}>
                            <input type="radio" name="topic" value={opt} />
                            <span>{opt}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                    id="cf-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a little about it…"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="field-error"
                />
            </div>

            {/* Give the received email a clear subject line */}
            <input type="hidden" name="_subject" value="New message from your portfolio site" />

            {/* Honeypot — hidden from humans, bots that fill it are dropped */}
            <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hp-field"
            />

            <ValidationError errors={state.errors} className="field-error form-error" />

            <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send message'}
            </button>
        </form>
    )
}

export default ContactForm
