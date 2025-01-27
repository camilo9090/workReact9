import axios from "axios"
import { CryptoPriceSchema, currenciesCryptoSchema } from "../schema/crypto-schema"
import { PairSchemas } from "../types"

export async function getCryptos() {

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios.get(url)
    const result = currenciesCryptoSchema.safeParse(Data)

    if (result.success) {
        return result.data
    }
}

export async function fetchCryptoPrice(pair: PairSchemas) {

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios.get(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    if (result.success) {
        return result.data
    }
}