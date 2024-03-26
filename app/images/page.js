"use client";
import React, { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const fileHandle = async () => {
    console.log(file);
    const formD = new FormData();
    formD.set("file", file);
    const response = await fetch("http://localhost:3000/api/upload", {
      method: "POST",

      body: formD,
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[400px] bg-red-500 h-96 rounded-md shadow-2xl shadow-red-400 flex flex-col items-center gap-4">
        <h1 className="text-center text-white text-2xl font-bold py-3">
          Upload Image
        </h1>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          onClick={() => fileHandle()}
          className="w-32 bg-black p-2 text-white "
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
