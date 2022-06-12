import { signOut, useSession } from 'next-auth/react';
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, LogoutIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import typography from '../../../lib/typography';
import styles from '../../../lib/styles';

type UserInfoProps = {
  className?: string;
};

export default function UserInfo({ className }: UserInfoProps) {
  const { data } = useSession();

  if (!data?.user) {
    return <></>;
  }

  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <Menu.Button
        className={`flex items-center w-full justify-center rounded-md p-4 py-0 ${typography.paragraph} ${styles.press}`}
      >
        <div className="flex flex-row items-center gap-2">
          {data.user.image && <Image className="rounded-full" src={data.user.image} width="24px" height="24px" />}
          <p className="line-clamp-1">{data.user.name}</p>
        </div>
        <ChevronDownIcon className={`ml-2 -mr-1 h-5 w-5`} aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg dark:bg-neutral-800 ring-1 ring-black dark:ring-neutral-700 ring-opacity-10 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                onClick={() => {
                  signOut({ callbackUrl: '/' });
                }}
                className={`w-full group flex gap-1 items-center rounded-md px-2 py-2 ${typography.paragraph} ${styles.press}`}
              >
                <LogoutIcon className={`h-5 w-5`} />
                Logout
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
