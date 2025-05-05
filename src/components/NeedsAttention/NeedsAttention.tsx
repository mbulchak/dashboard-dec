import attention from './../../assets/images/accGeneral/exclamation.png';

export const NeedsAttention = () => {
  return (
    <div className='w-[530px] h-[110px] border border-[#F0C54D] rounded-2xl flex flex-col gap-[5px] pt-[14px] pb-[18px] px-[16px]'>
      <div className='flex gap-[8px]'>
        <img src={attention} alt='attention image' className='w-[17px] h-[17px] ' />

        <p className='text-[#F0C54D]'>Needs Attention</p>
      </div>

      <div className='grid grid-cols-[146px_146px_146px] text-[12px]'>
        <section>
          <p>Marine Survey Required</p>
          <p className='text-[11px] text-[#8A8B98]'>Scheduled for 06/12/2025</p>
          <p className=' text-[#3B82F6]'>Review details link &rarr;</p>
        </section>

        <section>
          <p>Loss Control Complete</p>
          <p className='text-[11px] text-[#8A8B98]'>Last inspection: 02/15/2025</p>
          <p className='text-[#3B82F6]'>View report &rarr;</p>
        </section>

        <section>
          <p>Claims Review Required</p>
          <p className='text-[11px] text-[#8A8B98]'>3 open claims // $245,000TTL</p>
          <p className='text-[#3B82F6]'>View claims &rarr;</p>
        </section>

      </div>
    </div>
  );
};
