import type { FC } from 'react';

import { TextInput } from 'react-native';

import type { IFormInputSearchProps } from './FormInputSearch.interfaces';

import { styles } from './FormInputSearch.styles';
import { colors } from '@utils';

export const FormInputSearch: FC<IFormInputSearchProps> = props => {
	return <TextInput testID='input-search' style={styles} placeholderTextColor={colors.darkGray} {...props} />;
};
