import { HomeWrapper } from "./Home.Styles";

import Hero from "../../Components/Hero/Hero";
import Benefis from "../../Components/Benefits/Benefis";
import Crypto from "../../Components/Crypto/Crypto";



const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Benefis />
      <Crypto />
    </HomeWrapper>
  )
}

export default Home;