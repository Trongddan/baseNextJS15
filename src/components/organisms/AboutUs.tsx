import React from "react";
import { AppImage, Typography } from "../atoms";
import { IMGS } from "../../../public/imgs";

export const AboutUs = () => {
  return (
    <section className="padding_res max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-5">
      <div>
        <AppImage className="border" alt="about-us" src={IMGS.Banner1} />
      </div>
      <div className="space-y-4">
        <Typography type="h2">GIỚI THIỆU VỀ SỰ KIỆN CHÂU Á</Typography>
        <Typography>
          Sự kiện Châu Á là đơn vị uy tín hàng đầu trong lĩnh vực cung cấp dịch
          vụ cho thuê thiết bị âm thanh, ánh sáng, sân khấu, màn hình LED và các
          thiết bị sự kiện chuyên nghiệp. Với hơn một thập kỷ kinh nghiệm, chúng
          tôi tự hào mang đến những giải pháp sự kiện tối ưu, từ những sự kiện
          cá nhân đến các sự kiện doanh nghiệp quy mô lớn. <br />
          Chúng tôi luôn đặt chất lượng và sự chuyên nghiệp lên hàng đầu. Thiết
          bị của chúng tôi được đầu tư kỹ lưỡng, bảo dưỡng định kỳ, và đáp ứng
          các tiêu chuẩn cao nhất trong ngành. Đội ngũ kỹ thuật viên chuyên
          nghiệp, tận tâm của Sự kiện Châu Á sẽ đồng hành cùng bạn để đảm bảo
          rằng mọi chi tiết của sự kiện đều hoàn hảo, từ âm thanh, ánh sáng đến
          không gian sân khấu.
        </Typography>
      </div>
    </section>
  );
};
