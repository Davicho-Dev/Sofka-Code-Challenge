import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

import type { FieldValues } from 'react-hook-form';

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
				<FormField
					label={label}
					render={hasError => (
						<TextInput
							testID='input'
							autoCapitalize='none'
							style={[styles.container, hasError ? styles.errorBorder : undefined]}
							placeholder={placeholder}
							value={value}
							onChange={onChange}
						/>
					)}
					hasError={hasError}
					errorMessage={errorMessage}
				/>
			)}
		/>
	);
};
