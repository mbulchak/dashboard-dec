import {AvatarButton} from '../AvatarButton';
import knowMore from './../../assets/images/know-more.png';

export const WorkQueue = () => {
  const workQueueTableHeader = ['Originator', 'Client/line', 'Type', 'Status', 'Created', ''];
  const workQueueTableBody = [
    {
      id: 1,
      initials: 'SM',
      name: 'Sam Masters',
      companyName: 'NAMEX Tech Solutions',
      area: 'Cyber Liability',
      type: 'Underwriter Referral',
      status: 'New',
      createdAt: '04/16/2025',
    },
    {
      id: 2,
      initials: 'AW',
      name: 'Annalise Willis',
      companyName: 'Maritime Logistics Corp',
      area: 'Marine Cargo',
      type: 'Underwriter Referral',
      status: 'New',
      createdAt: '04/20/2025',
    },
    {
      id: 3,
      initials: 'PD',
      name: 'Patrick Devenport',
      companyName: 'GreenField Energy Ltd',
      area: 'Environmental',
      type: 'Loss Control Request',
      status: 'New',
      createdAt: '04/16/2025',
    },
    {
      id: 4,
      initials: 'AK',
      name: 'Ana Killian',
      companyName: 'NorthStar Financial Group',
      area: 'D& O Liability',
      type: 'Underwriter Referral',
      status: 'Pending Review',
      createdAt: '04/22/2025',
    },
    {
      id: 5,
      initials: 'AK',
      name: 'Ana Killian',
      companyName: 'Alliance Healthcare Systems',
      area: 'Medical Malpractice',
      type: 'Email',
      status: 'Completed',
      createdAt: '04/28/2025',
    },
    {
      id: 6,
      initials: 'MK',
      name: 'Me',
      companyName: 'QuantumTech Industries',
      area: 'Product Liability',
      type: 'Email',
      status: 'Completed',
      createdAt: '04/20/2025',
    },
  ];

  return (
    <>
      <div className='max-w-[1035px] text-[#E5E7EB] px-[18px] lg:px-[23px] pt-[25px] pb-[36px] bg-[#1e2233] border border-[#313B54] rounded-2xl'>
        <h3 className='text-[20px] font-normal mb-[20px]'>Work Queue</h3>

        <div className='flex flex-col sm:flex-row gap-y-[5px] justify-start space-x-4 mb-[25px]'>
          <button className='px-[18px] py-[6px]  bg-[#3B82F6] text-white text-sm sm:text-[16px] rounded-full mr-[8px] font-medium cursor-pointer'>
            Assigned to me (12)
          </button>
          <button className='px-[18px] py-[6px] bg-[#0C0F17] text-[#C5CAD3] text-sm sm:text-[16px] mr-[8px] rounded-full font-medium cursor-pointer'>
            Pending Review (8)
          </button>
          <button className='px-[18px] py-[6px] bg-[#0C0F17] text-[#C5CAD3] text-sm sm:text-[16px] mr-[8px] rounded-full font-medium cursor-pointer'>
            Referrals (3)
          </button>
        </div>

        <div className='hidden sm:block'>
          <table className='w-full '>
            <thead>
              <tr className='bg-[#252a3d] text-[#94A3B8] '>
                {workQueueTableHeader.map((header, index) => (
                  <th
                    key={header}
                    className={`h-[32px] text-left font-normal text-[12px] py-[4px] ${
                      index === 0 ? ' ps-[20px]' : ''
                    }`}
                  >
                    {header.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {workQueueTableBody.map((workRecord, index) => (
                <tr
                  key={workRecord.id}
                  className={`border-b border-[#313B54] ${index % 2 !== 0 ? 'bg-[#232838] ' : ''}`}
                >
                  <td className='h-[60px] ps-[15px] flex items-center min-w-fit'>
                    <AvatarButton
                      initials={workRecord.initials}
                      width='w-[32px]'
                      height='h-[32px]'
                      size='text-sm'
                    />

                    {workRecord.name}
                  </td>

                  <td className='h-[60px] '>
                    {workRecord.companyName}
                    <p className='text-[#94A3B8] text-sm'>{workRecord.area}</p>
                  </td>

                  <td className='h-[60px] '>{workRecord.type}</td>

                  <td className='h-[60px]  flex gap-[5px] items-center'>
                    <span
                      className={`inline-block w-[10px] h-[10px] rounded-[12px] ${
                        workRecord.status === 'New'
                          ? 'bg-[#3B82F6]'
                          : workRecord.status === 'Pending Review'
                            ? 'bg-[#F59E0B]'
                            : 'bg-[#10B981]'
                      }`}
                    ></span>
                    {workRecord.status}
                  </td>

                  <td className='h-[60px]'>{workRecord.createdAt}</td>

                  <td className='h-[60px] pe-[30px] text-center '>
                    <button className='cursor-pointer w-[20px] h-[20px] ml-[5px]'>
                      <img src={knowMore} alt='Details button' className='w-[20px] h-[20px]' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='sm:hidden space-y-4'>
          {workQueueTableBody.map((item) => (
            <div
              key={item.id}
              className='bg-[#232838] p-4 rounded-2xl border border-[#313B54] text-[#E5E7EB]'
            >
              <div className='flex items-center space-x-3 mb-3'>
                <AvatarButton
                  initials={item.initials}
                  width='w-[32px]'
                  height='h-[32px]'
                  size='text-sm'
                />
                <div>
                  <div className='font-medium'>{item.name}</div>
                  <div className='text-sm text-[#94A3B8]'>{item.companyName}</div>
                </div>
              </div>

              <div className='text-sm space-y-1'>
                <p>
                  <span className='text-[#94A3B8]'>Line:</span> {item.area}
                </p>
                <p>
                  <span className='text-[#94A3B8]'>Type:</span> {item.type}
                </p>
                <p className='flex items-center gap-2'>
                  <span
                    className={`inline-block w-[10px] h-[10px] rounded-full ${
                      item.status === 'New'
                        ? 'bg-[#3B82F6]'
                        : item.status === 'Pending Review'
                          ? 'bg-[#F59E0B]'
                          : 'bg-[#10B981]'
                    }`}
                  ></span>
                  <span>{item.status}</span>
                </p>
                <p>
                  <span className='text-[#94A3B8]'>Created:</span> {item.createdAt}
                </p>
              </div>

              <div className='mt-3 text-right'>
                <button className='w-[20px] h-[20px]'>
                  <img src={knowMore} alt='Details button' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
