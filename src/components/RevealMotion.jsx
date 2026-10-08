import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function RevealMotion() {
  const location = useLocation()

  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")]
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  return null
}
