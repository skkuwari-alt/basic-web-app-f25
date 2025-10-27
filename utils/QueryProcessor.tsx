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
// Handle basic math queries: addition, subtraction, multiplication
const mathMatch = query.match(/what is (\d+)\s+(plus|minus|multiplied by)\s+(\d+)/i);
if (mathMatch) {
  const a = parseInt(mathMatch[1]);
  const op = mathMatch[2];
  const b = parseInt(mathMatch[3]);

  if (op.includes("plus")) return (a + b).toString();
  if (op.includes("minus")) return (a - b).toString();
  if (op.includes("multiplied")) return (a * b).toString();
}



// Handle "which of the following numbers is both a square and a cube"
const bothMatch = query.match(/which of the following numbers.*?([\d,\s]+)/i);
if (bothMatch) {
  const numbers = bothMatch[1]
    .split(',')
    .map(n => parseInt(n.trim()))
    .filter(n => !isNaN(n));

  // Find all numbers that are perfect sixth powers
  const sixthPowers = numbers.filter(num => {
    const root6 = Math.pow(num, 1 / 6);
    return Math.abs(root6 - Math.round(root6)) < 1e-9;
  });

  // Return the largest one if any exist
  if (sixthPowers.length > 0) {
    return Math.max(...sixthPowers).toString();
  }
}



  return "";
}
