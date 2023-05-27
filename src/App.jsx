import React, { useEffect, useCallback, useState } from 'react'
import AdminWrapper from './AdminWrapper'

export default function App() {
  const [products, setProducts] = useState([])

  // STEP 2 Get data use callback
  const getData = useCallback(async () => {
    // await เพื่อรอข้อมูล
    const response = await fetch('https://dummyjson.com/products')
    const jsonData = await response.json()

    // console.log(jsonData)

    // เช็คข้อมูลก่อน
    if (jsonData.products) {
      setProducts(jsonData.products)
    }
  }, [])

  // STEP 1 First called when component render success
  useEffect(() => {
    console.log('first')
    getData()
  }, [getData])

  // debug products
  // console.log(products)

  return (
    <>
      <AdminWrapper>
        <h3>Home</h3>
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        {/* Show */}

        {/* {products.map((item, index) => (<p key={index}></p>))} */}
        {products.map((product, index) => (
          <div key={index} className="border border-indigo-600 mb-4 p-2 rounded-md">
            <p>{product.id}</p>
            <p>{product.title}</p>
            <img src={product.thumbnail} alt="" />
          </div>
        ))}
      </AdminWrapper>
    </>
  )
}
