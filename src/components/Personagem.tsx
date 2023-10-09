import { useContextApi } from "@/hooks/useContextApi";
import { Personagens } from "../data/Personagens";
import { Rubik, Secular_One } from "next/font/google";

const secularOne = Secular_One({
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

export const Personagem = () => {
  
  const {id} = useContextApi();

  return (
    <>
      <main className="h-screen after:content-[''] after:fixed after:top-0 after:left-0 md:after:min-w-full after:min-h-screen">
        <img
          src={`../assets/images/${Personagens[id].img}`}
          alt={Personagens[id].name}
          className="w-full md:h-full  md:object-cover"
        />
        <div className="md:absolute m-4 md:m-0 md:top-0 left-4 md:left-32 flex flex-col justify-end md:justify-center md:min-h-screen md:max-w-sm z-10 conteudo">
          <img
            src="../assets/images/one-piece-logo.png"
            alt="One Piece"
            className="w-[170px] md:w-[230px] mb-9 logo"
          />
          <h2 className={`text-4xl md:text-5xl font-normal mb-5 ${secularOne.className}`}>
            {Personagens[id].name}
          </h2>
          <p className={`text-base leading-6 max-w-[500px] md:max-w-full ${rubik.className}`}>
            {Personagens[id].desc}
          </p>
        </div>
      </main>
    </>
  );
};
