export const convertEvent = (event) => {
  switch (event) {
    case "BIRTHDAY":
      return "생일";
    case "MARRIAGE":
      return "결혼";
    case "FIRST_BIRTHDAY_PARTY":
      return "돌잔치";
    case "GRADUATION":
      return "졸업";
    default:
      return "";
  }
};
