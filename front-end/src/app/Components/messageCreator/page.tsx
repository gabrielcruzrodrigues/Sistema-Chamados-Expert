/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Quill from "quill";
import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import styles from "./messageCreator.module.sass";

type messageCreatorProps = { onChange: (message: string) => void };

const MessageCreator: React.FC<messageCreatorProps> = ({ onChange }) => {
  const [message, setMessage] = useState<string>("");
  const quillRef = useRef<Quill | null>(null);
  const editorRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          ["link"],
          [{ color: [] }, { background: [] }],
          ["blockquote", "code-block"],
        ],
      },
    });
    quillRef.current.on("text-change", () => {
      const text = quillRef.current?.root.innerHTML || "";
      onChange(text);
    });

    return () => {
      quillRef.current?.off("text-change");
    };
  }, [onChange]);

  const handleSendMessage = () => {};

  return (
    <div className={styles.container}>
      <div ref={editorRef}></div>
    </div>
  );
};

export default MessageCreator;
