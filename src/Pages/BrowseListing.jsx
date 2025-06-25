import React from 'react';
import PostCardForBL from '../components/PostCardForBL';
import { useLoaderData } from 'react-router';

const BrowseListing = () => {
    const CardData = useLoaderData();
   
    return (
        <div className='grid grid-cols-1 w-[98%] mx-auto md:grid-cols-2 md:gap-10 my-10 gap-y-10 md:my-10 lg:grid-cols-2 lg:w-[85%] lg:gap-y-15 xl:grid-cols-3 xl-w[85%] 2xl:grid-cols-4 2xl:w-full 2xl:gap-x-0'>
            {
                CardData.map((data) =><PostCardForBL key={data._id} data={data}></PostCardForBL>)
            }
            
        </div>
    );
};

export default BrowseListing;