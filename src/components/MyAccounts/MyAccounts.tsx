import { Search } from '../Search';
import knowMore from './../../assets/images/know-more.png';

const myAccountsBody = [
  {
    id: 1,
    accountName: 'NAMEX Tech Solutions',
    type: 'Large Enterprise',
    line: 'D& O Liability',
    broker: 'Willis Towers',
    renewalDate: '04/16/2025',
    premium: '2.3M',
    ratedPremium: '2.8M',
    lossRatio: 32,
    appetite: 'high',
    status: 'Active',
    triage: 180,
    winnability: 'Very strong',
  },
  {
    id: 2,
    accountName: 'Alliance Healthcare Systems',
    type: 'Mid- Market',
    line: 'Medical Malpractice',
    broker: 'Aon Risk',
    renewalDate: '06/30/2025',
    premium: '1.7M',
    ratedPremium: '1.9M',
    lossRatio: 38,
    appetite: 'Medium',
    status: 'Under review',
    triage: 165,
    winnability: 'Strong',
  },
  {
    id: 3,
    accountName: 'Maritime Logistics Corp',
    type: 'Shipping/ Logistics',
    line: 'Marine Cargo',
    broker: 'Marsh McLennan',
    renewalDate: '09/05/2025',
    premium: '875K',
    ratedPremium: '920K',
    lossRatio: 25,
    appetite: 'High',
    status: 'Active',
    triage: 182,
    winnability: 'Very strong',
  },
  {
    id: 4,
    accountName: 'GreenField Energy Ltd',
    type: 'Energy Sector',
    line: 'Environmental Liability',
    broker: 'Aon Risk',
    renewalDate: '07/22/2025',
    premium: '1.2M',
    ratedPremium: '1.4M',
    lossRatio: 67,
    appetite: 'Cautious',
    status: 'Under review',
    triage: 158,
    winnability: 'Medium',
  },
];

