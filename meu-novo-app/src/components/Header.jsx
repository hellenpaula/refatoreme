
import './Header.css'

function Header() {
    return (
        <header className="Header">
            <nav className="nav">
                <h1 className="TituloHeader">TechNova</h1>
                <ul className="ContainerLista">
                    <li><a href="#home" className="LinkItemNav">Início</a></li>
                    <li><a href="#services" className="LinkItemNav">Serviços</a></li>
                    <li><a href="#contact" className="LinkItemNav">Contato</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;