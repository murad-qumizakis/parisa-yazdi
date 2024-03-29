import Link from 'next/link';
import LatestClassesCard from './LatestClassesCard';

interface LatestClassAndCourseCardProps {
  className?: string;
}

const LatestClasses = ({ className }: LatestClassAndCourseCardProps) => {
  return (
    <>
      <div className="justify-center bg-slate-200 md:w-1/2">
        <div className="relative flex w-full items-center justify-between  p-5 pb-0 font-['Cardo']  text-4xl font-normal leading-[54px] text-[#014444] antialiased">
          <h1 className="pl-5"> Classes </h1>
        </div>
        <div className=" p-5 pb-0 pt-0">
          <p className="p-8 pb-3 pt-3  text-sm font-normal leading-[24px] text-[#014444] antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eget est, a
            hendrerit mauris. Ut quis odio sed.
          </p>
          <div className="scroll-snap-type-y-mandatory scrollbar-thick scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-thick flex h-[200px] snap-x snap-mandatory flex-col gap-2 overflow-y-scroll p-5  pt-3 shadow-lg">
            <LatestClassesCard className="snap-start" />
            <LatestClassesCard className="snap-start" />
            <LatestClassesCard className="snap-start" />
            <LatestClassesCard className="snap-start" />
          </div>
          <div className=" flex w-full justify-center p-4">
            <Link
              className={`mt-3 border-2 border-white bg-yellow-500 p-2  font-['Inter'] text-xl text-white  antialiased  hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]`}
              href="/classes-and-courses/classes"
            >
              View All Classes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestClasses;
