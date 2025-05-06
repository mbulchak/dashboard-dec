type Props = {
  metricsSubHeader: string;
  metricsHeader: string;
  isDots?: boolean;
  descr1?: string;
  descr2?: string;
  metricsLink: string;
};

export const PerformanceMetricBox: React.FC<Props> = ({
  metricsHeader,
  metricsSubHeader,
  metricsLink,
  isDots,
  descr1,
  descr2,
}) => {
  return (
    <section className='pt-[25px] pb-[15px] ps-[21px] bg-[#1E2233] flex flex-col justify-between rounded-2xl scale-100 transition delay-150 duration-300 ease-in-out hover:scale-105'>
      <div>
        <h3 className='text-normal flex gap-[10px]'>
          {metricsSubHeader}
          {isDots && (
            <div className='flex items-center gap-[3px]'>
              <span className='h-[10px] w-[10px] bg-[#1e40af] rounded-full'></span>
              <span className='h-[10px] w-[10px] bg-[#1e40af] rounded-full'></span>
              <span className='h-[10px] w-[10px] bg-[#1e40af] rounded-full'></span>
              <span className='h-[10px] w-[10px] bg-[#1e40af] rounded-full'></span>
            </div>
          )}
        </h3>

        <div className="flex items-end gap-[3px]">
          <p className='text-[37px] '>{metricsHeader}</p>
          <p className="pb-[7px] text-[#8A8B98]">{descr1}</p>
        </div>

        <p className="text-[#8A8B98]">{descr2}</p>
      </div>

      <p className='cursor-pointer text-[#3B82F6] text-[11px]'>{metricsLink} &rarr;</p>
    </section>
  );
};
