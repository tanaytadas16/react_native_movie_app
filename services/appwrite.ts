import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const database = new Databases(client);

//track the searches made by a user
export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];

      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        title: movie.title,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(20), // Fetch more to account for potential duplicates
      Query.orderDesc("count"),
    ]);

    // Create a Map to track unique movies by movie_id
    const uniqueMoviesMap = new Map();

    result.documents.forEach((doc: any) => {
      const movieId = doc.movie_id;
      if (!uniqueMoviesMap.has(movieId)) {
        uniqueMoviesMap.set(movieId, {
          movie_id: doc.movie_id,
          title: doc.title,
          poster_url: doc.poster_url,
          count: doc.count,
        });
      } else {
        // If movie already exists, add the counts together
        const existing = uniqueMoviesMap.get(movieId);
        existing.count += doc.count;
      }
    });

    // Convert Map to array and sort by total count
    const uniqueMovies = Array.from(uniqueMoviesMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Return top 5 unique movies

    return uniqueMovies as unknown as TrendingMovie[];
  } catch (error) {
    console.log(error);
  }
};
