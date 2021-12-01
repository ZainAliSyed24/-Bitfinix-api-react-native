import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { PairItem } from '../PairItem';

interface OwnProps{
    pairs:string[];
    onSelectPair:(pair:string)=>void;
    selectedPair:string;
}

export function PairList({ pairs, onSelectPair, selectedPair }:OwnProps) {
  const renderItem = useCallback(({ item }) => (
    <PairItem
      isSelected={selectedPair === item}
      onSelectPair={onSelectPair}
      pair={item}
    />
  ), [onSelectPair, selectedPair]);

  const keyExtractor = useCallback((item) => item, []);

  return (
    <View>
      <FlatList
        data={pairs}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={selectedPair}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
