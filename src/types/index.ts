
import {z} from 'zod';
import { currencyCryptoSchema, CurrencySchema} from '../schema/crypto-schema'


export type Currency=z.infer<typeof CurrencySchema>

export type CryptoCurrency=z.infer<typeof currencyCryptoSchema>