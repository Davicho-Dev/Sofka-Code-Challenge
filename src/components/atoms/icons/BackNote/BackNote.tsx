import { View } from 'react-native';

import { styles } from './BackNote.styles';

export const IcBackNote = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.noteBack} />
			<View style={styles.noteFront} />
			<View style={styles.noteCircle} />
		</View>
	);
};
