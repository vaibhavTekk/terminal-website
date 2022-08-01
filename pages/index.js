import Head from "next/head";
import History from "../components/History";
import Input from "../components/Input";

import { HistoryProvider } from "../utils/HistoryProvider";

export default function Home() {
  return (
    <div className="p-4 flex flex-col justify-center items-center h-screen">
      <Head>
        <title>vaibhavTekk</title>
        <meta name="description" content="Terminal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HistoryProvider>
        <main className="flex flex-col-reverse font-mono w-[960px] bg-andromedabackground rounded-lg drop-shadow-[0_12px_12px_rgba(255,255,255,0.15)]">
          <div className="px-4 pb-4 h-[540px] overflow-y-auto mb-2">
            <History />
            <Input />
          </div>
          <div className="flex flex-row items-center px-4 pt-4 pb-2 ">
            <ul className="flex flex-row gap-2">
              <li className="h-3 w-3 bg-andromedared rounded-full"></li>
              <li className="h-3 w-3 bg-andromedayellow rounded-full"></li>
              <li className="h-3 w-3 bg-andromedagreen rounded-full"></li>
            </ul>
          </div>
        </main>
      </HistoryProvider>
    </div>
  );
}
