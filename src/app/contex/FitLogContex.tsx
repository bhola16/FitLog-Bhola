"use client";

import { IWorkoutType } from "@/type/type";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface FitLogContextType {
  plan: IWorkoutType[];
  saved: IWorkoutType[];
  hydrated: boolean;

  addToPlan: (workout: IWorkoutType) => void;
  saveForLater: (workout: IWorkoutType) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

interface FitLogProviderProps {
  children: ReactNode;
}

export const FitLogProvider = ({ children }: FitLogProviderProps) => {
  const [plan, setPlan] = useState<IWorkoutType[]>([]);
  const [saved, setSaved] = useState<IWorkoutType[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan).filter(Boolean));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts).filter(Boolean));
    }

    setHydrated(true);
  }, []);

  const addToPlan = (workout: IWorkoutType) => {
    const alreadyAdded = plan.some((item) => item?.id === workout.id);

    if (alreadyAdded) {
      toast.warning(`${workout.name} is already in today's plan.`);
      return;
    }

    if (plan.length >= 5) {
      toast.error("You can add a maximum of 5 workouts.");
      return;
    }

    const updatedPlan = [...plan, workout];

    setPlan(updatedPlan);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));

    toast.success(`${workout.name} is added to today's plan`);
  };

  const saveForLater = (workout: IWorkoutType) => {
    const alreadySaved = saved.some((item) => item?.id === workout.id);

    if (alreadySaved) {
      toast.warning(`${workout.name} is already saved.`);
      return;
    }

    const updatedSaved = [...saved, workout];

    setSaved(updatedSaved);
    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));

    toast.success(`${workout.name} saved for later`);
  };

  const removeFromPlan = (id: number) => {
    const updatedPlan = plan.filter((workout) => workout?.id !== id);

    setPlan(updatedPlan);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));

    toast.success("Workout removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    const updatedSaved = saved.filter((workout) => workout?.id !== id);

    setSaved(updatedSaved);
    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));

    toast.success("Workout removed from saved");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        hydrated,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
