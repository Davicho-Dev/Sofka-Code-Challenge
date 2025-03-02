import { useEffect } from 'react';

import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Logo } from '@molecules';
import { store } from '@store';

import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [loaded, error] = useFonts({
		inter_400: Inter_400Regular,
		inter_500: Inter_500Medium,
		inter_600: Inter_600SemiBold,
		inter_700: Inter_700Bold,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded || error) return null;

	return (
		<Provider store={store}>
			<Stack
				screenOptions={{
					headerTitle: () => <Logo />,
					headerTitleAlign: 'center',
					contentStyle: {
						padding: 24,
						backgroundColor: 'white',
					},
				}}
			>
				<Stack.Screen
					name='index'
					options={{
						title: 'Home',
					}}
				/>
				<Stack.Screen
					name='product/[id]/index'
					options={{
						title: 'Product',
					}}
				/>
			</Stack>
			<StatusBar style='auto' />
		</Provider>
	);
};

export default RootLayout;
