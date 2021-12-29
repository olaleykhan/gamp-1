export const currencyFomatter = (number, currency = 'NGN', decimal = 0) => {
	const compose = (currency) => {
		const splitted = currency.split('.');
		const fraction = splitted[1].length === 1 ? `${splitted[1]}0` : splitted[1];
		return `${splitted[0]}.${fraction}`;
	};

	const formatter = new Intl.NumberFormat({
		style: 'currency',
		currency,
	});
	const formatted = formatter.format(Number(number).toFixed(decimal));
	const formattedCurrency = !formatted.split('.')[1] ? `${formatted}.00` : compose(formatted);

	return formattedCurrency;
};

export const formatDate = (date) => {
	const newDate = new Date(date);
	const options = { month: 'short' };
	const month = new Intl.DateTimeFormat('en-US', options).format(newDate);
	return `${month.toUpperCase()} ${newDate.getDate()}, ${newDate.getFullYear()}`;
};

export const splitDate = (date) => {
	// const newDate = new Date(date);
	return date.split('T')[0].split('-').reverse().join('-');
};
