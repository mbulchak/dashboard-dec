type Props = {
  width: string;
  exposureTitle: string;
  textColor?: string;
};

export const ExposureDiagram: React.FC<Props> = ({width, exposureTitle, textColor}) => {
  return (
    <section className='flex gap-[15px]'>
      <div className='w-[173px] h-[17px] bg-[#313853] relative rounded-r-full'>
        <p
          className={`absolute top-0 ${width} h-full rounded-r-full bg-linear-to-r from-[#313853] to-[#3B82F6]`}
        ></p>
      </div>

      <p className={`text-xs ${textColor}`}>{exposureTitle}</p>
    </section>
  );
};
