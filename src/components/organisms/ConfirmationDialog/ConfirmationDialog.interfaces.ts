interface IConfirmationDialogProps {
	confirmationMessage: string;
	isVisible: boolean;
	onConfirm: () => void;
	onReject: () => void;
}

export type { IConfirmationDialogProps };
