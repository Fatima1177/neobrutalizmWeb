import img1 from '../assets/productsImg/img1.svg'
import img2 from '../assets/productsImg/img2.svg'
import img3 from '../assets/productsImg/img3.svg'


export const products = [
    {
        _id: 1,
        img: img1,
        colors: ['blue', 'white'],
        title: 'Daisy Dress',
        stockCount: 16,
        starPerFive: 4,
        hasDiscount: true,
        beforePrice: (139.9).toFixed(2),
        currentPrice: (70).toFixed(2)
    },
    {
        _id: 2,
        img: img2,
        colors: ['purple'],
        title: 'Denim Skirt',
        stockCount: 8,
        starPerFive: 5,
        hasDiscount: false,
        beforePrice: null,
        currentPrice: (49).toFixed(2)
    },
    {
        _id: 3,
        img: img1,
        colors: ['blue', 'white'],
        title: 'Denim Skirt',
        stockCount: 16,
        starPerFive: 5,
        hasDiscount: true,
        beforePrice: (139.9).toFixed(2),
        currentPrice: (70)
    },
    {
        _id: 4,
        img: img3,
        colors: ['blue', 'white'],
        title: 'Denim Skirt',
        stockCount: 16,
        starPerFive: 2,
        hasDiscount: false,
        beforePrice: null,
        currentPrice: (70)
    },
]