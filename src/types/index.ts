
import {z} from 'zod';
import { currencyCryptoSchema, CurrencySchema,PairSchema} from '../schema/crypto-schema'


export type Currency=z.infer<typeof CurrencySchema>

export type CryptoCurrency=z.infer<typeof currencyCryptoSchema>

export type PairSchemas=z.infer<typeof PairSchema>