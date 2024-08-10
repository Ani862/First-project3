import React, { useEffect, useState } from 'react'
import './Contact.css';

function Product() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
            .then((res)=>res.json())
            .then((res)=>setData(res.products))
    },[])
  return (
    <div className='product'>
        <h1>Product</h1>
        <div className='productCont'>

        {data.map((e)=>{
            return(
              <div>
                 <img src="{e.images[0]}" style={{width:"200px"}}/>
                <h4>{e.title}</h4>
             </div>
            )
        })}
        </div>
    </div>
  )
}

export default Product