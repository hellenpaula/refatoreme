
import './Cards.css'

function Cards(props) {
    return(
        <div className="DivCard" id={props.id}>

        <h3 className="TituloCard">{props.titulo}</h3>
        <p className="DescricaoCard">{props.descricao}</p>

        </div>
    )
}

export default Cards;