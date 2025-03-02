import { View, Text } from 'react-native';

import { IcError } from '@atoms';

export const Error = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<IcError />

			<Text>Algo salió mal. Por favor, intenta de nuevo.</Text>
		</View>
	);
};
