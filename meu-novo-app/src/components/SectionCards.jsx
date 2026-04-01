
import './SectionCards.css'
import Cards from './Cards.jsx'

function SectionCards() {
    return(
        <section className="SectionCards" id="services">
        
        <h2 className="TituloSectionCards">Nossas Especialidades</h2>
        
        <div className="ContainerCards">
        
            <Cards titulo='UI/UX Design' descricao='Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário.' />

            <Cards titulo='Infraestrutura AWS' descricao='Arquitetura, deploy e manutenção de soluções escaláveis na nuvem.'/>

            <Cards titulo='IA & Game Dev' descricao='Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial.'/>

            <Cards titulo='Engenharia de Dados' descricao='Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão.'/>

        </div>

        </section>
    )
}

export default SectionCards;