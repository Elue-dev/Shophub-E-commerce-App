import React, { useState, createContext, useReducer, useEffect } from 'react'
import { StoreReducer, productReducer } from './StoreReducer'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const [state, dispatch] = useReducer(StoreReducer, {
        cart:[],
        wishlist: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        searchQuery: ''
    })

    return(
        <StoreContext.Provider value={{
            products,
            setProducts,
            currentPage,
            setCurrentPage,
            postsPerPage,
            paginate,
            state,
            dispatch,
            productState,
            productDispatch
        }}>
            {children}
        </StoreContext.Provider>
    )
}