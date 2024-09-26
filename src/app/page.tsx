"use client";
import { useState } from "react";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form>
        <input type="text" placeholder="type your name..." />
        <button type="submit"> Predict Data </button>
      </form>
    </div>
  );
}
