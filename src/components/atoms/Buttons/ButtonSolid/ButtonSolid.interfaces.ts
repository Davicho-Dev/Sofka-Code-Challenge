import type { TVariants } from '@interfaces';

interface IButtonSolidProps {
	children: string;
	variant?: TVariants;
	onPress?: () => void;
}

export type { IButtonSolidProps };
