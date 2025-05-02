import {Outlet, useLocation, useNavigate} from 'react-router';
import './App.css';
import {useEffect} from 'react';
import {AvatarButton} from './components/AvatarButton';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, []);

  return (
    <>
      <div>
        <div className='flex flex-col sm:flex-row justify-around sm:justify-between sm:items-center h-[125px] sm:h-[75px] bg-[#121622] text-white mb-[17px] px-[40px] xl:px-[100px] border-b border-[#6B88B4]'>
          <h1 className='h-[22px] sm:h-[44px] text-[16px] lg:text-[24px] sm:leading-[44px] '>
            Hi Arthur, welcome! You have 12 open tasks .
          </h1>

          <div>
            <input
              className='border-none bg-[#1E2233] h-[36px] w-[160px] lg:w-[360px] rounded-[22px] text-[12px] ps-[10px] mr-[6px]'
              type='text'
              placeholder='Search'
            />

            <AvatarButton
              initials='AR'
              width='w-[42px] lg:w-[48px]'
              height='h-[42px] lg:h-[48px]'
              size='text-lg'
            />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default App;
