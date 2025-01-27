
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency, CryptoPrice, PairSchemas } from './types';
import { getCryptos, fetchCryptoPrice } from './services/CryptoServices';

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: PairSchemas) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies

        }))

    },
    fetchData: async (pair) => {
        fetchCryptoPrice(pair)

        const result = await fetchCryptoPrice(pair)
        set(() => ({
            result
        }))
    }
})))