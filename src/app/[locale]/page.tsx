import { AppIcon } from "@/components";
import { AppButton } from "@/components/atoms/buttons";
import { AppInput } from "@/components/atoms/inputs";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="text-5xl">
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
      <div className="grid grid-cols-6 gap-2">
        <AppInput error="loi roi" label="Email" placeholder={"Enter the email"} required />
        <AppInput
          error="loi roi"
          label="Email"
          readOnly
          value={"hello xin chao hello xin chao hello xin chaohello xin chaohello xin chao "}
          placeholder={"Enter the email"}
          required
        />
      </div>
    </div>
  );
}
