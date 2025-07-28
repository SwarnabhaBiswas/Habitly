import { createContext, useContext, useState,useEffect } from "react";
import confetti from 'canvas-confetti';

const HabitContext = createContext();

function ContextProvider({ children }) {
  
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem('habits');
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleClick = () => {
  confetti({
  particleCount: 150,
  spread: 100,
  origin: { x: 0.5, y: 0.7 },
  shapes: ['square', 'circle'],
});
};

  const addHabit = (habit) => {
    setHabits((habits) => [...habits, habit]);
  };

  function generateProgress(frequency) {
    const today = new Date();
    const progress = {};

    if (frequency === "daily") {
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const key = date.toISOString().split("T")[0];
        progress[key] = false;
      }
    }

    if (frequency === "weekly") {
      for (let i = 0; i < 6; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i * 7);
        const key = date.toISOString().split("T")[0];
        progress[key] = false;
      }
    }

    if (frequency === "monthly") {
      for (let i = 0; i < 6; i++) {
        const date = new Date(today);
        date.setMonth(today.getMonth() + i);
        const key = date.toISOString().split("T")[0];
        progress[key] = false;
      }
    }

    return progress;
  }

  const markHabitDone = (habitId) => {
  setHabits((prev) =>
    prev.map((habit) => {
      if (habit.id !== habitId) return habit;

      const today = new Date().toISOString().slice(0, 10);  //todays date
      const alreadyDone = habit.progress?.[today] === true;  //checks if todays done or not
      //true if done false if not

      const updatedProgress = {
        ...habit.progress,
        [today]: !alreadyDone, //if done make false if false make true stores the opposite value that when clicked again it uses this value
      };

      //Using current nextDueDate instead of today's date
      const baseDate = habit.nextDueDate
        ? new Date(habit.nextDueDate)
        : new Date(today);

      if (!alreadyDone) {
        if (habit.frequency === "daily") {
          baseDate.setDate(baseDate.getDate() + 1);
        } else if (habit.frequency === "weekly") {
          baseDate.setDate(baseDate.getDate() + 7);
        } else if (habit.frequency === "monthly") {
          baseDate.setMonth(baseDate.getMonth() + 1);
        }
        
      } else {
        if (habit.frequency === "daily") {
          baseDate.setDate(baseDate.getDate() - 1);
        } else if (habit.frequency === "weekly") {
          baseDate.setDate(baseDate.getDate() - 7);
        } else if (habit.frequency === "monthly") {
          baseDate.setMonth(baseDate.getMonth() - 1);
        }
      }

      const nextDueDate = baseDate.toISOString().slice(0, 10);

      return {
        ...habit,
        progress: updatedProgress,
        nextDueDate,
      };
    })
  );
};



  const deleteHabit = (id) => {
  setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
};

  return (
    <HabitContext.Provider
      value={{
        addHabit,
        habits,
        generateProgress,
        markHabitDone,
        deleteHabit,
        handleClick
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}

function useHabits() {
  const context = useContext(HabitContext);
  if (context === undefined) throw new Error("Context used outside provider");
  return context;
}

export { useHabits, ContextProvider };
