import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

export default function App() {
  ReactGA.initialize("UA-110570651-1");
  ReactGA.pageview(window.location.pathname);

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("./resumeData.json");
      let data = await res.json();
      setResumeData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}
