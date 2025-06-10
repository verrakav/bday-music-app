export interface User {
    id: string,
    name: string,
    birthday: Date,
    songs: Song[]
}

export interface Song {
    id: string,
    name: string,
    artist: string,
    album: string,
    genre: string
}