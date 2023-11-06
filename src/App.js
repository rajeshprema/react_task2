import Shoppage from './Components/Shoppage/shoppage';
import './App.css';

function App() {
       const products = [
         {
             id: 1,
            productName: 'Fancy Product',
             price: "$40.00 - $80.00"
            
         },
         {
             id: 2,
            productName: 'Special Item',
            price: "$20.00 $18.00"
       },
        {
          id: 3,
             productName: 'Sale Item',
             price: "$50.00 25.00" 
         },
         {
             id: 4,
             productName: 'Popular Item',
             price: "$40.00"
              
         },
        
         {
             id: 4,
             productName: 'Sale Item',
             price: "$50.00 $25.00"
              
        },
        {
             id: 4,
            productName: 'Fancy Product',
             price: "$120.00 - $280.00"
              
         },


         {
             id: 4,
             productName: 'Special Item',
             price: "$20.00 $18.00"
              
         },
           {
             id: 4,
             productName: 'Popular Item',
             price: "$40.00"
              
         },
    ]
  return (
    <div className="App">
      <Shoppage products={products} />
      
      
    </div>
  );
}

export default App;
