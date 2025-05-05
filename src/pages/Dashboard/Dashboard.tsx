import {MarketIntelligence} from '../../components/MarketIntelligence';
import {MyAccounts} from '../../components/MyAccounts';
import {Navigation} from '../../components/Navigation';
import {PortfolioGoals} from '../../components/PortfolioGoals';
import {QuickActions} from '../../components/QuickActions';
import {WorkQueue} from '../../components/WorkQueue';

export const Dashboard = () => {
  return (
    <>
      <Navigation />

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
