
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency, PairSchemas } from './types';
import { getCryptos,fetchCryptoPrice } from './services/CryptoServices';

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
    fetchData: (pair: PairSchemas) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies

        }))

    },
    fetchData: async (pair) => {
        fetchCryptoPrice(pair)

    }
})))