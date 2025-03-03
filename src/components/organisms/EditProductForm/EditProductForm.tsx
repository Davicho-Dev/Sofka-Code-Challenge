import { useEffect, type FC } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { IProductItemProps } from '@interfaces';
import { useUpdateProductMutation } from '@queries';
import { ProductForm } from '@organisms';

import { IEditProductFormProps } from './EditProductForm.interfaces';
import { convertToDashedDate } from '@utils';
import { useRouter } from 'expo-router';

export const EditProductForm: FC<IEditProductFormProps> = ({ defaultValues, onEditSuccess }) => {
	const router = useRouter();
	const form = useForm<IProductItemProps>({ defaultValues });

	const [editProduct, { isSuccess }] = useUpdateProductMutation();

	const hdlSubmit = (data: IProductItemProps) => {
		const { date_release, date_revision } = data;

		const formattedDateRelease = convertToDashedDate(date_release);
		const formattedDateRevision = convertToDashedDate(date_revision);

		editProduct({
			...data,
			date_release: formattedDateRelease,
			date_revision: formattedDateRevision,
		});
	};

	const hdlReset = () => {
		form.reset();
	};

	useEffect(() => {
		if (isSuccess) {
			router.navigate(`/product/${defaultValues.id}`);
		}
	}, [isSuccess]);

	return (
		<FormProvider {...form}>
			<ProductForm onSubmit={hdlSubmit} onReset={hdlReset} />
		</FormProvider>
	);
};
