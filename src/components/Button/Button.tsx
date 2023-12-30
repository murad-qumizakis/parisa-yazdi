import Link from "next/link";

const Button = ({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Link
        href={link}
        className=" border-2 bg-yellow-500 p-2 mt-10 font-['Inter'] text-lg text-white antialiased hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]"
      >
        {children}
      </Link>
    </>
  );
};

export default Button;