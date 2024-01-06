export const addItemToCart = (cartItems, product) => {
    
    const porductToAdd = cartItems.find((item) => item.id === product.id);
    
    if (porductToAdd) {
        return cartItems.map((item) => {
            return item.id === product.id
                ? { ...item, quantity: item.quantity + 0.25 }
                : item;
    })
    } else {
        return [
            ...cartItems, {
                ...product, quantity: 0.25
            }
        ]
    }
}

export const removeItemFromCart = (cartItems, product) => {
    
    const porductToRemove = cartItems.find((item) => item.id === product.id);
    
    if (porductToRemove.quantity <= 0.25) {
        return cartItems.filter((item) => item.id !== product.id);
    } else {
        return cartItems.map((item) => {
            return item.id === product.id
                ? { ...item, quantity: item.quantity - 0.25 }
                : item;
        })
    }
}
