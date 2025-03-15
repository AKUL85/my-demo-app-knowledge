import React from 'react';
import PropTypes from 'prop-types';
import Bookmarked from '../bookmarked/Bookmarked';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='w-1/3 bg-gray-300 ml-4 mt-2'> 
        <div>Reading Time :{readingTime}</div>
            <h1 className='text-2xl text-center text-red-600'>Bookmarked Blogs:{bookmarks.length}</h1>{
                bookmarks.map((bookmark,idx)=> <Bookmarked key={idx} bookmark={bookmark}></Bookmarked>)
            }
        </div>
    );
};
Bookmarks.PropTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;