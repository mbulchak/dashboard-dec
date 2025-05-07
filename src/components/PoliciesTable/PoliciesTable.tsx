import {Search} from '../Search';
import knowMore from './../../assets/images/know-more.png';
import marine from './../../assets/images/policies/marineBG.png';
import safetyGr from './../../assets/images/policies/safetyBGGr.png';
import safetyRd from './../../assets/images/policies/safetyBGRd.png';
import user from './../../assets/images/policies/userBG.png';

const policiesTableHeader = [
  'Line',
  'Eff. date',
  'Exp. date',
  'Status',
  'Expiring tech',
  'Expiring premium',
  'Renewal to tech',
  'Renewal tech',
  'Renewal premium',
  'Rate change',
  'Loss ratio',
  '',
];

const policiesTableBody: {
  id: number;
  img: string;
  serialNumber: number;
  line: string;
  eff_date: string;
  exp_date: string;
  status: string;
  expiring_tech: string;
  expiring_premium: string;
  renewal_to_tech: string;
  renewal_tech: string;
  renewal_premium: string;
  rate_change: string;
  loss_ratio: number | string;
}[] = [
  {
    id: 1,
    img: marine,
    serialNumber: 17030212,
    line: 'Marine Cargo',
    eff_date: '6/30/2026',
    exp_date: '6/30/2027',
    status: 'Active',
    expiring_tech: '587,500',
    expiring_premium: '605,000',
    renewal_to_tech: '610,000',
    renewal_tech: '620,000',
    renewal_premium: '625,000',
    rate_change: '3.3%',
    loss_ratio: 22,
  },
  {
    id: 2,
    img: safetyGr,
    serialNumber: 4631092,
    line: 'General Liability',
    eff_date: '6/30/2026',
    exp_date: '6/30/2027',
    status: 'Active',
    expiring_tech: '160,000',
    expiring_premium: '165,000',
    renewal_to_tech: '170,000',
    renewal_tech: '172,500',
    renewal_premium: '175,000',
    rate_change: '6.1%',
    loss_ratio: 55,
  },
  {
    id: 3,
    img: user,
    serialNumber: 9182371,
    line: 'Workers Comp',
    eff_date: 'Pending',
    exp_date: 'Pending',
    status: 'Pending',
    expiring_tech: '0',
    expiring_premium: '0',
    renewal_to_tech: '73,500',
    renewal_tech: '75,000',
    renewal_premium: '75,000',
    rate_change: 'N/A',
    loss_ratio: 'N/A',
  },
  {
    id: 4,
    img: safetyRd,
    serialNumber: 5274936,
    line: 'Umbrella',
    eff_date: '13/03/2026',
    exp_date: '13/03/2027',
    status: 'Active',
    expiring_tech: '245,000',
    expiring_premium: '250,000',
    renewal_to_tech: '267,500',
    renewal_tech: '270,000',
    renewal_premium: '275,000',
    rate_change: '10.0%',
    loss_ratio: 78,
  },
];

const totals = {
  expiring_tech: 992500,
  expiring_premium: 1020000,
  renewal_to_tech: 1121000,
  renewal_tech: 1137500,
  renewal_premium: 1150000,
  rate_change: 6.9,
  loss_ratio: 58.3,
};

