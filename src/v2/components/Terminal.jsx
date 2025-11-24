import { useState, useRef, useEffect } from "react";
import "@/v2/styles/Desktop.css";

let globalZIndex = 1;

export default function Terminal({ config, stackedIndex, stacked }) {
  const { dir, cmd, content, position: initialPosition } = config;

  const [position, setPosition] = useState(initialPosition || { top: 0, left: 0 });
  const [dragging, setDragging] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  const offset = useRef({ x: 0, y: 0 });

  // Override position for stacked layout
  const computedPosition = stacked
    ? { top: stackedIndex * 250 + 20, left: 20 } // stack vertically with spacing
    : position;

  const handleMouseDown = (e) => {
    globalZIndex += 1;
    setZIndex(globalZIndex);

    setDragging(true);
    offset.current = {
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    };
  };

  const handleMouseMove = (e) => {
    if (dragging && !stacked) {
      setPosition({
        left: e.clientX - offset.current.x,
        top: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      className="terminal !pb-6 flex flex-col absolute"
      style={{ top: computedPosition.top, left: computedPosition.left, zIndex }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="terminal-header text-xs cursor-move"
        onMouseDown={handleMouseDown}
      >
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
            {block.segments.map((seg, j) =>
              seg.link ? (
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
              )
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
