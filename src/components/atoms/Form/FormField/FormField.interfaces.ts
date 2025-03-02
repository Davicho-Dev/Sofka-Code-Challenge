import type { ReactNode } from 'react';

interface IFormFieldProps {
	label: string;
	hasError?: boolean;
	errorMessage?: string;
	render: (hasError?: boolean) => ReactNode;
}

export type { IFormFieldProps };
