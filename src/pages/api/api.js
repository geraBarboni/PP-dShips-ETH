// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/miapi.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.positionstack.com/v1/forward?access_key=" +
        "3b67d80ed3a62147807775fe05cb6b36"
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un problema al cargar los datos" });
  }
}
