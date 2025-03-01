import React from 'react';
import { fetchSocialMedias } from '@/lib/utils';
import Link from 'next/link';

export default async function BlackSocialMediaIcons() {
  const socialMedias = await fetchSocialMedias();
  // console.log(socialMedias);
  // console.log('socialMedias', socialMedias.data[0].attributes.twitter);
  return (
    <div className="icon-bar">
      <Link
        className="bg-[#bb0000] text-white hover:bg-white hover:text-[#bb0000]"
        href={socialMedias.data[0].attributes.youtube}
      >
        <YoutubeIcon className="youtube h-2 w-2 md:h-4 md:w-4" />
      </Link>
      <Link
        className="bg-[#dd4b39] text-white hover:bg-white hover:text-[#dd4b39]"
        href={socialMedias.data[0].attributes.instagram}
      >
        <InstagramIcon className="instagram h-2 w-2 md:h-4 md:w-4" />
      </Link>
      <Link
        className="bg-[#3b5998] text-white hover:bg-white hover:text-[#3b5998]"
        href={socialMedias.data[0].attributes.facebook}
      >
        <FacebookIcon className="facebook h-2 w-2 md:h-4 md:w-4" />
      </Link>
      <Link
        className="bg-[#55acee] text-white hover:bg-white hover:text-[#55acee]"
        href={socialMedias.data[0].attributes.twitter}
      >
        <TwitterIcon className="twitter h-2 w-2 md:h-4 md:w-4" />
      </Link>

      <Link
        className="bg-[#55acee] text-white hover:bg-white hover:text-[#55acee]"
        href={socialMedias.data[0].attributes.linkedIn}
      >
        <LinkedinIcon className="linkedIn h-2 w-2 md:h-4 md:w-4" />
      </Link>

      <Link
        className="bg-black text-white hover:bg-white hover:text-black"
        href={socialMedias.data[0].attributes.youtube}
      >
        <CloudIcon className="h-2 w-2 md:h-4 md:w-4" />
      </Link>
    </div>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
