import renderer from 'react-test-renderer';
import React from 'react';
import { parseResponseData } from '../src/utils/parser';
import { ResponseType } from '../src/types';
import App from '../App';
import useFakeTimers = jest.useFakeTimers;
import { formatNumber } from '../src/utils/format';

const responseMockData:ResponseType[] = [['tBTCUSD', 10654, 53.62425959, 10655, 76.68743116, 745.1, 0.0752, 10655, 14420.34271146, 10766, 9889.1449809]];
const resultParseData = {
  pairs: ['USD'],
  tickers: [{
    baseAsset: 'BTC',
    change24h: 7.5200000000000005,
    lastPrice: 10655,
    quoteAsset: 'USD',
    symbol: 'BTCUSD',
    volume: 14420.34271146,
  }],
};

useFakeTimers();

it('renders correctly', () => {
  renderer.create(<App />);
});

test('parser function work fine', () => {
  expect(parseResponseData(responseMockData)).toStrictEqual(resultParseData);
});

test('format function work fine', () => {
  expect(formatNumber(14420.62425959, 8)).toStrictEqual('14,420.62425959');
  expect(formatNumber(14420.62425959, 2)).toStrictEqual('14,420.62');
});
