import React, { useEffect, useState } from 'react';
import ExtraBlogs from '../extrablog/ExtraBlogs';
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks,handleMarkAsRed}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div className='md:w-2/3'>
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=><ExtraBlogs
                     key={blog.id}
                     handleMarkAsRed={handleMarkAsRed}
                     handleBookmarks={handleBookmarks}
                     blog={blog}></ExtraBlogs>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmarks:PropTypes.func,
    handleMarkAsRed:PropTypes.func,
}
export default Blogs;