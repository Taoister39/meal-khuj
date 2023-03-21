import request from "@/request";

interface CategoryRequest {
  categories: Category[] | null;
}

export const getCategories = async () => {
  const { data } = await request.get<CategoryRequest>("categories.php");
  return data?.categories || [];
};
