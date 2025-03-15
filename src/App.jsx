import Header from './components/header/Header'

import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/booknmarks/Bookmarks'
import { useState } from 'react'

function App() {
  
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingtime]=useState(0);

  const handleBookmarks=blog=>{
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRed=(time,id)=>{
   
    setReadingtime(readingTime+time);
  
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id)

    setBookmarks(remainingBookmarks);
    
  }
  return (
    <>
    
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleMarkAsRed={handleMarkAsRed} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
