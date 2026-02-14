import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && !started) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().then(() => setStarted(true)).catch(() => {});
      }
    };

    // Autoplay on first user interaction (browser policy)
    const events = ["click", "touchstart", "scroll", "keydown"] as const;
    events.forEach((e) => document.addEventListener(e, tryPlay, { once: true }));

    // Also try immediately
    tryPlay();

    return () => {
      events.forEach((e) => document.removeEventListener(e, tryPlay));
    };
  }, [started]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!started) {
        audioRef.current.play().then(() => setStarted(true)).catch(() => {});
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/romantic-bg.mp3" loop preload="auto" />
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-primary hover:bg-card transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div key="off" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <VolumeX className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="on" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Volume2 className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
