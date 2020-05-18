import React, { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { debounce } from 'lodash'

export default function SearchInput({ onChange, value, setSearch }) {
  const fireOnChange = ({ target }) => {
    if (target.value.length >= 3 || target.value.length == 0) {
      onChange({ target })
    }
  }

  const debounced = useRef(debounce(fireOnChange, 400))

  const handleSearch = ({ target }) => {
    setSearch(target.value)
    debounced.current({ target })
  }

  return (
    <TextField
      id="standard-basic"
      placeholder="Search"
      value={value}
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}
