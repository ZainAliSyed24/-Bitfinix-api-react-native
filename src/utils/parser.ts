import { TickerType, ResponseType } from 'src/types';

export function parseResponseData(apiResponseData:ResponseType[]) {
  const tickers: TickerType[] = [];
  let pairs:string[] = [];
  apiResponseData.forEach((responseItem) => {
    const symbol = responseItem[0].toString();
    // just show pair currency, not funding
    if (symbol.startsWith('t')) {
      const ticker: TickerType = <TickerType>{};
      ticker.symbol = symbol.replace('t', '');
      ticker.change24h = Number(responseItem[6]) * 100;
      ticker.lastPrice = Number(responseItem[7]);
      ticker.volume = Number(responseItem[8]);
      if (symbol.includes(':')) {
        ticker.baseAsset = ticker.symbol.split(':')[0].toString();
        ticker.quoteAsset = ticker.symbol.split(':')[1].toString();
      } else {
        ticker.baseAsset = ticker.symbol.substring(0, 3);
        ticker.quoteAsset = ticker.symbol.substring(3, ticker.symbol.length);
      }
      tickers.push(ticker);
      pairs.push(ticker.quoteAsset);
    }
  });
  // distinct and sort pairs
  pairs = [...new Set(pairs)].sort();
  return { tickers, pairs };
}
