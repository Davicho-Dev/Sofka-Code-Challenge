import { View } from 'react-native';

import { colors } from '@utils';

export function Separator() {
	return (
		<View
			testID='separator'
			style={{
				height: 1,
				backgroundColor: colors.lightGray,
				width: '95%',
				alignSelf: 'center',
			}}
		></View>
	);
}
