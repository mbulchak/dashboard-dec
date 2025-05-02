import bluetarget from './../../assets/images/targets/blue-target.png';
import greentarget from './../../assets/images/targets/green-target.png';

export const PortfolioGoals = () => {
  return (
    <>
      <div className='w-[285px] h-[550px] bg-[#1e2233] text-white px-[23px] pt-[12px] rounded-[20px]'>
        <h3 className='text-[20px] mb-[29px]'>Portfolio Goals</h3>

        {/* Portfolio Loss Ratios Target */}
        <div className='mb-[58px] w-[238px]'>
          <h3 className='text-[#94A3B8] text-[12px] mb-[35px]'>PORTFOLIO LOSS RATIOS TARGET</h3>

          <div className='relative h-[25px] bg-[#CC0101] rounded-full '>
            {/* green */}
            <div className='absolute left-0 top-0 h-full bg-[#3BB979] w-[91px] rounded-l-full'></div>

            {/* yellow */}
            <div className='absolute top-0 h-full left-[91px] w-[57px] bg-[#FDD261]'></div>

            <div className='absolute -top-8 left-25 flex flex-col items-center'>
              <p className='text-xs text-slate-400/50'>TG: 55%</p>

              <img src={bluetarget} alt='target blue icon' className='w-[17px] h-[11px]' />
            </div>

            <div className='absolute -bottom-7 left-10 flex flex-col items-center'>
              <img src={greentarget} alt='target green icon' className='w-[17px] h-[11px]' />
              <p className='text-xs text-[#3BB979]'>-6.8% (GOOD)</p>
            </div>

            <p className=' absolute top-[4px] left-18 text-[12px] font-semibold'>48.2%</p>
          </div>
        </div>

        {/* Renewal Retention */}
        <div className='mb-[58px] w-[238px]'>
          <h3 className='text-[#94A3B8] text-[12px] mb-[35px]'>RENEWAL RETENTION</h3>

          <div className='relative h-[25px] bg-[#FDD261] rounded-full '>
            {/* red */}
            <div className='absolute left-0 top-0 h-full w-[42px] rounded-l-full bg-[#CC0101]'></div>

            {/* green */}
            <div className='absolute top-0 left-[122px] h-full w-[32px] bg-[#3BB979]'></div>

            <p className='absolute -top-6 left-26 text-xs text-slate-400/50'>TG: 85-90%</p>

            <div className='absolute -bottom-7 left-26 flex flex-col items-center'>
              <img src={greentarget} alt='target green icon' className='w-[17px] h-[11px]' />

              <p className='text-xs text-[#3BB979]'>ON TARGET</p>
            </div>

            <p className='absolute top-[4px] left-32 text-[12px] font-semibold '>88%</p>
          </div>
        </div>

        {/* New Business Target */}
        <div className='mb-[48px] w-[197px]'>
          <h3 className='text-[#94A3B8] text-[12px] mb-[5px]'>NEW BUSINESS TARGET</h3>

          <div className='relative h-[25px] bg-[#313853]  rounded-full '>
            <div className='absolute left-0 top-0 h-full w-[99px] rounded-r-full bg-linear-to-r from-[#313853] to-[#3B82F6]'></div>

            <div className='absolute left-0 top-0'></div>

            <p className='absolute left-[48px] top-0.5 text-[14px] font-semibold'>$8.1M</p>

            <p className='absolute -right-[35px] top-1 text-[12px] font-semibold'>$12M</p>

            <p className='absolute left-[75px] top-7 text-xs text-slate-400/50'>67%</p>
          </div>
        </div>

        {/* Annual GWP Target */}
        <div className='mb-[85px] w-[197px]'>
          <h3 className='text-[#94A3B8] text-[12px] mb-[5px]'>ANNUAL GWP TARGET</h3>

          <div className='relative h-[25px] bg-[#313853] rounded-full '>
            <div className='absolute left-0 top-0 h-full w-[99px] rounded-r-full bg-linear-to-r from-[#313853] to-[#3B82F6]'></div>

            <div className='absolute left-0 top-0'></div>

            <p className='absolute left-[42px] top-0.5 text-[14px] font-semibold'>$28.4M</p>

            <p className='absolute -right-[35px] top-1 text-[12px] font-semibold'>$42M</p>

            <p className='absolute left-[55px] top-7 text-xs text-slate-400'>68%</p>
          </div>
        </div>
      </div>
    </>
  );
};
