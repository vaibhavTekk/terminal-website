import Head from "next/head";
import History from "../components/History";
import Input from "../components/Input";
import { HistoryProvider } from "../utils/HistoryProvider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-screen font-mono">
        <HistoryProvider>
          <History />
          <Input />
        </HistoryProvider>
      </main>
    </div>
  );
}
