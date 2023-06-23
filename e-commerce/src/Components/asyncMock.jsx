const products = [
    {
        id: '1',
        name: 'Brown Sugar Milk',
        price: 120,
        category: 'cold-drinks',
        img: '/assets/BrownSugarMilk.jpg',
        stock: 15,
        description: 'Fresh Milk with Brown Sugar Pearls'
    },
    {
        id: '2',
        name: 'Salted Caramel Coffee',
        price: 100,
        category: 'hot-drinks',
        img: '/assets/SaltedCaramel.jpg',
        stock: 20,
        description: 'Hot Coffee with Salted Caramel flavor'
    },
    {
        id: '3',
        name: 'Cheese-Brule Brown Sugar',
        price: 150,
        category: 'signature-drinks',
        img: '/assets/CheeseBrule.jpg',
        stock: 10,
        description: 'Sweet milk flavor, with cheese brule and brown sugar pearls'
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};
