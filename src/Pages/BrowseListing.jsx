import React, { Suspense, useState } from 'react';
import PostCardForBL from '../components/PostCardForBL';
import { useLoaderData } from 'react-router';
import Loading from '../components/Loading';

const BrowseListing = () => {
    const data = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
   
    useState(() => {
        if (data?.length > 0) {
            setIsLoading(false);
            setCardData(data)
        }
    }, [data]);
    if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500 mx-auto"></div>
          <p className="text-xl primary-text font-semibold mt-4">
            Loading Apply List...
          </p>
        </div>
      </div>
    );
  }

    return (
        <div className='grid grid-cols-1 pt-[100px] w-[98%] mx-auto md:grid-cols-2 md:gap-10 my-10 gap-y-10 md:my-10 lg:grid-cols-2 lg:w-[85%] lg:gap-y-15 xl:grid-cols-3 xl-w[85%] 2xl:grid-cols-4 '>
            <Suspense fallback={Loading}>
   {
                cardData.map((data) =><PostCardForBL key={data._id} data={data}></PostCardForBL>)
            }
            </Suspense>
         
            
        </div>
    );
};

export default BrowseListing;