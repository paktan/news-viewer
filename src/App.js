import React, { useState, useCallback } from 'react'
import NewsList from './components/NewsList'
import Categories from './components/Categories'
import {Route} from "react-router-dom"
import NewsPage from './pages/NewsPage'

const App = () => {
  const [category, setCategory] = useState("all")
  const onSelect = useCallback(category => setCategory(category),[])
  return (
    <Route path="/:category?" component={NewsPage} />
    // <>
    // <Categories category={category} onSelect={onSelect} />
    // <NewsList category={category}></NewsList>
    // </>
  )
}

export default App
