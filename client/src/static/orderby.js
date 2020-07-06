const genders = ['All', 'Men', 'Women', 'Kids'];

const orderBy = [
	'인기순',
	'최신순',
	'높은 가격순',
	'낮은 가격순',
	'높은 할인율순',
	'낮은 할인율순',
];
// genders, orderBy 배열 요소 하나당 객체 만들어서 쿼리 스트링 보낼 때 처리할 멤버변수 만들기 ?
const categories = {
	Bags: [
		'Shoulder Bags',
		'Clutch Bags',
		'Tote Bags',
		'Backpacks',
		'Belt Bags',
		'Cross Bags',
		'Travel Bags',
	],
	Wallets: [
		'Wallets',
		'Small Wallets',
		'Strap Wallets',
		'Card Cases',
		'Pouches',
	],
	Clothes: [
		'Cardigans',
		'Shirts',
		'Dresses',
		'Skirts',
		'Knits',
		'Blouse',
		'Long Sleeves',
		'Short Sleeves',
		'Hoodie',
		'Coats',
		'Jackets',
		'Jumpers',
		'Denim Pants',
		'Pants',
		'Slacks',
		'Traning Wear',
		'Swimwear',
		'Vests',
		'Jump Suit',
	],
	Shoes: [
		'Sandals',
		'Espadrilles',
		'Sneackers',
		'Slippers',
		'Moccasins',
		'Pumps',
		'Boots',
		'Flats',
		'Wedges',
		'Mules',
		'Loafers',
	],
	Accessories: [
		'Jewelry',
		'Belts',
		'Scarfs',
		'Hats',
		'Keyrings',
		'Eyewear',
		'Socks',
		'Ties',
		'Gloves',
		'Keycases',
		'Tights',
		'Fancy',
		'Bag Straps',
	],
};

export default {
	genders,
	orderBy,
	categories,
};
