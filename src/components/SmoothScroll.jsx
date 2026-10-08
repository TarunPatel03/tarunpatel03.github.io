import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import Lenis from "lenis"

export default function SmoothScroll() {
  const location = useLocation()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined

    const lenis = new Lenis({
      duration: 1.05,
      easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.88,
      anchors: { offset: 0 },
    })

    const updateProgress = ({ progress }) => {
      document.documentElement.style.setProperty("--page-progress", progress)
    }
    lenis.on("scroll", updateProgress)

    let frame
    const animate = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      lenis.off("scroll", updateProgress)
      lenis.destroy()
    }
  }, [])

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual"
    if (!location.hash) {
      window.scrollTo(0, 0)
      return undefined
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return <div className="page-progress" aria-hidden="true"><i /></div>
}
