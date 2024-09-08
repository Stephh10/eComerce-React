export const formatDate = (date) => {
  const dateObject = new Date(date);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("sr", options);
  const formattedDate = formatter.format(dateObject);

  return {
    formattedDate,
  };
};
