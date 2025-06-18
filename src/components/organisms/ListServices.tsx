import React from "react";
import { AppImage, Typography } from "../atoms";
import { IMGS } from "../../../public/imgs";

export const ListServices = () => {
  const data = [
    {
      name: "Cho thuê Màn hình LED Đăng cap",
      img: IMGS.Banner2,
    },
    {
      name: "Cung cấp ca sỹ",
      img: IMGS.Banner2,
    },
    {
      name: "Biểu diễn saxophone",
      img: IMGS.Banner2,
    },
    {
      name: "Biểu diễn saxophone",
      img: IMGS.Banner2,
    },
    {
      name: "Biểu diễn saxophone",
      img: IMGS.Banner2,
    },
    {
      name: "Biểu diễn saxophone",
      img: IMGS.Banner2,
    },
  ];
  return (
    <section className="space-y-6 padding_res mx-auto max-w-7xl ">
      <Typography type="h2">Danh sách dịch vụ</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
        {data.map((item, index) => (
          <article key={index} className="space-y-2">
            <div className="rounded-3xl overflow-hidden">
              <AppImage alt={item.name} src={item.img} />
            </div>
            <Typography type="h5">{item.name}</Typography>
          </article>
        ))}
      </div>
    </section>
  );
};
