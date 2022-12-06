import "../Navbar/Navbar.css"
export default function Navbar() {
    return <nav className="header">
        <a href="/" className="site-title">LOGO</a>
        <ul>
            <li>
                <a href="/course">Các khóa học</a>
            </li>
            <li>
                <a href="/recruit">Tuyển dụng</a>
            </li>
            <li>
                <a href="/follow">Theo dõi</a>
            </li>
        </ul>
    </nav>
}