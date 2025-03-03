import { useState } from 'react';

import { View, Text } from 'react-native';

import { FormInputSearch, LinkSolid, ProductCount } from '@atoms';
import { Error, Loading } from '@molecules';
import { ProductList } from '@organisms';
import { useGetProductsQuery } from '@queries';

const HomePage = () => {
	const [inputValue, setInputValue] = useState<string>('');

	const { data, isLoading, isError } = useGetProductsQuery('');
	const filteredProducts =
		data?.data.filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase())) ?? [];

	if (isLoading) return <Loading />;

	if (isError) return <Error />;

	return (
		<View style={{ gap: 12, height: '97%', justifyContent: 'space-between' }}>
			<FormInputSearch value={inputValue} onChangeText={setInputValue} placeholder={'Search...'} />

			<View style={{ flexGrow: 1, gap: 12 }}>
				<ProductCount count={filteredProducts.length ?? 0} />

				<ProductList products={filteredProducts} />
			</View>

			<LinkSolid href='/create'>
				<Text>Agregar</Text>
			</LinkSolid>
		</View>
	);
};

export default HomePage;
