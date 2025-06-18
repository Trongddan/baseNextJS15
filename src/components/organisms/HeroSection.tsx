"use client";

import { IMGS } from "../../../public/imgs";
import { AppImage } from "../atoms";
import { AppCarousel } from "../molecules";

export const HeroSection = () => {
  return (
    <AppCarousel
      list={[1, 2, 3, 4, 5]}
      renderItem={() => (
        <div className="p-1 ">
          <AppImage
            className="w-full max-h-screen"
            // isLoading
            alt="banner"
            src={IMGS.Banner2}
          />
        </div>
      )}
    />
  );
};
