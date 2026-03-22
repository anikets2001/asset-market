'use client';

import React, { useState } from "react";
import LibraryHeader from "../LibraryHeader/LibraryHeader";
import LibrarySidebar from "../LibrarySidebar/LibrarySidebar";
import LibraryToolbar from "../LibraryToolbar/LibraryToolbar";
import LibraryGameCard from "../LibraryGameCard/LibraryGameCard";
import { LIBRARY_GAMES } from "../../data/libraryGames";

const LibraryPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="relative flex flex-col h-screen">
      <LibraryHeader />
      <div className="flex flex-1 overflow-hidden">
        <LibrarySidebar />
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-background-dark/50">
          <LibraryToolbar
            title="All Games"
            gameCount={LIBRARY_GAMES.length}
            filterLabel="Installed"
            sortLabel="Recently Played"
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
          <div className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {LIBRARY_GAMES.map((game) => (
                <LibraryGameCard
                  key={game.id}
                  gameId={game.id}
                  title={game.title}
                  imageSrc={game.imageSrc}
                  imageAlt={game.title}
                  hoursPlayed={game.hoursPlayed}
                  achievements={game.achievements}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LibraryPage;
