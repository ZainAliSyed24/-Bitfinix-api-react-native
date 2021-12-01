import React from 'react';
import { PairItemWraper, Text } from './pair.styles';

interface OwnProps{
    pair:string,
    isSelected:boolean,
    onSelectPair:(pair:string)=>void
}

export function PairItem({ pair, isSelected, onSelectPair }:OwnProps) {
  return (
    <PairItemWraper isSelected={isSelected} onPress={() => onSelectPair(pair)}>
      <Text isSelected={isSelected}>{pair}</Text>
    </PairItemWraper>
  );
}
