import Image from "next/image";
import Navbar from "@/components/global/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar user={true} />
      <section className="h-screen w-full bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased"></section>
    </main>
  );
}
