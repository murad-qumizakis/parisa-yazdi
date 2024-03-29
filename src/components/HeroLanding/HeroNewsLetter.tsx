'use client';
import Link from 'next/link';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function HeroNewsLetter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSuccess = () => {
    setIsSent(true);
    // set it to false after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 5000);
  };

  function UserFeedback() {
    // tell the user that they have subscribed
    return (
      <>
        <span className="absolute bottom-24 w-1/2 md:static">
          <p className="mx-auto items-center justify-center  text-green-500 antialiased dark:text-green-400">
            Thanks for subscribing!
          </p>
        </span>
      </>
    );
  }

  const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    const email = inputRef.current ? inputRef.current.value : '';
    handleSuccess();
    await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email
      }),

      headers: {
        'Content-Type': 'application/json'
      },

      method: 'POST'
    });
    // empty the input field
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  return (
    <div className=" w-full gap-5 px-5   md:px-0">
      <h3 className="mb-3 text-base leading-tight text-gray-500 antialiased ">
        Subscribe for weekly exclusives & stay updated with the latest insights
      </h3>
      <form onSubmit={subscribeUser} className="flex flex-col gap-4 md:flex-row md:gap-0">
        <input
          type="email"
          placeholder="Enter you email..."
          ref={inputRef}
          className="border border-white bg-black p-4 text-white focus:outline-none md:w-7/12"
          id="email-input"
          name="email"
          required
          autoCapitalize="off"
          autoCorrect="off"
        />
        <Button
          type="submit"
          className="w-1/3 min-w-fit self-end rounded-none border border-white bg-black p-5 text-center font-heebo text-lg text-white hover:border-black hover:bg-white hover:text-black md:ml-3 md:w-auto md:p-8"
        >
          Subscribe
        </Button>
      </form>
      {isSent && <UserFeedback />}
    </div>
  );
}
