type Props = {
  icon: string;
  title: string;
  data: {
    num: number;
    title: string;
    width: string;
    persentage: string;
  }[];
};

export const ChangingWinnability: React.FC<Props> = ({icon, title, data}) => {
  return (
    <section className='max-w-[490px] bg-[#242A3D] rounded-2xl pt-[21px] pb-[28px] ps-[21px]'>
      <div className='flex gap-[8px] mb-[34px] items-start'>
        <img src={icon} alt='winnability icon' className='w-[25px] h-[25px]' />
        <p>{title} Winnability</p>
      </div>

      <div className='flex flex-col gap-[17px]'>
        {data.map((info) => {
          return (
            <section key={info.num} className='flex gap-[17px]'>
              <p
                className={`w-[37px] h-[37px] leading-[37px] border text-center rounded-full ${
                  title === 'Increasing'
                    ? 'border-[#3BB979] text-[#3BB979]'
                    : 'border-[#f3ca5f] text-[#f3ca5f]'
                }`}
              >
                {info.num}
              </p>

              <div>
                <p className='text-sm mb-[2px]'>{info.title}</p>

                <div className='flex gap-[10px]'>
                  <p
                    className={`bg-gradient-to-r from-[#242A3D] h-[17px] ${info.width} rounded-r-full ${
                      title === 'Increasing' ? 'to-[#3BB979]' : 'to-[#f3ca5f]'
                    }`}
                  ></p>

                  <p className='text-[#8A8B98] text-[13px] '>{info.persentage}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
