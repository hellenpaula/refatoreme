
import "./SectionPlanos.css"

import CardsPlanos from './CardsPlanos.jsx';

function SectionPlanos() {

    const plansData = [
        {
            id: 1,
            title: "Plano Básico",
            price: "R$10",
            tituloAreaTexto: "Ideal para presença digital inicial",
            textoCardPlanos: "Perfeito para profissionais que precisam de uma solução simples e eficiente.",
            beneficio1: "Criação de designs modernos e acessíveis",
            beneficio2: "Otimização básica de SEO",
            beneficio3: "Suporte via e-mail"
        },
        {
            id: 2,
            title: "Plano Pro",
            price: "R$25",
            tituloAreaTexto: "Para empresas em crescimento",
            textoCardPlanos: "Solução para negócios que desejam escalar sua presença digital com performance e integração.",
            beneficio1: "Tudo do plano Básico",
            beneficio2: "Performance otimizada, com integração à APIs",
            beneficio3: "Suporte prioritário"
        },
        {
            id: 3,
            title: "Plano Premium",
            price: "R$50",
            tituloAreaTexto: "Para soluções robustas e escaláveis",
            textoCardPlanos: "Ideal para empresas que precisam de alta performance, segurança e tecnologias avançadas",
            beneficio1: "Tudo do plano Pro",
            beneficio2: "Integração a Inteligência Artificial + AWS",
            beneficio3: "Suporte dedicado 24/7"
        },
    ]

    return(
        <section className="SectionPlanos" id="plans">
            <h2 className="TituloSectionCards TituloSectionCardsPlanos">Planos</h2>
            <h3 className="SubtituloSectionPlanos">Escolha o plano ideal para o seu negócio</h3>
            <p className="DescricaoSelectionPlanos">Encontre o plano perfeito e leve seu projeto para o próximo nível. <br/> Temos opções acessíveis para iniciantes até soluções completas para empresas.</p>

            <div className="ContainerCardsPlanos" >

            
            {plansData.map((plan) => (
                <CardsPlanos key={plan.id} 
                id={plan.id}
                title={plan.title} 
                price={plan.price} 
                tituloAreaTexto={plan.tituloAreaTexto} 
                textoCardPlanos={plan.textoCardPlanos} 
                beneficio1={plan.beneficio1} beneficio2={plan.beneficio2} beneficio3={plan.beneficio3}

                />
            ))}

            </div>
        </section>
    )
}

export default SectionPlanos;