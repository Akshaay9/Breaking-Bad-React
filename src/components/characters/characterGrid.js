import React from 'react'
import CharacterItem from "./characterItem"
import Spinner from "../ui/Spinner"

function characterGrid({isLoading,items}) {
   
    return isLoading? <h1><Spinner/></h1>:
    <section className="cards">
    {items.map(item=>(
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
    ))}
    </section>
}

export default characterGrid
