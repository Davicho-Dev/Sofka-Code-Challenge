import type { FC } from 'react';

import { KeyboardAvoidingView, Platform, ScrollView, View, Text } from 'react-native';
import { FormSubmitHandler, SubmitHandler, useFormContext } from 'react-hook-form';

import { ButtonSolid, FormField } from '@atoms';
import { FormInput } from '@molecules';
import { addOneYear, checkDate, colors, exists, isFutureDate, isValidDateFormat } from '@utils';

import type { IProductFormProps, IProductItemProps } from './ProductForm.interfaces';

export const ProductForm: FC<IProductFormProps> = ({ onSubmit, onReset }) => {
	const {
		control,
		formState: { errors, defaultValues },
		watch,
		handleSubmit,
	} = useFormContext<Omit<IProductItemProps, 'date_revision'>>();

	const releaseDate = watch('date_release');

	const hdlSubmit: SubmitHandler<Omit<IProductItemProps, 'date_revision'>> = formData => {
		onSubmit({
			...formData,
			date_revision: addOneYear(releaseDate),
		});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={130}
			style={{ flex: 1 }}
		>
			<ScrollView testID='product-form' contentContainerStyle={{ flexGrow: 1, rowGap: 24 }}>
				<FormInput
					label='ID'
					name='id'
					placeholder='ID'
					control={control}
					hasError={!!errors.id}
					errorMessage={errors.id?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
						minLength: {
							value: 3,
							message: 'Mínimo 3 caracteres',
						},
						maxLength: {
							value: 10,
							message: 'Máximo 10 caracteres',
						},
						validate: {
							validId: async id => {
								if (id === defaultValues?.id) return true;

								const alreadyExists = await exists(id);

								if (alreadyExists) return "ID ya existe";

								return true;
							},
						},
					}}
				/>
				<FormInput
					label='Nombre'
					name='name'
					placeholder='Producto 1'
					control={control}
					hasError={!!errors.name}
					errorMessage={errors.name?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
						minLength: {
							value: 5,
							message: 'Mínimo 5 caracteres',
						},
						maxLength: {
							value: 100,
							message: 'Máximo 100 caracteres',
						},
					}}
				/>
				<FormInput
					label='Descripción'
					name='description'
					placeholder='Producto usado para...'
					control={control}
					hasError={!!errors.description}
					errorMessage={errors.description?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
						minLength: {
							value: 10,
							message: 'Mínimo 10 caracteres',
						},
						maxLength: {
							value: 200,
							message: 'Máximo 200 caracteres',
						},
					}}
				/>
				<FormInput
					label='Logo'
					name='logo'
					placeholder='Logo URL'
					control={control}
					hasError={!!errors.logo}
					errorMessage={errors.logo?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
					}}
				/>
				<FormInput
					label='Fecha Liberación'
					name='date_release'
					placeholder='DD/MM/YYYY'
					control={control}
					hasError={!!errors.date_release}
					errorMessage={errors.date_release?.message}
					rules={{
						required: {
							value: true,
							message: 'Este campo es requerido',
						},
						validate: {
							isValidDate: value => {
								const isValid = isValidDateFormat(value);
								if (!isValid) return 'Fecha inválida';
							},
							isFutureDate: value => {
								const isFuture = isFutureDate(value);
								if (!isFuture) {
									return 'La fecha debe ser igual o mayor a la fecha actual';
								}
							},
						},
					}}
				/>
				<FormField
					label='Fecha Revisión'
					render={() => (
						<View
							style={{
								borderWidth: 1,
								borderColor: checkDate(releaseDate) ? colors.lightGray : colors.danger,
								borderRadius: 3,
								paddingVertical: 8,
								paddingHorizontal: 10,
								backgroundColor: '#F3F3F3',
							}}
						>
							<Text style={{ color: '#BBB' }}>{addOneYear(releaseDate)}</Text>
						</View>
					)}
					hasError={!checkDate(releaseDate)}
					errorMessage={!checkDate(releaseDate) ? 'Fecha de Liberación inválida' : ''}
				/>

				<View style={{ rowGap: 8  }}>
					<ButtonSolid onPress={handleSubmit(hdlSubmit)}>Enviar</ButtonSolid>
					<ButtonSolid onPress={onReset} variant='secondary'>
						Reiniciar
					</ButtonSolid>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
