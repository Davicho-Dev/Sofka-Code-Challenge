import type { FC } from 'react';

import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@utils';

import type { IProductItemProps } from '@interfaces';

export const ProductItem: FC<Pick<IProductItemProps, 'id' | 'name'>> = ({ id, name }) => {
	return (
		<Link
			testID='product-item'
			href={{
				pathname: '/product/[id]',
				params: {
					id,
				},
			}}
			style={{
				padding: 10,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View style={{ columnGap: 4, flexGrow: 1 }}>
					<Text style={{ fontFamily: 'inter_500' }}>{name}</Text>
					<Text style={{ fontSize: 12 }}>ID: {id}</Text>
				</View>
				<View style={{ flexGrow: 0, flexShrink: 0 }}>
					<AntDesign name='right' size={16} color={colors.darkGray} />
				</View>
			</View>
		</Link>
	);
};
