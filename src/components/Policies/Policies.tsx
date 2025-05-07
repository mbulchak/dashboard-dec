import marine from './../../assets/images/policies/boat.png';
import safety from './../../assets/images/policies/security.png';
import user from './../../assets/images/policies/userInFrame.png';
import building from './../../assets/images/policies/propertyYellow.png';
import umbrella from './../../assets/images/policies/umbrella.png';

export const Policies = () => {
  const policies: {
    icon: string;
    title: string;
    premium: string;
    effectiveDate: string;
  }[] = [
    {
      icon: marine,
      title: 'Marine Cargo',
      premium: 'Premium: $625,000',
      effectiveDate: 'Eff.Date: 6/30/2026',
    },
    {
      icon: safety,
      title: 'General Liability',
      premium: 'Premium: $175,000',
      effectiveDate: 'Eff.Date: 6/30/2026',
    },
    {
      icon: user,
      title: 'Workers Comp',
      premium: 'Premium: $75,000',
      effectiveDate: 'Eff.Date: ---',
    },
    {
      icon: building,
      title: 'Property',
      premium: 'Premium: $64,829.83',
      effectiveDate: 'Eff.Date: ---',
    },
    {
      icon: umbrella,
      title: 'Umbrella',
      premium: 'Premium: $275,000',
      effectiveDate: 'Eff.Date: 13/03/2026',
    },
  ];

  return (
    <>
      <div className='flex flex-col mb-[26px]'>
        <h2 className='text-[24px] mb-[10px]'>Policies</h2>

        <div className='overflow-hidden bg-[#1E2233] rounded-2xl py-[15px] ps-[25px] pe-[15px] sm:pe-[0] grid sm:grid-cols-[repeat(2,_250px)] md:grid-cols-[repeat(3,_250px)] lg:grid-cols-[repeat(4,_250px)] xl:grid-cols-[repeat(5,_250px)] gap-[15px] max-w-[1250px] cursor-pointer'>
          {policies.map((policy, index) => {
            return (
              <section key={index} className='py-[19px] px-[19px] bg-[#252A3D] rounded-2xl scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
                <div className='flex gap-2 mb-[2px]'>
                  <img src={policy.icon} alt='policy icon' className='w-[22px] h-[22px]' />
                  <h3 className='text-normal'>{policy.title}</h3>
                </div>

                <p className='text-[12px] text-[#8A8B98]'>{policy.premium}</p>
                <p className='text-[12px] text-[#8A8B98]'>{policy.effectiveDate}</p>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};
