import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow text-2xl bg-[#F5F5F5] text-[#555555]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};