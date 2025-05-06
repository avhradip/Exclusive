import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default Loading