import { ProductItem } from '@molecules';

import { render, screen } from '@testing-library/react-native';

jest.mock('@expo/vector-icons', () => ({
	Ionicons: '',
	AntDesign: '',
}));

describe('<ProductItem/>', () => {
	it('should render correctly', () => {
		render(<ProductItem id={'1234567890'} name={'Card 01'} />);

		const productItem = screen.getByTestId('product-item');
		const name = screen.getByText('Card 01');
		const id = screen.getByText('ID: 1234567890');

		expect(productItem).toBeTruthy();
		expect(name).toBeTruthy();
		expect(id).toBeTruthy();
	});
});
