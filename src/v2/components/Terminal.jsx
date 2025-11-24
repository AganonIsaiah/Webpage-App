import "@/v2/styles/Desktop.css";

export default function Terminal({ config }) {
    const { x, y, z, dir, cmd, content } = config;

    return (
        <div className={`terminal !pb-6 flex flex-col absolute ${x} ${y} ${z} opacity-89`}>
            <div className="terminal-header text-xs">
                <span>isaiah@portfolio: ~/{dir}</span>

                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>
            </div>

            <div className="flex flex-col gap-1 text-sm !px-3">
                <p className="!mt-3 pgreen">{cmd}</p>

                {content?.map((block, i) => (
                    <p
                        key={i}
                        className={`whitespace-pre-wrap !mt-1 ${
                            block.type === "comment" ? "pgray" : ""
                        }`}
                    >
                        {block.segments.map((seg, j) => {
                            return seg.link ? (
                                <a
                                    key={j}
                                    href={seg.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${seg.className} text-blue-400 hover:underline cursor-pointer`}
                                >
                                    {seg.text}
                                </a>
                            ) : (
                                <span key={j} className={seg.className}>
                                    {seg.text}
                                </span>
                            );
                        })}
                    </p>
                ))}
            </div>
        </div>
    );
}
