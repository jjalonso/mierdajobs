"use client";

import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import React, { Fragment } from "react";

import { Button } from "./button";
import Paper from "./paper";

const AuthBadge = () => {
  const currentPath = usePathname();
  // const searchParams = useSearchParams();
  const { data: session } = useSession();

  // const encodedCallbackUrl = encodeURIComponent(searchParams.toString());
  // const callbackUrl = useMemo(() => `${currentPath}?${encodedCallbackUrl}`, [currentPath, encodedCallbackUrl])

  return (
    <div className="flex flex-1 justify-end">
      {session ? (
        <Menu
          as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-fit">
            <Image
              className="h-12 w-12 rounded-full border-[3px] border-secondary bg-secondary md:h-16 md:w-16"
              src={`/avatars/${session?.user?.image}.png`}
              width="56"
              height="56"
              alt="Avatar"
            />
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
            <Menu.Items>
              <Paper className="absolute right-0 mt-1 w-fit origin-top-right p-2 shadow-lg md:p-2">
                <Menu.Item>
                  {() => (
                    <Link href={`/settings/avatar?callbackUrl=${currentPath}`}>
                      <Button
                        variant="ghost"
                        className="
                        text-black 
                        hover:bg-secondary 
                        hover:text-white"
                      >
                        Cambiar Avatar
                      </Button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {() => (
                    <Button
                      variant="ghost"
                      onClick={() => signOut()}
                      className="
                        text-black 
                        hover:bg-secondary 
                        hover:text-white"
                    >
                      Cerrar sesion
                    </Button>
                  )}
                </Menu.Item>
              </Paper>

            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <>
          <Link
            href={"/signin"} className="flex justify-end">
            <Button className="min-w-fit">
              <div className="">Iniciar sesión</div>
              <UserCircleIcon className="h-8 w-8 text-white md:h-10 md:w-10" />
            </Button>
          </Link>
        </>
      )}
    </div>
  )
};

export default AuthBadge;