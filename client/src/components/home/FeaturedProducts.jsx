import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';


const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.products);


    return (
        <div className='w-[85vw] max-w-7xl mx-auto py-20 md:py-32 text-center bg-gradient-to-b from-white to-gray-50'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl capitalize tracking-tight mb-4 font-bold text-gray-900'>Featured Products</h2>
                <div className='w-24 h-1.5 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full'></div>
                <p className='text-gray-600 mt-6 text-lg max-w-2xl mx-auto'>Handpicked selection of our most popular and highly-rated technology products</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16'>
                {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="group">
                        <div className='relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                            <Link to={`/products/${product.id}`} className='flex items-center justify-center absolute bg-gradient-to-r from-primary-600/90 to-primary-800/90 w-full h-[280px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                                <span className='flex items-center justify-center bg-white w-14 h-14 rounded-full text-primary-600 transform group-hover:scale-110 transition-transform'>
                                    <FaSearch className="text-xl" />
                                </span>
                            </Link>
                            <div className="bg-gray-50 p-4 h-[280px] flex items-center justify-center">
                                <img className='w-full h-full block object-contain rounded-lg' src={product.thumbnail} alt={product.name} />
                            </div>
                        </div>
                        <footer className='flex mt-5 justify-between items-center px-2'>
                            <h4 className='mb-0 font-semibold text-gray-900 text-lg'>{product.name}</h4>
                            <p className='mb-0 font-bold text-primary-600 text-xl'>{formatPrice(product.price)}</p>
                        </footer>
                    </div>
                ))}
            </div>
            <Link className='inline-block mx-auto text-center px-10 py-4 mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-xl rounded-full hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 uppercase tracking-wide' to='/products'>
                    View All Products →
            </Link>
        </div>
    );
};


export default FeaturedProducts;