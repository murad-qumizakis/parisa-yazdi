import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex h-screen w-full flex-col justify-center bg-[#1B3764] lg:flex-row lg:justify-evenly lg:gap-2">
      <div className="flex  h-5/6  flex-col items-center lg:my-auto lg:w-6/12 lg:justify-around">
        {/* header  */}
        <div className="flex flex-col gap-2 p-3">
          <h1 className=" text-3xl font-bold tracking-tighter text-white antialiased lg:text-3xl xl:text-6xl/none">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quia cum, numquam atque perspiciatis.
          </h1>
          <p className=" text-white antialiased md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quod rem libero corporis sunt dolore, similique quibusdam optio ab
            officiis impedit dolorem fugit modi delectus ipsam non. Ipsum,
            reprehenderit suscipit.
          </p>
        </div>

        {/* form */}
        <div className="flex w-full flex-col lg:-mt-20  ">
          <h1 className="items-start pl-4 pt-4 text-3xl text-white antialiased">
            <span className="font-semibold text-yellow-500">Subscribe</span> to
            the newsletter
          </h1>

          <form className="flex w-full items-start gap-4  p-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-16 w-8/12 border border-gray-300 p-2 text-xl text-gray-500 antialiased focus:outline-none"
            />
            <button
              type="submit"
              className=" mr-2 h-16 w-4/12 min-w-fit  bg-yellow-500 p-2 text-2xl text-white antialiased hover:border-[#1B3764] hover:bg-white hover:text-[#1B3764]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* image */}
      <div className="my-auto hidden h-2/12 w-3/12 rounded-md lg:flex">
        <Image
          src="https://i.huffpost.com/gen/1039678/original.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="h-auto w-full "
        />
      </div>
    </section>
  );
};

export default Hero;