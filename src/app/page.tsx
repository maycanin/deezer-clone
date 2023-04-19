import { NavItem } from "@/components/NavItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImMusic } from "react-icons/im";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BiRadio } from "react-icons/bi";
import {
  IoHeartOutline,
  IoGridOutline,
  IoSearch,
  IoCloseOutline,
  IoNotifications,
} from "react-icons/io5";
import { NavSubItem } from "@/components/NavSubItem";
import Image from "next/image";
import image1 from "../../public/assets/icons/image_2.png";
import image2 from "../../public/assets/icons/image_3.png";
import image3 from "../../public/assets/icons/image_4.png";
import image4 from "../../public/assets/icons/image_5.png";
import image5 from "../../public/assets/icons/image_6.png";
import image6 from "../../public/assets/icons/image_7.png";
import image7 from "../../public/assets/icons/image_8.png";
import image8 from "../../public/assets/icons/image_8_1.png";
import disc from "../../public/assets/icons/capa_disc.jpg";

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <section className="h-screen w-screen flex">
        <aside className="w-56 bg-zinc-900">
          <div className="flex gap-3 text-zinc-200 p-6">
            <FiChevronLeft size={20} className="text-zinc-400" />
            <FiChevronRight
              size={20}
              className="hover:text-red-500 cursor-pointer"
            />
          </div>

          <nav className="flex flex-col gap-5 mt-8 text-white">
            <NavItem label="Música" Icon={ImMusic} isActive />
            <NavItem label="Podcasts" Icon={FaMicrophoneAlt} />
            <NavItem label="Rádios" Icon={BiRadio} />
            <NavItem label="Explorar" Icon={IoGridOutline} />
            <NavItem label="Favoritos" Icon={IoHeartOutline} />
            <div>
              <NavSubItem label="Mais queridas" />
              <NavSubItem label="Downloads" />
              <NavSubItem label="Playlists" />
              <NavSubItem label="Álbuns" />
              <NavSubItem label="Artistas" />
              <NavSubItem label="Podcasts" />
            </div>
          </nav>
        </aside>

        <div className="flex-1">
          <div className="border-b border-b-zinc-700 pl-5 py-3 pr-7 flex justify-between">
            <div className="flex gap-3 items-center w-full group">
              <IoSearch size={18} className="text-zinc-400" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full bg-transparent h-full outline-none text-lg text-zinc-300"
              />
              <div className="bg-zinc-600 rounded-full text-2xl text-zinc-200 hover:bg-zinc-500 cursor-pointer invisible group-hover:visible group-focus-within:visible">
                <IoCloseOutline />
              </div>
            </div>

            <div className="flex gap-4 items-center w-full justify-end">
              <div className="flex items-center text-zinc-200 text-xl rounded-full p-2 cursor-pointer hover:bg-zinc-700">
                <IoNotifications />
              </div>
              <Image
                src="https://github.com/maycanin.png"
                alt="User avatar"
                width={32}
                height={32}
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>

          <section className="p-20">
            <div>
              <h1 className="text-white text-2xl font-bold">
                Flow: toque o que você sente
              </h1>
              <p className="text-zinc-400">
                Um mix infinito e personalizado das músicas que você ama e
                também de novas descobertas.
              </p>
            </div>
            <div className="flex pt-8 justify-between">
              <div className="text-white text-center cursor-pointer">
                <div>
                  <Image
                    src={image8.src}
                    width={128}
                    height={128}
                    alt={""}
                    className="absolute"
                  />

                  <Image src={image7.src} width={128} height={128} alt={""} />
                </div>
                Flow
              </div>
              <div className="text-white text-center cursor-pointer">
                <div className="rounded-full bg-zinc-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Image src={image1.src} width={128} height={128} alt={""} />
                </div>
                Treino
              </div>
              <div className="text-white text-center cursor-pointer">
                <div className="rounded-full bg-zinc-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Image src={image2.src} width={128} height={128} alt={""} />
                </div>
                Festa
              </div>
              <div className="text-white text-center cursor-pointer">
                <div className="rounded-full bg-zinc-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Image src={image3.src} width={128} height={128} alt={""} />
                </div>
                Relax
              </div>
              <div className="text-white text-center cursor-pointer">
                <div className="rounded-full bg-zinc-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Image src={image5.src} width={128} height={128} alt={""} />
                </div>
                Na bad
              </div>
              <div className="text-white text-center cursor-pointer">
                <div className="rounded-full bg-zinc-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Image src={image4.src} width={128} height={128} alt={""} />
                </div>
                Você e eu
              </div>
              <div className="text-white text-center cursor-pointer">
                <div className="rounded-full bg-zinc-800 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Image src={image6.src} width={128} height={128} alt={""} />
                </div>
                Foco
              </div>
            </div>
          </section>
          <section className="pl-20 pr-20">
            <div>
              <h1 className="text-white text-2xl font-bold">
                Mixes inspirados por
              </h1>
              <p className="text-zinc-400">
                Descubra faixas similares aos seus hits favoritos.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-white pt-8">
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center mr-5 cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center mr-5 cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center mr-5 cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center mr-5 cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center mr-5 cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center mr-5 cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
              <div className="bg-zinc-800 rounded-lg flex gap-3 items-center cursor-pointer hover:scale-105">
                <Image
                  src={disc.src}
                  width={80}
                  height={80}
                  alt={""}
                  className="rounded-lg"
                />
                <h1>
                  In Aiw<p className="text-zinc-400">por Holin</p>
                </h1>
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer className="fixed bottom-0 h-20 w-full bg-zinc-800 border-t border-t-zinc-700"></footer>
    </main>
  );
}
