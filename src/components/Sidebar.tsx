import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Library, label: "Your Library", href: "/library" },
];

const playlists = [
  "Discover Weekly",
  "Release Radar",
  "Liked Songs",
  "Your Top Songs 2023",
];

export const Sidebar = () => {
  return (
    <div className="w-60 bg-black h-screen flex flex-col fixed left-0 top-0 p-4">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold text-white">Music App</span>
      </div>
      
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors group"
          >
            <item.icon className={cn(
              "w-6 h-6",
              "group-hover:text-white transition-colors"
            )} />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
      
      <div className="mt-8">
        <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group cursor-pointer p-2">
          <div className="p-1 bg-gray-400 group-hover:bg-white transition-colors rounded">
            <Plus className="w-4 h-4 text-black" />
          </div>
          <span className="font-medium">Create Playlist</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group cursor-pointer p-2">
          <div className="p-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium">Liked Songs</span>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="h-[1px] bg-gray-800" />
        {playlists.map((playlist) => (
          <a
            key={playlist}
            href="#"
            className="block text-sm text-gray-400 hover:text-white transition-colors"
          >
            {playlist}
          </a>
        ))}
      </div>
    </div>
  );
};