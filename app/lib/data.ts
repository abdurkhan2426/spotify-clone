import { sql } from '@vercel/postgres';
import { currentSongDetails } from './definitions';

export async function fetchCurrentSongDetails() {
    try{
        const data = await sql<currentSongDetails>`SELECT * FROM currentSong`;
        const Song = data.rows;
        return Song;
    } catch(error) {
        console.error('Failed to fetch song:', error);
        throw new Error('Failed to fetch song.');
    }
}
