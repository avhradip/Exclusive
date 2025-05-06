import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    data:[],
    error:false,
    loading:false,
    count:0
}

export const fetchData = createAsyncThunk('/item/listing',async ()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json()
})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false,
            state.data=action.payload,
            state.error=false
        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.loading=false,
            state.data=[],
            state.error=true
        })
    }
})

export default productSlice.reducer