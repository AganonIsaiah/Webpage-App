'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaGoogle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineStarOutline } from "react-icons/md";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

import '@/v2/styles/Desktop.css'

export default function Workspace5() {

    const [searchInput, setSearchInput] = useState("Isaiah Aganon Webpage V1");

    const router = useRouter();

    function Webpage({ icon, host, link, title, desc, route }) {

        const handleClick = () => {
            if (route?.startsWith("http")) {
                window.open(route, "_blank", "noopener noreferrer");
            } else {
                router.push(route);
            }
        };

        return (
            <button
                onClick={handleClick}
                className="flex flex-col text-left cursor-pointer text-sm text-gray-800 !w-[700px]"
            >
                <span className="flex items-center gap-2">
                    {icon && (
                        <img
                            src={icon}
                            alt="icon"
                            className="w-6 h-6 object-contain rounded-lg"
                        />
                    )}

                    <span>
                        <p className="font-medium">{host}</p>
                        <p className="flex items-center gap-4">{link} <BsThreeDotsVertical /></p>
                    </span>
                </span>

                <h2 className="!text-lg text-blue-800 hover:text-blue-900 hover:underline">
                    {title}
                </h2>
                <p>{desc}</p>
            </button>
        );
    }

    return (
        <div className="!font-sans flex flex-col bg-white h-[93dvh] w-[98dvw] rounded-xl shadow-2xl p-6">
            <header className="!px-3 flex items-center gap-4 bg-blue-50 w-full h-8 rounded-t-xl">
                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>

                <span className="flex justify-center items-center gap-2 rounded-t-xl !p-2 !mt-2 text-xs text-black bg-white">
                    <FaGoogle /> Isaiah Aganon - Google Search <IoMdClose className="cursor-not-allowed" />
                </span>
            </header>

            <nav className="!px-4 text-xs text-black flex justify-between items-center gap-2 border-b border-slate-200 h-9">
                <span className="flex gap-3 items-center cursor-not-allowed">
                    <FaArrowLeft className="text-gray-400" />
                    <FaArrowRight className="text-gray-400" />
                    <TbReload size={14} weight="bold" />
                </span>

                <span className="!mx-3 flex justify-between bg-blue-50 !w-[90dvw] !py-1 !px-3 rounded-2xl">
                    <p>google.com/search?q=Isaiah+Aganon</p>
                    <span className="flex items-center gap-2 cursor-not-allowed">
                        <SlLocationPin size={14} />
                        <MdOutlineStarOutline size={16} />
                    </span>
                </span>

                <span className="flex items-center gap-2 cursor-not-allowed">
                    <IoPersonCircleOutline size={20} />
                    <BsThreeDotsVertical size={14} />
                </span>
            </nav>

            <section className="flex flex-col gap-2 h-24 border-b border-slate-200 !px-8">
                <div className="flex gap-6 !mt-4">
                    <h2 className="!mt-1 pblue font-semibold text-2xl">Google</h2>

                    <div className="flex flex-col !w-full">
                        <div className="relative w-full max-w-[600px]">
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className="
                                w-full
                                h-10
                                !pl-4
                                !pr-10
                                text-black
                                rounded-full
                                bg-white
                                text-sm
                                border border-[#dfe1e5]
                                shadow-sm
                                hover:shadow-md
                                focus:border-blue-500
                                focus:ring-1
                                focus:ring-blue-500
                                outline-none
                                transition-all
                            "
                            />

                            <IoSearch
                                size={18}
                                className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                                !cursor-pointer
                            "
                            />
                        </div>

                        <span className="!mt-4 !ml-4 flex gap-4 cursor-not-allowed text-sm">
                            <p className="!cursor-pointer text-black underline">All</p>
                            <p>Shopping</p>
                            <p>Images</p>
                            <p>Videos</p>
                            <p>News</p>
                        </span>
                    </div>
                </div>
            </section>

            <article className="flex flex-col gap-8 !mt-6 !mx-38">
                <Webpage
                    icon="/images/en.png"
                    host="Vercel"
                    link="https://isaiahaganon.vercel.app/v1/music"
                    title="Isaiah's Webpage V1"
                    desc="Portfolio and projects by Isaiah Aganon."
                    route="/v1/music"
                />

                <Webpage
                    icon="/images/linkedin.svg"
                    host="LinkedIn • Isaiah Aganon"
                    link="310+ followers"
                    title="Isaiah Aganon - Software Developer Co-op @ RBC"
                    desc="Fourth Year Computer Science Major at Carleton University."
                    route="https://www.linkedin.com/in/isaiah-aganon/"
                />

                <Webpage 
                    icon="/images/github.svg"
                    host="GitHub"
                    link="https://github.com > AganonIsaiah"
                    title="AganonIsaiah"
                    desc="Software Developer | Building with React, Angular, and FastAPI"
                    route="https://github.com/AganonIsaiah"                
                />
            </article>
        </div>
    );
}