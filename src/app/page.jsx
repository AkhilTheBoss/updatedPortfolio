import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./page.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="Home-wrapper">
        <Header />
        {/* <CircularImages /> */}
        {/* <div className="header">
        <TypingEffect />
        <Introduction />
      </div> */}
        <Body />
      </div>
    </>
  );
}
