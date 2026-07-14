'use client'

import { useEffect, useRef } from 'react'

export function ScrollObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-up, .reveal-on-scroll-down, .reveal-on-scroll-scale, .reveal-on-scroll-blur')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el))
      observerRef.current?.disconnect()
    }
  }, [])

  return null
}