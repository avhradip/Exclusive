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
    const [order, setOrder] = useState([])




    const totalWishlist = wishlist.length

    const totalValue = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

    const total = Math.floor(totalValue)

    const itemCount = cart.length



    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('cart'))
        const localStorageData2 = JSON.parse(localStorage.getItem('wishlist'))
        const localStorageData3 = JSON.parse(localStorage.getItem('order'))


        if (localStorageData?.length && cart?.length == 0) {
            setCart(localStorageData)
        }
        if (localStorageData2?.length && wishlist?.length == 0) {
            setWishlist(localStorageData2)
        }
        if (localStorageData3?.length && order?.length == 0) {
            setOrder(localStorageData3)
        }
    }, [])


    useEffect(() => {
        if (cart.length >= 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        if (wishlist.length >= 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        }
        if (order.length >= 0) {
            localStorage.setItem('order', JSON.stringify(order))
        }
    }, [JSON.stringify(cart), JSON.stringify(wishlist), JSON.stringify(order)])



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
        setCategorie(data.toLowerCase())

    }

    useEffect(() => {
        const filteredData = data.filter((item) => item.category === categorie)
        setFinalData(filteredData)
    }, [data, categorie])

    function clearAll() {
        setCart([])
    }

    function updateOderHistory() {
        setOrder(prev => [
            ...prev,
            { items: [...cart], date: Date.now() }
        ]);
    }

    
    function moveAllToBag() {
        const uniqueItems = wishlist
            .filter(wishItem => !cart.some(cartItem => cartItem.id === wishItem.id))
            .map(item => ({ ...item, qty: 1 }));

        setCart(prev => [...prev, ...uniqueItems]);
        setWishlist([])
        
    }








    return (
        <CardData.Provider value={{ cart, setCart, addToCard, deleteFun, EditDecrement, EditIncrement, itemCount, total, wishlist, setWishlist, addWishlistFun, totalWishlist, remove, wishlistEd, setWishlistEd, search, setSearch, showCategorie, data, setData, categorie, setCategorie, finalData, setFinalData, clearAll, order, setOrder, updateOderHistory, moveAllToBag }}>
            {children}
        </CardData.Provider>
    )
}

export default Provider