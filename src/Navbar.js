export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Pizza Place</a>
        <ul>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/menu">Menu</CustomLink>
        <CustomLink href="/order">Order</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}