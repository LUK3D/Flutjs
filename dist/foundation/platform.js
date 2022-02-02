"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetPlatform = void 0;
/// The platform that user interaction should adapt to target.
///
/// The [defaultTargetPlatform] getter returns the current platform.
var TargetPlatform;
(function (TargetPlatform) {
    /// Android: <https://www.android.com/>
    TargetPlatform[TargetPlatform["android"] = 0] = "android";
    /// Fuchsia: <https://fuchsia.dev/fuchsia-src/concepts>
    TargetPlatform[TargetPlatform["fuchsia"] = 1] = "fuchsia";
    /// iOS: <https://www.apple.com/ios/>
    TargetPlatform[TargetPlatform["iOS"] = 2] = "iOS";
    /// Linux: <https://www.linux.org>
    TargetPlatform[TargetPlatform["linux"] = 3] = "linux";
    /// macOS: <https://www.apple.com/macos>
    TargetPlatform[TargetPlatform["macOS"] = 4] = "macOS";
    /// Windows: <https://www.windows.com>
    TargetPlatform[TargetPlatform["windows"] = 5] = "windows";
})(TargetPlatform || (TargetPlatform = {}));
exports.TargetPlatform = TargetPlatform;
