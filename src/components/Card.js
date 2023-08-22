import rate from '../images/Star.png'
import image from "../images/image.png"

export default function Card(props) {
    let batchSpot 
    if (props.item.openSpots === 0) {
        batchSpot= "SOLD OUT"
    }else if (props.item.location === "Online"){
        batchSpot = "ONLINE"
    } else {
        batchSpot = "NORWAY" // I just added this
    }

    return (
        <section className='card'>
            <div className='card-pic'>
                <img src= {image} alt="" />
                {batchSpot && <p className='card-label'>{batchSpot}</p>}
            </div>
            <div className='ratecont'>
                <img src={rate} alt="" className='rating' />
                <span>{props.item.stats.rating} ({props.item.stats.reviewCount}) · {props.country}</span>
                <p>{props.item.title}</p>
                <p><span className='amount'>From ${props.item.price}</span> / person</p>
            
            </div>
            

        </section>
    )
}