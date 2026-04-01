
import './Cards.css'

function Cards(props) {
    return(
        <div className="DivCard">

        <h3 className="TituloCard">{props.title}</h3>
        <p className="DescricaoCard">{props.description}</p>

        </div>
    )
}

export default Cards;