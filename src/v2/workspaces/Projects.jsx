

import '@/v2/styles/Desktop.css'


export default function SpotifyProjects() {




    return (
        <div className="flex flex-col bg-black h-[93dvh] w-[98dvw] rounded-xl shadow-2xl p-6">
            <div className="!px-3 flex items-center gap-4 w-full h-8 rounded-t-xl">
                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>
            </div>

            <div className="!h-9/10 bg-red-700 flex">
                <nav className="flex flex-col">
                    <a href="">Home</a>
                    <a href="">Search</a>
                    <a href="">Your Library</a>
                  

                </nav>
                <section></section>
            </div>

            <footer className='bg-blue-600 !h-1/10'>

            </footer>

        </div>
    );
}