import React from 'react'
import Image from 'next/image'
import spinner from "../public/spinner.gif"
const Spinner = () => {
  return (
    <div>
      <>
      <Image className='w-50 m-auto ' src={spinner} alt='loading..' />
      </>
    </div>
  );
};

export default Spinner

