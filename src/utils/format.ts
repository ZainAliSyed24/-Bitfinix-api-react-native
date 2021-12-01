import currency from 'currency.js';

export const formatNumber = (_number: Number | string, precision:number = 8) => {
  if (!_number || _number === 'NaN') {
    return '';
  }
  return currency(_number.toString(), { precision }).format({ symbol: '' }).replace(/\.?0+$/, '');
};
