const BASE_URL = "http://localhost:3001";

export async function getSkills() {
  const response = await fetch(`${BASE_URL}/skills`);
  return response.json();
}

export async function addSkill(skill) {
  const response = await fetch(`${BASE_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skill),
  });

  return response.json();
}