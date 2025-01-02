"use client";
import {
  IconHome,
  IconInfoCircle,
  IconUser,
  IconBalloon,
} from "@tabler/icons-react";
import { PinContainer } from "./components/ui/3d-pin";
import {
  Card,
  ContainerScroll,
} from "./components/ui/container-scroll-animation";
import { FloatingDock } from "./components/ui/floating-dock";
import { ShootingStars } from "./components/ui/shooting-stars";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

const sidebarLinks = [
  { title: "Ana Sayfa", href: "/", icon: <IconHome size={24} /> },
  { title: "Hakkımda", href: "/about", icon: <IconInfoCircle size={24} /> },
  { title: "İletişim", href: "/contact", icon: <IconUser size={24} /> },
  { title: "Projeler", href: "/projects", icon: <IconBalloon size={24} /> },
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <ShootingStars minDelay={200} maxSpeed={10} maxDelay={2000} />
      <TextGenerateEffect
        words="Merhaba Ben Baran Çiçek Full Stack Web Developerim,"
        className="flex items-center justify-center h-screen lg:text-7xl md:text-3xl text-xl text-center"
      />
      <div>
        <ContainerScroll titleComponent={<h1>Hello World</h1>}>
          <Card rotate={20} scale={3} translate={2}>
            <img
              src="/assets/foto2.png"
              alt="Foto"
              className="w-full h-full object-cover object-center"
            />
          </Card>
        </ContainerScroll>
      </div>

      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer title="Kurtarıcı" href="https://www.karasuacicikurtarici.com/" className="overflow-x-hidden">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Karasu Acici Oto kurtarma
          </h3>
          
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Oto kurtarıcı websitesi 
            </span>
          </div>
            <div className="flex items-center justify-center w-full h-full">
              <img src="/assets/qr-code.png" className=" h-full" alt="Qr Kod" />
            </div>
        </div>
        </PinContainer>
      </div>

      <div className="fixed bottom-3 md:flex justify-center items-center w-screen z-50">
        <FloatingDock items={sidebarLinks} mobileClassName="flex" />
      </div>
    </div>
  );
}
