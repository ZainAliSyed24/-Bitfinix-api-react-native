import { baseUrl, iconUrl } from './config';

export const getAllTickers = async () => fetch(`${baseUrl}/tickers?symbols=ALL`);
export const getCoinIcon = (symbol:string) => `${iconUrl}/${symbol.toLowerCase()}`;
