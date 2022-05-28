export const formatNumber = (num: number) => {
  return num
    .toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
