import { Cat } from "lucide-react";
// import RabbitIcon from "./icons/rappit-icon";

export default function Empty() {
  return (
    // <div className="flex flex-col items-center justify-center gap-1 md:gap-2 p-4 md:p-12 h-40 md:h-56 md:border md:rounded-xl">
    <div className="flex flex-col items-center justify-center px-4 h-28">
      {/* <RabbitIcon /> */}
      {/* <Rabbit size={128} strokeWidth={1} /> */}
      <Cat size={128} strokeWidth={1} />
      {/* <Cat size={34} /> */}
      {/* <h2 className="prose md:prose-2xl h-7">
        No Content here yet! I&apos;m working on it
      </h2> */}
      {/* <p className="prose">
        Continue learning, practice, or connect with your peers in the Manara Community!  
      </p> */}
    </div>
  );
}
