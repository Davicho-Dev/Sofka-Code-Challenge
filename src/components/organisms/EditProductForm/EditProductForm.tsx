import type { FC } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { IProductItemProps } from '@interfaces';
import { useUpdateProductMutation } from '@queries';
import { ProductForm } from '@organisms';

import { IEditProductFormProps } from './EditProductForm.interfaces';

export const EditProductForm: FC<IEditProductFormProps> = ({ defaultValues, onEditSuccess }) => {
	const form = useForm<IProductItemProps>({ defaultValues });

	const [editProduct] = useUpdateProductMutation();

	const hdlSubmit = (formData: IProductItemProps) => {
		editProduct(formData);
	};

	const hdlReset = () => {
		form.reset();
	};

	return (
		<FormProvider {...form}>
			<ProductForm onSubmit={hdlSubmit} onReset={hdlReset} />
		</FormProvider>
	);
};
