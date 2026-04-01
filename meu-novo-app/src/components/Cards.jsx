
import './Cards.css'

function Cards(props) {
    return(
        <div className="DivCard">

        <h3 className="TituloCard">{props.titulo}</h3>
        <p className="DescricaoCard">{props.descricao}</p>

        </div>
    )
}

export default Cards;