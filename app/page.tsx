import { HeroSection } from "./(landing)/_components/hero-section";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drykej1am/image/upload/v1741595494/weeshr_website/HeroBGElements_bklhok.png')",
      }}
      className="items-center min-h-screen justify-items-center bg-cover bg-top"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />
      </main>{" "}
    </div>
  );
}
