import React from "react";
import DisplayScreen from "./DisplayScreen";

const BuildScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <main className="flex gap-2 ">
        <section className="w-[800px] h-[90vh] border rounded-md bg-green-100 p-2 relative">
          <DisplayScreen />
        </section>

        <section className="w-[400px] h-[90vh] border rounded-md bg-red-50 p-2">
          code screen
        </section>
      </main>
    </div>
  );
};

export default BuildScreen;
