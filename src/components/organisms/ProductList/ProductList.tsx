import type { FC } from 'react';

import { FlatList, Text, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { ProductItem } from '@molecules';
import { Separator } from '@atoms';
import { colors } from '@utils';

import type { IProductListProps } from './ProductList.interfaces';

export const ProductList: FC<IProductListProps> = ({ products }) => {
	if (products?.length === 0 || !products) {
		return (
			<View
				style={{
					alignItems: 'center',
					borderColor: colors.lightGray,
					borderRadius: 6,
					borderWidth: 1,
					flex: 1,
					gap: 16,
					justifyContent: 'center',
				}}
			>
				<Feather name='alert-circle' size={54} color={colors.darkGray} />
				<Text style={{ color: colors.darkGray, fontFamily: 'inter_600', fontSize: 30 }}>Lo sentimos!</Text>
				<Text style={{ color: colors.darkGray }}>No hay productos disponibles</Text>
			</View>
		);
	}

	return (
		<View
			style={{
				borderWidth: 1,
				borderColor: colors.lightGray,
				borderRadius: 6,
			}}
		>
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductItem key={item.id} {...item} />}
				ItemSeparatorComponent={() => <Separator />}
				style={{
					flexGrow: 0,
					borderWidth: 1,
					borderColor: colors.lightGray,
					borderRadius: 6,
				}}
			/>
		</View>
	);
};
