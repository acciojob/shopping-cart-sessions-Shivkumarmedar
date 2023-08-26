 function updateCartDisplay(cart) {
            const cartList = document.getElementById('cart-list');
            cartList.innerHTML = '';

            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `Product ${item.id} - $${item.price}`;
                cartList.appendChild(li);
            });
        }

        // Function to handle adding items to the cart
        function addToCart(event) {
            const productId = event.target.parentElement.getAttribute('data-product-id');
            const productPrice = parseInt(event.target.parentElement.textContent.match(/\d+/)[0]);

            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            cart.push({ id: productId, price: productPrice });

            sessionStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay(cart);
        }

        // Add event listeners to "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });

        // Initial update of cart display
        const initialCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        updateCartDisplay(initialCart);