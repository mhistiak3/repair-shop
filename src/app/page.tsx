import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center mx-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-lg bg-black/80 w-4/5 sm:max-w-96 mx-auto text-white sm:text-xl">
          <h1 className="text-3xl font-semibold font-roboto">iCom Computer <br /> Repair Shop</h1>
          <address>
            5433 main street <br /> New York, NY 10001
          </address>
          <p>Open Daily: 9am - 6pm</p>
          <Link href={'tel:555-555-5555'} className="hover:underline">
          555-555-5555
          </Link>
        </div>
      </main>
    </section>
  );
}
