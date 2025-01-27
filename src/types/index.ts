
import {z} from 'zod';
import { CryptoPriceSchema, currencyCryptoSchema, CurrencySchema,PairSchema} from '../schema/crypto-schema'


export type Currency=z.infer<typeof CurrencySchema>
export type CryptoCurrency=z.infer<typeof currencyCryptoSchema>
export type PairSchemas=z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>