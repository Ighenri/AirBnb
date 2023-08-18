import image1 from './img/image1.png'
import star from './img/Star.png'
export default function Card(props) {
    return (
        <section>
            <div className='card-pic'>
                <img src={image1} alt="" />
                <p className='card-label'>Sold Out</p>
            </div>
            <div className='ratecont'>
                <img src={star} alt="" className='rating' />
                <span>{props.rating} ({props.reviewCount}) · {props.country}</span>
                <p>{props.title}</p>
                <p><span className='amount'>From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}