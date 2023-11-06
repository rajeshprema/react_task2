import './cardS.css'

const CardS = (props) => {

    const { product } = (props);
    
    return (
        <div className='CardS'>
            <div className='containar'>
                450*300
            </div> 
            <h1>{product.productName}</h1>
            <h4>Rs.{product.price}</h4>
     </div>
    )
}
export default CardS