import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { convertToSlashedDate } from '@utils';

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
			queryFn: async ({ id }) => {
				const resp = await fetch(`${baseUrl}/products/${id}`);

				if (!resp.ok) {
					throw new Error(resp.statusText);
				}

				const product = (await resp.json()) as IProductItemProps;

				return {
					data: {
						id: product?.id,
						name: product?.name,
						description: product?.description,
						logo: product?.logo,
						date_release: convertToSlashedDate(product.date_release),
						date_revision: convertToSlashedDate(product.date_revision),
					},
				};
			},
			providesTags: ['Product'],
		}),
		getProducts: builder.query<IProductProps, string>({
			query: () => 'products',
			providesTags: ['Products'],
		}),
		createProduct: builder.mutation<null, IProductItemProps>({
			query: product => {
				console.log({ product });

				return { url: 'products', method: 'POST', body: product };
			},
			invalidatesTags: ['Products'],
		}),
		updateProduct: builder.mutation<null, IProductItemProps>({
			query: product => {
				console.log('=================');
				console.log({ product });
				console.log('=================');

				return { url: `products/${product.id}`, method: 'PUT', body: product };
			},
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
