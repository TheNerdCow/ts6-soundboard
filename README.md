# TS6 Soundboard

Lightweight, modern, cross-platform soundboard for **TeamSpeak 6** (Windows + Linux).

Built with **Tauri 2 + React + TypeScript**.

### Goals
- Extremely light and fast
- Local file support (mp3, wav, ogg, flac, m4a...)
- Output device selection (for VB-Cable / virtual audio)
- Global hotkeys
- Modern dark UI
- Stop All / per-sound volume

### Status
Early development – UI foundation ready.

### How it works with TeamSpeak 6
1. Install a Virtual Audio Cable (VB-Cable recommended on Windows, or PipeWire/Pulse on Linux)
2. In this app, select the Virtual Cable as **Output Device**
3. In TeamSpeak 6 → Settings → Audio → Capture Device → select the same Virtual Cable
4. Play sounds – they will be sent to your TS6 microphone input

---

**Private repository** – development in progress.
