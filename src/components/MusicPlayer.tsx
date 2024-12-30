import { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const MusicPlayer = ({ currentTrack }: { currentTrack?: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([50]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
      setVolume(value);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-darkgray p-4 border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {currentTrack && (
          <div className="flex items-center space-x-4">
            <img
              src={currentTrack.albumArt || "/placeholder.svg"}
              alt={currentTrack.title}
              className="w-14 h-14 rounded-md"
            />
            <div>
              <h4 className="text-sm font-medium text-white">{currentTrack.title}</h4>
              <p className="text-xs text-gray-400">{currentTrack.artist}</p>
            </div>
          </div>
        )}
        
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="w-full max-w-md flex items-center space-x-2">
            <span className="text-xs text-gray-400">0:00</span>
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <Slider
            value={volume}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
      <audio ref={audioRef} src={currentTrack?.audioUrl} />
    </div>
  );
};