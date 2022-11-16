import Link from "next/link";
import * as React from "react";

const CHOICES = [0, "1/2", 1, 2, 3, 5, 8, 13, 20, 40, 100, "?", "∞"];

export default function ScrumPower() {
  const [choice, setChoice] = React.useState(undefined);
  const [show, setShow] = React.useState(false);

  const nextAction = () => {
    if (!show) {
      setShow(true);
    }
    if (show) {
      setShow(false);
      setChoice(undefined);
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-800 pt-4 font-hyperlegible">
      {choice && (
        <div className="fixed flex top-0 w-full h-full backdrop-blur-sm">
          <div
            onClick={() => {
              nextAction();
            }}
            className="cursor-pointer mx-8 my-12 grow rounded flex items-center justify-center text-white bg-slate-400 "
          >
            {choice && show && (
              <div>
                <p className="text-center text-[128px]">{choice}</p>
                <p className="text-center text-lg text-slate-200">Click again to close</p>
              </div>
            )}
            {choice && !show && <p className="text-center text-5xl">Click to reveal</p>}
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 p-8 gap-2">
        {CHOICES.map((choice, index) => {
          const string = typeof choice === "string" ? choice : choice.toString();

          return (
            <div
              key={index}
              className="text-center p-2 w-full h-20 bg-slate-700 flex cursor-pointer rounded  hover:bg-slate-600 text-orange-500 "
              onClick={() => {
                setChoice(string);
              }}
            >
              <p className="self-center text-center w-full">{string}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
