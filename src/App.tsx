import {Outlet, useNavigate} from 'react-router';
import './App.css';
import {useEffect} from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard');
  }, []);

  return (
    <>
      <div>
        <div className='flex justify-between items-center h-[75px] bg-[#121622] text-white px-[100px] border-b border-[#6B88B4]'>
          <h1 className='h-[44px] text-[24px] leading-[44px] '>
            Hi Arthur, welcome! You have 12 open tasks .
          </h1>

          <div>
            <input
              className='border-none bg-[#1E2233] h-[36px] w-[360px] rounded-[22px] text-[12px] ps-[10px] mr-[6px]'
              type='text'
              placeholder='Search'
            />

            <button className='cursor-pointer w-[48px] h-[48px] rounded-[50px] bg-linear-to-b from-[#1E40AF] to[#1e40af47] bg-[#1e40af47]'>
              AR
            </button>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default App;
