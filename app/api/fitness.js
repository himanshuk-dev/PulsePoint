// app/api/fitness.js
import { getSession } from "next-auth/react";

export default async function fitness(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const accessToken = session.accessToken;
  if (!accessToken) {
    res.status(401).json({ error: "Access Token Missing" });
    return;
  }

  const fitnessResponse = await fetch(
    "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // request body for the specific fitness data
      }),
    }
  );

  console.log("data", fitnessResponse);

  if (!fitnessResponse.ok) {
    res
      .status(fitnessResponse.status)
      .json({ error: "Failed to fetch fitness data" });
    return;
  }

  const fitnessData = await fitnessResponse.json();
  res.status(200).json(fitnessData);
}
