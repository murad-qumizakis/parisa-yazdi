import SubCategories from '@/components/SubCategory/SubCategories';
import React from 'react';
import { fetchCategories, parseUrl } from '@/lib/utils';
import Link from 'next/link';

export default async function SubCategory({ params }: any) {
  const categories = await fetchCategories();
  console.log('categories: ', categories);

  // Function to convert 'sub-category-name' to 'Sub Category Name'
  const slugToCategoryName = (slug: string): string => {
    const words = slug.split('-');
    const formattedWords = words.map((word, index) => {
      // Capitalize all words except the middle ones if they are "of" or "and"
      if (
        index !== 0 &&
        index !== words.length - 1 &&
        (word.toLowerCase() === 'of' || word.toLowerCase() === 'and' || word.toLowerCase() === 'to')
      ) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words and replace "&" with "and"
    const result = formattedWords.join(' ').replace(/-/g, '').replace(/and/g, '&');
    return result;
  };
  console.log('slugToCategoryName: ', slugToCategoryName(params.category));

  // Get the subcategory that matches the slug
  const singleCategory = categories.data.find((category: any) => {
    const categoryName = category.attributes.name;
    const slugName = slugToCategoryName(params.category.toLowerCase());
    return categoryName.includes(slugName);
  });
  console.log('singleCategory: ', singleCategory);

  return (
    <>
      <main className="h-fit overflow-hidden bg-[#c7cdd584] pb-24">
        <div className="justify-center' mx-auto w-full  items-center">
          <div className="mt-10 flex w-full justify-center">
            <h2 className="mb-3 flex justify-start p-5  pb-2 pl-1 pt-0 text-center   text-4xl  font-semibold  leading-[55px] tracking-tighter sm:text-5xl md:text-4xl ">
              {slugToCategoryName(params.category)}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid w-fit   grid-cols-2 flex-wrap lg:grid-cols-3">
          {singleCategory.attributes.sub_categories.data.map((category: any, index: number) => {
            const { id, name } = category.attributes;
            const { thumbnail } = category.attributes;

            return (
              <div key={index} className="mb-5  gap-5 p-1 md:mx-2 md:w-auto">
                <Link href={`/articles/${parseUrl(`${params.category}`)}/${`${parseUrl(name)}`}`}>
                  <SubCategories
                    key={index}
                    subCategoryName={name}
                    thumbnail={
                      (thumbnail.data && thumbnail.data.attributes.formats.large.url) || ''
                    }
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
