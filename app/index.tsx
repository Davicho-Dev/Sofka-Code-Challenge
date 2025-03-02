import { useState } from 'react';

import { View, Text } from 'react-native';

import { FormInputSearch, LinkSolid, ProductCount } from '@atoms';
import { Error, Loading } from '@molecules';
import { ProductList } from '@organisms';
import { useGetProductsQuery } from '@queries';

const HomePage = () => {
	const [inputValue, setInputValue] = useState<string>('');

	const { data, isLoading, isError, originalArgs, endpointName } = useGetProductsQuery('');

	if (isLoading) return <Loading />;

	if (isError) return <Error />;

	return (
		<View style={{ gap: 12, height: '97%', justifyContent: 'space-between' }}>
			<FormInputSearch value={inputValue} onChangeText={setInputValue} placeholder={'Search...'} />

			<View style={{ flexGrow: 1, gap: 12 }}>
				<ProductCount count={data?.data?.length ?? 0} />

				<ProductList products={data?.data} />
			</View>

			<LinkSolid href='/create'>
				<Text>Agregar</Text>
			</LinkSolid>
		</View>
	);
};

export default HomePage;
