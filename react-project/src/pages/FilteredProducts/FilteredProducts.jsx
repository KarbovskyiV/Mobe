import React, { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import FiltersList from '../../components/FiltersList/FiltersList';

import { useSelector } from 'react-redux';


import style from "./style.scss";

const ProductPage = ({ }) => {
    const [characteristics, setCharacteristics] = useState([
        { name: 'Iphone', isChecked: false },
        { name: 'Характеристика 2', isChecked: false },

    ]);
    const products = useSelector((state) => state.products.products);


    const [sortType, setSortType] = useState('');

    const filteredProducts = products
        .filter((product) =>
            characteristics.every((char) => !char.isChecked || product.category.includes(char.name))
        )
        
        .sort((a, b) => {
            if (sortType === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (sortType === 'desc') {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });


    const handleCharacteristicChange = (index) => {
        const updatedCharacteristics = [...characteristics];
        updatedCharacteristics[index].isChecked = !updatedCharacteristics[index].isChecked;
        setCharacteristics(updatedCharacteristics);
    };

    const handleSortChange = (value) => {
        setSortType(value);
    };

    return (
        <div className='filter__container'>
            <Filters
                characteristics={characteristics.map((char) => char.name)}
                onCharacteristicChange={handleCharacteristicChange}
                onSortChange={handleSortChange}
            />
            <FiltersList products={filteredProducts} />
        </div>
    );
};

export default ProductPage;



