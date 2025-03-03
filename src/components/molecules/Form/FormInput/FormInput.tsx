import type { FC } from 'react';

import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

import type { FieldValues } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

import { FormField } from '@atoms';

import type { IFormInputProps } from './FormInput.interfaces';

import { styles } from './FormInput.styles';

export const FormInput = <T extends FieldValues>({
	label,
	hasError = false,
	errorMessage = '',
	placeholder = '',
	control,
	name,
	rules,
}: IFormInputProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { value, onChange } }) => (
				<InputField
					autoCapitalize='none'
					placeholder={placeholder}
					label={label}
					value={value}
					onChangeText={onChange}
					hasError={hasError}
					errorMessage={errorMessage}
				/>
			)}
		/>
	);
};

interface IInputFieldProps extends TextInputProps {
	label: string;
	hasError?: boolean;
	errorMessage?: string;
}

const InputField: FC<IInputFieldProps> = ({ label, hasError, errorMessage, ...rest }) => {
	return (
		<FormField
			label={label}
			render={hasError => (
				<TextInput
					testID='input'
					style={[styles.container, hasError ? styles.errorBorder : undefined]}
					{...rest}
				/>
			)}
			hasError={hasError}
			errorMessage={errorMessage}
		/>
	);
};
