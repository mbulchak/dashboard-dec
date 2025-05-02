type Props = {
  initials: string;
  width: string;
  height: string;
  size?: string;
};

export const AvatarButton: React.FC<Props> = ({initials, width, height, size}) => {
  return (
    <button
      className={`cursor-pointer ${width} ${size} mr-2 ${height} rounded-[50px] bg-linear-to-b from-[#1E40AF] to[#1e40af47] bg-[#1e40af47]`}
    >
      {initials}
    </button>
  );
};
