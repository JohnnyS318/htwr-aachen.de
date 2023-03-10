import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";

import { MenuButton } from "./MenuButton";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  const isActive = (name: string): boolean => {
    return (
      router.pathname.startsWith(`/syscom/${name}`) ||
      router.pathname.startsWith(`/${name}`)
    );
  };

  return (
    <div>
      <div className="mx-auto px-1 text-gray-700 antialiased md:max-w-[910px]">
        <Head>
          <link
            rel="apple-touch-icon"
            href={`${router.basePath}/assets/syscom/apple-touch-icon.png`}
            key="apple"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${router.basePath}/assets/syscom/favicon.png`}
            key="icon32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${router.basePath}/assets/syscom/favicon-16x16.png`}
            key="icon16"
          />
          <link
            rel="icon"
            href={`${router.basePath}/assets/syscom/favicon.ico`}
            key="favicon"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${router.basePath}/assets/syscom/favicon.png`}
            sizes="96x96"
          ></link>
        </Head>
        {props.meta}

        <div className="md:max-w-{910px}">
          <div>
            <nav className="h-[210px] grid md:grid-cols-2 grid-cols-[30%_1fr] mt-3 h-{200px} bg-white border-blue-500 border-4 rounded-2xl ml-{-2px} mr-{-2px} p-4">
              <div className="self-center justify-self-center">
                <Image
                  src={"/assets/syscom/syscom.png"}
                  width={366}
                  height={118}
                  alt="ComSys Logo"
                  className="w-{366px} h-{118px}"
                />
              </div>
              <div className="block">
                <div className="grid justify-end">
                  <Image
                    src={"/assets/rwth/htwr.png"}
                    width={150}
                    height={41}
                    alt="RWTH Aachen Logo"
                  />
                </div>
                <ul className="grid grid-cols-5">
                  <MenuButton
                    src="/assets/syscom/home.png"
                    src_hover="/assets/syscom/home_hover.png"
                    alt="Home Icon"
                    href="/syscom"
                    name="HOME"
                    isActive={router.pathname === "/syscom"}
                  />
                  <MenuButton
                    src="/assets/syscom/team.png"
                    src_hover="/assets/syscom/team_hover.png"
                    alt="Team Icon"
                    href="/syscom/team"
                    name="TEAM"
                    isActive={isActive("team")}
                  />
                  <MenuButton
                    src="/assets/syscom/teaching.png"
                    src_hover="/assets/syscom/teaching_hover.png"
                    alt="Teaching Icon"
                    href="/syscom/teaching"
                    name="TEACHING"
                    isActive={isActive("teaching")}
                  />
                  <MenuButton
                    src="/assets/syscom/research.png"
                    src_hover="/assets/syscom/research_hover.png"
                    alt="Research Icon"
                    href="/syscom/research"
                    name="RESEARCH"
                    isActive={isActive("research")}
                  />
                  <MenuButton
                    src="/assets/syscom/contact.png"
                    src_hover="/assets/syscom/contact_hover.png"
                    alt="Contact Icon"
                    href="/contact"
                    name="CONTACT"
                    isActive={isActive("contact")}
                  />
                </ul>
              </div>
            </nav>
          </div>

          <div className="content mt-6 rounded-2xl border-4 border-blue-500 bg-white p-6 text-xl">
            {props.children}
          </div>
        </div>
      </div>
      <footer className="lg:py-20">
        <InstituteSwitches
          links={[
            { name: "CIGOL/MALO", url: "/cigol" },
            { name: "ES/SWT", url: "/es" },
          ]}
        />
        <div className=" z-50 text-center text-sm">
          Dies ist (leider) nicht die echte ComSys-Lehrstuhl Webseite.{" "}
          <Link href={"/impressum"}>Impressum </Link> &{" "}
          <Link href={"/datenschutz"}>Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
};

export { Main };
