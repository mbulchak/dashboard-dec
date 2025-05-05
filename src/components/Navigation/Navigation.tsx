import {NavLink} from 'react-router';

import arrowLeft from './../../assets/images/navigation/arrow-left.png';
import arrowRight from './../../assets/images/navigation/arrow-right.png';

type Props = {
  pageNavigation: {
    id: number;
    name: string;
    img: string;
  }[];
  isDashboard?: boolean;
};
export const Navigation: React.FC<Props> = ({pageNavigation, isDashboard}) => {
  return (
    <>
      <nav className={`text-white px-[40px] xl:px-[100px] flex gap-[10px] ${
        isDashboard ? 'mb-[21px]' : 'mb-[26px]'
      }`}>
        <ul className='flex gap-[9px] overflow-x-hidden '>
          {pageNavigation.map((nav) => {
            return (
              <li key={nav.id} className='flex-shrink-0'>
                <NavLink
                  to={`/${nav.name.toLowerCase()}`}
                  className={({isActive}) =>
                    `flex items-center  px-[18px] gap-[6px] text-[#C5CAD3] h-[47px] border border-[#313B54] rounded-[51px] min-w-fit bg-[#0C0F17] ${
                      isActive && isDashboard ? 'text-white bg-[#3B82F6]' : isActive ? 'text-white bg-[#1e40af]' : ''
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

        {isDashboard && (
          <div className='flex flex-shrink-0'>
            <button className='mr-[13px] w-[47px] h-[47px] border border-[#313B54] rounded-[51px] cursor-pointer flex justify-center items-center bg-[#0C0F17] hover:bg-[#121622]'>
              <img src={arrowLeft} className='w-[19px] h-[14px]' alt='arrowLeft navigation' />
            </button>

            <button className='w-[47px] h-[47px] border border-[#313B54] rounded-[51px] cursor-pointer flex justify-center items-center bg-[#0C0F17] hover:bg-[#121622]'>
              <img src={arrowRight} className='w-[19px] h-[14px]' alt='arrowRight navigation' />
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
