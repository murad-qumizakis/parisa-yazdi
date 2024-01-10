import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const AboutAuthor = () => {
  return (
    <section className="h-fit bg-white pb-8">
      {/* author section */}
      <div className="flex  flex-col items-center justify-center ">
        <div className="flex w-11/12 flex-col items-center justify-evenly  md:flex-row md:gap-36">
          <div className="flex h-full w-fit flex-col items-center justify-center ">
            <Image
              src="https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2021-04/Toni-Morrison-Square.png"
              alt="Picture of the author"
              width={450}
              height={450}
              className="rounded-full pt-9"
            />
          </div>

          <div className="mt-3 h-fit w-full max-w-[567px] items-end justify-start   font-['Inter'] text-lg font-normal leading-[34.20px] text-neutral-400 antialiased">
            <h1 className="relative mb-5 mt-7 w-[474px] p-5 pb-2 pl-0 text-start font-['Cardo'] text-4xl font-normal leading-[54px] text-[#014444] antialiased md:text-5xl">
              About Parisa
              <span className="absolute bottom-0 left-[6%] h-1 w-14 -translate-x-1/2  bg-yellow-500"></span>
            </h1>
            All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as
            necessary, making this the first true value generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined with a handful. All the Lorem Ipsum
            generators on the Internet tend to repeated predefined chunks as necessary, making this
            the first true value generator on the Internet.
            <br />
            <br />
            It uses a dictionary of over 200 Latin words, combined with a handful. All the Lorem
            Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making
            this the first true value generator on the Internet.
            <br />
            <br />
            <div className="flex justify-center md:justify-end">
              {/* <Link
                href={'/about'}
                className="border-2 bg-yellow-500 p-2  font-['Inter'] text-base text-white antialiased hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]"
              >
                Read more
              </Link> */}
              <Button link={'/about'}>Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
