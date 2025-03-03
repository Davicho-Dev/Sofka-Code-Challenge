import {
	isValidDateFormat,
	isFutureDate,
	isOneYearLater,
	convertToDashedDate,
	convertToSlashedDate,
	checkDate,
} from './form';

describe('Form validation test suites', () => {
	it('isValidDateFormat should validate correct date format', () => {
		expect(isValidDateFormat('01/01/2023')).toBe(true);
		expect(isValidDateFormat('31/12/2023')).toBe(true);
		expect(isValidDateFormat('2023/01/01')).toBe(false);
		expect(isValidDateFormat('01-01-2023')).toBe(false);
	});

	it('isFutureDate should validate future dates', () => {
		expect(isFutureDate('01/01/2099')).toBe(true);
		expect(isFutureDate('01/01/2000')).toBe(false);
	});

	it('isOneYearLater should validate if one date is exactly one year after another', () => {
		expect(isOneYearLater('01/01/2023', '01/01/2022')).toBe(true);
		expect(isOneYearLater('01/01/2023', '02/01/2022')).toBe(false);
	});

	it('convertToDashedDate should convert slashed date to dashed date', () => {
		expect(convertToDashedDate('01/01/2023')).toBe('2023-01-01');
	});

	it('convertToSlashedDate should convert dashed date to slashed date', () => {
		expect(convertToSlashedDate('2023-01-01')).toBe('01/01/2023');
	});

	it('checkDate should validate date format and future date', () => {
		expect(checkDate('01/01/2099')).toBe(true);
		expect(checkDate('01/01/2000')).toBe(false);
		expect(checkDate('invalid-date')).toBe(false);
	});
});
