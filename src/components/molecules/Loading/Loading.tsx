import { View } from 'react-native';

import { IcSpinner } from '@atoms';

export const Loading = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<IcSpinner />
		</View>
	);
};
