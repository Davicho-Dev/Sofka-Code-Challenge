import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	overlay: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		backgroundColor: 'black',
		opacity: 0.7,
	},
	sheet: {
		backgroundColor: 'white',
		minHeight: '33%',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		left: '0.5%',
		borderRadius: 10,
	},
	confirmationText: {
		padding: 16,
		paddingVertical: 24,
		textAlign: 'center',
		fontWeight: '600',
		fontSize: 16,
	},
	closeButton: {
		padding: 16,
		marginLeft: 'auto',
	},
	controlsContainer: {
		padding: 16,
		gap: 8,
		marginBottom: 16,
	},
});
