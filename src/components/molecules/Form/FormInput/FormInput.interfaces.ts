import type { ComponentProps } from 'react';

import { Controller } from 'react-hook-form';

import type { FieldValues } from 'react-hook-form';

interface IFormInputProps<T extends FieldValues>
	extends Pick<ComponentProps<typeof Controller<T>>, 'control' | 'name' | 'rules'> {
	label: string;
	hasError?: boolean;
	errorMessage?: string;
	placeholder?: string;
}

export type { IFormInputProps };
