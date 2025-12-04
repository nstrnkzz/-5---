document.addEventListener('DOMContentLoaded', () => {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartIcon() {
        const cartIcon = document.querySelector('.cart-icon');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartIcon) {
            cartIcon.textContent = `Корзина (${totalItems})`;
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // --- Логика для index.html ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const productId = card.dataset.productId;
            const productName = card.dataset.productName;
            const productPrice = parseInt(card.dataset.productPrice, 10);

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }
            
            saveCart();
            updateCartIcon();
            alert(`${productName} добавлен в корзину!`);
        });
    });

    // --- Логика для cart.html ---
    if (document.getElementById('cart-items')) {
        const cartItemsContainer = document.getElementById('cart-items');
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
        } else {
            let total = 0;
            cartItemsContainer.innerHTML = cart.map(item => {
                total += item.price * item.quantity;
                return `
                    <div class="cart-item">
                        <span>${item.name} (x${item.quantity})</span>
                        <strong>${item.price * item.quantity} руб.</strong>
                    </div>
                `;
            }).join('') + `<div class="cart-item"><strong>Итого:</strong><strong>${total} руб.</strong></div>`;
        }

        const checkoutForm = document.getElementById('checkout-form');
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');

            // Сброс ошибок
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('input.error').forEach(el => el.classList.remove('error'));

            // Валидация имени
            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('error');
                nameInput.nextElementSibling.textContent = 'Пожалуйста, введите ваше имя.';
            }

            // Валидация email
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                isValid = false;
                emailInput.classList.add('error');
                emailInput.nextElementSibling.textContent = 'Пожалуйста, введите корректный email.';
            }

            if (isValid) {
                alert('Заказ успешно оформлен! Мы скоро с вами свяжемся.');
                localStorage.removeItem('cart'); // Очищаем корзину
                window.location.href = 'index.html'; // Возвращаем на главную
            }
        });
    }
    
    // Первоначальное обновление иконки при загрузке любой страницы
    updateCartIcon();
});
