// const products = [
//   { id: 1, title: "Shirt", price: 150, image: "../solut/images/featured/1.jpg"},
//   { id: 2, title: "Socks", price: 50, image: "../solut/images/featured/2.jpg"},
//   { id: 3, title: "Jacket", price: 350, image: "../solut/images/featured/3.jpg"},
//   { id: 4, title: "Shoes", price: 250, image: "../solut/images/featured/4.jpg"},
// ];

// const getProductHTMLString = (title, price, image) => {
//   return ` <div class="product-item">
//            <h3>${title}</h3>
//            <p>${price}</p>
//            <img src="${image}" alt="">
//           <button class="by-btn">Add to cart</button>
//           </div>`;
// };

// const renderProducts = (productList) => {
//   const list = productList.map((good) =>
//     getProductHTMLString(good.title, good.price, good.image)
//   );

//   document.querySelector(".product-item").innerHTML = list.join('');
// };

// renderProducts(products);

// class GoodsList {
//   constructor() {
//     this.goods = [];
//   }
//   fetchGoods () {
//     this.goods = [
//       { title: 'Shirt', price: 150 },
//       { title: 'Socks', price: 50 },
//       { title: 'Jacket', price: 350 },
//       { title: 'Shoes', price: 250 },
//     ];
//   }
//   render() {
//     let listHtml = '';
//     this.goods.forEach(good => {
//       const goodItem = new GoodsItem(good.title, good.price);
//       listHtml += goodItem.render();
//     });
//     document.querySelector('.goods-list').innerHTML = listHtml;
//   }

// }
// const list = new GoodsList();
//   list.fetchGoods();
//   list.render();
function makeGETRequest(url, callback) {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class GoodsList {
  // ...
  fetchGoods() {
  makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
  this.goods = JSON.parse(goods);
  })
  }
  // ...
  }
  class GoodsItem {
    // ...
    render() {
    return `<div
    class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
    }
    class GoodsList {
    // ...
    fetchGoods() {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
    this.goods = JSON.parse(goods);
    })
    }
    render() {
    let listHtml = '';
    this.goods.forEach(good => {
    const goodItem = new GoodsItem(good.product_name, good.price);
    listHtml += goodItem.render();
});
document.querySelector('.goods-list').innerHTML = listHtml;
}
}
const list = new GoodsList();
list.fetchGoods();
list.render();
