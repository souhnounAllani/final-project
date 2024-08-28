var totalPrice = 0;
var totalPriceDisplay = document.querySelector('.total');

var updateTotalPrice = function() {
    totalPrice = 0;
    document.querySelectorAll('.card-body').forEach(function(prod) {
        var qty = parseInt(prod.querySelector('.quantity').textContent);
        var price = parseFloat(prod.querySelector('.unit-price').textContent.replace('$', ''));
        totalPrice += qty * price;
    });
    totalPriceDisplay.textContent = (totalPrice / 2).toFixed(2) + ' $'; // Divide the total price by 2
};

document.querySelectorAll('.card-body').forEach(function(product) {
    var quantity = 0;
    var increaseBtn = product.querySelector('.fa-plus-circle');
    var decreaseBtn = product.querySelector('.fa-minus-circle');
    var trashBtn = product.querySelector('.fa-trash-alt');
    var heartBtn = product.querySelector('.fa-heart');
    var quantityDisplay = product.querySelector('.quantity');

    increaseBtn.addEventListener('click', function() {
        quantity++;
        quantityDisplay.textContent = quantity;
        updateTotalPrice();
    });

    decreaseBtn.addEventListener('click', function() {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
            updateTotalPrice();
        }
    });

    trashBtn.addEventListener('click', function() {
        quantity = 0;
        quantityDisplay.textContent = quantity;
        updateTotalPrice();
    });

    heartBtn.addEventListener('click', function() {
        heartBtn.classList.toggle('liked');
    });
});
