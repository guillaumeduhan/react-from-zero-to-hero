import config from "../config.json";
import Header from "./Header";
import Social from "./Social";

export default function Hero() {
  return <div className="grid gap-8 px-4 text-center">
    <div>
      <Header />
      <h1 className="text-[48px] lg:text-[120px] font-[900]">{config.position}</h1>
      <p className="text-[20px] max-w-[500px] mx-auto">{config.description}</p>
    </div>
    <Social />
  </div>
}