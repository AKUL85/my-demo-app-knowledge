import React from 'react';
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const ExtraBlogs = ({blog,handleBookmarks,handleMarkAsRed}) => {
    const {id,cover_title,cover_img,reading_time,author,author_img,posted_date,hashtag}=blog;
    return (
        <div className='mb-20 space-y-4'>
        <img className='h-50 w-100 mb-8' src={cover_img} alt={`Cover picture of the title ${cover_title}`}/>
        <div className='flex justify-between'>
            <div className='flex'>
                <img className='h-14 w-14 rounded-full' src={author_img} alt="" />
                <div className='ml-6'>
                    <h1 className='text-2xl'>{author}</h1>
                    <p>{posted_date}</p>
                </div>

            </div>
            <div >
                <span className='text-center'>{reading_time} min read</span>
                <button onClick={()=>handleBookmarks(blog)} className='ml-2 text-2xl text-red-500 text-center'>{<CiBookmark />}</button>
            </div>
        </div>

        <h1 className='text-4xl my-4'>{cover_title}</h1>
        <p>
            {
                hashtag.map((hash,idx)=><span key={idx}><a href="">   {hash}</a></span>)
            }
        </p>
        <button onClick={()=>handleMarkAsRed(reading_time,id)} className='text-purple-600 font-bold underline'>Mark As Red</button>

        </div>
    );
};
ExtraBlogs.propTypes = {  
    blog: PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func,
    handleMarkAsRed:PropTypes.func
};

export default ExtraBlogs;