class Cart {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.listeners = [];
  }

  saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.notify();
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.cart));
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  addItem({ id, quantity, price }) {
    const item = this.cart.find((item) => item.id === id);
    if (item) {
      item.quantity += quantity;
    } else {
      this.cart.push({ id, quantity, price });
    }

    this.saveToLocalStorage();
  }

  editItem({ id, quantity }) {
    if (quantity === 0) {
      this.removeItem(id);
    } else {
      const item = this.cart.find((item) => item.id === id);
      if (item) item.quantity = quantity;
    }
    this.saveToLocalStorage();
  }

  removeItem(id) {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveToLocalStorage();
  }

  get quantity() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  get subtotal() {
    return this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }
}

const cart = new Cart();

export default cart;
