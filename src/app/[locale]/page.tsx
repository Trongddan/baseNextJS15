import ThemeSwitch from "@/components/ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="text-5xl text-chart-5">
      {t("title")}

      <ThemeSwitch />
      <Button variant={"destructive"}> as</Button>
      <Input />
    </div>
  );
}
