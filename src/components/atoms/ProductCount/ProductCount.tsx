import type { FC } from 'react';

import { Text } from 'react-native';

import type { IProductCountProps } from './ProductCount.interfaces';

import { styles } from './ProductCount.styles';

export const ProductCount: FC<IProductCountProps> = ({ count }) => {
	return (
		<Text style={styles.label}>
			{count} {count === 1 ? 'Item' : 'Items'}
		</Text>
	);
};
