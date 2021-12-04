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
    reviews: Reviews [];
    }
    
    export type Reviews = {
        id: number;
        text: string;
        movieId: number;
        user: User;
    }
     export type User = {
         id: number;
         name: string;
         email: string;
         password: string;
     }

