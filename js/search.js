const search = () => {
	const input = document.querySelector('.search-block > input');

	const searchBtn = document.querySelector('.search-block > button');

	// input.addEventListener('input', (e) => {
	// 	console.log('e.target:', e.target.value);
	// });

	searchBtn.addEventListener('click', (e) => {
		// console.log('e.target:', input.value);
		console.log('input.value:', input.value);

	});

};
search();