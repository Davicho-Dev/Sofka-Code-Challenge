import type { FC } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, View, Text } from 'react-native';

import { ButtonSolid, Separator } from '@atoms';

import type { IConfirmationDialogProps } from './ConfirmationDialog.interfaces';

import { styles } from './ConfirmationDialog.styles';

export const ConfirmationDialog: FC<IConfirmationDialogProps> = ({
	confirmationMessage,
	isVisible,
	onConfirm,
	onReject,
}) => {
	return (
		<Modal transparent animationType='fade' visible={isVisible}>
			<Pressable testID='overlay' style={styles.overlay} onPress={onReject} />
			<View style={styles.sheet}>
				<Pressable testID='close-button' style={styles.closeButton} onPress={onReject}>
					<Ionicons name='close' size={24} />
				</Pressable>

				<Separator />

				<Text style={styles.confirmationText}>{confirmationMessage}</Text>

				<Separator />

				<View style={styles.controlsContainer}>
					<ButtonSolid onPress={onConfirm}>Confirmar</ButtonSolid>
					<ButtonSolid onPress={onReject} variant='secondary'>
						Cancelar
					</ButtonSolid>
				</View>
			</View>
		</Modal>
	);
};
