import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { TrackList } from "@/components/TrackList";

// Mock data - replace with API data later
const mockTracks = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "5:55",
    albumArt: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
    duration: "8:02",
    albumArt: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    duration: "6:30",
    albumArt: "/placeholder.svg",
  },
];

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(mockTracks[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-black to-spotify-darkgray text-white">
      <Sidebar />
      <div className="ml-60 p-8 pb-32">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Good evening</h1>
          <div className="music-visualizer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
          <TrackList tracks={mockTracks} onTrackSelect={setCurrentTrack} />
        </section>
      </div>
      <MusicPlayer currentTrack={currentTrack} />
    </div>
  );
};

export default Index;