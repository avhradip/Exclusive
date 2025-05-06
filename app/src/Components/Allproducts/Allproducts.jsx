import React, { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Allproductscard from './Allproductscard';
import { CardData } from '../../App';

const Allproducts = () => {
    const { search } = useContext(CardData);
    const [allproductscatd, setAllproductscard] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [lowhigh,setlowhigh]=useState([])
    const [highLow,sethighLow]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                if (res.ok) {
                    const data = await res.json()
                    setAllproductscard(data)
                    setFilteredProducts(data)
                }
            } catch (error) {
                console.log('Error: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const searchedProduct = allproductscatd.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredProducts(searchedProduct)
    }, [search, allproductscatd])


    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        );
    }

    function lowToHigh() {
        const sorted = [...allproductscatd].sort((a, b) => a.price - b.price)

        setlowhigh(sorted)

        if (lowhigh.length !== 0) {
            console.log(lowhigh);
        }else{
            
        }
    }

    function highToLow() {
        const sorted = [...allproductscatd].sort((a, b) => b.price - a.price)

        sethighLow(sorted)

        if (highLow.length !== 0) {
            console.log(highLow);
        }
    }


    return (
        <div>
            <button className='hover:underline' onClick={lowToHigh}>low to high</button>
            /
            <button className='hover:underline' onClick={highToLow}>low to high</button>
            <div className="flex flex-1 flex-wrap justify-center md:justify-around gap-10 m-4 mx-20 my-10">
                {filteredProducts.length !== 0 ? (
                    filteredProducts.map((item) => (
                        <Allproductscard item={item} key={item.id} />
                    ))
                ) : (
                    <div className=" flex flex-col items-center justify-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp" alt="" />
                        <p className="text-2xl font-semibold text-gray-600 mb-2">No products found</p>
                        <p className="text-gray-500 text-center">
                            Try adjusting your search filters or browsing other categories.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Allproducts;
