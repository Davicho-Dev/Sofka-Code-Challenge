import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonSolid } from './ButtonSolid';
import { styles } from './ButtonSolid.styles';

describe('ButtonSolid', () => {
	it('debe renderizar correctamente con la variante "primary"', () => {
		const { getByText, getByTestId } = render(
			<ButtonSolid variant='primary' onPress={() => {}}>
				Primary Button
			</ButtonSolid>
		);
		const button = getByTestId('primary-button');
		const text = getByText('Primary Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.primary);
	});

	it('debe renderizar correctamente con la variante "secondary"', () => {
		const { getByText, getByTestId } = render(
			<ButtonSolid variant='secondary' onPress={() => {}}>
				Secondary Button
			</ButtonSolid>
		);
		const button = getByTestId('secondary-button');
		const text = getByText('Secondary Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.secondary);
	});

	it('debe renderizar correctamente con la variante "third"', () => {
		const { getByText, getByTestId } = render(
			<ButtonSolid variant='third' onPress={() => {}}>
				Third Button
			</ButtonSolid>
		);
		const button = getByTestId('third-button');
		const text = getByText('Third Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.third);
	});

	it('debe renderizar correctamente con la variante "danger"', () => {
		const { getByText, getByTestId } = render(
			<ButtonSolid variant='danger' onPress={() => {}}>
				Danger Button
			</ButtonSolid>
		);
		const button = getByTestId('danger-button');
		const text = getByText('Danger Button');

		expect(button).toBeTruthy();
		expect(text).toBeTruthy();

		expect(button.props.style).toContainEqual(styles.danger);
	});
});
