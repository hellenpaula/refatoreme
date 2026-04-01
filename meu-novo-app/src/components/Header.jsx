
import './Header.css'

function Header() {
    return (
        <header className="Header">
            <nav className="nav">
                <h1 className="TituloHeader">TechNova</h1>
                <ul >
                    <li><a href="#home">Início</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="contact">Contato</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;