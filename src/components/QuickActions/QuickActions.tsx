import {QuickButton} from '../QuickButton';

export const QuickActions = () => {
  return (
    <section className='w-[285px] h-[264px] bg-[#1e2233] text-white px-[22px] pt-[12px] pb-[16px] rounded-[20px]'>
      <h3 className='text-[20px] mb-[29px]'>Quick Actions</h3>

      <div className='flex flex-col gap-[5px]'>
        <QuickButton width='w-[240px]' height='h-[40px]' buttonName='New Subsissions' />

        <QuickButton width='w-[240px]' height='h-[40px]' buttonName='New Subsissions' />

        <QuickButton width='w-[240px]' height='h-[40px]' buttonName='New Subsissions' />

        <QuickButton width='w-[240px]' height='h-[40px]' buttonName='New Subsissions' />
      </div>
    </section>
  );
};
