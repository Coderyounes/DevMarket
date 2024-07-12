export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const formatReadableDate = (isoString:string) => {
  const date = new Date(isoString);

  const options = {
    weekday: "long", // e.g., Thursday
    year: "numeric", // e.g., 2024
    month: "long", // e.g., July
    day: "numeric", // e.g., 11
    hour: "2-digit", // e.g., 11 PM
    minute: "2-digit", // e.g., 07
    second: "2-digit", // e.g., 02
    timeZoneName: "short", // e.g., GMT
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
