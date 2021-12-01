import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { TickerType } from 'src/types';
import { TickerItem } from '../TickerItem';

interface OwnProps{
    tickers:TickerType[];
    selectedPair:string,
}

export function TickerList({ tickers, selectedPair }:OwnProps) {
  const renderItem = useCallback(({ item }) => <TickerItem ticker={item} />, []);
  const keyExtractor = useCallback((item) => item.symbol, []);
  return (
    <View>
      <FlatList
        data={tickers.filter((ticker) => ticker.quoteAsset === selectedPair)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
