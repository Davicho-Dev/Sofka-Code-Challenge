import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IProductItemProps, IProductProps } from '@interfaces';

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	tagTypes: ['Products', 'Product'],
	endpoints: builder => ({
		getProduct: builder.query<IProductItemProps, Pick<IProductItemProps, 'id'>>({
			query: ({ id }) => `products/${id}`,
			providesTags: ['Product'],
		}),
		getProducts: builder.query<IProductProps, string>({
			query: () => 'products',
			providesTags: ['Products'],
		}),
		createProduct: builder.mutation<null, IProductItemProps>({
			query: product => ({ url: 'products', method: 'POST', body: product }),
			invalidatesTags: ['Products'],
		}),
		updateProduct: builder.mutation<null, IProductItemProps>({
			query: product => ({ url: `products/${product.id}`, method: 'PUT', body: { product } }),
			invalidatesTags: ['Product', 'Products'],
		}),
		deleteProduct: builder.mutation<null, Pick<IProductItemProps, 'id'>>({
			query: ({ id }) => ({ url: `products/${id}`, method: 'DELETE' }),
			invalidatesTags: ['Products'],
		}),
	}),
	keepUnusedDataFor: 240,
});

export const {
	useGetProductQuery,
	useGetProductsQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation,
} = productsApi;
