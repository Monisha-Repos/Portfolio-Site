import { useEffect } from 'react'

/**
 * Adds an `.in-view` class to any element carrying `data-reveal`
 * as it scrolls into the viewport. Respects reduced-motion by
 * revealing everything immediately.
 */
export default function useReveal() {
    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (reduce || !('IntersectionObserver' in window)) {
            nodes.forEach((n) => n.classList.add('in-view'))
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
        )

        nodes.forEach((n) => observer.observe(n))
        return () => observer.disconnect()
    }, [])
}
