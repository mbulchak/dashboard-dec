import {NeedsAttention} from '../NeedsAttention';
import logoMaritimeCorp from './../../assets/images/accGeneral/maritime.png';

export const MaritimeLogisticsCorp = () => {
  return (
    <>
      <div className='flex flex-col-reverse 2xl:flex-row 2xl:items-end gap-x-[55px] gap-y-[15px]'>
        <div className='flex items-center gap-x-[13px]'>
          <img src={logoMaritimeCorp} alt='logo Maritime Corp' className='h-[77px] w-[77px]' />

          <div className='flex flex-col'>
            <h3 className='text-[24px]'>Maritime Logistics Corp</h3>

            <div className='grid grid-cols-[250px_180px_150px_150px] gap-[5px]'>
              <div className='pe-[10px] border-r border-[#313b54]'>
                425 Harbor Boulevard, Suite 300
                <p>Seattle,WA 98104</p>
              </div>

              <section className='pe-[10px] border-r border-[#313b54]'>
                <p className='text-[#8A8B98] text-[14px]'>EXISTING ACCOUNT</p>
                <p>54383</p>
              </section>

              <section className='pe-[5px] border-r border-[#313b54]'>
                <p className='text-[#8A8B98] text-[14px]'>BROKER</p>
                <p>Marsh McLennan</p>
              </section>

              <section>
                <p className='text-[#8A8B98] text-[14px]'>UNDERWRITER</p>
                <p>Kate Johnson</p>
              </section>
            </div>
          </div>
        </div>

        <NeedsAttention />
      </div>
    </>
  );
};
