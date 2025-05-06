import {Navigation} from '../../components/Navigation';

import home from './../../assets/images/navigation/homeacc.png';
import barrel from './../../assets/images/navigation/barellWhite.png';
import brokers from './../../assets/images/navigation/user.png';
import submission from './../../assets/images/navigation/business-and-trade.png';
import goals from './../../assets/images/navigation/mission.png';
import key from './../../assets/images/navigation/key.png';
import { MaritimeLogisticsCorp } from '../../components/MaritimeLogisticsCorp';
import { PerformanceMetrics } from '../../components/PerformanceMetrics';

const accountsNavigation = [
  {id: 1, name: 'Dashboard', img: home},
  {id: 2, name: 'Accounts', img: barrel},
  {id: 3, name: 'Brokers', img: brokers},
  {id: 4, name: 'Submissions', img: submission},
  {id: 5, name: 'Goals&Rules', img: goals},
  {id: 6, name: 'Admin', img: key},
];

export const Accounts = () => {
  return (
    <>
      <Navigation pageNavigation={accountsNavigation} />

      <div className='mx-[40px] xl:mx-[100px] text-[#E5E7EB]'>
        <div className='text-[#E5E7EB] mb-[20px] 2xl:mb-[0] cursor-pointer'>
          Dashboard // Accounts // <span className='text-[#346fd2]'>Maritime Logistics Corp</span>
        </div>

        <MaritimeLogisticsCorp />

        <PerformanceMetrics />
      </div>
    </>
  );
};
