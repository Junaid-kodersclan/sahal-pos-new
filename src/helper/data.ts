import logo from "../../public/assets/img/poslogo.png";
import authorImg from "../../public/assets/img/plug.png";

export const HEADER_DATA = {
  logo: logo,
  author: "Manjay Gupta",
  authorImg: authorImg,
  designer: "UX/UI Designer",
};

export const CURRENCY_LIST = [
  { value: "PKR", label: "PKR" },
  { value: "USD", label: "USD" },
];

export const PRODUCT_FILTER_STOCK_ITEM = [
  { title: "Out of stock", id: "OUT_OF_STOCK" },
  { title: "Minimum", id: "LOW_STOCK" },
  { title: "Above the Minimum", id: "ABOVE_THE_MINIMUM" },
];

export const CATEGORY_LIST = [
  {
    id: 1,
    userId: 1,
    storeId: 1,
    title: "clothes",
    isForUpdate: false,
  },
  {
    id: 2,
    userId: 1,
    storeId: 1,
    title: "devices",
    isForUpdate: false,
  },
  {
    id: 3,
    userId: 1,
    storeId: 1,
    title: "glass",
    isForUpdate: false,
  },
  {
    id: 4,
    userId: 1,
    storeId: 1,
    title: "pen",
    isForUpdate: false,
  },
  {
    id: 5,
    userId: 1,
    storeId: 1,
    title: "mobile",
    isForUpdate: false,
  },
  {
    id: 6,
    userId: 1,
    storeId: 1,
    title: "pot",
    isForUpdate: false,
  },
  {
    id: 7,
    userId: 1,
    storeId: 1,
    title: "wall clock",
    isForUpdate: false,
  },
  {
    id: 8,
    userId: 1,
    storeId: 1,
    title: "keys",
    isForUpdate: false,
  },
  {
    id: 9,
    userId: 1,
    storeId: 1,
    title: "bell",
    isForUpdate: false,
  },
  {
    id: 10,
    userId: 1,
    storeId: 1,
    title: "remote",
    isForUpdate: false,
  },
];

export const PRODUCT_LIST = [
  {
    id: 1,
    title: "Product_1",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 2,
    title: "Product_2",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 3,
    title: "Product_3",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 4,
    title: "Product_4",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 5,
    title: "Product_5",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 6,
    title: "Product_6",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 7,
    title: "Product_7",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 8,
    title: "Product_8",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 9,
    title: "Product_9",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
  {
    id: 10,
    title: "Product_10",
    storeId: 1,
    categoryId: ["1", "2", "3"],
    brandId: 1,
    stock: 20,
    price: 200,
    discount: 20,
    actualCost: 180,
    desc: "product desc",
    sku: "product sku",
    qty: 20,
    gallery: [
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    ],
  },
];

export const TRANSACTION_LIST = [
  {
    id: 1,
    storeId: 2,
    discount: 100,
    customerId: 0,
    productsCount: 5,
    totalPrice: 5000,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 2,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 3,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 4,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 5,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 6,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 7,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 8,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 9,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 10,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 11,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
  {
    id: 12,
    storeId: 2,
    discount: 0,
    customerId: 1,
    productsCount: 5,
    totalPrice: 15548,
    discountCoupon: "",
    status: "complete",
    receiveAmount: 90000,
    paymentMethod: "cash",
    deletedAt: new Date().toDateString(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    note: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    //
    qty: 1,
    price: 0,
    orderId: 0,
    productId: 1,
    product: { title: "", gallery: [""] },
  },
];

export const ORDER_SIDEBAR_DATA = [
  {
    deletedAt: null,
    id: 1,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_1",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 2,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_2",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 3,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_3",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 4,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_4",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 5,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_5",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 6,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_6",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 7,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_7",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 8,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_8",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 9,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_9",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
  {
    deletedAt: null,
    id: 10,
    qty: 5,
    price: 299,
    orderId: 18,
    productId: 43,
    product: {
      title: "product_10",
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    },
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  },
];

export const NOTIFICATION_LIST = [
  {
    id: 1,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 2,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 3,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 4,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 5,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 6,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 7,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 8,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 9,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 10,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 11,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 12,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 13,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 14,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 15,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 16,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 17,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 18,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 19,
    time: "5s",
    message: "The item tomato is over.",
  },
  {
    id: 20,
    time: "5s",
    message: "The item tomato is over.",
  },
];

export const CUSTOMER_LIST = [
  {
    id: 1,
    name: "Ahsan Abrar",
    phone: "923032962228",
  },
  {
    id: 2,
    name: "Junaid Ahmed",
    phone: "923032962002",
  },
  {
    id: 3,
    name: "Mubashir Altaf",
    phone: "9230329621222",
  },
  {
    id: 4,
    name: "Hasan Altaf",
    phone: "923032962220",
  },
  {
    id: 5,
    name: "Siddique Qazi",
    phone: "923032962222",
  },
  {
    id: 6,
    name: "Aera Gera",
    phone: "923032962222",
  },
  {
    id: 7,
    name: "Mr Mac",
    phone: "923032962222",
  },
  {
    id: 8,
    name: "Daud Malik",
    phone: "923032962222",
  },
  {
    id: 9,
    name: "Shayan Abbasi",
    phone: "923032962222",
  },
  {
    id: 10,
    name: "Ali",
    phone: "923032962222",
  },
];
