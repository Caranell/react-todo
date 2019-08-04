export const loadState = () => {
	try {
		const jsonState = localStorage.getItem('state');
		if (jsonState === null) {
			return undefined;
		}
		return JSON.parse(jsonState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const stringState = JSON.stringify(state);
		localStorage.setItem('state', stringState);
	} catch (err) {
		console.log(err);
	}
};