var product = [
	{
		id: 0,
		image: 'images/pizza-1.jpg' ,
		title: 'Chiken pizza',
		price: 540,
		
	},
	{
		id: 1,
		image: 'images/pizza-2.jpg',
		title: 'Vegetable Pizza',
		price: 680,
	},
	{
		id: 2,
		image: 'images/pizza-3.jpg',
		title: 'Chillie Pizza',
		price: 780,
	},
	{
		id: 3,
		image: 'images/pizza-4.jpg',
		title: ' Pizza4',
		price: 780,
	},
	{
		id: 4,
		image: 'images/pizza-5.jpg',
		title: 'Pizza5',
		price: 780,
	}
];

let categories = [...new Set(product.map((item){return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
														   {
	var {image, title, price} = item;
	return(
	`<div class='box'>
			<div class='img-box'>
				<img class='images' src=${image}></img>
</div>
<div class='bottom'>
<p>${title}</p>
<h2>$ ${price}.00</h2>`+
"<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
`</div>
</div>`

	)
}).join('')
														  )















