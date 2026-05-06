import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="navigation" className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div aria-label="CarloStucco Home" className="navigation-brand">
                  <span className="navigation-wordmark">CarloStucco</span>
                </div>
              </a>
            </Link>
            <div className="navigation-actions">
              <a href="tel:+16026281573">
                <div className="navigation-phone">
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
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span className="navigation-phone-text">(602) 628-1573</span>
                </div>
              </a>
              <button
                id="navMenuBtn"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="navDropdown"
                className="navigation-menu-trigger"
              >
                <span className="navigation-menu-text">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="navigation-thq-navigation-chevron-elm"
                >
                  <path d="m6 9l6 6l6-6"></path>
                </svg>
              </button>
              <div id="navDropdown" className="navigation-dropdown">
                <ul className="navigation-dropdown-list">
                  <li>
                    <a href="#why-choose-us">
                      <div className="navigation-dropdown-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#gallery">
                      <div className="navigation-dropdown-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <div className="navigation-dropdown-link">
                        <span>Contact Us</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              id="mobileMenuToggle"
              aria-label="Toggle Mobile Menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16M4 12h16M4 19h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobileMenuOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a>
                <div aria-label="CarloStucco Home" className="navigation-brand">
                  <span className="navigation-wordmark">CarloStucco</span>
                </div>
              </a>
            </Link>
            <button
              id="mobileMenuClose"
              aria-label="Close Mobile Menu"
              className="navigation-mobile-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <ul className="navigation-mobile-list">
              <li>
                <a href="#why-choose-us">
                  <div className="navigation-mobile-link">
                    <span>About Us</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#gallery">
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <div className="navigation-mobile-link">
                    <span>Contact Us</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-footer">
              <a href="tel:+16026281573">
                <div className="navigation-phone">
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
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span className="navigation-phone-text">(602) 628-1573</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-dropdown, .navigation-mobile-overlay, .navigation-chevron {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navWrapper = document.getElementById("navigation")
  const menuTrigger = document.getElementById("navMenuBtn")
  const dropdown = document.getElementById("navDropdown")
  const mobileToggle = document.getElementById("mobileMenuToggle")
  const mobileOverlay = document.getElementById("mobileMenuOverlay")
  const mobileClose = document.getElementById("mobileMenuClose")
  const dropdownLinks = dropdown.querySelectorAll(".navigation-dropdown-link")
  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link")

  // Sticky header behavior
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navWrapper.style.backgroundColor = "rgba(245, 239, 230, 0.96)"
      navWrapper.style.boxShadow = "0 1px 0 rgba(42, 33, 24, 0.06)"
      navWrapper.style.padding = "var(--spacing-md) 3rem"
    } else {
      navWrapper.style.backgroundColor = "rgba(245, 239, 230, 0.92)"
      navWrapper.style.boxShadow = "none"
      navWrapper.style.padding = "var(--spacing-xl) 3rem"
    }
  })

  // Desktop Dropdown Toggle
  menuTrigger.addEventListener("click", (e) => {
    e.stopPropagation()
    const isExpanded = menuTrigger.getAttribute("aria-expanded") === "true"
    menuTrigger.setAttribute("aria-expanded", !isExpanded)
    dropdown.classList.toggle("is-active")
  })

  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !menuTrigger.contains(e.target)) {
      menuTrigger.setAttribute("aria-expanded", "false")
      dropdown.classList.remove("is-active")
    }
  })

  // Mobile Menu Toggle
  mobileToggle.addEventListener("click", () => {
    mobileOverlay.classList.add("is-active")
    document.body.style.overflow = "hidden"
  })

  mobileClose.addEventListener("click", () => {
    mobileOverlay.classList.remove("is-active")
    document.body.style.overflow = ""
  })

  // Smooth scroll and close menus
  const handleLinkClick = (e) => {
    dropdown.classList.remove("is-active")
    menuTrigger.setAttribute("aria-expanded", "false")
    mobileOverlay.classList.remove("is-active")
    document.body.style.overflow = ""
  }

  dropdownLinks.forEach((link) => link.addEventListener("click", handleLinkClick))
  mobileLinks.forEach((link) => link.addEventListener("click", handleLinkClick))
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-chevron-elm {
            transition: transform 0.3s ease;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
