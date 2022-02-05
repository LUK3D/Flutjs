(() => {
 
  var h = {
      602: (h, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Colors = void 0);
        class t {
          constructor({ a: h = 255, r: e = 255, g: t = 255, b: x = 255 }) {
            (this.Rose = {
              50: this.hexToRgb({ hex: "fff1f2" }),
              100: this.hexToRgb({ hex: "ffe4e6" }),
              200: this.hexToRgb({ hex: "fecdd3" }),
              300: this.hexToRgb({ hex: "fda4af" }),
              400: this.hexToRgb({ hex: "fb7185" }),
              500: this.hexToRgb({ hex: "f43f5e" }),
              600: this.hexToRgb({ hex: "e11d48" }),
              700: this.hexToRgb({ hex: "be123c" }),
              800: this.hexToRgb({ hex: "9f1239" }),
              900: this.hexToRgb({ hex: "881337" }),
            }),
              (this.Pink = {
                50: this.hexToRgb({ hex: "fdf2f8" }),
                100: this.hexToRgb({ hex: "fce7f3" }),
                200: this.hexToRgb({ hex: "fbcfe8" }),
                300: this.hexToRgb({ hex: "f9a8d4" }),
                400: this.hexToRgb({ hex: "f472b6" }),
                500: this.hexToRgb({ hex: "f472b6" }),
                600: this.hexToRgb({ hex: "db2777" }),
                700: this.hexToRgb({ hex: "be185d" }),
                800: this.hexToRgb({ hex: "9d174d" }),
                900: this.hexToRgb({ hex: "831843" }),
              }),
              (this.Fuchsia = {
                50: this.hexToRgb({ hex: "fdf4ff" }),
                100: this.hexToRgb({ hex: "f472b6" }),
                200: this.hexToRgb({ hex: "f5d0fe" }),
                300: this.hexToRgb({ hex: "f0abfc" }),
                400: this.hexToRgb({ hex: "e879f9" }),
                500: this.hexToRgb({ hex: "d946ef" }),
                600: this.hexToRgb({ hex: "c026d3" }),
                700: this.hexToRgb({ hex: "a21caf" }),
                800: this.hexToRgb({ hex: "a21caf" }),
                900: this.hexToRgb({ hex: "701a75" }),
              }),
              (this.Purple = {
                50: this.hexToRgb({ hex: "faf5ff" }),
                100: this.hexToRgb({ hex: "f3e8ff" }),
                200: this.hexToRgb({ hex: "e9d5ff" }),
                300: this.hexToRgb({ hex: "d8b4fe" }),
                400: this.hexToRgb({ hex: "c084fc" }),
                500: this.hexToRgb({ hex: "a855f7" }),
                600: this.hexToRgb({ hex: "9333ea" }),
                700: this.hexToRgb({ hex: "7e22ce" }),
                800: this.hexToRgb({ hex: "6b21a8" }),
                900: this.hexToRgb({ hex: "581c87" }),
              }),
              (this.Violet = {
                50: this.hexToRgb({ hex: "f5f3ff" }),
                100: this.hexToRgb({ hex: "ede9fe" }),
                200: this.hexToRgb({ hex: "ddd6fe" }),
                300: this.hexToRgb({ hex: "c4b5fd" }),
                400: this.hexToRgb({ hex: "a78bfa" }),
                500: this.hexToRgb({ hex: "8b5cf6" }),
                600: this.hexToRgb({ hex: "7c3aed" }),
                700: this.hexToRgb({ hex: "6d28d9" }),
                800: this.hexToRgb({ hex: "5b21b6" }),
                900: this.hexToRgb({ hex: "4c1d95" }),
              }),
              (this.Indigo = {
                50: this.hexToRgb({ hex: "eef2ff" }),
                100: this.hexToRgb({ hex: "e0e7ff" }),
                200: this.hexToRgb({ hex: "c7d2fe" }),
                300: this.hexToRgb({ hex: "a5b4fc" }),
                400: this.hexToRgb({ hex: "818cf8" }),
                500: this.hexToRgb({ hex: "6366f1" }),
                600: this.hexToRgb({ hex: "4f46e5" }),
                700: this.hexToRgb({ hex: "4338ca" }),
                800: this.hexToRgb({ hex: "3730a3" }),
                900: this.hexToRgb({ hex: "312e81" }),
              }),
              (this.Blue = {
                50: this.hexToRgb({ hex: "eff6ff" }),
                100: this.hexToRgb({ hex: "dbeafe" }),
                200: this.hexToRgb({ hex: "bfdbfe" }),
                300: this.hexToRgb({ hex: "93c5fd" }),
                400: this.hexToRgb({ hex: "60a5fa" }),
                500: this.hexToRgb({ hex: "3b82f6" }),
                600: this.hexToRgb({ hex: "2563eb" }),
                700: this.hexToRgb({ hex: "1d4ed8" }),
                800: this.hexToRgb({ hex: "1d4ed8" }),
                900: this.hexToRgb({ hex: "1e3a8a" }),
              }),
              (this.Sky = {
                50: this.hexToRgb({ hex: "f0f9ff" }),
                100: this.hexToRgb({ hex: "e0f2fe" }),
                200: this.hexToRgb({ hex: "bae6fd" }),
                300: this.hexToRgb({ hex: "7dd3fc" }),
                400: this.hexToRgb({ hex: "38bdf8" }),
                500: this.hexToRgb({ hex: "0ea5e9" }),
                600: this.hexToRgb({ hex: "0284c7" }),
                700: this.hexToRgb({ hex: "0369a1" }),
                800: this.hexToRgb({ hex: "075985" }),
                900: this.hexToRgb({ hex: "0c4a6e" }),
              }),
              (this.Cyan = {
                50: this.hexToRgb({ hex: "ecfeff" }),
                100: this.hexToRgb({ hex: "cffafe" }),
                200: this.hexToRgb({ hex: "a5f3fc" }),
                300: this.hexToRgb({ hex: "67e8f9" }),
                400: this.hexToRgb({ hex: "22d3ee" }),
                500: this.hexToRgb({ hex: "06b6d4" }),
                600: this.hexToRgb({ hex: "0891b2" }),
                700: this.hexToRgb({ hex: "0e7490" }),
                800: this.hexToRgb({ hex: "155e75" }),
                900: this.hexToRgb({ hex: "164e63" }),
              }),
              (this.Teal = {
                50: this.hexToRgb({ hex: "f0fdfa" }),
                100: this.hexToRgb({ hex: "ccfbf1" }),
                200: this.hexToRgb({ hex: "99f6e4" }),
                300: this.hexToRgb({ hex: "5eead4" }),
                400: this.hexToRgb({ hex: "2dd4bf" }),
                500: this.hexToRgb({ hex: "14b8a6" }),
                600: this.hexToRgb({ hex: "0d9488" }),
                700: this.hexToRgb({ hex: "0f766e" }),
                800: this.hexToRgb({ hex: "115e59" }),
                900: this.hexToRgb({ hex: "134e4a" }),
              }),
              (this.Emerald = {
                50: this.hexToRgb({ hex: "ecfdf5" }),
                100: this.hexToRgb({ hex: "d1fae5" }),
                200: this.hexToRgb({ hex: "a7f3d0" }),
                300: this.hexToRgb({ hex: "6ee7b7" }),
                400: this.hexToRgb({ hex: "34d399" }),
                500: this.hexToRgb({ hex: "10b981" }),
                600: this.hexToRgb({ hex: "059669" }),
                700: this.hexToRgb({ hex: "047857" }),
                800: this.hexToRgb({ hex: "065f46" }),
                900: this.hexToRgb({ hex: "064e3b" }),
              }),
              (this.Green = {
                50: this.hexToRgb({ hex: "f0fdf4" }),
                100: this.hexToRgb({ hex: "dcfce7" }),
                200: this.hexToRgb({ hex: "bbf7d0" }),
                300: this.hexToRgb({ hex: "86efac" }),
                400: this.hexToRgb({ hex: "4ade80" }),
                500: this.hexToRgb({ hex: "22c55e" }),
                600: this.hexToRgb({ hex: "16a34a" }),
                700: this.hexToRgb({ hex: "15803d" }),
                800: this.hexToRgb({ hex: "166534" }),
                900: this.hexToRgb({ hex: "14532d" }),
              }),
              (this.Lime = {
                50: this.hexToRgb({ hex: "f7fee7" }),
                100: this.hexToRgb({ hex: "ecfccb" }),
                200: this.hexToRgb({ hex: "d9f99d" }),
                300: this.hexToRgb({ hex: "bef264" }),
                400: this.hexToRgb({ hex: "a3e635" }),
                500: this.hexToRgb({ hex: "84cc16" }),
                600: this.hexToRgb({ hex: "65a30d" }),
                700: this.hexToRgb({ hex: "4d7c0f" }),
                800: this.hexToRgb({ hex: "3f6212" }),
                900: this.hexToRgb({ hex: "365314" }),
              }),
              (this.Yellow = {
                50: this.hexToRgb({ hex: "fefce8" }),
                100: this.hexToRgb({ hex: "fef9c3" }),
                200: this.hexToRgb({ hex: "fef08a" }),
                300: this.hexToRgb({ hex: "fde047" }),
                400: this.hexToRgb({ hex: "facc15" }),
                500: this.hexToRgb({ hex: "eab308" }),
                600: this.hexToRgb({ hex: "ca8a04" }),
                700: this.hexToRgb({ hex: "a16207" }),
                800: this.hexToRgb({ hex: "854d0e" }),
                900: this.hexToRgb({ hex: "713f12" }),
              }),
              (this.Amber = {
                50: this.hexToRgb({ hex: "fffbeb" }),
                100: this.hexToRgb({ hex: "fef3c7" }),
                200: this.hexToRgb({ hex: "fde68a" }),
                300: this.hexToRgb({ hex: "fcd34d" }),
                400: this.hexToRgb({ hex: "fbbf24" }),
                500: this.hexToRgb({ hex: "f59e0b" }),
                600: this.hexToRgb({ hex: "d97706" }),
                700: this.hexToRgb({ hex: "b45309" }),
                800: this.hexToRgb({ hex: "92400e" }),
                900: this.hexToRgb({ hex: "78350f" }),
              }),
              (this.Orange = {
                50: this.hexToRgb({ hex: "fff7ed" }),
                100: this.hexToRgb({ hex: "ffedd5" }),
                200: this.hexToRgb({ hex: "fed7aa" }),
                300: this.hexToRgb({ hex: "fdba74" }),
                400: this.hexToRgb({ hex: "fb923c" }),
                500: this.hexToRgb({ hex: "f97316" }),
                600: this.hexToRgb({ hex: "ea580c" }),
                700: this.hexToRgb({ hex: "c2410c" }),
                800: this.hexToRgb({ hex: "9a3412" }),
                900: this.hexToRgb({ hex: "7c2d12" }),
              }),
              (this.Red = {
                50: this.hexToRgb({ hex: "fef2f2" }),
                100: this.hexToRgb({ hex: "fee2e2" }),
                200: this.hexToRgb({ hex: "fecaca" }),
                300: this.hexToRgb({ hex: "fca5a5" }),
                400: this.hexToRgb({ hex: "f87171" }),
                500: this.hexToRgb({ hex: "ef4444" }),
                600: this.hexToRgb({ hex: "dc2626" }),
                700: this.hexToRgb({ hex: "b91c1c" }),
                800: this.hexToRgb({ hex: "991b1b" }),
                900: this.hexToRgb({ hex: "7f1d1d" }),
              }),
              (this.Stone = {
                50: this.hexToRgb({ hex: "fafaf9" }),
                100: this.hexToRgb({ hex: "f5f5f4" }),
                200: this.hexToRgb({ hex: "e7e5e4" }),
                300: this.hexToRgb({ hex: "d6d3d1" }),
                400: this.hexToRgb({ hex: "a8a29e" }),
                500: this.hexToRgb({ hex: "78716c" }),
                600: this.hexToRgb({ hex: "57534e" }),
                700: this.hexToRgb({ hex: "44403c" }),
                800: this.hexToRgb({ hex: "292524" }),
                900: this.hexToRgb({ hex: "1c1917" }),
              }),
              (this.Neutral = {
                50: this.hexToRgb({ hex: "fafafa" }),
                100: this.hexToRgb({ hex: "f5f5f5" }),
                200: this.hexToRgb({ hex: "e5e5e5" }),
                300: this.hexToRgb({ hex: "d4d4d4" }),
                400: this.hexToRgb({ hex: "a3a3a3" }),
                500: this.hexToRgb({ hex: "737373" }),
                600: this.hexToRgb({ hex: "525252" }),
                700: this.hexToRgb({ hex: "404040" }),
                800: this.hexToRgb({ hex: "262626" }),
                900: this.hexToRgb({ hex: "171717" }),
              }),
              (this.Zinc = {
                50: this.hexToRgb({ hex: "fafafa" }),
                100: this.hexToRgb({ hex: "f4f4f5" }),
                200: this.hexToRgb({ hex: "e4e4e7" }),
                300: this.hexToRgb({ hex: "d4d4d8" }),
                400: this.hexToRgb({ hex: "a1a1aa" }),
                500: this.hexToRgb({ hex: "71717a" }),
                600: this.hexToRgb({ hex: "52525b" }),
                700: this.hexToRgb({ hex: "3f3f46" }),
                800: this.hexToRgb({ hex: "3f3f46" }),
                900: this.hexToRgb({ hex: "18181b" }),
              }),
              (this.Gray = {
                50: this.hexToRgb({ hex: "f9fafb" }),
                100: this.hexToRgb({ hex: "f3f4f6" }),
                200: this.hexToRgb({ hex: "f3f4f6" }),
                300: this.hexToRgb({ hex: "d1d5db" }),
                400: this.hexToRgb({ hex: "9ca3af" }),
                500: this.hexToRgb({ hex: "6b7280" }),
                600: this.hexToRgb({ hex: "4b5563" }),
                700: this.hexToRgb({ hex: "374151" }),
                800: this.hexToRgb({ hex: "1f2937" }),
                900: this.hexToRgb({ hex: "111827" }),
              }),
              (this.Slate = {
                50: this.hexToRgb({ hex: "f8fafc" }),
                100: this.hexToRgb({ hex: "f1f5f9" }),
                200: this.hexToRgb({ hex: "e2e8f0" }),
                300: this.hexToRgb({ hex: "cbd5e1" }),
                400: this.hexToRgb({ hex: "94a3b8" }),
                500: this.hexToRgb({ hex: "64748b" }),
                600: this.hexToRgb({ hex: "475569" }),
                700: this.hexToRgb({ hex: "334155" }),
                800: this.hexToRgb({ hex: "1e293b" }),
                900: this.hexToRgb({ hex: "0f172a" }),
              }),
              (this.color = this.fromARGB({ a: h, r: e, g: t, b: x })),
              (this.color.withAlpha = this.withAlpha),
              (this.color.withOpacity = this.withOpacity),
              (this.color.withRed = this.withRed),
              (this.color.withGreen = this.withGreen),
              (this.color.withBlue = this.withBlue);
          }
          fromARGB({ a: h = 1, r: e, g: t, b: x }) {
            return (
              (this.color.value = `rgb(${e}, ${t}, ${x}, ${h})`),
              (this.color.r = e),
              (this.color.g = t),
              (this.color.b = x),
              (this.color.a = h),
              this.color
            );
          }
          hexToRgb({ hex: h, alpha: e = 1 }) {
            h = h.replace("#", "");
            var t = parseInt(
                3 == h.length ? h.slice(0, 1).repeat(2) : h.slice(0, 2),
                16
              ),
              x = parseInt(
                3 == h.length ? h.slice(1, 2).repeat(2) : h.slice(2, 4),
                16
              ),
              i = parseInt(
                3 == h.length ? h.slice(2, 3).repeat(2) : h.slice(4, 6),
                16
              );
            return e
              ? this.fromARGB({ r: t, g: x, b: i, a: e })
              : this.fromARGB({ r: t, g: x, b: i });
          }
          withAlpha(h) {
            return this.fromARGB({
              r: this.color.r,
              g: this.color.g,
              b: this.color.b,
              a: h,
            }).value;
          }
          withOpacity(h) {
            return this.fromARGB({
              r: this.color.r,
              g: this.color.g,
              b: this.color.b,
              a: Math.round(255 * h),
            }).value;
          }
          withRed(h) {
            return this.fromARGB({
              a: this.color.a,
              r: h,
              g: this.color.g,
              b: this.color.b,
            }).value;
          }
          withGreen(h) {
            return this.fromARGB({
              a: this.color.a,
              r: this.color.r,
              g: h,
              b: this.color.b,
            }).value;
          }
          withBlue(h) {
            return this.fromARGB({
              a: this.color.a,
              r: this.color.r,
              g: this.color.g,
              b: h,
            }).value;
          }
          fromUtil(h) {
            return (this.color.value = h), this.color.value;
          }
        }
        e.default = t;
        let x = new t({});
        e.Colors = x;
      },
      340: (h, e, t) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ThemeData = void 0);
        const x = t(602);
        e.ThemeData = class {
          constructor(h) {
            (this.primaryColor = h.primaryColor || x.Colors.Blue[200]),
              (this.primaryColorVariant =
                h.primaryColorVariant || x.Colors.Blue[700]),
              (this.colorOnPrimary = h.colorOnPrimary || x.Colors.Gray[50]),
              (this.colorSecondary = h.colorSecondary || x.Colors.Green[400]),
              (this.colorSecondaryVariant =
                h.colorSecondaryVariant || x.Colors.Green[700]),
              (this.colorOnSecondary = h.colorOnSecondary || x.Colors.Gray[50]),
              (this.colorSurface = h.colorSurface || x.Colors.Gray[50]),
              (this.colorOnSurface = h.colorOnSurface || x.Colors.Gray[800]),
              (this.chrome = h.chrome || x.Colors.Yellow[600]),
              (this.colorOnBackground =
                h.colorOnBackground || x.Colors.Gray[800]),
              (this.colorError = h.colorError || x.Colors.Red[400]),
              (this.colorOnError = h.colorOnError || x.Colors.Gray[50]);
          }
        };
      },
      301: (h, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.Key = void 0);
        class t {
          constructor() {
            this.uuidv4();
          }
          uuidv4() {
            return "10000000-1000-4000-8000-100000000000".replace(
              /[018]/g,
              (h) =>
                (
                  +h ^
                  (crypto.getRandomValues(new Uint8Array(1))[0] &
                    (15 >> (+h / 4)))
                ).toString(16)
            );
          }
        }
        (e.default = t), (e.Key = t);
      },
      148: function (h, e, t) {
        var x =
          (this && this.__importDefault) ||
          function (h) {
            return h && h.__esModule ? h : { default: h };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ExtendedWidget = e.Widget = void 0);
        const i = x(t(301));
        class o {
          constructor(h) {
            return (
              (this.key = new i.default().uuidv4()),
              (this.width = "auto"),
              (this.height = "auto"),
              (this.child = h.child),
              (this.parent = h.parent),
              this.render({ tagName: h.tagName }),
              this.addTextContent({ text: h.text }),
              (this.width = h.width || this.width),
              (this.height = h.height || this.height),
              this
            );
          }
          render(h) {
            (this.tag = document.createElement(h.tagName)),
              (this.tag.id = this.key),
              (this.tag.style.width = `${this.width}`),
              (this.tag.style.height = `${this.height}`),
              this.child
                ? this.tag.appendChild(this.child.tag)
                : this.addParent(this.tag);
          }
          addParent(h) {
            this.parent
              ? this.tag.appendChild(h)
              : document.body.appendChild(h);
          }
          addTextContent(h) {
            var e;
            if (h.text && h.text.length > 0) {
              let t = document.createTextNode(h.text);
              null === (e = this.tag) || void 0 === e || e.appendChild(t);
            }
          }
          appendChild(h) {
            this.tag.appendChild(h);
          }
        }
        (e.default = o),
          (e.Widget = o),
          (e.ExtendedWidget = class extends o {
            constructor(h) {
              super({ tagName: h.tagName }),
                this.buildChilds({ children: h.children });
            }
            addStyle() {
              var h;
              null === (h = this.tag) ||
                void 0 === h ||
                h.classList.add("flex");
            }
            buildChilds(h) {
              h.children &&
                h.children.forEach((h) => {
                  this.appendChild(h.tag);
                });
            }
          });
      },
    },
    e = {};
  function t(x) {
    var i = e[x];
    if (void 0 !== i) return i.exports;
    var o = (e[x] = { exports: {} });
    return h[x].call(o.exports, o, o.exports, t), o.exports;
  }
  (() => {
    const h = t(148),
      e = t(340);
    let x = {
      Widget: h.Widget,
      ExtendedWidget: h.ExtendedWidget,
      ThemeData: e.ThemeData,
    };
    window.Flutjs = x;
  })();
})();
