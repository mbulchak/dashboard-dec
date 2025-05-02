type Props = {
  width: string;
  height: string;
  buttonName: string;
};

export const QuickButton: React.FC<Props> = ({width, height, buttonName}) => {
  return <button className={`${width} ${height}  bg-[#3B82F6] rounded-[20px]`}>{buttonName}</button>;
};
