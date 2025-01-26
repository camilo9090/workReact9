
import { currencies } from "../data"
import { useCryptoStore } from "../store"

export default function CryptoSearchForm() {

    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
    return (
        <form className="form" action="">

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
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
