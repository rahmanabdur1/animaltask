import { getAnimal } from "@/lib/data";

export default async function handler(req, res) {
  const { filter } = req.query;
  const animals = await getAnimal(filter || '');
  res.status(200).json(animals);
}
