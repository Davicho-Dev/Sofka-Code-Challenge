import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

import HomePage from '../app/index';

import { mock_products } from './__mocks__/index.mock';

jest.mock('@expo/vector-icons', () => ({
	Ionicons: '',
	AntDesign: '',
}));

jest.mock('expo-linear-gradient', () => ({
	LinearGradient: '',
}));

jest.mock('expo-router', () => ({
	Link: '',
}));

jest.mock('@queries', () => ({
	useGetProductsQuery: () => ({
		data: {
			data: mock_products,
		},
		isLoading: false,
		isError: false,
	}),
}));

describe('<HomePage/> test suite', () => {
	beforeEach(() => {
		render(<HomePage />);
	});

	it('Should render correctly', () => {
		const product01 = screen.getByText('Product 1');
		const product02 = screen.getByText('Product 2');
		const product03 = screen.getByText('Product 3');

		expect(product01).toBeOnTheScreen();
		expect(product02).toBeOnTheScreen();
		expect(product03).toBeOnTheScreen();
	});

	it('Should have an "Add product" button', () => {
		const addProductButton = screen.getByText('Agregar');

		expect(addProductButton).toBeOnTheScreen();
	});

	it('Should display a "Search" input ', () => {
		const searchInput = screen.getByPlaceholderText('Search...');

		expect(searchInput).toBeOnTheScreen();
	});

	it('Should filter products by search keyword', async () => {
		const searchInput = screen.getByPlaceholderText('Search...');
		fireEvent.changeText(searchInput, 'Product 2');

		await waitFor(() => {
			const product01 = screen.queryByText('Product 1');
			const product02 = screen.queryByText('Product 2');
			const product03 = screen.queryByText('Product 3');

			expect(product01).not.toBeOnTheScreen();
			expect(product02).toBeOnTheScreen();
			expect(product03).not.toBeOnTheScreen();
		})
	});

});
