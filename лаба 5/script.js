<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>BioHarmony - Главная</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="container">
            <a href="index.html" class="logo">BioHarmony</a>
            <nav>
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="cart.html">Корзина <span id="cart-count">(0)</span></a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Натуральные БАДы для здоровья</h1>
            </div>
        </section>

        <section class="featured-products">
            <div class="container">
                <h2>Популярные товары</h2>
                <div class="product-grid">
                    <!-- Товар 1 -->
                    <div class="product-card">
                        <img src="https://via.placeholder.com/200" alt="Омега-3">
                        <h3>Омега-3 950 мг</h3>
                        <div class="price">1500 руб.</div>
                        <!-- Прямой вызов функции -->
                        <button onclick="addToCart('Омега-3 950 мг', 1500)">В корзину</button>
                    </div>

                    <!-- Товар 2 -->
                    <div class="product-card">
                        <img src="https://via.placeholder.com/200" alt="Витамин D3">
                        <h3>Витамин D3 2000 МЕ</h3>
                        <div class="price">990 руб.</div>
                        <button onclick="addToCart('Витамин D3 2000 МЕ', 990)">В корзину</button>
                    </div>

                    <!-- Товар 3 -->
                    <div class="product-card">
                        <img src="https://via.placeholder.com/200" alt="Мелатонин">
                        <h3>Мелатонин 3 мг</h3>
                        <div class="price">1200 руб.</div>
                        <button onclick="addToCart('Мелатонин 3 мг', 1200)">В корзину</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
