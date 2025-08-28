import cart from '../cart';

export default async function removeFromCartAction({ request }) {
  const formData = await request.formData();
  const id = parseInt(formData.get('id'));

  cart.removeItem(id);
  return null;
}
