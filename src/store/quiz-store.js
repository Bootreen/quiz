import { quizQuestions } from "../data/questions";
import { shuffle } from "../utils/shuffle";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useQuizStore = create(
  immer((set) => ({
    currQuestionId: 0,
    correctAnswers: 0,
    shuffled: shuffle(quizQuestions.length),
    isAnswered: false,
    selectedWrongOptionId: "none",
    advTimer: 10, // seconds

    actions: {
      resetCurrQuestionId: () =>
        set((state) => {
          state.currQuestionId = 0;
        }),
      incCurrQuestionId: () =>
        set((state) => {
          ++state.currQuestionId;
        }),
      resetCorrectAnswers: () =>
        set((state) => {
          state.correctAnswers = 0;
        }),
      incCorrectAnswers: () =>
        set((state) => {
          ++state.correctAnswers;
        }),
      toggleIsAnswered: () =>
        set((state) => {
          state.isAnswered = !state.isAnswered;
        }),
      setSelectedWrongOptionId: (id) =>
        set((state) => {
          state.selectedWrongOptionId = id;
        }),
      reshuffle: () => set({ shuffled: shuffle(quizQuestions.length) }),
      setAdvTimer: (value) => set({ advTimer: value }),
    },
  }))
);

export const useQuizStoreActions = () => useQuizStore((state) => state.actions);
