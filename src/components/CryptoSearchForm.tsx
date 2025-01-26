
import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { PairSchemas } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CryptoSearchForm() {


    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
    const [pair, setpair] = useState<PairSchemas>({

        currency: '',
        criptocurrency: ''
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setpair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }
    const [error, setError] = useState('')

    const hanleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (Object.values(pair).includes('')) {

            setError('Todos los campos son obligatorios')
            return
        }

        setError('')

        //Consultar la API

    }


    return (


        <form
            className="form"
            onSubmit={hanleSubmit}
        >

            { error&& <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    value={pair.currency}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione--</option>
                    {currencies.map((currency) => (

                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}

                </select>



            </div>
            <div className="field">
                <label htmlFor="criptocurrency">Cryptomoneda:</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                    value={pair.criptocurrency}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione--</option>
                    {cryptoCurrencies.map(crypto => (

                        <option
                            key={crypto.CoinInfo.Name}
                            value={crypto.CoinInfo.Name}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}


                </select>

            </div>

            <input value='cotizar' type="submit" />
        </form>
    )
}
