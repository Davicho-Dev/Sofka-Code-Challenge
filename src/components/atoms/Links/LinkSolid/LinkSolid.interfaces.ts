import type { ComponentProps } from 'react';

import { Link } from 'expo-router';

import type { TVariants } from '@interfaces';

interface ILinkSolidProps extends ComponentProps<typeof Link> {
	variant?: TVariants;
}

export type { ILinkSolidProps };
