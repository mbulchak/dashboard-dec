import { ExposureDiagram } from '../ExposureDiagram';
import {PerformanceMetricBox} from '../PerformanceMetricBox';

export const PerformanceMetrics = () => {
  return (
    <>
      <div className='text-[#E5E7EB] mb-[57px]'>
        <h3 className='text-[22px] mb-[10px]'>Performance Metrics</h3>

        <div className='grid grid-cols-[282px] md:grid-cols-[282px_282px] lg:grid-cols-[282px_282px_282px] 2xl:grid-cols-[282px_282px_282px_352px] grid-rows-[179px] gap-[10px]'>
          <PerformanceMetricBox
            metricsSubHeader='Winnability'
            metricsHeader='Very Strong'
            metricsLink='See all factors'
            isDots={true}
          />

          <PerformanceMetricBox
            metricsSubHeader='Loss Ratio'
            metricsHeader='25 %'
            metricsLink='View history'
            descr1='vs 42% target'
          />

          <PerformanceMetricBox
            metricsSubHeader='Premium Growth'
            metricsHeader='12.4%'
            metricsLink='View trend'
            descr1='YoY increase'
            descr2='$ 123M vs$ 150M Target'
          />

          <section className='pt-[25px] pb-[15px] ps-[21px] bg-[#1E2233] flex flex-col justify-between rounded-2xl h-[133px] w-[352px] scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
            <h3 className='text-normal flex gap-[10px]'>Exposure Distribution</h3>

            <ExposureDiagram width='w-4/5' exposureTitle='Marine Cargo: 71.4 %'/>
            <ExposureDiagram width='w-1/2' exposureTitle='General Liability: 20 %' />
            <ExposureDiagram width='w-1/3' exposureTitle='Workers Comp: 8.6 %' />
          </section>
        </div>
      </div>
    </>
  );
};
