import { render, screen } from '@testing-library/react-native';

import { FormInputSearch } from '@atoms';

describe('<FormInputSearch>', () => {
	it('should render correctly', () => {
		const { debug } = render(
			<FormInputSearch
				onChangeText={function (text: string): void {
					throw new Error('Function not implemented.');
				}}
				placeholder={''}
				value={''}
			/>
		);

		const item = screen.getByTestId('input-search');

		expect(item).toBeTruthy();
	});
});
