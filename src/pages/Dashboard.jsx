import React from "react";
import { useHabits } from "../contexts/HabitContext";
import DailyProgressBar from "../component/DailyProgressBar";
import HabitBarChart from "../component/HabitBarChart";
import HabitPieChart from "../component/HabitPieChart";
import HabitStatsCard from "../component/HabitStatsCard";
import Navbar from "../component/Navbar";

const Dashboard = () => {
  const { habits } = useHabits();
  return (
    <div className="min-h-screen p-10 text-color1 bg-color7 flex justify-center items-center">
      <Navbar />
      <div className="mt-[8rem]">

        <div className="flex gap-10 mb-10">
          <HabitStatsCard title="Total Habits" />
          <DailyProgressBar habits={habits} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 ">
          <HabitBarChart habits={habits} />
          <HabitPieChart habits={habits} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
