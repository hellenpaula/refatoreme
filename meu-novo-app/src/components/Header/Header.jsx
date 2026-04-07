
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Header">
            <nav className="nav">
                <h1 className="TituloHeader">TechNova</h1>
                <ul className="ContainerLista">
                    <li><Link to="/home" className="LinkItemNav">Início</Link></li>
                    <li><Link to="/servicos" className="LinkItemNav">Serviços</Link></li>
                    <li><Link to="/planos" className="LinkItemNav">Planos</Link></li>

                    {/* estrutura anterior */}
                    {/* <a href="#home" className="LinkItemNav">Início</a> */}
                    {/* <a href="#services" className="LinkItemNav">Serviços</a> */}
                    {/* <a href="#plans" className="LinkItemNav">Planos</a> */}
                </ul>

            </nav>
        </header>
    )
}

export default Header;
