import { render, screen } from '@testing-library/react-native';

import { FormInputSearch } from '@atoms';

describe('<FormInputSearch>', () => {
	beforeEach(() => {
		render(
			<FormInputSearch
				onChangeText={function (text: string): void {
					throw new Error('Function not implemented.');
				}}
				placeholder={'Search'}
				value={'Hello'}
			/>
		);
	});

	it('should render correctly', () => {
		const inputSearch = screen.getByTestId('input-search');

		expect(inputSearch).toBeOnTheScreen();
	});

	it('should render correctly with placeholder', () => {
		const inputSearch = screen.getByPlaceholderText('Search');

		expect(inputSearch).toBeOnTheScreen();
	});

	it('should render correctly with value', () => {
		const inputSearch = screen.getByDisplayValue('Hello');

		expect(inputSearch).toBeOnTheScreen();
	});
});
