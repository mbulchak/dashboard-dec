import {ChangingWinnability} from '../ChangingWinnability';
import {ExposureDiagram} from '../ExposureDiagram';

import greenArrowUp from './../../assets/images/account/greenarrowup.png';
import yellowArrowDown from './../../assets/images/account/yellowarrowdown.png';
import greenRacket from './../../assets/images/account/greenRacket.png';

const dataIncreasing = [
  {num: 1, title: 'Brokers relationship', width: 'w-[220px]', persentage: '+28%'},
  {num: 2, title: 'Loss history', width: 'w-[185px]', persentage: '+22%'},
  {num: 3, title: 'Industry growth', width: 'w-[150px]', persentage: '+16%'},
  {num: 4, title: 'Multiline opportunity', width: 'w-[100px]', persentage: '+11%'},
];

const dataDecreasing = [
  {num: 1, title: 'Premium pricing', width: 'w-[220px]', persentage: '-24%'},
  {num: 2, title: 'Total exposure', width: 'w-[185px]', persentage: '-18%'},
  {num: 3, title: 'Loss ratio trend', width: 'w-[150px]', persentage: '-13%'},
  {num: 4, title: 'Market competition', width: 'w-[100px]', persentage: '-5%'},
];

const recordsAi = [
  {
    title: 'Offer 5% premium discount in exchange for 3-year commitment',
    subtitle:
      'Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.',
  },
  {
    title: 'Propose risk control services for cargo handling procedures',
    subtitle:
      'Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios.',
  },
];

export const AccountDetails = () => {
  return (
    <section className='mb-[30px]'>
      <h3 className='text-[24px] mb-[24px]'>Account Details</h3>

      <div className='bg-[#1e2233] max-w-[1400px] ps-[20px] pe-[40px] pt-[30px] pb-[35px] flex flex-col gap-y-[15px] md:flex-row rounded-2xl '>
        <div className='border-r border-dashed pr-[13px] mr-[19px]'>
          <div className='py-[17px] px-[25px] mb-[14px] bg-[#252A3D] max-w-[290px] rounded-lg'>
            <section className='flex gap-[20px] items-center'>
              DESICION SUPPORT
              <span className='border border-white px-[7px] py-[5px] rounded-md'>4</span>
            </section>

            <div className='flex flex-col gap-[15px] text-[13px]'>
              <p>Winnability</p>

              <p>
                Exposure Review& Suggested <br /> Coverage
              </p>

              <p>Portfolio Strategy Alignment</p>

              <p>Broker Analytics</p>
            </div>
          </div>

          <section className='py-[17px] px-[25px] mb-[2px] flex gap-[20px] items-center'>
            RISK ASSESSMENT
            <span className='bg-[#242937] px-[7px] py-[5px] rounded-md'>6</span>
          </section>

          <section className='py-[17px] px-[25px] flex gap-[20px] items-center'>
            DOCUMENTS AND <br /> COMPLIANCE
            <span className='bg-[#242937] px-[7px] py-[5px] rounded-md'>2</span>
          </section>
        </div>

        <div>
          <h3 className='text-[40px] mb-[15px]'>Winnability</h3>

          <div className='grid grid-cols-[300px] xl:grid-cols-[300px_293px] 2xl:grid-cols-[300px_293px_380px] grid-rows-[130px] gap-[5px] mb-[18px]'>
            <section className='bg-[#252a3d] max-w-[300px] rounded-2xl pt-[20px] pb-[20px] ps-[15px] pe-[20px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <p className='text-normal mb-[10px]'>Overall Score</p>

              <div className='flex gap-[5px] items-center'>
                <p className='text-[36px] font-semibold'>82%</p>

                <div className='border border-[#3B82F6] text-center text-[#3B82F6] bg-[#1e2233] rounded-full px-[13px] py-[4px] flex items-center justify-center gap-[8px]'>
                  <div className='flex items-center gap-[4px]'>
                    <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                    <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                    <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                    <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                  </div>
                  <span className='shrink-0'>Very Strong</span>
                </div>
              </div>
            </section>

            <section className='bg-[#252a3d] max-w-[293px] rounded-2xl pt-[20px] pb-[20px] ps-[15px] pe-[20px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <p className='text-normal'>Historical trend</p>

              <div className='flex-1 flex items-center'>
                <svg viewBox='0 0 300 50' className='w-full h-[50px]'>
                  <polyline
                    fill='none'
                    stroke='#3B82F6'
                    strokeWidth='2'
                    points='0,40 50,30 100,20 150,22 200,35 250,25 300,20'
                  />
                </svg>
              </div>

              <div className='flex justify-between text-[12px]'>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>Now</span>
              </div>
            </section>

            <section className='bg-[#252a3d] min-w-[380px] rounded-2xl pt-[20px] pb-[20px] ps-[15px] pe-[20px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
              <p className='text-normal mb-[10px]'>Position</p>

              <div className='flex flex-col gap-[4px]'>
                <ExposureDiagram width='w-4/5' exposureTitle='Your score:82%' />

                <ExposureDiagram width='w-2/3' exposureTitle='Market Avg:68%' />

                <ExposureDiagram width='w-5/6' exposureTitle='Top competitor:88%' />
              </div>
            </section>
          </div>

          <div className='grid 2xl:grid-cols-[repeat(2,_490px)] gap-[10px] mb-[17px]'>
            <ChangingWinnability icon={greenArrowUp} title='Increasing' data={dataIncreasing} />

            <ChangingWinnability icon={yellowArrowDown} title='Decreasing' data={dataDecreasing} />
          </div>

          <div className='bg-[#242A3D] rounded-2xl pt-[21px] pb-[35px] ps-[21px] pe-[30px] flex flex-col gap-[15px]'>
            <div className='flex gap-[5px] items-center'>
              <img src={greenRacket} alt='racket icon' className='w-[24px] h-[25px]' />

              <p className='font-semibold text-[16px] text-[#3BB979]'>
                Al- Powered Recommendations
              </p>
            </div>

            {recordsAi.map((record, index) => {
              return (
                <section key={index} className='flex flex-col lg:flex-row gap-y-[10px] gap-x-[90px] lg:items-center'>
                  <div>
                    <p className='text-[14px]'>{record.title}</p>
                    <p className='text-[#8A8B98] text-[14px]'>{record.subtitle}</p>
                  </div>

                  <button className='cursor-pointer hover:bg-[#1e2233] py-[13px] px-[51px] text-[#1D2125] bg-[#3BB979] rounded-full '>Apply</button>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
