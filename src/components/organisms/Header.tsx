"use client";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import ThemeSwitch from "../ThemeSwitch";
import { AppButton } from "../atoms/buttons";
import { AppDrawer } from "../molecules";
import { useEffect, useRef } from "react";

export const Header = () => {
  const headerRef = useRef<null | HTMLElement>(null);
  const lastScroll = useRef(0);
  const t = useTranslations("Header");
  useEffect(() => {
    if (typeof window !== undefined && headerRef.current) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > lastScroll?.current && headerRef.current) {
          headerRef.current.style.transform = "translateY(-100%)";
          lastScroll.current = window.scrollY;
        }
        if (window.scrollY < lastScroll?.current && headerRef.current) {
          headerRef.current.style.transform = "translateY(0%)";
          lastScroll.current = window.scrollY;
        }
      });
    }
  }, []);
  return (
    <header ref={headerRef} className="header_container padding_res ">
      <nav className="my-auto flex-row justify-between hidden md:flex">
        <ul className="text-textMain font-medium flex items-center gap-6">
          <li>{t("home")}</li>
          <li>{t("devices")}</li>
          <li>{t("project")}</li>
          <li>{t("price")}</li>
          <li>{t("contact")}</li>
        </ul>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <AppButton
            className="bg-neutral-300"
            text={t("login")}
            textClass="text-mainColor"
          />
        </div>
      </nav>
      <div className="md:hidden">
        <AppDrawer
          trigger={<Menu size={30} color="red" />}
          content={
            <nav className="flex-row justify-between px-4">
              <ul className="text-2xl font-medium flex flex-col  gap-8">
                <li>{t("home")}</li>
                <li>{t("devices")}</li>
                <li>{t("project")}</li>
                <li>{t("price")}</li>
                <li>{t("contact")}</li>
                <li>
                  <ThemeSwitch />
                </li>
                <li>
                  <AppButton
                    className="bg-neutral-300"
                    text={t("login")}
                    textClass="text-mainColor"
                  />
                </li>
              </ul>
            </nav>
          }
        />
      </div>
    </header>
  );
};
