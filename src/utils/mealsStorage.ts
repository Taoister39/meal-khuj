const KEY = "savedMeals";

export const getSavedMeals = (): string[] =>
  JSON.parse(localStorage.getItem(KEY) || "[]");

export const setSavedMeals = (mealsId: string[]) =>
  localStorage.setItem(KEY, JSON.stringify(mealsId));

export const pushSavedMeal = (idMeal: string) => {
  const savedMeals = getSavedMeals();
  savedMeals.push(idMeal);
  setSavedMeals(savedMeals);
  return true;
};

export const removeSavedMealById = (idMeal: string) => {
  const savedMeals = getSavedMeals();
  const newSavedMeals = savedMeals.filter((item) => item !== idMeal);
  setSavedMeals(newSavedMeals);
  return true;
};
