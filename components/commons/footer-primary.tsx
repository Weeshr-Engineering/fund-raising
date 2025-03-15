import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/Bz1y1zKvQMX545NR/?mibextid=LQQJ4d",
    icon: "https://res.cloudinary.com/drykej1am/image/upload/v1708288264/weeshr_website/FB_mufgbd.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/weeshrapp/",
    icon: "https://res.cloudinary.com/drykej1am/image/upload/v1708288265/weeshr_website/IG_jw9rir.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/weeshrapp",
    icon: "https://res.cloudinary.com/drykej1am/image/upload/v1708288266/weeshr_website/X_vigvoj.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/weeshrapp",
    icon: "https://res.cloudinary.com/drykej1am/image/upload/v1708288750/weeshr_website/Group_80_dhlm3v.svg",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@weeshrapp",
    icon: "https://res.cloudinary.com/drykej1am/image/upload/v1708288501/weeshr_website/TiTokWeeshr_yvqc4r.svg",
  },
];

const Footer: React.FC = () => {
  return (
    <div className="relative mt-[400px] md:mt-16">
      <footer className="px-4 pt-4 pb-6 lg:px-9 bg-[#011B2F] rounded-xl">
        <Image
          src="https://res.cloudinary.com/drykej1am/image/upload/v1741757811/weeshr-funding/iPhone_14_Pro_Mockup_dwa8nl.png"
          alt="logo"
          width={400}
          height={400}
          className="w-full md:hidden absolute -top-[330px] left-1/2 transform -translate-x-1/2 px-4 -z-10"
        />
        <div className="flex flex-col items-center justify-between p-4 py-6 md:flex-row md:space-x-4 lg:space-x-6">
          <div className="flex flex-col items-start">
            <a href="/" className="inline-flex items-center">
              <Image
                src="https://res.cloudinary.com/drykej1am/image/upload/v1697377875/weehser%20pay/Weeshr_Light_lrreyo.svg"
                alt="logo"
                width={90}
                height={80}
              />
            </a>
            <div className="mt-4 md:mt-6 lg:max-w-md md:text-left">
              <p className="text-base text-white md:text-sm lg:text-sm md:w-1/2">
                Weeshr helps you collect your gifts with the click of one button
                from your friends, fans, and family!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-6 md:items-end md:mt-0">
            <div className="flex items-center gap-2 px-2 mb-4 md:hidden">
              <a
                href="https://apps.apple.com/ng/app/weeshr/id6602884408"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto"
              >
                <Image
                  src="https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/Frame_28990_ke72lc.png"
                  alt="Apple store"
                  width={110}
                  height={80}
                />
              </a>
              <a
                className="w-full md:w-auto"
                href="https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/Frame_28991_zbsyrl.png"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/Frame_28991_zbsyrl.png"
                  alt="Playstore Button"
                  width={110}
                  height={80}
                />
              </a>
            </div>
            <Image
              src="https://res.cloudinary.com/drykej1am/image/upload/v1741783910/weeshr-funding/iPhone_14_Pro_Mockup_1_e7jmcm.png"
              alt="logo"
              width={600}
              height={800}
              className="px-4 md:block hidden absolute bottom-0 right-9 lg:h-[440px] w-80 h-80 lg:w-[440px] z-50"
            />
          </div>
        </div>

        <div className="flex flex-col items-start px-4 md:justify-between md:pb-10">
          <div className="md:flex items-center gap-2 px-2 hidden">
            <a
              href="https://apps.apple.com/ng/app/weeshr/id6602884408"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto"
            >
              <Image
                src="https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/Frame_28990_ke72lc.png"
                alt="Apple store"
                width={100}
                height={60}
              />
            </a>
            <a
              className="w-full md:w-auto"
              href="https://play.poogle.com/store/apps/details?id=com.app.weeshr&pcampaingid=web_share"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/drykej1am/image/upload/v1741754206/weeshr-funding/Frame_28991_zbsyrl.png"
                alt="Playstore Button"
                width={110}
                height={80}
              />
            </a>
          </div>
          <div className="flex items-center mt-4 space-x-2 md:mt-0">
            {socialMediaLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={link.icon}
                  alt={`${link.name} icon`}
                  width={60}
                  height={60}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// https://res.cloudinary.com/drykej1am/image/upload/v1741783910/weeshr-funding/iPhone_14_Pro_Mockup_1_e7jmcm.png
