import { AppIcon } from "@/components";
import { AppButton } from "@/components/atoms/buttons";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="text-5xl text-chart-5">
      {t("title")}
      <AppIcon name={"appleIcon"} className="stroke-amber-700" />
      <ThemeSwitch />
      <AppButton
        variant={"default"}
        text={"asdads"}
        preIcon="appleIcon"
        className="w-[200px]"
        isLoading
        disabled={false}
      ></AppButton>
      <Input />
    </div>
  );
}
