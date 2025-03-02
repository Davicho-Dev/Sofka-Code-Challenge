import type { FC } from 'react';

import { Link } from 'expo-router';

import type { ILinkSolidProps } from './LinkSolid.interfaces';

import { styles } from './LinkSolid.styles';

export const LinkSolid: FC<ILinkSolidProps> = ({ style, children, variant = 'primary', ...rest }) => {
	if (variant === 'secondary') {
		return (
			<Link style={[styles.link, styles.secondary, style]} {...rest}>
				{children}
			</Link>
		);
	}

	if (variant === 'third') {
		return (
			<Link style={[styles.link, styles.third, style]} {...rest}>
				{children}
			</Link>
		);
	}

	if (variant === 'danger') {
		return (
			<Link style={[styles.link, styles.danger, style]} {...rest}>
				{children}
			</Link>
		);
	}

	return (
		<Link style={[styles.link, styles.primary, style]} {...rest}>
			{children}
		</Link>
	);
};
