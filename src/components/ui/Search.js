import React from 'react'
import {useState} from "react"

function Search({getQuery}) {
    const [text,setText]=useState("")

    const onChange=(q)=>{
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
        <form> 
        <input className="form-control"
         type="text"
         value={text}
         onChange={(e)=>onChange(e.target.value)}
         placeholder="Search Characters"
        />

        </form>

        </section>
    )
}

export default Search
