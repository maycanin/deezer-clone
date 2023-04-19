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
        </div>
      </section>

      <footer className="fixed bottom-0 h-20 w-full bg-zinc-800 border-t border-t-zinc-700"></footer>
    </main>
  );
}
