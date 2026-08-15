import { useEffect, useState } from 'react'

// Availability clock — pinned to Monisha's timezone, not the visitor's.
const TIME_ZONE = 'America/New_York' // US Eastern (Tampa) — handles EDT/EST + DST
const WORK_START = 9 // 9am
const WORK_END = 21 // 9pm
const LOCATION = 'Eastern Time (US)'

/**
 * Returns the current time in Monisha's timezone plus whether it currently
 * falls inside her working window, so the UI can show an availability status.
 * Updates every 30s (no seconds shown, so a finer tick would be wasted work).
 */
export default function useClock() {
    const [now, setNow] = useState(() => new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 30_000)
        return () => clearInterval(id)
    }, [])

    const time = new Intl.DateTimeFormat('en-US', {
        timeZone: TIME_ZONE,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).format(now)

    // Hour (0–23) as it reads in the target timezone.
    const raw = Number(
        new Intl.DateTimeFormat('en-US', {
            timeZone: TIME_ZONE,
            hour: '2-digit',
            hour12: false,
        }).format(now),
    )
    const hour = raw === 24 ? 0 : raw // some engines report midnight as 24

    const available = hour >= WORK_START && hour < WORK_END

    return { time, available, location: LOCATION }
}
