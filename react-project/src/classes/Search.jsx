/* eslint-disable react/prop-types */
import { useSearch } from "../hooks/useSearch"

const names = ["John", "Ada", "Mfreke","Praise","Josh","Bright","Joy","Micheal","Progress","Victor"]

function SearchBar({setQuery,stopSearch}){
    const handleSearch = (e)=>{
        console.log(e)
        const value = e.target.value
        setQuery(value)
    }
  return(
    <div>
        <input onChange={handleSearch} placeholder="Search by Name"/>
        <button onClick={stopSearch}>Close</button>
    </div>
  )
}
function NamesList({query}){
    const results = names.filter((name) =>{
        return name.toLowerCase()
        .includes(
            query.toLowerCase().trim()
        )
    })
    const resultsEL = results.map((name) => <p className="name-p" key={name}>{name}</p>)

    return (
        <div>
            {resultsEL}
        </div>
    )
}
export default function SearchPage(){
    const {searched,query,startSearch,stopSearch} = useSearch()
    // const [searched,setSearched] = useState(false)
    // const [query,setQuery] = useState("")

    // function startSearch(newQuery){
    //     setQuery(newQuery)
    //     setSearched(true)
    // }

    // function stopSearch(){
    //     setSearched(false)
    // }

    if(searched){
      return(
        <>
            <SearchBar setQuery={startSearch} stopSearch={stopSearch}/>
            <NamesList query={query} />
        </>
      )
    }
    return(
      <>
          <SearchBar setQuery={startSearch} stopSearch={stopSearch}/>
          <div>
            <p>Type in the search box to Get Data</p>
          </div>
      </>
    )
}
