
import './SectionCards.css'
import Cards from './Cards.jsx'

function SectionCards() {

    const servicesData = [
        {
            id: 1,
            title: "UI/UX Design",
            description: "Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário."
        },
        {
            id: 2,
            title: "Infraestrutura AWS",
            description: "Arquitetura, deploy e manutenção de soluções escaláveis na nuvem."
        },
        {
        id: 3,
        title: "IA & Game Dev",
        description: "Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial."
        },
        {
        id: 4,
        title: "Engenharia de Dados",
        description: "Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão."
        }
    ];

    return(
        <section className="SectionCards" id="services">
        
        <h2 className="TituloSectionCards">Nossas Especialidades</h2>
        
        <div className="ContainerCards">

            {servicesData.map((service) => (
                <Cards 
                    key={service.id}
                    title={service.title}
                    description={service.description}
                />
            ))}

            
            
{/* Estrutura que criei no início para aplicação dos cards sem o .map():

            <Cards titulo='UI/UX Design' descricao='Criação de interfaces intuitivas, acessíveis e focadas na experiência do usuário.' /> */}
{/* 
            <Cards titulo='Infraestrutura AWS' descricao='Arquitetura, deploy e manutenção de soluções escaláveis na nuvem.'/> */}
{/* 
            <Cards titulo='IA & Game Dev' descricao='Desenvolvimento de jogos integrados com algoritmos de Inteligência Artificial.'/> */}
{/* 
            <Cards titulo='Engenharia de Dados' descricao='Estruturação de dashboards em Power BI e modelagem de dados para tomada de decisão.'/> */}

        </div>

        </section>
    )
}

export default SectionCards;