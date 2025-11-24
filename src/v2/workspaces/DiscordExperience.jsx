'use client';

import { IoMdArrowDropdown } from "react-icons/io";

export default function DiscordExperience() {

    function Sidebar() {
        return (
            <div className="!w-18 flex flex-col items-center rounded-bl-xl">
                <span className="!mt-2 flex gap-2 w-full flex items-center">
                    <span className="bg-white w-1 rounded-br-xl rounded-tr-xl h-10"></span>
                    <span className="cursor-pointer flex justify-center items-center rounded-xl bg-[#5865F2] !p-3 text-xl">
                        💼
                    </span>
                </span>

                <span className="!mt-2 border-b border-gray-600 w-1/2"></span>
            </div>
        );
    }


    function NavLinks() {


        return (
            <div className="flex flex-col bg-[#2b2d31] w-50">

                <span className="flex justify-between items-center !px-2 !py-1 font-semibold text-white border-b">
                    Isaiah's Portfolio
                    <IoMdArrowDropdown size={24}/>
                </span>
            </div>
        )
    }

    return (
        <div
            style={{
                fontFamily: "'gg sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }}
            className="flex flex-col bg-[#23272A] h-[93dvh] w-[98dvw] rounded-xl shadow-2xl p-6">
            <header className="!px-3 flex items-center gap-4 w-full h-8 rounded-t-xl">
                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>
            </header>

            <div className="flex h-full ">
                <Sidebar />

                <NavLinks />

            </div>

        </div>
    )
}