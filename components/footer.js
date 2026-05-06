import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer id="footer" className="footer-section">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column footer-company">
                <h2 className="footer-wordmark section-title">Reuben Stucco</h2>
                <p className="footer-owner section-content">
                  Owned &amp; operated by Carlos Mendoza
                </p>
                <p className="footer-tagline section-content">
                  Family-owned stucco craftsmanship in the Valley of the Sun.
                  Built by hand, built to last.
                </p>
              </div>
              <div className="footer-column footer-contact">
                <h3 className="footer-heading section-subtitle">
                  Get in Touch
                </h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="tel:+14805761075">
                      <div className="footer-link footer-contact-link">
                        <span className="footer-icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                          </svg>
                        </span>
                        <span>
                          {' '}
                          (480) 576-1075
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="mailto:hello@reubenstucco.com?subject=">
                      <div className="footer-link footer-contact-link">
                        <span className="footer-icon-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
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
                              <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                              <rect
                                width="20"
                                height="16"
                                x="2"
                                y="4"
                                rx="2"
                              ></rect>
                            </g>
                          </svg>
                        </span>
                        <span>
                          {' '}
                          hello@reubenstucco.com
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item footer-address">
                    <p className="section-content">
                      Proudly serving Phoenix, Scottsdale, Mesa, Chandler,
                      Tempe, Glendale, Peoria, Paradise Valley &amp; the greater
                      Phoenix Valley.
                    </p>
                  </li>
                  <li className="footer-list-item footer-hours">
                    <p className="section-content">
                      <span>
                        {' '}
                        Mon–Sat, 7:00am – 6:00pm
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        {' '}
                        Sunday by appointment
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="footer-column footer-links">
                <h3 className="footer-heading section-subtitle">Explore</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#why-choose-us">
                      <div className="footer-link section-content">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#gallery">
                      <div className="footer-link section-content">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#contact">
                      <div className="footer-link section-content">
                        <span>Contact Us</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#contact">
                      <div className="footer-link section-content">
                        <span>Get a Free Quote</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-bottom-content">
                <div className="footer-legal">
                  <span className="section-content">
                    © 2026 Reuben Stucco. All rights reserved.
                  </span>
                  <span className="footer-license section-content">
                    Licensed &amp; Insured — Arizona ROC# 342918
                  </span>
                </div>
                <div className="footer-social">
                  <a href="#">
                    <div
                      aria-label="Follow us on Facebook"
                      className="footer-social-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      aria-label="Follow us on Instagram"
                      className="footer-social-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-scroll">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")

      if (href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
