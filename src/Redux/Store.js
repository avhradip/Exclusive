import {configureStore} from '@reduxjs/toolkit'
import productSlice from './ProductSlice'
export default configureStore ({
    reducer:{
        product:productSlice
    }
    
})