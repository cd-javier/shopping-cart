import cart from '../cart';

export default async function updateCartAction({ request }) {
  const formData = await request.formData();
  const id = parseInt(formData.get('id'));
  const quantity = parseInt(formData.get('quantity'));

  cart.editItem({ id, quantity });
  return null;
}
