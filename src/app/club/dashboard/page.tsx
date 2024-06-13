import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <div className="h-2/5 relative bg-zinc-900 m-2 rounded-md p-2">
        club Details
        <div>image in bg</div>
        <div className="absolute bottom-0 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-2">
          Fight Club
        </div>
        <div className="absolute right-0 px-2">club stats</div>
      </div>
      <div>
        <div>all events</div>
        <div>event card</div>
      </div>
    </div>
  );
};

export default page;
