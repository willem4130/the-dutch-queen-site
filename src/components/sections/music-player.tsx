"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Download, 
  Music, 
  Crown, 
  Headphones,
  Mic,
  Guitar,
  Piano,
  Drum
} from "lucide-react";

interface AudioTrack {
  id: string;
  title: string;
  originalArtist: string;
  duration: string;
  audioUrl: string;
  albumArt: string;
  category: "full-band" | "acoustic" | "live" | "studio";
  description: string;
  recordedAt?: string;
  instruments: string[];
  highlights: string[];
  isExclusive?: boolean;
  downloadUrl?: string;
}

interface AudioVisualizerProps {
  isPlaying: boolean;
  className?: string;
}

function AudioVisualizer({ isPlaying, className = "" }: AudioVisualizerProps) {
  const bars = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="bg-gradient-to-t from-crown-gold to-stage-amber rounded-full"
          style={{ width: '3px' }}
          animate={isPlaying ? {
            height: [8, Math.random() * 20 + 8, Math.random() * 24 + 8, 8],
            opacity: [0.5, 1, 0.8, 0.5]
          } : {
            height: 8,
            opacity: 0.3
          }}
          transition={{
            duration: 0.8,
            repeat: isPlaying ? Infinity : 0,
            delay: bar * 0.1
          }}
        />
      ))}
    </div>
  );
}

