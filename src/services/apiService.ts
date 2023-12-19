export async function updateData(newData: object) {
  const res = await fetch(
    "http://localhost:3000/project_management/project/1",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }
  );
  return res.json();
}
