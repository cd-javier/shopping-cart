const productCache = new Map();

async function fetchProduct(id) {
  const product = productCache.get(id);
  if (product) {
    console.table(productCache)
    return product;
  }

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

export { fetchProduct, fetchMultipleProducts };
