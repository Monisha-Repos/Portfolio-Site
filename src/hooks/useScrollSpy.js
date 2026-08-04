import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, for nav highlighting.
 */
export default function useScrollSpy(ids, offset = 0.35) {
    const [active, setActive] = useState(ids[0])

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100}% 0px` },
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [ids, offset])

    return active
}
