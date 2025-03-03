import { render, screen } from '@testing-library/react-native';

import { ProductCount } from '@atoms';

describe('<ProductCount/>', () => {
	it('Must render correctly with the "1" count.', () => {
		render(<ProductCount count={1} />);

		const label = screen.getByText('1 Item');

		expect(label).toBeTruthy();
	});

	it('Must render correctly with the "2" count.', () => {
		render(<ProductCount count={2} />);

		const label = screen.getByText('2 Items');

		expect(label).toBeTruthy();
	});
});
