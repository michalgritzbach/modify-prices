var prices = document.querySelectorAll('.box_actions_price_new, .a_katalog_cena, .katalog_cena, .katalog2_cena span, .product_price b');

[].forEach.call(prices, function(price) {
  var oldPrice = parseInt(price.innerText.replace(/\s+/g, ''));
  var newPrice = parseInt(oldPrice * 1.15).toLocaleString();
  price.innerHTML = newPrice + ' Kč';
});
