export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}
export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUri: string;
    synopsis: string;
    genreId: number,
    reviews: Rewiews [];
    }
    
    export type Rewiews = {
        id: number;
        text: string;
        movieId: number;
        userId: number
    }
 

