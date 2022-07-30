import Head from "next/head";
import History from "../components/History";
import Input from "../components/Input";
import { HistoryProvider } from "../utils/HistoryProvider";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-gray-50 p-4">
      <Head>
        <title>vaibhavTekk</title>
        <meta name="description" content="Terminal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col font-mono">
        <HistoryProvider>
          <History />
          <Input />
        </HistoryProvider>
      </main>
    </div>
  );
}
