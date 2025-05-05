import notFound from './../../assets/images/page-not-found.png';
export const NotFound = () => {
  return (
    <>
      <div className='px-[40px] xl:px-[100px] flex flex-col justify-center items-center'>
        <p className='text-white text-[18px] self-start'>Not found page</p>

        <img src={notFound} alt='not found image' />
      </div>
    </>
  );
};
