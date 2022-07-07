const useLocalStorage = (name, defaultData) => {
	const localData = localStorage.getItem(name);
	return localData ? JSON.parse(localData) : [];
};

const addLocalStorage = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};

export { useLocalStorage, addLocalStorage };
