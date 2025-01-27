

import { useMemo } from "react"
import { useCryptoStore } from "../store"


export default function CryptoPriceDisplay() {

    const result = useCryptoStore(state => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])
    console.log(hasResult);
    
    
    return (
        <div>

            {hasResult && (

                <>

                    <h2>Cotizacion</h2>
                </>
            )}

        </div>
    )
}