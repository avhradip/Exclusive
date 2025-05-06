import React, { useEffect, useState } from 'react'
import { CardData } from '../../App'

const Provider = ({ children }) => {


    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [wishlistEd, setWishlistEd] = useState(false);
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [categorie, setCategorie] = useState('')
    const [finalData, setFinalData] = useState([])




    const totalWishlist = wishlist.length

    const totalValue = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

    const total = Math.floor(totalValue)

    const itemCount = cart.length



    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('cart'))
        const localStorageData2 = JSON.parse(localStorage.getItem('wishlist'))

        if (localStorageData?.length && cart?.length == 0) {
            setCart(localStorageData)
        }
        if (localStorageData2?.length && wishlist?.length == 0) {
            setWishlist(localStorageData2)
        }
    }, [])


    useEffect(() => {
        if (cart.length >= 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        if (wishlist.length >= 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        }
    }, [JSON.stringify(cart), JSON.stringify(wishlist)])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (response.ok) {
                    const data = await response.json()
                    setData(data)
                }

            } catch (e) {
                console.log('Error' + e.massage());

            }
        }
        fetchData()
    }, [])


    function addToCard(data) {
        const sameItem = cart.find((item) => item?.id === data?.id)
        if (!sameItem) {
            setCart((prev => [...prev, data]))
        } else {
            const update = cart.map((item) => {
                if (item?.id === data?.id) {
                    return data
                } else {
                    return item
                }
            })
            setCart(update)
        }
    }

    function deleteFun(item) {
        setCart(cart.filter((ele) => ele.id !== item.id))
    }

    function remove(item) {
        setWishlist(wishlist.filter((ele) => ele.id !== item.id))
    }

    function EditIncrement(item) {
        setCart(prevCart =>
            prevCart.map(ele =>
                ele.id === item.id ? { ...ele, qty: ele.qty + 1 } : ele
            )
        );
    }

    function EditDecrement(item) {
        setCart(prevCart =>
            prevCart.map(ele =>
                ele.id === item.id && ele.qty > 1 ? { ...ele, qty: ele.qty - 1 } : ele
            )
        );
    }


    function addWishlistFun(item) {
        const exists = wishlist.some((ele) => ele.id === item.id)
        if (!exists) {
            setWishlist(prev => [...prev, item])
        }
    }


    function showCategorie(item) {
        const data = item?.name
        setCategorie(data)

    }



    useEffect(() => {
        const filteredData = data.filter((item) => item.category === categorie)
        setFinalData(filteredData)
    }, [data, categorie])




    return (
        <CardData.Provider value={{ cart, setCart, addToCard, deleteFun, EditDecrement, EditIncrement, itemCount, total, wishlist, setWishlist, addWishlistFun, totalWishlist, remove, wishlistEd, setWishlistEd, search, setSearch, showCategorie, data, setData, categorie, setCategorie, finalData, setFinalData }}>
            {children}
        </CardData.Provider>
    )
}

export default Provider