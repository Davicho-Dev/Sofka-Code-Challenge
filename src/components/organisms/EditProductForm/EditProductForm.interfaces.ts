import { IProductItemProps } from '@interfaces';

interface IEditProductFormProps {
	defaultValues: IProductItemProps;
	onEditSuccess: (newId: string) => void;
}

export type { IEditProductFormProps };
