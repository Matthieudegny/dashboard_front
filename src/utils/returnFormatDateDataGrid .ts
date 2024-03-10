export const returnFormatDateDataGrid = (date: string): string => {
  // Convertir la chaîne de caractères en une instance de Date
  const dateFormatted = new Date(date);

  // Extraire les éléments de la date
  const hours = dateFormatted.getHours().toString().padStart(2, "0");
  const minutes = dateFormatted.getMinutes().toString().padStart(2, "0");
  const day = dateFormatted.getDate().toString().padStart(2, "0");
  const month = (dateFormatted.getMonth() + 1).toString().padStart(2, "0");
  const year = dateFormatted.getFullYear().toString().slice(-2);

  // Construire la chaîne de date formatée
  const formattedDate = `${hours}:${minutes} - ${day}/${month}/${year}`;

  return formattedDate;
};
