const { db } = require('@vercel/postgres');
const {
    currentSongDetails
  } = require('../app/lib/placeholder-data.js');



async function seedCurrentSongsDetails(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS`;
        //create currentSongDetails table if it does not exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS currentSong (
        name VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
        );
    `;

    console.log(`created "currentSong" table`);

    //insert data into the "currentSongDetails" table
    const insertedSongs = await Promise.all(
        currentSongDetails.map(async (currentSongDetail) => {
            return client.sql`
            INSERT INTO currentSong (name, author, image_url)
            VALUES (${currentSongDetail.name}, ${currentSongDetail.author}, ${currentSongDetail.image_url})
            `;
        }),
    );

    console.log(`Seeded ${currentSongDetail.length} songs`);

    return {
        createTable,
        currentSongDetails: insertedSongs,
    };
  } catch (error) {
    console.error('Error seeding songs: ', error);
    throw error;
  }
}

async function main() {
    const client = await db.connect();

    await seedCurrentSongsDetails(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occured while attempting to seed the database: ',
        err,
    );
});