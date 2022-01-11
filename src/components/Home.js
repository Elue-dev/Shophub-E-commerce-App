import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { SingleProduct } from './SingleProduct'
import { Pagination } from './Pagination';
import { Footer } from './Footer';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

export const Home = () => {

    const { products, setProducts, currentPage, postsPerPage } = useContext(StoreContext)

    const { productState: { searchQuery, sort }, productDispatch } = useContext(StoreContext)

    const transformedProducts = () => {
      let sortedProducts = products

      if (sort) {
        sortedProducts = sortedProducts.sort((a,b) => 
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
        )
      }

      if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) =>
          prod.title.toLowerCase().includes(searchQuery)
        );
      }
  
      return sortedProducts;
    }
    

    useEffect(() => {
        storeData()
      },[])

      const storeData = async () => {
        const storeApi = await fetch ('https://fakestoreapi.com/products')
        const response = await storeApi.json()
        setProducts(response)
      }

      const indexOfLastPost = currentPage * postsPerPage
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = transformedProducts().slice(indexOfFirstPost, indexOfLastPost)

    return (
        <>
        <input type='search' placeholder='Search product...' className='search' onChange={(e) => {
          productDispatch({
            type: 'FILTER_BY_SEARCH',
            payload: e.target.value
          })
        }} /><br/>
        <div className='radio'>
          <div>
            <input type='checkbox' name='sort1' className='radio1' onChange={()=> productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'lowToHigh'
           })} 
            checked={sort === 'lowToHigh' ? true : false}
          /><span className='sort'>Low to high</span>
          </div>

          <br/> 

          <div>
            <input type='checkbox' name='sort2' onChange={()=> productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'highToLow'
              })}
              checked={sort === 'highToLow' ? true : false}
            /><span className='sort'>High to low</span>
          </div>

          <div><button onClick={() => window.location.reload()} className='clear_filters'>Default Sorting</button></div>
        </div>

            {products.length === 0 ? (
              <div className='spinner'>
                <FontAwesomeIcon icon='spinner' size='3x' spin />
              </div>
            ) : (
                  <>
                    <h1 className='movie_grid_title'>Products</h1>
                    <div className='movie-grid wrapper'>
                      {currentPosts.map(product => (
                          <SingleProduct product={product} key={product.id} />
                      ))}
                    </div>
                  </>
            )}
            <Pagination />
            {products.length ? <Footer /> : ''}
        </>
    )
}
