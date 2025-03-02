import "@testing-library/react-native/extend-expect";

jest.mock("@expo/vector-icons", () => ({
	Ionicons: "",
	AntDesign: "",
}));

jest.mock("expo-linear-gradient", () => ({
	LinearGradient: "",
}));

jest.mock("expo-router", () => ({
	Link: "",
}));

jest.mock('ActionSheetIOS', () => ({
	showActionSheetWithOptions: jest.fn(),
	showShareActionSheetWithOptions: jest.fn(),
}));