import type { IProductItemProps } from '@interfaces';

interface IProductFormProps {
	onSubmit: (value: IProductItemProps) => void;
	onReset: () => void;
}

export type { IProductFormProps, IProductItemProps };
