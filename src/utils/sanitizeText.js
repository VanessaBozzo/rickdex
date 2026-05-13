export const sanitizeText = (text, maxLength = 100) => {
  if (typeof text !== "string") {
    return "";
  }

  return text
    .trim()
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
};