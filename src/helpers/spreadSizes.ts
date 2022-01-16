import { getSize } from './getSize';

export const spreadSizes = (sizes?: number[]) => {
  if (!sizes) {
    return '';
  }

  return sizes.map((size) => `${getSize(size)}px`).join(' ');
};
