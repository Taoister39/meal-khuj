import request from "@/request";

interface MealListRequest {
  meals: Pick<Meal, "idMeal" | "strMeal" | "strMealThumb">[] | null;
}
interface MealRequest {
  meals: Meal[] | null;
}

export const getMeals = async ({ queryKey }: { queryKey: string[] }) => {
  const { data } = await request.get<MealListRequest>("filter.php", {
    params: {
      c: queryKey[1],
    },
  });
  return data?.meals || [];
};

export const getQueriedMeals = async ({ queryKey }: { queryKey: string[] }) => {
  const { data } = await request.get<MealListRequest>("search.php", {
    params: {
      s: queryKey[1],
    },
  });
  return data?.meals || [];
};

export const getSingleMeal = async ({ queryKey }: { queryKey: string[] }) => {
  const { data } = await request.get<MealRequest>("lookup.php", {
    params: {
      i: queryKey[1],
    },
  });
  return data?.meals?.[0];
};
