import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"

function App() {

const fetchCryptos= useCryptoStore((state)=>state.fetchCryptos)
useEffect(()=>{
fetchCryptos()
},[])
  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomoneda</span></h1>


      </div>

      <div className="content">
       <CryptoSearchForm/>

      </div>


    </>
  )
}

export default App
