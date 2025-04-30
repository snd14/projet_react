import '../styles/Carts.css'
function Description(){
        const monsteraPrice=8
        const lierrePrice=10
        const bouquetPrice=15
          return(<div>
              <h2>Panier</h2>
            <ul>
              <li> Montera:{monsteraPrice}</li>
              <li>Lierre:{lierrePrice}</li>
              <li>Bouquet:{bouquetPrice}</li>
             </ul>
              <h2>Total:{monsteraPrice+lierrePrice+bouquetPrice}</h2>
               
             </div>)  
      }

export default Description