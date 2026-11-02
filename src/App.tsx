import { useState, useEffect } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";

interface Sound {
  id: string;
  name: string;
  path: string;
  volume: number;
  hotkey?: string;
}

function App() {
  const [sounds] = useState<Sound[]>([
    { id: "1", name: "Airhorn", path: "", volume: 0.8 },
    { id: "2", name: "Bruh", path: "", volume: 0.9 },
    { id: "3", name: "Wow", path: "", volume: 0.85 },
    { id: "4", name: "Fail", path: "", volume: 0.75 },
    { id: "5", name: "Victory", path: "", volume: 0.9 },
    { id: "6", name: "Sad Trombone", path: "", volume: 0.8 },
  ]);

  const [outputDevices] = useState<string[]>(["Default"]);
  const [selectedDevice, setSelectedDevice] = useState("Default");
  const [globalVolume, setGlobalVolume] = useState(0.85);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  useEffect(() => {
    // Later: invoke("list_output_devices")
  }, []);

  const playSound = async (sound: Sound) => {
    setIsPlaying(sound.id);
    try {
      // Later: await invoke("play_sound", { ... })
      console.log("Playing:", sound.name);
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => setIsPlaying(null), 2000);
  };

  const stopAll = async () => {
    setIsPlaying(null);
    // Later: await invoke("stop_all");
  };

  return (
    <div className="app">
      {/* Top Bar */}
      <header className="topbar">
        <div className="brand">
          <div className="logo-dot" />
          <span>TS6 Soundboard</span>
        </div>

        <div className="controls">
          <div className="control-group">
            <label>Output Device</label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
            >
              {outputDevices.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group volume">
            <label>Volume</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={globalVolume}
              onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
            />
          </div>

          <button className="btn-stop" onClick={stopAll}>
            Stop All
          </button>
        </div>
      </header>

      {/* Sound Grid */}
      <main className="grid">
        {sounds.map((sound) => (
          <button
            key={sound.id}
            className={`sound-card ${isPlaying === sound.id ? "playing" : ""}`}
            onClick={() => playSound(sound)}
          >
            <div className="sound-name">{sound.name}</div>
            <div className="sound-meta">
              {sound.hotkey ? (
                <span className="hotkey">{sound.hotkey}</span>
              ) : (
                <span className="hint">Click to play</span>
              )}
            </div>
            {isPlaying === sound.id && <div className="pulse" />}
          </button>
        ))}

        {/* Add Sound Card */}
        <button className="sound-card add">
          <div className="add-icon">+</div>
          <div className="sound-name">Add Sound</div>
        </button>
      </main>

      <footer className="footer">
        <span>Lightweight • Local files • TeamSpeak 6 ready</span>
      </footer>
    </div>
  );
}

export default App;
