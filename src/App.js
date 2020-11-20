import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios"
import "./App.css"
import Header from "./components/ui/Header"
import Character from "./components/characters/characterGrid"
import Search from "./components/ui/Search"

const App=()=>{
  const[items,setItems]=useState([])
  const[isLoading,setLoading]=useState(true)
  
  const[query,setQuery]=useState("")

useEffect(()=>{
  const fetchItems=async()=>{
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    )
    setItems(result.data)
    setLoading(false)

  }
  fetchItems()
},[query])


  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <Character isLoading={isLoading} items={items} />
      
    </div>
  );
}

export default App;
