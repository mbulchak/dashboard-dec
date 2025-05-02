import {Navigation} from '../../components/Navigation';
import {PortfolioGoals} from '../../components/PortfolioGoals';
import {WorkQueue} from '../../components/WorkQueue';

export const Dashboard = () => {
  return (
    <>
      <Navigation />

      <div className='flex flex-col xl:flex-row gap-[17px] mx-[40px] xl:mx-[100px]'>
        <WorkQueue />

        <div className='flex items-center '>
          <PortfolioGoals />
        </div>
      </div>
    </>
  );
};
