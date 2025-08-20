export async function fetchExample() {
    const res = await fetch("http://localhost:5000/api/example");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  }
  