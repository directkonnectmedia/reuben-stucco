import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Reuben Stucco</title>
          <meta property="og:title" content="Reuben Stucco" />
          <link
            rel="canonical"
            href="https://reuben-stucco.vercel.app/"
          />
          <meta
            property="og:url"
            content="https://reuben-stucco.vercel.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section id="hero" className="hero-carousel">
          <div className="hero-carousel__slides">
            <div className="hero-carousel__slide active">
              <img
                src="/images/hero.webp"
                alt="Arizona stucco home with desert landscape"
                className="hero-carousel__image"
              />
            </div>
          </div>
          <div className="hero-carousel__overlay"></div>
          <div className="hero-carousel__content">
            <h1 className="hero-title">
              <span>
                {' '}
                Timeless Stucco.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                {' '}
                Built for the Arizona Sun.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p className="hero-subtitle">
              Family-owned craftsmanship by Carlos — serving Phoenix and the
              Valley of the Sun.
            </p>
            <a href="#contact">
              <div className="btn btn-primary btn-lg">
                <span>Get Your Free Quote</span>
              </div>
            </a>
          </div>
        </section>
        <section id="why-us" className="why-us">
          <div className="why-us__container">
            <span className="section-eyebrow">The Craft</span>
            <h2 className="section-title">Why Choose Us</h2>
            <div className="why-us__divider"></div>
            <p className="why-us__intro section-content">
              For over two decades, Carlos has built his reputation one home at
              a time. Every project that bears the Reuben Stucco name carries his
              personal attention — from the first handshake to the final
              touch-up. We don&apos;t subcontract our craft, and we don&apos;t
              cut corners. We simply do stucco the way it should be done: with
              patience, pride, and an eye for the kind of detail you can only
              see up close.
            </p>
            <div className="why-us__grid">
              <div className="why-us__card">
                <div className="why-us__image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                    alt="Craftsman applying stucco by hand"
                    className="why-us__image"
                  />
                </div>
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m14.42 9.058l-5.362 5.363a1.978 1.978 0 0 1-3.275-.773L3.101 5.604a1.978 1.978 0 0 1 2.502-2.502l8.045 2.682a1.978 1.978 0 0 1 .773 3.274M10 10l6.5 6.5m2.847.075l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772"></path>
                  </svg>
                </div>
                <h3 className="why-us__card-title">Master Craftsmanship</h3>
                <p className="why-us__card-text">
                  Decades of hands-on experience. Carlos runs every job
                  himself — no subcontractors, no shortcuts.
                </p>
              </div>
              <div className="why-us__card">
                <div className="why-us__image-wrap">
                  <img
                    src="/images/premium-materials.webp"
                    alt="Close-up of premium stucco texture"
                    className="why-us__image"
                  />
                </div>
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="why-us__card-title">Premium Materials</h3>
                <p className="why-us__card-text">
                  Top-grade stucco built to handle Arizona sun, heat, and
                  monsoon storms — inside and out.
                </p>
              </div>
              <div className="why-us__card">
                <div className="why-us__image-wrap">
                  <img
                    src="https://images.pexels.com/photos/36198193/pexels-photo-36198193.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Mediterranean Arizona stucco home with red tile roof"
                    className="why-us__image"
                  />
                </div>
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="why-us__card-title">
                  Beautiful, Lasting Finishes
                </h3>
                <p className="why-us__card-text">
                  Hand-crafted textures from smooth Santa Fe to classic
                  Spanish lace — built to hold their beauty for decades.
                </p>
              </div>
              <div className="why-us__card">
                <div className="why-us__image-wrap">
                  <img
                    src="/images/best-value.webp"
                    alt="Honest value and fair pricing for Arizona stucco work"
                    className="why-us__image"
                  />
                </div>
                <div className="why-us__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                      <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                      <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="why-us__card-title">Best Value in the Valley</h3>
                <p className="why-us__card-text">
                  Honest pricing. Clear timelines. No hidden fees — just
                  premium work at a fair price.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="gallery__container">
            <span className="section-eyebrow">Recent Projects</span>
            <h2 className="section-title">Our Work</h2>
            <div className="why-us__divider"></div>
            <p className="gallery__subtitle">
              A selection of recent projects from across the Phoenix Valley.
            </p>
            <div className="gallery__grid">
              <div className="gallery__card">
                <img
                  src="https://images.pexels.com/photos/19168388/pexels-photo-19168388.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Custom desert stucco villa with cacti and palms"
                  className="gallery__image"
                />
                <div className="gallery__caption">
                  <span className="gallery__project">Custom Desert Villa</span>
                  <span className="gallery__location">Scottsdale, AZ</span>
                </div>
              </div>
              <div className="gallery__card">
                <img
                  src="/images/modern-desert-contemporary.webp"
                  alt="Modern desert contemporary stucco home"
                  className="gallery__image"
                />
                <div className="gallery__caption">
                  <span className="gallery__project">
                    Modern Desert Contemporary
                  </span>
                  <span className="gallery__location">Paradise Valley, AZ</span>
                </div>
              </div>
              <div className="gallery__card">
                <img
                  src="https://images.pexels.com/photos/5223143/pexels-photo-5223143.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Spanish revival stucco home with terracotta tile roof"
                  className="gallery__image"
                />
                <div className="gallery__caption">
                  <span className="gallery__project">
                    Spanish Revival Restoration
                  </span>
                  <span className="gallery__location">Arcadia, Phoenix</span>
                </div>
              </div>
              <div className="gallery__card">
                <img
                  src="https://images.pexels.com/photos/36198193/pexels-photo-36198193.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Luxury Mediterranean stucco home with red tile roof"
                  className="gallery__image"
                />
                <div className="gallery__caption">
                  <span className="gallery__project">
                    Luxury Mediterranean Refresh
                  </span>
                  <span className="gallery__location">Chandler, AZ</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact__container">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Let&apos;s Talk About Your Home</h2>
            <p className="contact__intro">
              No pressure, no hard sell — just a friendly conversation. Share as
              much or as little as you&apos;d like, and Carlos will reach out
              personally when it works for you. Every question is optional, and
              you can skip any step along the way.
            </p>
            <div className="wizard-card">
              <div className="wizard-card__progress">
                <span className="wizard-card__dot active"></span>
                <span className="wizard-card__dot"></span>
                <span className="wizard-card__dot"></span>
                <span className="wizard-card__dot"></span>
              </div>
              <div id="wizardSteps" className="wizard-card__steps">
                <div data-step="1" className="wizard-step active">
                  <span className="wizard-step__label">A quick hello</span>
                  <h3 className="wizard-step__question">
                    What&apos;s your timing looking like?
                  </h3>
                  <p className="wizard-step__helper">
                    There&apos;s no wrong answer — we&apos;re happy to chat
                    whether you&apos;re ready to go or just curious.
                  </p>
                  <div className="wizard-step__pills">
                    <button data-value="ASAP" className="wizard-pill">
                      Ready to start
                    </button>
                    <button data-value="Within 1 month" className="wizard-pill">
                      Sometime soon
                    </button>
                    <button data-value="1-3 months" className="wizard-pill">
                      Planning ahead
                    </button>
                    <button data-value="Exploring" className="wizard-pill">
                      Just exploring
                    </button>
                  </div>
                  <div className="wizard-step__nav">
                    <div className="wizard-step__nav-right">
                      <button className="wizard-skip btn btn-link">
                        Skip for now
                      </button>
                      <button className="wizard-next btn btn-primary btn-lg">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                <div data-step="2" className="wizard-step">
                  <span className="wizard-step__label">A little about your home</span>
                  <h3 className="wizard-step__question">
                    Tell us a bit about your place
                  </h3>
                  <p className="wizard-step__helper">
                    Don&apos;t worry about being exact — a rough idea is plenty.
                    Carlos will confirm everything when he visits.
                  </p>
                  <div className="wizard-step__inputs">
                    <div className="form-group">
                      <label htmlFor="sqft">Approximate square footage</label>
                      <input
                        type="number"
                        id="sqft"
                        placeholder="e.g. 2,400 (or leave blank)"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="size-details">
                        Anything else about the home? (optional)
                      </label>
                      <textarea
                        id="size-details"
                        rows="3"
                        placeholder="Single story, stucco on half the home, recent repairs..."
                        className="form-input"
                      ></textarea>
                    </div>
                    <div className="form-checkbox">
                      <input type="checkbox" id="notSure" />
                      <label htmlFor="notSure">
                        I&apos;d rather have Carlos take a look and figure it out
                      </label>
                    </div>
                  </div>
                  <div className="wizard-step__nav">
                    <button className="wizard-back btn btn-outline">
                      Back
                    </button>
                    <div className="wizard-step__nav-right">
                      <button className="wizard-skip btn btn-link">
                        Skip for now
                      </button>
                      <button className="wizard-next btn btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                <div data-step="3" className="wizard-step">
                  <span className="wizard-step__label">Anything on your mind?</span>
                  <h3 className="wizard-step__question">
                    Is there anything you&apos;d like Carlos to know?
                  </h3>
                  <p className="wizard-step__helper">
                    Totally optional — feel free to skip this and save it for
                    when you chat in person.
                  </p>
                  <textarea
                    id="notes"
                    rows="5"
                    placeholder="Color ideas, a problem spot, monsoon damage, or anything you're curious about..."
                    className="form-input"
                  ></textarea>
                  <div className="wizard-step__nav">
                    <button className="wizard-back btn btn-outline">
                      Back
                    </button>
                    <div className="wizard-step__nav-right">
                      <button className="wizard-skip btn btn-link">
                        Skip for now
                      </button>
                      <button className="wizard-next btn btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                <div data-step="4" className="wizard-step">
                  <span className="wizard-step__label">Almost done</span>
                  <h3 className="wizard-step__question">
                    How should Carlos reach out?
                  </h3>
                  <p className="wizard-step__helper">
                    Just your first name and one way to reach you — that&apos;s
                    it. Your info stays private, and you&apos;ll never get spam
                    or marketing emails from us.
                  </p>
                  <div className="wizard-step__inputs">
                    <div className="form-group">
                      <label htmlFor="userName">
                        <span>Your name</span>
                      </label>
                      <input
                        type="text"
                        id="userName"
                        placeholder="First name is fine"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userPhone">Phone (optional)</label>
                      <input
                        type="tel"
                        id="userPhone"
                        placeholder="(555) 555-5555"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userEmail">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        id="userEmail"
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </div>
                    <p id="validationMsg" className="form-error-msg"></p>
                  </div>
                  <div className="wizard-step__nav">
                    <button className="wizard-back btn btn-outline">
                      Back
                    </button>
                    <button
                      id="submitWizard"
                      className="btn btn-primary btn-lg"
                    >
                      Say hi to Carlos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="testimonials__container">
            <span className="section-eyebrow">Neighbors Say</span>
            <h2 className="section-title">Local Voices</h2>
            <div className="why-us__divider"></div>
            <div className="testimonials__rail">
              <div className="testimonials__card">
                <p className="testimonials__quote">
                  &quot;Carlos was on site every single day. The texture match
                  on our repair was absolutely flawless. You can&apos;t even
                  tell where the old stucco ends and the new begins.&quot;
                </p>
                <span className="testimonials__author">
                  Sarah M. — Scottsdale
                </span>
              </div>
              <div className="testimonials__card">
                <p className="testimonials__quote">
                  &quot;True craftsmanship is hard to find in Phoenix these
                  days. Reuben Stucco is the real deal. Fair price, beautiful
                  work, and a handshake that actually means something.&quot;
                </p>
                <span className="testimonials__author">
                  Robert T. — Arcadia
                </span>
              </div>
              <div className="testimonials__card">
                <p className="testimonials__quote">
                  &quot;We&apos;ve had three different stucco companies out over
                  the years, and nobody compares to Carlos. He treats your home
                  like it&apos;s his own. Highly recommend.&quot;
                </p>
                <span className="testimonials__author">
                  Elena G. — Paradise Valley
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="process">
          <div className="process__container">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-title">Our Process</h2>
            <div className="why-us__divider"></div>
            <div className="process__steps">
              <div className="process__step">
                <div className="process__number">
                  <span>01</span>
                </div>
                <h3 className="process__title">Personal Estimate</h3>
                <p className="process__text">
                  Carlos visits your home personally to assess the project and
                  provide a transparent, no-pressure quote tailored to your
                  specific needs.
                </p>
              </div>
              <div className="process__step">
                <div className="process__number">
                  <span>02</span>
                </div>
                <h3 className="process__title">Hands-On Craft</h3>
                <p className="process__text">
                  No subcontractors. Carlos leads the work himself, ensuring
                  every layer and texture meets his personal standards for
                  quality and durability.
                </p>
              </div>
              <div className="process__step">
                <div className="process__number">
                  <span>03</span>
                </div>
                <h3 className="process__title">Final Walkthrough</h3>
                <p className="process__text">
                  We don&apos;t leave until you&apos;re 100% satisfied. Carlos
                  walks the project with you to ensure every detail is perfect
                  before we sign off.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta-area" className="cta-area">
          <div className="cta-area__container">
            <div className="cta-area__content">
              <span className="section-eyebrow">Ready When You Are</span>
              <h2 className="section-title">Ready to protect your home?</h2>
              <p className="section-content">
                We proudly serve Phoenix, Scottsdale, Mesa, Chandler, Tempe,
                Glendale, Peoria, Paradise Valley, and the entire Valley of the
                Sun.
              </p>
              <a href="#contact">
                <div className="btn btn-primary btn-lg">
                  <span>Get Started with Carlos</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <dialog id="thankYouModal" className="success-modal">
          <div className="success-modal__content">
            <div className="success-modal__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 className="success-modal__title">
              Thanks for reaching out!
            </h2>
            <p className="success-modal__text">
              Carlos got your message and will be in touch personally — no
              call centers, no pushy follow-ups. In the meantime, feel free
              to browse more of our recent work.
            </p>
            <button id="closeModal" className="btn btn-primary btn-lg">
              Sounds good
            </button>
          </div>
        </dialog>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes stepFadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="reuben-stucco-logic">
