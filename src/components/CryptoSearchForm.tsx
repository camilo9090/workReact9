
import { currencies } from "../data"
export default function CryptoSearchForm() {
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

                        <option value={currency.code}>{currency.name}</option>
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

                </select>

            </div>

            <input value='cotizar' type="submit" />
        </form>
    )
}
