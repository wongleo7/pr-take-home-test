'use server';
import ModuloThreeForm from "../components/modulo-three-form";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold leading-none tracking-tight">
        Modulo Three 
      </h1>
      <h2 className="mb-5 text-md tracking-tight font-serif">
        Using Finite State Machines
      </h2>
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ModuloThreeForm
        />
      </div>
    </main>
  );
}
