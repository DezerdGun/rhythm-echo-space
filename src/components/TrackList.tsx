import { Play } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  albumArt: string;
}

export const TrackList = ({
  tracks,
  onTrackSelect,
}: {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
}) => {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
            <th className="pb-3 pl-4">#</th>
            <th className="pb-3">Title</th>
            <th className="pb-3">Album</th>
            <th className="pb-3 text-right pr-4">Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => (
            <tr
              key={track.id}
              onClick={() => onTrackSelect(track)}
              className="group hover:bg-white/5 transition-colors cursor-pointer"
            >
              <td className="py-3 pl-4 w-12">
                <div className="relative">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play className="hidden group-hover:block w-4 h-4" />
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={track.albumArt}
                    alt={track.album}
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <p className="font-medium">{track.title}</p>
                    <p className="text-sm text-gray-400">{track.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-gray-400">{track.album}</td>
              <td className="py-3 text-right pr-4 text-gray-400">
                {track.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};