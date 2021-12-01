import React, { useEffect, useState } from 'react';
import { PairList, TickerList } from '../../components';
import { TickerType } from '../../types';
import { getAllTickers } from '../../requests';
import { useQuery } from 'react-query';
import { parseResponseData } from '../../utils/parser';
import { Container } from './home.styles';
import { Text } from '../../components/PairItem/pair.styles';
import { View } from 'react-native';
import { StyleSheetManager } from 'styled-components';

export default function HomeScreen() {
  const [tickers, setTickers] = useState<TickerType[]>([]);
  const [pairs, setPairs] = useState<string[]>([]);
  const [selectedPair, setSelectedPair] = useState<string>('BTC');

  const { data } = useQuery('tickers',
    () => getAllTickers().then((res) => res.json()));

  useEffect(() => {
    if (data) {
      const result = parseResponseData(data);
      setTickers(result.tickers);
      setPairs(result.pairs);
    }
  }, [data]);

  return (
    <Container>
      <PairList
        pairs={pairs}
        onSelectPair={setSelectedPair}
        selectedPair={selectedPair}
      />
      <TickerList
        tickers={tickers}
        selectedPair={selectedPair}
      />
    </Container>
  );
}
