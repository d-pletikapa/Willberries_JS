const cart = function () {
	const cartBtn = document.querySelector('.button-cart');
	console.dir('cartBtn:', cartBtn);
	const cart = document.getElementById('modal-cart');
	const closeBtn = cart.querySelector('.modal-close');


	console.log('cart');

	console.dir('cartBtn:', cartBtn);

	cartBtn.addEventListener('click', function () { cart.style.display = 'flex'; });

	closeBtn.addEventListener('click', () => { cart.style.display = ''; });
};

cart();
