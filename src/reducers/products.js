var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://cdn.shopify.com/s/files/1/1161/3498/products/apple-telefono-celular-iphone-7-rojo-1_4ec6dd7e-5cec-43f9-b677-c6ab08fb68c2_large.jpg?v=1496168837',
        description : 'Sản phẩm do Apple sản phẩm',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung Galaxy S7',
        image : 'https://www.kemik.gt/wp-content/uploads/2016/06/samsung-galaxy-s7-32gb-lte-black.jpg',
        description : 'Sản phẩm do Samsung sản phẩm',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://www.omall.co.ke/wp-content/uploads/F1S_5.jpg',
        description : 'Sản phẩm do China sản phẩm',
        price : 450,
        inventory : 5,
        rating :5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;