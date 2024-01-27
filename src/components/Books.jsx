import React, { useEffect, useState } from 'react'
import './Books.css'

function Books() {
    const[books,setBooks]=useState([])
   const[search,setSearch]=useState("")
    useEffect(()=>{
        getBooksdata()
    },[search])
    async function getBooksdata(){
        const data=await fetch(`https://openlibrary.org/search.json?title=${search}`)
        const bks=await data.json()
        setBooks(bks.docs)
    }
  return (
    <div className='bookmain'>
        <input className='input' placeholder='Search' type="text" name='' id='' onChange={(e)=>{setSearch(e.target.value)}} />
        {console.log(books)}
        {
            books.slice(0,20).map((list)=>(
                <div className='books'>
                    <h1 className='booktitle'>{list.title}</h1>
                    <img className='booking' src={"https://covers.openlibrary.org/b/id/"+list.cover_i+"-L.jpg"}alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default Books