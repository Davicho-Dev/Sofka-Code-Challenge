import { useEffect } from 'react';

import { Text, View } from 'react-native';

import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';

import { ProductForm } from '@organisms';
import { useCreateProductMutation } from '@queries';

import type { IProductItemProps } from '@interfaces';
import { convertToDashedDate } from '@utils';

const CreatePage = () => {
	const router = useRouter();

	const form = useForm();

	const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();

	const hdlSubmit = (data: IProductItemProps) => {
		const { date_release, date_revision } = data;

		const formattedDateRelease = convertToDashedDate(date_release);
		const formattedDateRevision = convertToDashedDate(date_revision);

		createProduct({
			...data,
			date_release: formattedDateRelease,
			date_revision: formattedDateRevision,
		});
	};

	const hdlReset = () => form.reset();

	useEffect(() => {
		if (isSuccess) router.replace('/');
	}, [isSuccess]);

	return (
		<View style={{ gap: 24, flex: 1 }}>
			<Text style={{ fontFamily: 'inter_600', fontSize: 28 }}>Formulario de Registro</Text>

			<FormProvider {...form}>
				<ProductForm onSubmit={hdlSubmit} onReset={hdlReset} />
			</FormProvider>
		</View>
	);
};

export default CreatePage;
