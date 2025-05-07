import {Search} from '../Search';
import attachIcon from './../../assets/images/attachIcon.png';

export const Commutication = () => {
  return (
    <section className='mb-[30px]'>
      <h3 className='text-[24px] mb-[24px]'>Commutication</h3>

      <div className='bg-[#1e2233] max-w-[1400px] ps-[25px] pe-[20px] pt-[20px] pb-[45px] rounded-2xl '>
        <div className='flex flex-col gap-y-[15px] md:flex-row lg:items-center mb-[24px]'>
          <Search />

          <div className='flex gap-[9px]'>
            <button className='bg-[#1e2233] h-[27px] w-[99px] border border-[#3B82F6] text-[#3B82F6] rounded-full cursor-pointer'>
              Filter
            </button>

            <button className='bg-[#1e2233] h-[27px] w-[99px] border border-[#3B82F6] text-[#3B82F6] rounded-full cursor-pointer'>
              Group
            </button>
          </div>
        </div>

        <div className='flex flex-col xl:flex-row gap-[7px]'>
          <div className='max-w-[540px]'>
            <section className='py-[16px] ps-[16px] pe-[20px] bg-[#242A3D] rounded-2xl border border-[#1F3683] flex flex-col gap-[5px] mb-[7px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <div className='flex items-center gap-[6px]'>
                <p className='bg-[#1E40AF] px-[10px] py-[2px] rounded-full text-[11px]'>NEW</p>

                <p className='text-[16px]'>Policy Renewal - Auto Insurance 5/15/25</p>
              </div>

              <p className='text-[#8A8B98] text-[14px]'>Michael Roberts // Apr 5</p>

              <p className='text-[12px]'>
                Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real
                Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review
                coverage options before proceeding with the renewal?I'e attached the current policy
                details and premium breakdown for your reference.
              </p>

              <div className=''>
                <button className='cursor-pointer flex items-center gap-[8px] bg-[#2E6355] rounded-full px-[12px] text-[13px] mb-[5px]'>
                  <img src={attachIcon} alt='attach icon' className='w-[10px] h-[10px] ' /> 3
                  attachments
                </button>

                <button className='cursor-pointer bg-[#3B82F6] hover:bg-[#1E40AF] rounded-2xl px-[26px] py-[7px] text-[13px]'>
                  Reply
                </button>
              </div>
            </section>

            <section className='py-[16px] ps-[16px] pe-[20px] bg-[#242A3D] rounded-2xl border border-[#315FAF] flex flex-col gap-[5px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <div className='flex items-center gap-[6px]'>
                <p className='bg-[#1E40AF] px-[10px] py-[2px] rounded-full text-[11px]'>NEW</p>

                <p className='text-[16px]'>New Quote Request - Workers Comp Insurance</p>
              </div>

              <p className='text-[#8A8B98] text-[14px]'>Sarah Chen // Apr 5</p>

              <p className='text-[12px]'>
                Hi Arthur, Real Estate Group has expressed interest in adding workers compensation
                coverage to their insurance portfolio. I've completed the initial risk assessment
                based
              </p>

              <div className=''>
                <button className='cursor-pointer flex items-center gap-[8px] bg-[#2E6355] rounded-full px-[12px] text-[13px] mb-[5px]'>
                  <img src={attachIcon} alt='attach icon' className='w-[10px] h-[10px] ' /> 3
                  attachments
                </button>

                <button className='cursor-pointer bg-[#3B82F6] rounded-2xl px-[26px] py-[7px] text-[13px] hover:bg-[#1E40AF]'>
                  Reply
                </button>
              </div>
            </section>
          </div>

          <div className='max-w-[540px]'>
            <section className='py-[16px] ps-[16px] pe-[20px] bg-[#242A3D] rounded-2xl flex flex-col gap-[5px] mb-[7px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <div className='flex items-center gap-[6px]'>
                <p className='bg-[#1E40AF] px-[10px] py-[2px] rounded-full text-[11px]'>
                  Responded
                </p>

                <p className='text-[16px]'>Fwd: New Submission - BPM Real Estate -EFF 4/1/24</p>
              </div>

              <p className='text-[#8A8B98] text-[14px]'>Joshua Dunmire // Mar 25</p>

              <p className='text-[12px]'>
                Arthur, attached please find our submission for the above mentioned applicant. We
                have...
              </p>
            </section>

            <section className='py-[16px] ps-[16px] pe-[20px] bg-[#242A3D] rounded-2xl flex flex-col gap-[5px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <p className='text-[16px]'>New Business: BPM Real Estate Group, LLC</p>

              <p className='text-[#8A8B98] text-[14px]'>lsabel Kreller // Feb 28</p>

              <p className='text-[12px]'>
                Hello Arthur, I am pleased to present you with a submission on this client&#39;s
                upco...
              </p>

              <div className=''>
                <button className='cursor-pointer flex items-center gap-[8px] bg-[#2E6355] rounded-full px-[12px] text-[13px] mb-[5px]'>
                  <img src={attachIcon} alt='attach icon' className='w-[10px] h-[10px] ' /> 5
                  attachments
                </button>

                <button className='cursor-pointer bg-[#3B82F6] rounded-2xl px-[26px] py-[7px] text-[13px] hover:bg-[#1E40AF]'>
                  Reply
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
