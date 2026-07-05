function Navbar({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'connect', label: 'Connect' },
    ]
    return (
        <nav className="navbar">
            <div className="nav-links">
                {navItems
                    .filter((item) => item.id !== currentPage)
                    .map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentPage(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
            </div>
        </nav>
    )
}

export default Navbar