/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fEEkgJhBeXW
 */
import { CardTitle, CardDescription, CardHeader, Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { fetchClasses } from '@/lib/utils';
import Class from './Classes';

export async function RecentClasses() {
  const classes = await fetchClasses();
  const sortedClasses = classes.data.sort((a: any, b: any) => {
    return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime();
  });

  const recentThreeClasses = sortedClasses.slice(0, 3);
  // console.log(recentThreeClasses, 'recentThreeCourses');

  return (
    <section className="relative w-full  py-12 md:py-24 lg:py-24">
      {/* // <section className="w-full    py-12 md:py-24 lg:py-20"> */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative flex w-full items-center justify-center">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
              Astro Reading & Classes
            </h2>
            <Image
              src={'https://www.vectorlogo.zone/logos/zoomus/zoomus-ar21.svg'}
              height={200}
              width={200}
              alt="Zoom Logo"
              className="absolute right-0 mb-3 hidden pr-5 pt-2 lg:block"
            />
          </div>
          <Image
            src={'https://www.vectorlogo.zone/logos/zoomus/zoomus-ar21.svg'}
            height={150} // Adjusted height to make the card smaller
            width={150} // Adjusted width to make the card smaller
            alt="Zoom Logo"
            className=" lg:hidden"
          />
          <p className="font-['Avenir Next'] mx-auto max-w-[700px] text-black dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Your Life's Narrative: Customized Readings & Exclusive One-on-Oe Classes
          </p>
        </div>
        <div className="mt-5 grid gap-6 py-6 lg:grid-cols-3 lg:gap-12">
          {/* <div className="grid gap-6  py-6 lg:grid-cols-1 lg:gap-6"> */}
          {recentThreeClasses.map((oneClass: any, i: number) => {
            const { id, name, description, slug } = oneClass.attributes;
            // TODO: Add slug to Strapi
            return (
              <Class
                slug={slug || ''}
                title={name || ''}
                description={description || ''}
                key={id || i}
              />
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="shadowhover:border inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 hover:border hover:border-black hover:bg-white hover:text-black"
            href="/classes-and-courses/classes"
          >
            View all Classes
          </Link>
        </div>
      </div>
    </section>
  );
}
