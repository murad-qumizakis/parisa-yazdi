/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fEEkgJhBeXW
 */
import { CardTitle, CardDescription, CardHeader, Card } from '@/components/ui/card';
import Link from 'next/link';
import { fetchCourses } from '@/lib/utils';
import Course from './Courses';

export async function RecentCourses() {
  const courses = await fetchCourses();
  // console.log(courses.data, 'courses.data');

  const sortedCourses = courses.data.sort((a: any, b: any) => {
    return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime();
  });

  const recentThreeCourses = sortedCourses.slice(0, 3);
  // console.log(recentThreeCourses, 'recentThreeCourses');

  return (
    <section className="w-full py-12 md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative flex w-full items-center justify-center ">
            <h2 className=" text-4xl font-medium tracking-tighter sm:text-5xl">
              Online Astro Courses
            </h2>
            <svg
              width="200"
              height="32"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144 16"
              role="img"
              aria-labelledby=":R15nj6:"
              className="absolute right-0 mb-3 hidden pr-5 pt-2 lg:block"
            >
              <title id=":R15nj6:">Thinkific Logo</title>
              <path d="M.93.667h10.148c.513 0 .93.406.93.906s-.417.907-.93.907H7.056v12.011c0 .501-.416.907-.93.907H5.86a.918.918 0 0 1-.93-.906V2.48h-4A.919.919 0 0 1 0 1.573c0-.5.416-.906.93-.906Zm31.09 1.037V14.36a1.05 1.05 0 0 1-1.062 1.037 1.05 1.05 0 0 1-1.061-1.037v-5.27h-8.762v5.27a1.05 1.05 0 0 1-1.062 1.037 1.05 1.05 0 0 1-1.061-1.037V1.704A1.05 1.05 0 0 1 20.073.667a1.05 1.05 0 0 1 1.061 1.037v5.574h8.762V1.704A1.05 1.05 0 0 1 30.959.667a1.05 1.05 0 0 1 1.062 1.037Zm9.005 0V14.36c0 .572.448 1.037 1 1.037.553 0 1.002-.464 1.002-1.037V1.704c0-.573-.449-1.037-1.001-1.037-.553 0-1 .464-1 1.037Zm24.015-.022v12.283c0 .791-.656 1.433-1.466 1.433-.464 0-.9-.214-1.177-.579L54.155 3.983v10.4c0 .56-.465 1.015-1.04 1.015h-.044c-.573 0-1.039-.455-1.039-1.015V2.1c0-.792.657-1.434 1.468-1.434.463 0 .9.214 1.176.577L62.962 12.1V1.682c0-.56.465-1.015 1.039-1.015.574 0 1.04.454 1.04 1.015Zm8.005.022V14.36c0 .573.448 1.037 1 1.037.553 0 1.001-.464 1.001-1.037V1.704c0-.573-.448-1.037-1-1.037-.553 0-1 .464-1 1.037Zm11.097 13.694h-.088a.899.899 0 0 1-.703-.341l-4.934-6.18a1.701 1.701 0 0 1 .001-2.116l4.615-5.755a.9.9 0 0 1 .701-.34c.764 0 1.187.91.707 1.52L80.09 7.716l4.764 6.169c.472.611.048 1.512-.712 1.512Zm8.916-13.694V14.36c0 .572.447 1.037 1 1.037.553 0 1-.464 1-1.037V1.704c0-.573-.447-1.037-1-1.037-.553 0-1 .464-1 1.037Zm13.142 5.66h6.198a.91.91 0 0 1 .922.897.91.91 0 0 1-.922.895H106.2v5.346a.91.91 0 0 1-.922.896h-.291a.91.91 0 0 1-.923-.896V1.582c0-.506.422-.915.942-.915h8.142c.513 0 .927.406.922.904v.022a.91.91 0 0 1-.922.887H106.2v4.885Zm15.131-5.6v12.502c0 .566.468 1.025 1.045 1.025s1.045-.46 1.045-1.025V1.764c0-.566-.468-1.025-1.045-1.025s-1.045.459-1.045 1.025Zm17.453 13.634c-4.333 0-7.727-3.252-7.727-7.405 0-4.104 3.433-7.318 7.814-7.318 1.691 0 3.402.554 4.766 1.517a.878.878 0 0 1 .159 1.275l-.038.046a.916.916 0 0 1-1.243.166c-1.063-.785-2.348-1.235-3.6-1.235-3.21 0-5.725 2.428-5.725 5.528 0 3.112 2.515 5.55 5.725 5.55 1.227 0 2.52-.432 3.615-1.183a.928.928 0 0 1 1.211.125.88.88 0 0 1-.12 1.308c-1.427 1.031-3.166 1.626-4.837 1.626Z"></path>
            </svg>
          </div>
          <svg
            width="200"
            height="32"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144 16"
            role="img"
            aria-labelledby=":R15nj6:"
            className="lg:hidden"
          >
            <title id=":R15nj6:">Thinkific Logo</title>
            <path d="M.93.667h10.148c.513 0 .93.406.93.906s-.417.907-.93.907H7.056v12.011c0 .501-.416.907-.93.907H5.86a.918.918 0 0 1-.93-.906V2.48h-4A.919.919 0 0 1 0 1.573c0-.5.416-.906.93-.906Zm31.09 1.037V14.36a1.05 1.05 0 0 1-1.062 1.037 1.05 1.05 0 0 1-1.061-1.037v-5.27h-8.762v5.27a1.05 1.05 0 0 1-1.062 1.037 1.05 1.05 0 0 1-1.061-1.037V1.704A1.05 1.05 0 0 1 20.073.667a1.05 1.05 0 0 1 1.061 1.037v5.574h8.762V1.704A1.05 1.05 0 0 1 30.959.667a1.05 1.05 0 0 1 1.062 1.037Zm9.005 0V14.36c0 .572.448 1.037 1 1.037.553 0 1.002-.464 1.002-1.037V1.704c0-.573-.449-1.037-1.001-1.037-.553 0-1 .464-1 1.037Zm24.015-.022v12.283c0 .791-.656 1.433-1.466 1.433-.464 0-.9-.214-1.177-.579L54.155 3.983v10.4c0 .56-.465 1.015-1.04 1.015h-.044c-.573 0-1.039-.455-1.039-1.015V2.1c0-.792.657-1.434 1.468-1.434.463 0 .9.214 1.176.577L62.962 12.1V1.682c0-.56.465-1.015 1.039-1.015.574 0 1.04.454 1.04 1.015Zm8.005.022V14.36c0 .573.448 1.037 1 1.037.553 0 1.001-.464 1.001-1.037V1.704c0-.573-.448-1.037-1-1.037-.553 0-1 .464-1 1.037Zm11.097 13.694h-.088a.899.899 0 0 1-.703-.341l-4.934-6.18a1.701 1.701 0 0 1 .001-2.116l4.615-5.755a.9.9 0 0 1 .701-.34c.764 0 1.187.91.707 1.52L80.09 7.716l4.764 6.169c.472.611.048 1.512-.712 1.512Zm8.916-13.694V14.36c0 .572.447 1.037 1 1.037.553 0 1-.464 1-1.037V1.704c0-.573-.447-1.037-1-1.037-.553 0-1 .464-1 1.037Zm13.142 5.66h6.198a.91.91 0 0 1 .922.897.91.91 0 0 1-.922.895H106.2v5.346a.91.91 0 0 1-.922.896h-.291a.91.91 0 0 1-.923-.896V1.582c0-.506.422-.915.942-.915h8.142c.513 0 .927.406.922.904v.022a.91.91 0 0 1-.922.887H106.2v4.885Zm15.131-5.6v12.502c0 .566.468 1.025 1.045 1.025s1.045-.46 1.045-1.025V1.764c0-.566-.468-1.025-1.045-1.025s-1.045.459-1.045 1.025Zm17.453 13.634c-4.333 0-7.727-3.252-7.727-7.405 0-4.104 3.433-7.318 7.814-7.318 1.691 0 3.402.554 4.766 1.517a.878.878 0 0 1 .159 1.275l-.038.046a.916.916 0 0 1-1.243.166c-1.063-.785-2.348-1.235-3.6-1.235-3.21 0-5.725 2.428-5.725 5.528 0 3.112 2.515 5.55 5.725 5.55 1.227 0 2.52-.432 3.615-1.183a.928.928 0 0 1 1.211.125.88.88 0 0 1-.12 1.308c-1.427 1.031-3.166 1.626-4.837 1.626Z"></path>
          </svg>
          <p className="font-['Avenir Next'] mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our carefully designed courses to level up your knowledge.
          </p>
        </div>
        <div className="grid gap-6  py-6 lg:grid-cols-3 lg:gap-12">
          {recentThreeCourses.map((course: any, i: number) => {
            const { id, name, description, image, slug } = course.attributes;
            return <Course title={name} description={description} key={i} slug={slug} />;
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow hover:border hover:border-black hover:bg-white hover:text-black"
            href="/classes-and-courses/courses"
          >
            View all Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