export const PoliciesTable = () => {
  return (
    <section className='mb-[30px]'>
      <h3 className='text-[24px] mb-[20px]'>Policies</h3>

      <div className='bg-[#1e2233] max-w-[1400px] ps-[25px] pe-[20px] pt-[20px] pb-[45px] rounded-2xl '>
        <div className='flex flex-col gap-y-[15px] md:flex-row lg:items-center mb-[13px]'>
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

        <div className='hidden lg:block'>
          <table>
            <thead className='text-[#AEB1B8]'>
              <tr className='bg-[#252a3d] text-[#94A3B8]'>
                {policiesTableHeader.map((polHeader, index) => {
                  return (
                    <td
                      key={polHeader}
                      className={`min-w-fit 2xl:whitespace-nowrap h-[32px] text-left text-[12px] pe-[4px] 2xl:pe-[20px] font-normal ${
                        index === 0 ? ' ps-[26px]' : ''
                      }`}
                    >
                      {polHeader.toUpperCase()}
                    </td>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {policiesTableBody.map((polBody, index) => {
                return (
                  <tr
                    key={polBody.id}
                    className={`border-b border-[#313B54] text-[#AEB1B8] h-[60px] ${index % 2 !== 0 ? 'bg-[#232838] ' : ''}`}
                  >
                    <td className='ps-[26px] pe-[4px] 2xl:pe-[20px] text-[14px]'>
                      <div className='flex gap-[2px] items-center'>
                        <div className='bg-[#]'>
                          <img
                            src={polBody.img}
                            alt='policies icon'
                            className='w-[18px] h-[18px]'
                          />
                        </div>

                        <div>{polBody.line}</div>
                      </div>
                      <p className='text-[#6F778A] pe-[4px]'>{polBody.serialNumber}</p>
                    </td>

                    <td className='text-[14px] pe-[4px] 2xl:pe-[20px]'>{polBody.eff_date}</td>
                    <td className='text-[14px] pe-[4px] 2xl:pe-[20px]'>{polBody.exp_date}</td>

                    <td className='text-[14px] pe-[4px] 2xl:pe-[20px] '>
                      <div className='flex items-center'>
                        <span
                          className={`inline-block w-[10px] h-[10px] rounded-[12px] mr-[5px] ${
                            polBody.status === 'Active' ? 'bg-[#10B981]' : 'bg-[#ffcb60]'
                          }`}
                        ></span>
                        {polBody.status}
                      </div>
                    </td>

                    <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>${polBody.expiring_tech}</td>

                    <td className='text-[14px] text-[#] pe-[4px] 2xl:pe-[14px]'>
                      ${polBody.expiring_premium}
                    </td>

                    <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>
                      ${polBody.renewal_to_tech}
                    </td>

                    <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>${polBody.renewal_tech}</td>

                    <td className='text-[14px] text-[#E5E7EB] pe-[4px] 2xl:pe-[14px]'>
                      ${polBody.renewal_premium}
                    </td>

                    <td className='text-[14px] pe-[4px] 2xl:pe-[14px]'>
                      {typeof polBody.loss_ratio === 'number'
                        ? `$${polBody.rate_change}`
                        : `${polBody.rate_change}`}
                    </td>

                    <td className={`text-[14px] pe-[4px] 2xl:pe-[14px] `}>
                      <p
                        className={`w-[52px] h-[24px] leading-[24px] text-center rounded-full  ${
                          Number(polBody.loss_ratio) < 35
                            ? 'bg-[#3BB979] text-white'
                            : Number(polBody.loss_ratio) < 60
                              ? 'bg-[#FDD261] text-black'
                              : typeof polBody.loss_ratio === 'number'
                                ? 'bg-[#B93B3B] text-white'
                                : ''
                        }`}
                      >
                        {Number(polBody.loss_ratio)
                          ? `${polBody.loss_ratio}%`
                          : `${polBody.loss_ratio}`}
                      </p>
                    </td>

                    <td className='text-[14px] pe-[21px] '>
                      <button className='cursor-pointer w-[20px] h-[20px] ml-[5px]'>
                        <img src={knowMore} alt='Details button' className='w-[20px] h-[20px]' />
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr className='text-white font-semibold h-[60px] border-t border-[#313B54]'>
                <td></td>
                <td></td>
                <td></td>
                <td className='ps-[6px] pe-[4px] 2xl:pe-[20px] text-[14px]'>
                  TOTAL ({policiesTableBody.length})
                </td>

                <td>${totals.expiring_tech}</td>

                <td>${totals.expiring_premium}</td>

                <td>${totals.renewal_to_tech}</td>

                <td>${totals.renewal_tech}</td>

                <td>${totals.renewal_premium}</td>

                <td>{totals.rate_change}%</td>

                <td>
                  <p className='w-[52px] h-[24px] leading-[24px] text-center rounded-full bg-[#FDD261] text-black'>
                    {totals.loss_ratio}%
                  </p>
                </td>
                <td className='pe-[21px]'></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* for mobile version */}
        <div className='flex flex-col gap-4 lg:hidden'>
          {policiesTableBody.map((polBody) => (
            <div key={polBody.id} className='bg-[#232838] rounded-xl p-4 text-[#AEB1B8] text-sm'>
              <div className='flex items-center text-sm gap-2 mb-1'>
                <img src={polBody.img} alt='icon' className='w-4 h-4' />
                <div className='font-medium'>{polBody.line}</div>
              </div>
              <p className='text-xs text-[#6F778A] mb-2'>{polBody.serialNumber}</p>

              <dl className='space-y-2'>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Eff. Date</dt>
                  <dd>{polBody.eff_date}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Exp. Date</dt>
                  <dd>{polBody.exp_date}</dd>
                </div>
                <div className='flex justify-between items-center'>
                  <dt className='text-[#6F778A]'>Status</dt>
                  <dd className='flex items-center gap-1'>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        polBody.status === 'Active' ? 'bg-[#10B981]' : 'bg-[#ffcb60]'
                      }`}
                    ></span>
                    {polBody.status}
                  </dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Exp. Tech</dt>
                  <dd>${polBody.expiring_tech}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Exp. Premium</dt>
                  <dd>${polBody.expiring_premium}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Ren. to Tech</dt>
                  <dd>${polBody.renewal_to_tech}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Ren. Tech</dt>
                  <dd>${polBody.renewal_tech}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Ren. Premium</dt>
                  <dd>${polBody.renewal_premium}</dd>
                </div>
                <div className='flex justify-between'>
                  <dt className='text-[#6F778A]'>Rate Change</dt>
                  <dd>
                    {typeof polBody.loss_ratio === 'number'
                      ? `$${polBody.rate_change}`
                      : polBody.rate_change}
                  </dd>
                </div>
                <div className='flex justify-between items-center'>
                  <dt className='text-[#6F778A]'>Loss Ratio</dt>
                  <dd>
                    <span
                      className={`inline-block w-[52px] h-[24px] leading-[24px] text-center rounded-full text-xs ${
                        Number(polBody.loss_ratio) < 35
                          ? 'bg-[#3BB979] text-white'
                          : Number(polBody.loss_ratio) < 60
                            ? 'bg-[#FDD261] text-black'
                            : typeof polBody.loss_ratio === 'number'
                              ? 'bg-[#B93B3B] text-white'
                              : ''
                      }`}
                    >
                      {Number(polBody.loss_ratio) ? `${polBody.loss_ratio}%` : polBody.loss_ratio}
                    </span>
                  </dd>
                </div>
              </dl>

              <button className='mt-4 ml-auto block w-[20px] h-[20px]'>
                <img src={knowMore} alt='Details' className='w-full h-full' />
              </button>
            </div>
          ))}

          <dl className='bg-[#252a3d] rounded-xl p-4 text-sm text-white space-y-2'>
            <div className='flex justify-between font-semibold text-[#E5E7EB]'>
              <dt>Total Policies</dt>
              <dd>({policiesTableBody.length})</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Exp. Tech</dt>
              <dd>${totals.expiring_tech}</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Exp. Premium</dt>
              <dd>${totals.expiring_premium}</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Renewal to Tech</dt>
              <dd>${totals.renewal_to_tech}</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Renewal Tech</dt>
              <dd>${totals.renewal_tech}</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Renewal Premium</dt>
              <dd>${totals.renewal_premium}</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Rate Change</dt>
              <dd>{totals.rate_change}%</dd>
            </div>
            <div className='flex justify-between'>
              <dt>Loss Ratio</dt>
              <dd>
                <span className='inline-block px-2 py-[2px] text-center rounded-full bg-[#FDD261] text-black min-w-[52px]'>
                  {totals.loss_ratio}%
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
