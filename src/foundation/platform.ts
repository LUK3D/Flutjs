/// The platform that user interaction should adapt to target.
///
/// The [defaultTargetPlatform] getter returns the current platform.
enum TargetPlatform {
    /// Android: <https://www.android.com/>
    android,
  
    /// Fuchsia: <https://fuchsia.dev/fuchsia-src/concepts>
    fuchsia,
  
    /// iOS: <https://www.apple.com/ios/>
    iOS,
  
    /// Linux: <https://www.linux.org>
    linux,
  
    /// macOS: <https://www.apple.com/macos>
    macOS,
  
    /// Windows: <https://www.windows.com>
    windows,
  }

  export{
      TargetPlatform
  }