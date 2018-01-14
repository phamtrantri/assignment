export const formattedDate = (dateStr) => {
  try {
    if (!dateStr) return "";
    
    const d = new Date(dateStr);
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${date}/${month}/${year}`;
  } catch (error) {
    return "";
  }
}