export const baseURL = 'https://api.themoviedb.org/3'
export const options = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVmOTEyMGFlZGRmMWNiOGEyOTZhNGIwM2E3YzMwZSIsIm5iZiI6MTczMDQwNjA3NC45MjYxNTA2LCJzdWIiOiI2NmU5NTJkODgyZmY4NzNmN2QxZWE1OGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P32mvdfRFC9K0apH4Ar_2HnHSk0eUtkQLrbFgx3-G1k'
};
export const endPoints = {
    genres:'/genre/movie/list',
    movies:'/discover/movie',
    singleUser:'/movie/'
}
export const imgPath = 'https://image.tmdb.org/t/p/w500';