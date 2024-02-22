import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label id="sea" htmlFor='search'>Search :</label>
        <input 
          id='Sear'
          type="text"
          role = 'searchbox'
          placeholder='Search Items'
          value={search}
          onChange={(e) => setSearch(e.target.value)}

          />
    </form>
  )
}

export default Search