getGoods = () => {
	const links = document.querySelectorAll('.navigation-link');

	const getData = () => {

		fetch('../db/db.json')
			.then((res) => res.json())
			//return response.text();
			.then((data) => {

				localStorage.setItem('goods', JSON.stringify(data));
			});

	};

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			getData();
		});
	});
	// localStorage.setItem('goods', JSON.stringify({ name: 'all' }));
	// const goods = JSON.parse(localStorage.getItem('goods'));
	// console.log('goods:', goods);

	// localStorage.removeItem('goods');

	// console.log(localStorage);

};

getGoods();