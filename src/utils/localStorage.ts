export const setItem = <T>(key: string, value: T) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
	}
};

export const getItem = (key: string) => {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : undefined;
	} catch (error) {
		console.log(error);
	}
};

export const removeItem = (key: string) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.log(error);
	}
};
