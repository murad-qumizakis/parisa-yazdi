import Image from 'next/image';
import { fetchArticles } from '@/lib/utils';
import config from '@/config';

type ArticleProps = {
  title: string;
  date: string;
  author: string;
  content: string;
  featuredImage: string;
};

const SingleArticle = ({ title, date, author, content, featuredImage }: ArticleProps) => {
  return (
    <>
      <main className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <article className="prose prose-gray dark:prose-invert mx-auto max-w-6xl">
          <div className="not-prose space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            <div className="flex items-center space-x-2">
              <span className="relative flex h-8 w-2 shrink-0 overflow-hidden rounded-full"></span>
              <p className="text-gray-500 dark:text-gray-400">
                Posted by {author} on {date}
              </p>
            </div>
          </div>
          <br />
          <Image
            src={`${config.api}${featuredImage} `}
            alt="Featured image"
            width="1250"
            height="340"
            className="mb-8 aspect-video overflow-hidden rounded-lg object-cover"
          />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </>
  );
};

export default SingleArticle;