import React, { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Loading from '../../Components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

import { RxCross1 } from "react-icons/rx";

function Search() {
    const navigate = useNavigate()
    const [search, setSearch] = useState("");
    const [product, setProducts] = useState([]);
    const [finalProducts, setFinalProducts] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        setFinalProducts([]);
        fetchData();

    }, []);

    useEffect(() => {
        if (search == "") {
            setFinalProducts([]);
            return;
        }
        const data = product.filter((item) =>
            item?.title?.toLowerCase().includes((search || '').toLowerCase())
        );

        const timer = setTimeout(() => {
            if (data) {
                setFinalProducts(data);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [product, search]);

    if (product.length < 1) return <Loading />;

    return (
        <div className='min-h-screen max-h-full md:mx-24 mx-2 py-4 flex flex-col items-center'>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 w-full px-4">
                <button onClick={() => navigate("/")} className="self-start sm:self-auto">
                    <FaArrowLeft className="text-xl" />
                </button>

                <div className="flex bg-gray-100 w-full h-10 items-center rounded-md px-2">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="flex-1 bg-transparent text-sm outline-none px-2"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        spellCheck="false"
                    />
                    {
                        search.length >= 1 ?
                            (
                                <RxCross1 onClick={() => setSearch("")} />
                            )
                            :
                            (
                                ''
                            )
                    }
                </div>
            </div>

            {
                finalProducts.length === 0
                    ?
                    (
                        search === "" ?
                            (
                                <p className='items-center mt-4'>Search product</p>
                            ) : (
                                <div className=" flex flex-col items-center justify-center">
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp" alt="" />
                                    <p className="text-2xl font-semibold text-gray-600 mb-2">No products found</p>
                                    <p className="text-gray-500 text-center">
                                        Try adjusting your search filters or browsing other categories.
                                    </p>
                                </div>
                            )
                    )
                    :
                    (
                        <div className="w-full mt-4 flex flex-col gap-3 justify-center bg-gray-100 p-2 rounded-xl duration-1000">
                            {finalProducts.map((item) => (
                                <div key={item?.id} className='flex items-center gap-4  cursor-pointer hover:bg-blue-300 px-4' onClick={() => navigate(`/detailspage/${item.id}`)} >
                                    <img src={item?.image} alt={item?.title} width={20} />
                                    <p>{item?.title}</p>
                                </div>
                            ))}
                        </div>
                    )}


        </div>
    );
}

export default Search;
