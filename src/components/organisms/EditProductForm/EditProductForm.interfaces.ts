import { IProductItemProps } from '@interfaces';

interface IEditProductFormProps {
	defaultValues: IProductItemProps;
	onEditSuccess: () => void;
}

export type { IEditProductFormProps };
