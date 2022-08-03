import { count } from "console";
import React, { useState } from "react";
import axios from "axios";
import "./Input.css";

type InputProps = {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
  type?: string;
  id: string;
};

const Input = ({
  children,
  onChange,
  searchText,
  type = "text",
  id,
}: InputProps) => {
  const [count, setCount] = useState(() => {
    console.log("Init state for input");
    return 0;
  });
  return (
    <div>
      <label htmlFor={id}>{children} </label>
      <input value={searchText} id={id} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;