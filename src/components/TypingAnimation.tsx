"use client";
import React, { useState, useEffect } from "react";
import { texts } from "./text";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const fullText = texts.paragraph;

  useEffect(() => {
    let index = 0;

    const typing = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        const timerId = window.setTimeout(typing, 100); // タイピング速度（ミリ秒単位）
        return timerId;
      } else {
        setIsCompleted(true); // テキストがすべて表示されたら状態を更新
      }
    };

    const timerId = typing();
    // コンポーネントがアンマウントされたときにタイマーをクリア
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="px-4 text-wrap font-mono whitespace-nowrap overflow-hidden flex items-center flex-wrap">
      <span>{text}</span>
      {!isCompleted && (
        <span className="ml-1 animate-blink-dot scale-150">●</span>
      )}
    </div>
  );
};

export default TypingAnimation;
