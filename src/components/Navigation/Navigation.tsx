import {NavLink} from 'react-router';
import home from './../../assets/images/navigation/home.png';
import barrel from './../../assets/images/navigation/petroleum.png';
import brokers from './../../assets/images/navigation/user.png';
import submission from './../../assets/images/navigation/business-and-trade.png';
import goals from './../../assets/images/navigation/mission.png';
import key from './../../assets/images/navigation/key.png';

import arrowLeft from './../../assets/images/navigation/arrow-left.png';
import arrowRight from './../../assets/images/navigation/arrow-right.png';

export const Navigation = () => {
  const dashboardNavigation = [
    {id: 1, name: 'Dashboard', img: home},
    {id: 2, name: 'Accounts', img: barrel},
    {id: 3, name: 'Brokers', img: brokers},
    {id: 4, name: 'Submissions', img: submission},
    {id: 5, name: 'Goals&Rules', img: goals},
    {id: 6, name: 'Admin', img: key},
    {id: 7, name: 'Admin', img: key},
    {id: 8, name: 'Admin', img: key},
    {id: 9, name: 'Admin', img: key},
    {id: 10, name: 'Admin', img: key},
    {id: 11, name: 'Admin', img: key},
  ];

  return (
    <>
      <nav className='text-white px-[40px] xl:px-[100px] flex gap-[10px] mb-[21px]'>
        <ul className='flex gap-[9px]   overflow-x-hidden '>
          {dashboardNavigation.map((nav) => {
            return (
              <li key={nav.id} className='flex-shrink-0'>
                <NavLink
                  to={`/${nav.name.toLowerCase()}`}
                  className={({isActive}) =>
                    `flex items-center  px-[18px] gap-[6px] text-[#C5CAD3] h-[47px] border border-[#313B54] rounded-[51px] min-w-fit bg-[#0C0F17] ${
                      isActive ? 'text-white bg-[#3B82F6]' : ''
                    }`
                  }
                >
                  <img
                    className='w-[20px] h-[20px]'
                    src={nav.img}
                    alt={`${nav.name} navigation icon`}
                  />

                  <p>{nav.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className='flex flex-shrink-0'>
          <button className='mr-[13px] w-[47px] h-[47px] border border-[#313B54] rounded-[51px] cursor-pointer flex justify-center items-center bg-[#0C0F17] hover:bg-[#121622]'>
            <img src={arrowLeft} className='w-[19px] h-[14px]' alt='arrowLeft navigation' />
          </button>

          <button className='w-[47px] h-[47px] border border-[#313B54] rounded-[51px] cursor-pointer flex justify-center items-center bg-[#0C0F17] hover:bg-[#121622]'>
            <img src={arrowRight} className='w-[19px] h-[14px]' alt='arrowRight navigation' />
          </button>
        </div>
      </nav>
    </>
  );
};
