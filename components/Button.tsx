type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: "bg-[#272727]",
};
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`px-6 py-3 text-xs md:text-[8px] md:py-2 md:px-6 lg:px-6 lg:py-2 lg:text-[10px] font-light tracking-wide  text-white uppercase ${variant}`}
    >
      {title}
    </button >
  );
};

export default Button;
