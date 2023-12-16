async function updateData(newData: object) {
  console.log(newData);
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

export default { updateData };
