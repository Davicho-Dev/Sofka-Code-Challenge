import { render, screen, fireEvent } from '@testing-library/react-native';

import { ButtonSolid } from './ButtonSolid';
import { styles } from './ButtonSolid.styles';

describe('ButtonSolid', () => {
	it('Must render correctly with the "primary" variant.', () => {
		render(
			<ButtonSolid variant='primary' onPress={() => {}}>
				Primary Button
			</ButtonSolid>
		);
		const button = screen.getByTestId('primary-button');
		const text = screen.getByText('Primary Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.primary);
	});

	it('Must render correctly with the "secondary" variant.', () => {
		render(
			<ButtonSolid variant='secondary' onPress={() => {}}>
				Secondary Button
			</ButtonSolid>
		);
		const button = screen.getByTestId('secondary-button');
		const text = screen.getByText('Secondary Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.secondary);
	});

	it('Must render correctly with the "third" variant.', () => {
		render(
			<ButtonSolid variant='third' onPress={() => {}}>
				Third Button
			</ButtonSolid>
		);
		const button = screen.getByTestId('third-button');
		const text = screen.getByText('Third Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.third);
	});

	it('Must render correctly with the "danger" variant.', () => {
		render(
			<ButtonSolid variant='danger' onPress={() => {}}>
				Danger Button
			</ButtonSolid>
		);
		const button = screen.getByTestId('danger-button');
		const text = screen.getByText('Danger Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.danger);
	});

	it('onPress must be called when the button is pressed.', () => {
		const onPress = jest.fn();
		render(
			<ButtonSolid variant='primary' onPress={onPress}>
				Primary Button
			</ButtonSolid>
		);
		const button = screen.getByTestId('primary-button');

		fireEvent.press(button);

		expect(onPress).toHaveBeenCalled();
	});
});
