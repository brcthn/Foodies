"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
export default function MainHeader() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground></MainHeaderBackground>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link href="/community">
                Foodies Community className=
                {path.startsWith("/community") ? classes.active : undefined}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
