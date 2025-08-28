import cart from '../cart';

export default async function addToCartAction({ request }) {
  const formData = await request.formData();
  const id = parseInt(formData.get('id'));
  const quantity = parseInt(formData.get('quantity'));
  const price = parseFloat(formData.get('price'));

  cart.addItem({ id, quantity, price });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cart:open'));
  }

  return null;
}
