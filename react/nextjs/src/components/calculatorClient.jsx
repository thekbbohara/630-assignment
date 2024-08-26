"use client";
import { useEffect, useRef, useState } from "react";
import { normalModeKeys } from "./calcMods";
const CalculatorClient = () => {
  // const modes = ["normal", "scientific"];
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [isEqualToMode, setIsEqualToMode] = useState(false);
  const resultRef = useRef(null);
  const queryRef = useRef(null);

  const evalQuery = (input) => {
    if (isEqualToMode) {
      if (input == "=") return;
      setHistory([...history, { query: query, result: result }]);
      if (queryRef.current) {
        queryRef.current.style.opacity = 1;
        queryRef.current.style.fontSize = "30px";
      }
      if (resultRef.current) {
        resultRef.current.style.opacity = 0.75;
        resultRef.current.style.fontSize = "20px";
      }
      if (!isNaN(Number(input))) {
        setQuery(input);
        setResult(0);
      }
      if (
        input == "+" ||
        input == "-" ||
        input == "*" ||
        input == "/" ||
        input == "%" ||
        input == "."
      ) {
        /* if (input == ".") {
          if (query.includes(".")) return;
        } */
        setQuery(result + input);
      }
      setIsEqualToMode(false);
      return;
    }
    if (query.length == 0) {
      if (!isNaN(Number(input)) || input == "-" || input == "+") {
        setQuery(input);
      }
      return;
    }
    if (input == "<-") {
      const tempQuery = query.split("");
      tempQuery.pop();
      setQuery(tempQuery.join(""));
      return;
    } else if (input == "=") {
      if (query == "") return;

      setIsEqualToMode(true);
      setResult(eval(query));
      if (queryRef.current) {
        queryRef.current.style.opacity = 0.75;
        queryRef.current.style.fontSize = "20px";
      }
      if (resultRef.current) {
        resultRef.current.style.opacity = 1;
        resultRef.current.style.fontSize = "30px";
      }
      return;
    } else if (input == "AC") {
      setQuery("");
      setResult(0);
      setHistory([]);
      return;
    } else if (input == "%") {
      setQuery("");
      setResult(0);
      return;
    }
    if (
      input == "+" ||
      input == "-" ||
      input == "*" ||
      input == "/" ||
      input == "%" ||
      input == "."
    ) {
      if (input == ".") {
        if (query.includes(".")) return;
      }
      const tempQuery = query.split("");
      const lastVal = tempQuery[tempQuery.length - 1];
      if (isNaN(lastVal) || lastVal == ".") {
        tempQuery.pop();
        setQuery(tempQuery.join("") + input);
        return;
      }
    }

    setQuery(query + input);
  };
  useEffect(() => {
    const tempQuery = query.split("");
    const lastInput = tempQuery[tempQuery.length - 1];
    if (!isNaN(Number(lastInput)) && lastInput !== ".") {
      setResult(eval(query));
    }
  }, [query]);

  return (
    <section className=" bg-[#11111b] max-w-96 w-full  mx-auto rounded-lg">
      <div className="border-b border-[#cdd6f4] min-h-28 flex flex-col justify-end items-end *:text-3xl font-bold">
        {history.length >= 1 && (
          <ul className="history opacity-55 flex flex-col gap-1 mb-3 max-h-40 overflow-y-scroll">
            {history.map(({ query, result }) => (
              <li
                key={query}
                className="flex flex-col items-end text-[20px] leading-5"
              >
                <span>{query}</span>
                <span className="text-[12px]"> = {result}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="opacity-1" ref={queryRef}>
          {query}
        </div>
        <div>
          {query ? (
            <span ref={resultRef} className="text-xl opacity-55 mb-2">
              = {result}
            </span>
          ) : (
            result
          )}
        </div>
      </div>
      <ul className="grid grid-cols-4 grid-rows-5 place-items-center *:min-h-20 *:max-w-20 *:cursor-pointer *:select-none">
        {normalModeKeys.map((normalKey, id) => (
          <li
            key={id}
            className={`${isNaN(Number(normalKey)) && "text-orange-500"} text-xl font-semibold flex justify-center items-center max-w-20 w-full min-h-20`}
            onClick={() => {
              evalQuery(normalKey);
            }}
          >
            {normalKey}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CalculatorClient;
