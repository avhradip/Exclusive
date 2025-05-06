import React, { useEffect, useState, useContext } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom'
import Detailscard from './Detailscard'
import { CardData } from '../../App'

const Detailspage = () => {
    const { cart } = useContext(CardData)
    const [wishlistEd, setWishlistEd] = useState(false)
    const [count, setCount] = useState(1)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                if (res.ok) {
                    const data = await res.json()
                    setData(data)
                }
            } catch (error) {
                console.log('Error' + error.massage());

            } finally {
                setLoading(false)
            }
        }
        if (id) {
            fetchData();
        }

    }, [id])
    

    useEffect(() => {
        if (id && cart?.length) {

            const quentity = cart?.find((item) => item.id == id)
            setCount(quentity?.qty ?? 1)
        }
    }, [id, JSON.stringify(cart)])

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )

    }

    return (
        <div>
            <Detailscard item={data} count={count} setCount={setCount} wishlistEd={wishlistEd} setWishlistEd={setWishlistEd} />
        </div>
    )
}


export default Detailspage