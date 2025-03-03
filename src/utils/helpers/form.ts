const exists = async (id: string) => {
	const result = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/${id}`);

	return result.status === 200;
};

const isValidDateFormat = (dateString: string): boolean => {
	const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

	return dateRegex.test(dateString);
};

const isFutureDate = (dateString: string): boolean => {
	if (!isValidDateFormat(dateString)) {
		return false;
	}

	const [day, month, year] = dateString.split('/').map(Number);

	const date = new Date(year, month - 1, day);
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	return date.getTime() >= today.getTime();
};

const isOneYearLater = (date1: string, date2: string): boolean => {
	if (!isValidDateFormat(date1) || !isValidDateFormat(date2)) {
		return false;
	}

	const [day1, month1, year1] = date1.split('/').map(Number);
	const [day2, month2, year2] = date2.split('/').map(Number);

	const d1 = new Date(year1, month1 - 1, day1);
	const d2 = new Date(year2, month2 - 1, day2);

	return (
		d1.getFullYear() === d2.getFullYear() + 1 && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
	);
};

const convertToDashedDate = (dateString: string): string => {
	const [day, month, year] = dateString.split('/');
	return `${year}-${month}-${day}`;
};

const convertToSlashedDate = (dateString: string): string => {
	const [year, month, day] = dateString.split('-');
	return `${day}/${month}/${year}`;
};

const checkDate = (date: string) => {
	if (!date) return true;
	return isValidDateFormat(date) && isFutureDate(date);
};

const addOneYear = (date: string) => {
	if (!date) return '-';
	const isValid = checkDate(date);
	if (!isValid) return '-';
	const [day, month, year] = date.split('/');
	return `${day}/${month}/${+year + 1}`;
};

export {
	exists,
	isValidDateFormat,
	isFutureDate,
	isOneYearLater,
	convertToDashedDate,
	convertToSlashedDate,
	checkDate,
	addOneYear,
};
