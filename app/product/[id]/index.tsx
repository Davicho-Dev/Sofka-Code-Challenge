import { useEffect, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import { ButtonSolid, Card, LinkSolid } from '@atoms';
import { Error, Loading } from '@molecules';
import { useDeleteProductMutation, useGetProductQuery } from '@queries';
import { ConfirmationDialog } from '@organisms';

const ProductItemPage = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const router = useRouter();

	const { id } = useLocalSearchParams();

	const productId = typeof id === 'string' ? id : id[0];

	const { data, isLoading, isError } = useGetProductQuery({ id: productId });
	const [deleteProduct] = useDeleteProductMutation();

	const hdlConfirmDeletion = () => {
		deleteProduct({ id: productId });
	};

	if (isLoading) return <Loading />;

	if (isError) return <Error />;

	return (
		<>
			<ConfirmationDialog
				confirmationMessage={`¿Estás seguro de eliminar el producto ${productId}?`}
				isVisible={isDeleting}
				onConfirm={hdlConfirmDeletion}
				onReject={() => setIsDeleting(false)}
			/>

			<View style={{ height: '97%', justifyContent: 'space-between' }}>
				<View>
					<View>
						<Text
							style={{
								fontFamily: 'robotoSlab_500',
								fontSize: 24,
							}}
						>
							ID: {id}
						</Text>
						<Text style={{ fontSize: 12 }}>Información extra</Text>
					</View>

					<View style={styles.detailsContainer}>
						<View style={styles.keyValuePair}>
							<Text style={styles.keyText}>Nombre</Text>
							<Text style={styles.valueText}>{data?.name}</Text>
						</View>
						<View style={styles.keyValuePair}>
							<Text style={styles.keyText}>Descripción</Text>
							<Text style={styles.valueText}>{data?.description}</Text>
						</View>
						<View>
							<Text style={styles.keyText}>Logo</Text>
							<Card />
						</View>
						<View style={styles.keyValuePair}>
							<Text style={styles.keyText}>Fecha liberación</Text>
							<Text style={styles.valueText}>{data?.date_release}</Text>
						</View>
						<View style={styles.keyValuePair}>
							<Text style={styles.keyText}>Fecha revisión</Text>
							<Text style={styles.valueText}>{data?.date_revision}</Text>
						</View>
					</View>
				</View>

				<View style={{ gap: 8 }}>
					<LinkSolid href={`product/${productId}/edit`} variant='third'>
						Editar
					</LinkSolid>
					<ButtonSolid onPress={() => setIsDeleting(true)} variant='danger'>
						Eliminar
					</ButtonSolid>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	detailsContainer: {
		gap: 16,
		marginTop: '20%',
	},
	keyValuePair: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	keyText: {
		fontWeight: '300',
	},
	valueText: {
		fontWeight: '500',
	},
});

export default ProductItemPage;
