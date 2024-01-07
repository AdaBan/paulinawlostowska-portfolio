export const filterByCategory = (entries, category) => {
  if (!entries?.items) {
    return [];
  }

  return entries.items.filter((item) =>
    item?.fields?.categories?.includes(category)
  );
};
