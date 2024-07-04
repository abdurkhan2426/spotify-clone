import { sql } from '@vercel/postgres';
import { currentSongDetails } from './definitions';

export async function fetchCurrentSongDetails() {
    try{
        const data = await sql<currentSongDetails>`SELECT * FROM currentSong`;
        const currentSong = data.rows;
        return currentSong;
    } catch(error) {
        console.error('Failed to fetch song:', error);
        throw new Error('Failed to fetch song.');
    }
}