const myAccountsHeader = [
  'Account name/ Type',
  'Line',
  'Broker',
  'Renewal Date',
  'Premium',
  'Rated Premium',
  'Loss Ratio',
  'Appetite',
  'Status',
  'Triage',
  'Winnability',
  '',
];
export const MyAccounts = () => {
  return (
    <div className='max-w-[1400px] bg-[#1e2233] text-white px-[22px] pt-[12px] pb-[16px] rounded-[20px] mx-[40px] xl:mx-[100px] mb-[200px]'>
      <div className='flex flex-col gap-y-[15px] lg:flex-row lg:items-center mb-[24px]'>
        <h3 className='text-[20px] min-w-fit mr-[28px]'>My Accounts</h3>

        <Search />

        <div className='flex gap-[9px]'>
          <button className='bg-[#1e2233] h-[27px] w-[99px] border border-[#3B82F6] text-[#3B82F6] rounded-full cursor-pointer'>
            Filter
          </button>

          <button className='bg-[#1e2233] h-[27px] w-[99px] border border-[#3B82F6] text-[#3B82F6] rounded-full cursor-pointer'>
            Sort
          </button>

          <button className='bg-[#1e2233] h-[27px] w-[99px] border border-[#3B82F6] text-[#3B82F6] rounded-full cursor-pointer'>
            Group
          </button>

          <button className='bg-[#3B82F6] h-[27px] w-[99px] text-white rounded-full cursor-pointer'>
            + New
          </button>
        </div>
      </div>

      <table className='hidden lg:block w-full table-fixed'>
        <thead>
          <tr className='bg-[#252a3d] text-[#94A3B8]'>
            {myAccountsHeader.map((accHeader, index) => {
              return (
                <td
                  key={accHeader}
                  className={`min-w-fit xl:whitespace-nowrap h-[32px] text-left text-[12px] pe-[4px] 2xl:pe-[14px] font-normal ${
                    index === 0 ? ' ps-[26px]' : ''
                  }`}
                >
                  {accHeader.toUpperCase()}
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {myAccountsBody.map((accBody, index) => {
            return (
              <tr
                key={accBody.id}
                className={`border-b border-[#313B54] h-[60px] ${index % 2 !== 0 ? 'bg-[#232838] ' : ''}`}
              >
                <td className='ps-[26px] pe-[4px] 2xl:pe-[14px] text-[14px]'>
                  {accBody.accountName}
                  <p className='text-[#94A3B8] pe-[4px]'>{accBody.type}</p>
                </td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>{accBody.line}</td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>{accBody.broker}</td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>{accBody.renewalDate}</td>

                <td className='text-[14px] text-[#3B82F6] font-semibold pe-[4px] 2xl:pe-[14px]'>
                  ${accBody.premium}
                </td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>${accBody.ratedPremium}</td>

                <td className={`text-[14px] pe-[4px] 2xl:pe-[14px] `}>
                  <p
                    className={`w-[52px] h-[24px] leading-[24px] text-center rounded-full  ${
                      accBody.lossRatio < 35
                        ? 'bg-[#3BB979] text-white'
                        : accBody.lossRatio < 60
                          ? 'bg-[#FDD261] text-black'
                          : 'bg-[#B93B3B] text-white'
                    }`}
                  >
                    {accBody.lossRatio}%
                  </p>
                </td>

                <td className='text-[12px] pe-[4px] 2xl:pe-[14px]'>
                  <p className='h-[24px] leading-[24px] w-[83px] text-center bg-[#1e40af4d] rounded-full'>
                    {accBody.appetite.toUpperCase()}
                  </p>
                </td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>
                  <span
                    className={`inline-block w-[10px] h-[10px] rounded-[12px] mr-[5px] ${
                      accBody.status === 'Active' ? 'bg-[#10B981]' : 'bg-[#3B82F6]'
                    }`}
                  ></span>
                  {accBody.status}
                </td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>
                  <p className='w-[43px] h-[23px] leading-[23px] border border-[#3B82F6] text-center text-[#3B82F6] bg-[#1e2233] rounded-full'>
                    {accBody.triage}
                  </p>
                </td>

                <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>
                  <div className='h-[23px] leading-[23px] border border-[#3B82F6] text-center text-[#3B82F6] bg-[#1e2233] rounded-full px-[10px] flex items-center justify-center gap-[8px]'>
                    <div className='flex items-center gap-[4px]'>
                      <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                      <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                      <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                      <span className='w-[10px] h-[10px] bg-[#3B82F6] rounded-full shrink-0'></span>
                    </div>
                    <span className='shrink-0'>{accBody.winnability}</span>
                  </div>
                </td>

                <td className='text-[14px] pe-[21px] '>
                  <button className='cursor-pointer w-[20px] h-[20px] ml-[5px]'>
                    <img src={knowMore} alt='Details button' className='w-[20px] h-[20px]' />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='lg:hidden space-y-4'>
        {myAccountsBody.map((accBody) => (
          <div key={accBody.id} className='bg-[#232838] rounded-xl p-4 text-sm text-white'>
            <div className='mb-2 font-semibold'>{accBody.accountName}</div>
            <div className='text-[#94A3B8] mb-2'>{accBody.type}</div>

            <div className='grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]'>
              <section>
                <span className='text-[#94A3B8]'>Line:</span> {accBody.line}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Broker:</span> {accBody.broker}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Renewal:</span> {accBody.renewalDate}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Premium:</span> ${accBody.premium}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Rated:</span> ${accBody.ratedPremium}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Loss Ratio:</span> {accBody.lossRatio}%
              </section>
              <section>
                <span className='text-[#94A3B8]'>Appetite:</span> {accBody.appetite}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Status:</span> {accBody.status}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Triage:</span> {accBody.triage}
              </section>
              <section>
                <span className='text-[#94A3B8]'>Winnability:</span> {accBody.winnability}
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
