import { render, screen } from '@testing-library/react-native';

import { View, Text } from 'react-native';

import { FormField } from '@atoms';

describe('<FormField>', () => {
	it('Must render correctly with the "label" prop.', () => {
		render(
			<FormField
				label='Name'
				render={() => (
					<View>
						<Text>Input</Text>
					</View>
				)}
			/>
		);
		const label = screen.getByText('Name');
		const input = screen.getByText('Input');

		expect(label).toBeTruthy();
		expect(input).toBeTruthy();
	});

	it('Must render correctly with the "errorMessage" prop.', () => {
		render(
			<FormField
				label='Name'
				errorMessage='This is an error message'
				hasError
				render={() => (
					<View>
						<Text>Input</Text>
					</View>
				)}
			/>
		);
		const label = screen.getByText('Name');
		const input = screen.getByText('Input');
		const errorMessage = screen.getByText('This is an error message');

		expect(label).toBeTruthy();
		expect(input).toBeTruthy();
		expect(errorMessage).toBeTruthy();
	});
});
