import clientPromise from "@/lib/mongodb/client";

export default async function sitemap() {
  const client = await clientPromise;
  console.log(client)
  try {
    // Conectar a la base de datos 'mierdajob-dev' y a la colección 'review'
    const database = client.db(process.env.MONGODB_DB);
    // const reviews = database.collection("reviews");

    // Encontrar todos los documentos y proyectar solo la propiedad 'gplace_id'
    // const gplaceIds = await reviews.find({}, { projection: { _id: 0, gplace_id: 1 } }).toArray();
    // return gplaceIds
    // Extraer los IDs únicos
    // const uniqueGPlaceIds = Array.from(new Set(gplaceIds.map((item) => item.gplace_id)));
    // const reviewRoutes = uniqueGPlaceIds.map((id) => ({
    //   url: `https://mierdajobs.com/reviews?id=${id}`,
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 1,
    // }))

    return [
      {
        url: "https://mierdajobs.com",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      // {
      //   url: "https://mierdajobs.com/reviews",
      //   lastModified: new Date(),
      //   changeFrequency: "daily",
      //   priority: 1,
      // },
      // ...reviewRoutes
    ]
  } catch (err) {
    console.error("Error getting unique gplace_id values:", err);
  } finally {
    await client.close();
  }

}