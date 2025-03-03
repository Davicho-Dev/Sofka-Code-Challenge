import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

import { useLocalSearchParams } from 'expo-router';

import { useDeleteProductMutation } from '@queries';

import ProductDetailsPage from '../app/product/[id]/index';

import { mock_product } from './__mocks__/details.mock';

jest.mock('@expo/vector-icons', () => ({
	Ionicons: '',
	AntDesign: '',
}));

jest.mock('expo-linear-gradient', () => ({
	LinearGradient: '',
}));

jest.mock('expo-router', () => ({
	useLocalSearchParams: jest.fn(),
	Link: '',
	useRouter: jest.fn(),
}));

jest.mock('@queries', () => ({
	useDeleteProductMutation: jest.fn(() => [jest.fn(), { isLoading: false, isError: false }]),
	useGetProductQuery: () => ({
		data: mock_product,
		isLoading: false,
		isError: false,
	}),
}));

describe('<Details/> test suite', () => {
	beforeEach(() => {
		(useLocalSearchParams as jest.Mock).mockReturnValue({
			id: mock_product.id,
		});

		render(<ProductDetailsPage />);
	});

	it('Should displayed product details', async () => {
		const name = screen.getByText(mock_product.name);
		const description = screen.getByText(mock_product.description);

		await waitFor(() => {
			expect(name).toBeOnTheScreen();
			expect(description).toBeOnTheScreen();
		});
	});

});