(function(){
  // Wizard Wizard Logic
  const wizardSteps = document.querySelectorAll(".wizard-step")
  const wizardDots = document.querySelectorAll(".wizard-card__dot")
  let currentStep = 1

  function updateWizard() {
    wizardSteps.forEach((step) => {
      step.classList.toggle("active", parseInt(step.dataset.step) === currentStep)
    })

    wizardDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx + 1 === currentStep)
      dot.classList.toggle("completed", idx + 1 < currentStep)
    })
  }

  // Step 1: Pill selection (no gating — users can always continue)
  const pills = document.querySelectorAll(".wizard-pill")
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("selected"))
      pill.classList.add("selected")
    })
  })

  // Step 2: "Not sure" toggle disables the size inputs for convenience
  const sqftInput = document.getElementById("sqft")
  const notSureCheck = document.getElementById("notSure")
  notSureCheck.addEventListener("change", () => {
    sqftInput.disabled = notSureCheck.checked
    document.getElementById("size-details").disabled = notSureCheck.checked
  })

  // Navigation
  document.querySelectorAll(".wizard-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep < 4) {
        currentStep++
        updateWizard()
      }
    })
  })

  document.querySelectorAll(".wizard-back").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--
        updateWizard()
      }
    })
  })

  document.querySelectorAll(".wizard-skip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentStep++
      updateWizard()
    })
  })

  // Final Submit
  const submitBtn = document.getElementById("submitWizard")
  const nameInput = document.getElementById("userName")
  const phoneInput = document.getElementById("userPhone")
  const emailInput = document.getElementById("userEmail")
  const validationMsg = document.getElementById("validationMsg")
  const modal = document.getElementById("thankYouModal")

  submitBtn.addEventListener("click", () => {
    const hasContact = phoneInput.value.trim() !== "" || emailInput.value.trim() !== ""

    if (!hasContact) {
      validationMsg.textContent = "Just need one way to reach you — a phone number or email is plenty."
      return
    }

    validationMsg.textContent = ""
    modal.showModal()
  })

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.close()
    // Reset wizard
    currentStep = 1
    updateWizard()
    // Clear inputs
    document.querySelectorAll(".form-input").forEach((i) => (i.value = ""))
    pills.forEach((p) => p.classList.remove("selected"))
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
