import { Parallax } from "react-parallax";
import bgImage from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ParallaxSection() {
  const navigate = useNavigate();

  return (
    <Parallax bgImage={bgImage} strength={300}>
      <div className="h-screen flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-[4rem] font-bold flex flex-col text-center bg-gradient-to-r from-color2 to-color4 bg-clip-text text-transparent">
          <span>Build Better Habits,</span>
          <span>Build a Better Life</span>
        </p>
        <p className="mt-5 text-[1.5rem] font-semi-bold flex flex-col text-center text-color2">
          <span>
            {" "}
            Harness the power of our personalized habit tracker app to
            streamline your
          </span>
          <span>everyday routines and achieve your goals.</span>
        </p>
        <button
          className="w-40 h-10 font-semi-bold mt-10 bg-color4 text-color2 text-[1.5rem] border border-none rounded-sm bg-gradient-to-r from-color6 to-color4 hover:from-color6 hover:to-color4 transition duration-300"
          onClick={() => navigate("/add")}
        >
          Try It.
        </button>
      </div>

      <div>
        <p className="flex flex-col ml-40">
          <span className="font-bold text-[2.8rem] bg-gradient-to-r from-color4 to-color6 bg-clip-text text-transparent">
            Organize, Execute, Triumph
          </span>
          <span className="font-semi-bold text-[1.5rem] mt-5 text-color2">
            Start your day right with a clear, organized schedule that keeps you
            on track
          </span>
          <span className="font-semi-bold text-[1.5rem] mt-2 text-color2">for success</span>
        </p>
      </div>

      <div className="w-[79%] ml-40 flex flex-col items-center justify-center mt-40 backdrop-blur-xl bg-white/10 rounded-xl shadow-lg">
        <p className="text-[2.5rem] flex flex-col text-center text-color4 bg-gradient-to-r from-color4 to-color6 bg-clip-text text-transparent font-bold mt-10">
          <span >Stay Empowered by </span>
          <span>Your Progress</span>
        </p>
        <p className="text-center text-[1.5rem] text-color2 font-semi-bold mt-10 mb-20 pl-10 pr-10 text-color2">
          Scientific studies show that tracking your progress can significantly
          boost your chances of successfully building and maintaining habits.
          Fuel your journey with insightful metrics, celebrate your milestones,
          and stay motivated on your path to success.
        </p>
      </div>

      <div className="w-[40%] ml-[27rem] flex flex-col items-center justify-center mt-40 mb-20 backdrop-blur-xl bg-white/10 rounded-xl shadow-lg">
        <p className="font-bold text-[2rem] text-color4 mb-10 mt-10 bg-gradient-to-r from-color4 to-color6 bg-clip-text text-transparent" >Why Wait to Transform Your Life?</p>
        <p className="text-[1.2rem] pl-10 pr-10 text-color2 mb-10 text-center">Join us. Whether your aim is to enhance productivity, improve fitness, or simply form healthier daily habits, Habitly has everything you need to make it happen.</p>
        <button
          className="w-40 h-10 font-semi-bold mb-10 bg-color4 text-color2 text-[1.5rem] border border-none rounded-sm bg-gradient-to-r from-color6 to-color4 hover:from-color6 hover:to-color4 transition duration-300"
          onClick={() => navigate("/add")}
        >
          Try It.
        </button>
      </div>
      <Footer/>
    </Parallax>
  );
  
}
