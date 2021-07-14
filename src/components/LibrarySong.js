import React from 'react';
import { playAudio } from '../util';

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = () => {
        setCurrentSong(song);
        // Add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
        // Check if the song is playing
        playAudio(isPlaying, audioRef);
    };
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : " "}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-descriptioon">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;