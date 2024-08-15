import { useState } from "react"

export function useSearch(){
    const [searched,setSearched] = useState(false)
    const [query,setQuery] = useState("")

    function startSearch(newQuery){
        setQuery(newQuery)
        setSearched(true)
    }

    function stopSearch(){
        setSearched(false)
    }

    return {
        searched,
        query,
        startSearch,
        stopSearch
    }
}