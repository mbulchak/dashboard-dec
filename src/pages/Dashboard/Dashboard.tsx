import {MarketIntelligence} from '../../components/MarketIntelligence';
import {MyAccounts} from '../../components/MyAccounts';
import {Navigation} from '../../components/Navigation';
import {PortfolioGoals} from '../../components/PortfolioGoals';
import {QuickActions} from '../../components/QuickActions';
import {WorkQueue} from '../../components/WorkQueue';

import home from './../../assets/images/navigation/home.png';
import barrel from './../../assets/images/navigation/barell.png';
import brokers from './../../assets/images/navigation/user.png';
import submission from './../../assets/images/navigation/business-and-trade.png';
import goals from './../../assets/images/navigation/mission.png';
import key from './../../assets/images/navigation/key.png';

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

export const Dashboard = () => {
  return (
    <>
      <Navigation pageNavigation={dashboardNavigation} isDashboard={true} />

      <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-[17px] mx-[40px] mb-[42px] xl:mx-[100px]'>
        <WorkQueue />

        <div className='flex flex-col lg:flex-row gap-[17px]'>
          <PortfolioGoals />

          <div className='flex flex-col sm:flex-row xl:flex-col gap-[14px]'>
            <QuickActions />

            <MarketIntelligence />
          </div>
        </div>
      </div>

      <MyAccounts />
    </>
  );
};
