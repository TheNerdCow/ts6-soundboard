// TS6 Soundboard - Rust backend
// Will handle: audio playback, device listing, hotkeys, stop all

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! Backend is ready.", name)
}

// Placeholder commands – will be implemented next
#[tauri::command]
fn list_output_devices() -> Result<Vec<String>, String> {
    // TODO: use cpal to list devices
    Ok(vec!["Default".to_string(), "VB-Cable".to_string()])
}

#[tauri::command]
fn play_sound(path: String, volume: f32, device: String) -> Result<(), String> {
    // TODO: rodio / cpal playback
    println!("Play: {} | vol: {} | device: {}", path, volume, device);
    Ok(())
}

#[tauri::command]
fn stop_all() -> Result<(), String> {
    // TODO: stop all playing sounds
    println!("Stop all");
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, list_output_devices, play_sound, stop_all])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
