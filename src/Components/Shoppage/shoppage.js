import CardS from "../CardS/cardS"; 
import "./shoppage.css"

const shoppage = (props) => {
    const { products } = props;
    
    

    return (
        
        <div className="shoppage" >
        
              
           
            {/* <div>
                <button onClick={Option}></button>
            </div> */}
            {
        products.map((product, index) => (
            <CardS product={product} key={index} />
                 

        ))
            
}   
        </div>
    )
}
export default  shoppage;