import useClock from '../hooks/useClock.js'

function Availability() {
    const { time, available, location } = useClock()

    const label = available
        ? `Usually online now — ${time}, ${location}`
        : `Away right now — ${time}, ${location}`

    return (
        <div
            className={`availability ${available ? 'is-on' : 'is-off'}`}
            role="status"
            aria-label={label}
        >
            <span className="avail-dot" aria-hidden="true" />
            <span className="avail-status">
                {available ? 'Usually online' : 'Away right now'}
            </span>
            <span className="avail-time" aria-hidden="true">
                {location} · {time}
            </span>
        </div>
    )
}

export default Availability