function WaveformDisplay({ isPlaying, className = "" }: AudioVisualizerProps) {
  const waves = Array.from({ length: 40 }, (_, i) => i);
  
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {waves.map((wave) => (
        <motion.div
          key={wave}
          className="bg-gradient-to-r from-royal-bronze via-crown-gold to-stage-amber rounded-full"
          style={{ width: '2px' }}
          animate={isPlaying ? {
            height: [2, Math.random() * 16 + 4, Math.random() * 20 + 4, 2],
            opacity: [0.4, 1, 0.6, 0.4]
          } : {
            height: 2,
            opacity: 0.2
          }}
          transition={{
            duration: 1.2,
            repeat: isPlaying ? Infinity : 0,
            delay: wave * 0.05,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export function MusicPlayerSection() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tracks: AudioTrack[] = [
    {
      id: "1",
      title: "Bohemian Rhapsody",
      originalArtist: "Queen",
      duration: "5:55",
      audioUrl: "/audio/bohemian-rhapsody-sample.mp3",
      albumArt: "/audio/covers/bohemian-rhapsody.jpg",
      category: "live",
      description: "Our signature performance piece featuring the complete operatic section and dramatic finale, recorded live at the Royal Concertgebouw.",
      recordedAt: "Royal Concertgebouw, Amsterdam",
      instruments: ["Vocals", "Piano", "Guitar", "Bass", "Drums"],
      highlights: [
        "5-minute standing ovation",
        "Complete operatic section with harmonies",
        "Professional orchestral backing",
        "Theatrical staging with lighting effects"
      ],
      isExclusive: true
    },
    {
      id: "2",
      title: "Love of My Life",
      originalArtist: "Queen",
      duration: "3:42",
      audioUrl: "/audio/love-of-my-life-acoustic.mp3",
      albumArt: "/audio/covers/love-of-my-life.jpg",
      category: "acoustic",
      description: "An intimate acoustic arrangement perfect for weddings and private events, showcasing our softer, more emotional side.",
      recordedAt: "Kasteel De Haar Wedding",
      instruments: ["Vocals", "Acoustic Guitar", "Piano"],
      highlights: [
        "Brought wedding guests to tears",
        "String quartet collaboration",
        "Garden acoustics recording",
        "Personalized lyric adaptations available"
      ]
    },
    {
      id: "3",
      title: "We Will Rock You",
      originalArtist: "Queen",
      duration: "2:18",
      audioUrl: "/audio/we-will-rock-you-live.mp3",
      albumArt: "/audio/covers/we-will-rock-you.jpg",
      category: "live",
      description: "The ultimate crowd participation anthem recorded live at Pinkpop Festival, featuring 15,000 voices singing along.",
      recordedAt: "Pinkpop Festival, Landgraaf",
      instruments: ["Vocals", "Drums", "Guitar", "Bass", "Crowd"],
      highlights: [
        "15,000 festival-goers participation",
        "Extended crowd interaction",
        "Social media viral moment",
        "Festival's highest-rated performance"
      ],
      downloadUrl: "/downloads/we-will-rock-you-live.mp3"
    },
    {
      id: "4",
      title: "Somebody to Love",
      originalArtist: "Queen",
      duration: "4:58",
      audioUrl: "/audio/somebody-to-love-studio.mp3",
      albumArt: "/audio/covers/somebody-to-love.jpg",
      category: "studio",
      description: "A pristine studio recording showcasing our vocal harmonies and instrumental precision in a controlled environment.",
      instruments: ["Vocals", "Piano", "Guitar", "Bass", "Drums", "Harmonies"],
      highlights: [
        "Multi-layered vocal harmonies",
        "Professional studio production",
        "Reference track for venues",
        "Available for licensing"
      ],
      downloadUrl: "/downloads/somebody-to-love-studio.mp3"
    },
    {
      id: "5",
      title: "The Show Must Go On",
      originalArtist: "Queen",
      duration: "4:22",
      audioUrl: "/audio/show-must-go-on-acoustic.mp3",
      albumArt: "/audio/covers/show-must-go-on.jpg",
      category: "acoustic",
      description: "An emotionally powerful acoustic rendition that showcases the raw emotion and storytelling at the heart of Queen's music.",
      recordedAt: "Villa Eikenhorst Private Event",
      instruments: ["Vocals", "Piano", "Light Strings"],
      highlights: [
        "Emotional audience connection",
        "Intimate setting recording",
        "Extended piano introduction",
        "Personal dedication performances"
      ]
    },
    {
      id: "6",
      title: "Don't Stop Me Now",
      originalArtist: "Queen",
      duration: "3:29",
      audioUrl: "/audio/dont-stop-me-now-full.mp3",
      albumArt: "/audio/covers/dont-stop-me-now.jpg",
      category: "full-band",
      description: "Our high-energy full band arrangement guaranteed to get any crowd moving, featuring extended guitar solos and audience interaction.",
      instruments: ["Vocals", "Piano", "Guitar", "Bass", "Drums", "Backing Vocals"],
      highlights: [
        "Extended guitar solo section",
        "Crowd sing-along moments",
        "Dance floor guarantee",
        "Corporate event favorite"
      ],
      downloadUrl: "/downloads/dont-stop-me-now-full.mp3"
    }
  ];

  const categories = [
    { id: "all", name: "All Tracks", icon: Music },
    { id: "live", name: "Live Recordings", icon: Mic },
    { id: "acoustic", name: "Acoustic", icon: Guitar },
    { id: "studio", name: "Studio", icon: Headphones },
    { id: "full-band", name: "Full Band", icon: Crown }
  ];

  const filteredTracks = selectedCategory === "all" 
    ? tracks 
    : tracks.filter(track => track.category === selectedCategory);

  const currentTrackData = tracks.find(track => track.id === currentTrack);

  const playTrack = (trackId: string) => {
    if (currentTrack === trackId && isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
      // In a real implementation, you would load and play the audio file
      console.log(`Playing track: ${trackId}`);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipTrack = (direction: 'next' | 'prev') => {
    const currentIndex = filteredTracks.findIndex(track => track.id === currentTrack);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 >= filteredTracks.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? filteredTracks.length - 1 : currentIndex - 1;
    }
    
    playTrack(filteredTracks[newIndex].id);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getInstrumentIcon = (instrument: string) => {
    switch (instrument.toLowerCase()) {
      case 'vocals': case 'harmonies': return Mic;
      case 'guitar': case 'acoustic guitar': case 'electric guitar': return Guitar;
      case 'piano': return Piano;
      case 'drums': return Drum;
      default: return Music;
    }
  };

  return (
    <section id="music-player" className="py-24 bg-gradient-to-b from-charcoal-stage to-deep-black relative overflow-hidden">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-24 right-16 w-40 h-40 border border-crown-gold rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 border-2 border-royal-bronze transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-stage-platinum rounded-full"></div>
        <div className="absolute bottom-16 left-1/3 w-16 h-16 border border-queen-burgundy transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Musical Note Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-crown-gold to-transparent flex-1 max-w-32"></div>
            <Music className="w-8 h-8 text-crown-gold mx-4" />
            <div className="h-px bg-gradient-to-r from-crown-gold via-crown-gold to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-display-lg font-display-primary text-gradient-royal mb-6">
            Audio Samples & Music Player
          </h2>
          <p className="text-content-primary text-text-muted-light max-w-3xl mx-auto">
            Experience The Dutch Queen&apos;s musical artistry with these exclusive recordings from live performances, 
            studio sessions, and intimate acoustic arrangements.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-crown-gold text-deep-black border-crown-gold"
                      : "bg-charcoal-stage/50 text-crown-gold border-crown-gold/30 hover:border-crown-gold/60"
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Current Track Player */}
        {currentTrackData && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-midnight-velvet to-charcoal-stage rounded-3xl p-8 border border-crown-gold/30 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Album Art */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-royal-bronze to-queen-burgundy rounded-2xl overflow-hidden">
                    <img
                      src={currentTrackData.albumArt}
                      alt={currentTrackData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {currentTrackData.isExclusive && (
                    <div className="absolute -top-2 -right-2 bg-crown-gold text-deep-black px-3 py-1 rounded-full text-sm font-bold">
                      EXCLUSIVE
                    </div>
                  )}
                </div>

                {/* Track Info & Controls */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-section-title text-pearl-white mb-2">
                    {currentTrackData.title}
                  </h3>
                  <p className="text-content-secondary text-stage-amber mb-4">
                    Original by {currentTrackData.originalArtist}
                  </p>
                  
                  {/* Audio Visualizer */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    <WaveformDisplay isPlaying={isPlaying} className="h-8" />
                  </div>

                  {/* Playback Controls */}
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                    <button
                      onClick={() => skipTrack('prev')}
                      className="w-12 h-12 bg-charcoal-stage/50 hover:bg-royal-bronze border border-crown-gold/30 hover:border-crown-gold rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <SkipBack className="w-5 h-5 text-crown-gold" />
                    </button>
                    
                    <button
                      onClick={togglePlayPause}
                      className="w-16 h-16 bg-gradient-to-r from-royal-bronze to-queen-burgundy hover:from-royal-bronze-dark hover:to-queen-burgundy-dark rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => skipTrack('next')}
                      className="w-12 h-12 bg-charcoal-stage/50 hover:bg-royal-bronze border border-crown-gold/30 hover:border-crown-gold rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <SkipForward className="w-5 h-5 text-crown-gold" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-text-muted-light min-w-[40px]">
                      {formatTime(currentTime)}
                    </span>
                    <div className="flex-1 h-2 bg-charcoal-stage rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-royal-bronze to-crown-gold rounded-full transition-all duration-300"
                        style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                      />
                    </div>
                    <span className="text-sm text-text-muted-light min-w-[40px]">
                      {currentTrackData.duration}
                    </span>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <button onClick={toggleMute}>
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-crown-gold" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-crown-gold" />
                      )}
                    </button>
                    <div className="w-24 h-2 bg-charcoal-stage rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-crown-gold to-stage-amber rounded-full"
                        style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Track Details */}
                <div className="lg:w-80 space-y-4">
                  <div className="bg-royal-bronze/10 border border-royal-bronze/30 rounded-2xl p-4">
                    <h4 className="text-nav-primary text-crown-gold mb-3">Recording Details</h4>
                    <p className="text-content-secondary text-text-muted-light text-sm leading-relaxed mb-3">
                      {currentTrackData.description}
                    </p>
                    {currentTrackData.recordedAt && (
                      <p className="text-stage-amber text-sm">
                        📍 {currentTrackData.recordedAt}
                      </p>
                    )}
                  </div>

                  {/* Instruments */}
                  <div>
                    <h4 className="text-nav-primary text-crown-gold mb-2">Instrumentation</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentTrackData.instruments.map((instrument, index) => {
                        const InstrumentIcon = getInstrumentIcon(instrument);
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-1 px-3 py-1 bg-charcoal-stage/60 border border-stage-platinum/30 rounded-full text-xs text-stage-platinum"
                          >
                            <InstrumentIcon className="w-3 h-3" />
                            <span>{instrument}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Download */}
                  {currentTrackData.downloadUrl && (
                    <a
                      href={currentTrackData.downloadUrl}
                      download
                      className="inline-flex items-center space-x-2 text-crown-gold hover:text-stage-amber transition-colors duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-semibold">Download Sample</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Track List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-4"
        >
          {filteredTracks.map((track, index) => (
            <motion.div
              key={track.id}
              variants={fadeInUp}
              className={`group cursor-pointer transition-all duration-300 ${
                currentTrack === track.id
                  ? "bg-gradient-to-r from-royal-bronze/20 to-queen-burgundy/20 border-crown-gold/50"
                  : "bg-gradient-to-r from-charcoal-stage/50 to-midnight-velvet/50 border-stage-platinum/20 hover:border-crown-gold/30"
              } border rounded-2xl p-6 backdrop-blur-sm`}
              onClick={() => playTrack(track.id)}
            >
              <div className="flex items-center space-x-6">
                {/* Track Number & Play Button */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  {currentTrack === track.id && isPlaying ? (
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-royal-bronze to-queen-burgundy flex items-center justify-center">
                      <AudioVisualizer isPlaying={true} className="scale-75" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full bg-charcoal-stage border border-crown-gold/30 group-hover:border-crown-gold flex items-center justify-center group-hover:bg-royal-bronze/20 transition-all duration-300">
                      <span className="text-crown-gold font-semibold">
                        {currentTrack === track.id ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" />
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-section-subtitle text-pearl-white group-hover:text-crown-gold transition-colors duration-300 truncate">
                      {track.title}
                    </h3>
                    {track.isExclusive && (
                      <span className="px-2 py-1 bg-crown-gold text-deep-black text-xs font-bold rounded-full">
                        EXCLUSIVE
                      </span>
                    )}
                  </div>
                  <p className="text-content-secondary text-stage-amber text-sm mb-2">
                    Original by {track.originalArtist}
                  </p>
                  <p className="text-content-secondary text-text-muted-light text-sm line-clamp-2">
                    {track.description}
                  </p>
                </div>

                {/* Category & Duration */}
                <div className="text-right flex-shrink-0">
                  <div className="text-crown-gold text-sm font-semibold mb-1">
                    {track.duration}
                  </div>
                  <div className="text-stage-amber text-xs capitalize">
                    {track.category.replace('-', ' ')}
                  </div>
                </div>

                {/* Download Icon */}
                {track.downloadUrl && (
                  <div className="flex-shrink-0">
                    <Download className="w-5 h-5 text-crown-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 border border-crown-gold/20 backdrop-blur-sm">
            <Crown className="w-12 h-12 text-crown-gold mx-auto mb-6" />
            <h3 className="text-section-title text-crown-gold mb-4">
              Hear The Magic Live
            </h3>
            <p className="text-content-primary text-text-muted-light mb-8 max-w-2xl mx-auto">
              These samples only capture a fraction of The Dutch Queen's live energy. 
              Experience the full power of Queen's music performed with passion and authenticity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
              >
                <Music className="w-5 h-5" />
                <span>Book Live Performance</span>
              </a>
              
              <a
                href="#tour-history"
                className="inline-flex items-center space-x-2 bg-charcoal-stage border-2 border-stage-platinum text-stage-platinum px-8 py-4 rounded-full font-semibold hover:bg-stage-platinum hover:text-deep-black transition-all duration-200 transform hover:scale-105"
              >
                <Headphones className="w-5 h-5" />
                <span>View Live Recordings</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} className="hidden" />
    </section>
  );
}