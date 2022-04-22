const products = [
  { id: 1, title: "Shirt", price: 150, image: "../solut/images/featured/1.jpg"},
  { id: 2, title: "Socks", price: 50, image: "../solut/images/featured/2.jpg"},
  { id: 3, title: "Jacket", price: 350, image: "../solut/images/featured/3.jpg"},
  { id: 4, title: "Shoes", price: 250, image: "../solut/images/featured/4.jpg"},
];

const getProductHTMLString = (title, price, image) => {
  return ` <div class="product-item">
           <h3>${title}</h3>
           <p>${price}</p>
           <img src="${image}" alt="">
          <button class="by-btn">Add to cart</button>
          </div>`;
};

const renderProducts = (productList) => {
  const list = productList.map((good) =>
    getProductHTMLString(good.title, good.price, good.image)
  );

  document.querySelector(".product-item").innerHTML = list.join('');
};

renderProducts(products);
