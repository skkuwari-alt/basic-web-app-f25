export default function QueryProcessor(query: string): string {
   const lower = query.toLowerCase();
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "skkwuari";
  }

  if (query.toLowerCase().includes("what is your andrewid")) {
    return "skkuwari";
  }
   // 3. Largest-number question
  if (lower.includes("which of the following numbers is")) {
    // Find all numbers in the query
    const nums = query.match(/\d+/g);
    if (nums && nums.length > 0) {
      // Convert to integers and get the max
      const max = Math.max(...nums.map(Number));
      return max.toString();
    }
  }
  // handle addition like "What is 77 plus 51?"
const additionMatch = query.match(/what is (\d+)\s+plus\s+(\d+)/i);
if (additionMatch) {
  const a = parseInt(additionMatch[1]);
  const b = parseInt(additionMatch[2]);
  return (a + b).toString();
}


  return "";
}
