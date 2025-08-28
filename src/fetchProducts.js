const productCache = new Map();

async function fetchProduct(id) {
  const product = productCache.get(id);
  if (product) return product;

  return fetch('https://dummyjson.com/products/' + id)
    .then((res) => res.json())
    .then((res) => {
      productCache.set(id, res);
      return res;
    });
}

async function fetchMultipleProducts(num) {
  const ids = new Set();
  while (ids.size < num) {
    ids.add(Math.floor(Math.random() * 194) + 1);
  }

  const productPromises = [...ids].map((id) => fetchProduct(id));
  return await Promise.all(productPromises);
}

async function fetchSearch(query) {
  const response = await fetch(
    'https://dummyjson.com/products/search?q=' + query
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  if (data.products.length > 0) {
    data.products.forEach((product) => productCache.set(product.id, product));
  }

  return data.products;
}

export { fetchProduct, fetchMultipleProducts, fetchSearch };
