
import "./CardsPlanos.css"

function CardsPlanos(props) {
    return(
        <div className="DivCardPlanos" id={`elemento${props.id}`}>
            
            <div className="ConteudoCard">
                
                <h3 className="TituloCardPlanos">{props.title}</h3>
                <p className="PrecoCardPlanos">{props.price}</p>
                <div className="AreaTextoCardPlanos">
                    <h4 className="TituloAreaTextoCardPlanos">{props.tituloAreaTexto}</h4>
                    <p className="TextoAreaTextoCardPlanos">{props.textoCardPlanos}</p>
                </div>
                <ul className="ListaBeneficiosCardPlanos">
                    <li className="ItemBeneficiosCardPlanos">{props.beneficio1}</li>
                    <li className="ItemBeneficiosCardPlanos">{props.beneficio2}</li>
                    <li className="ItemBeneficiosCardPlanos">{props.beneficio3}</li>
                </ul>
                <button className="BotaoCardPlanos">Ver mais</button>
            </div>

        </div>
    )
}

export default CardsPlanos;