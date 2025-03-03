import type { FC } from 'react';

import { View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { Loading } from '@molecules';
import { useGetProductQuery } from '@queries';
import { EditProductForm } from '@organisms';

const EditProductPage: FC = () => {
	const router = useRouter();
	const { id } = useLocalSearchParams();

	const productId = typeof id === 'string' ? id : id[0];

	const { data, isLoading } = useGetProductQuery({ id: productId });

	if (isLoading) return <Loading />;

	const hdlEdit = () => {
		router.navigate(`/product/${productId}`);
	};

	return (
		<View style={{ gap: 24, flex: 1 }}>
			<Text style={{ fontFamily: 'inter_600', fontSize: 26 }}>Formulario de Edición</Text>

			<EditProductForm
				onEditSuccess={hdlEdit}
				defaultValues={{
					id: data?.id ?? '',
					name: data?.name ?? '',
					description: data?.description ?? '',
					logo: data?.logo ?? '',
					date_release: data?.date_release ?? '',
					date_revision: data?.date_revision ?? '',
				}}
			/>
		</View>
	);
};

export default EditProductPage;
