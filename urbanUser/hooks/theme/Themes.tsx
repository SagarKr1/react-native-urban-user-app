import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

/* ================================
    COLOR SCHEME INTERFACE
   ================================ */
export interface ColorScheme {
    bg: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    primary: string;
    success: string;
    warning: string;
    danger: string;
    shadow: string;
    gradients: {
        background: [string, string];
        surface: [string, string];
        primary: [string, string];
        success: [string, string];
        warning: [string, string];
        danger: [string, string];
        muted: [string, string];
        empty: [string, string];
    };
    backgrounds: {
        input: string;
        editInput: string;
    };

    // ✅ EXPO STATUS BAR (IMPORTANT FIX)
    statusBarStyle: "light" | "dark";
}

/* ================================
    COLOR THEMES
   ================================ */

const lightColors: ColorScheme = {
    bg: "#f8fafc",
    surface: "#ffffff",
    text: "#1e293b",
    textMuted: "#64748b",
    border: "#e2e8f0",
    primary: "#3b82f6",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    shadow: "#000000",
    gradients: {
        background: ["#f8fafc", "#e2e8f0"],
        surface: ["#ffffff", "#f8fafc"],
        primary: ["#3b82f6", "#1d4ed8"],
        success: ["#10b981", "#059669"],
        warning: ["#f59e0b", "#d97706"],
        danger: ["#ef4444", "#dc2626"],
        muted: ["#9ca3af", "#6b7280"],
        empty: ["#f3f4f6", "#e5e7eb"],
    },
    backgrounds: {
        input: "#ffffff",
        editInput: "#ffffff",
    },
    statusBarStyle: "dark", // ✅ dark icons
};

const darkColors: ColorScheme = {
    bg: "#0f172a",
    surface: "#1e293b",
    text: "#f1f5f9",
    textMuted: "#94a3b8",
    border: "#334155",
    primary: "#60a5fa",
    success: "#34d399",
    warning: "#fbbf24",
    danger: "#f87171",
    shadow: "#000000",
    gradients: {
        background: ["#0f172a", "#1e293b"],
        surface: ["#1e293b", "#334155"],
        primary: ["#3b82f6", "#1d4ed8"],
        success: ["#10b981", "#059669"],
        warning: ["#f59e0b", "#d97706"],
        danger: ["#ef4444", "#dc2626"],
        muted: ["#374151", "#4b5563"],
        empty: ["#374151", "#4b5563"],
    },
    backgrounds: {
        input: "#1e293b",
        editInput: "#0f172a",
    },
    statusBarStyle: "light", // ✅ light icons
};

export const forestColors: ColorScheme = {
    bg: "#ecfdf5",
    surface: "#d1fae5",
    text: "#064e3b",
    textMuted: "#065f46",
    border: "#a7f3d0",
    primary: "#059669",
    success: "#16a34a",
    warning: "#ca8a04",
    danger: "#dc2626",
    shadow: "#000000",
    gradients: {
        background: ["#ecfdf5", "#a7f3d0"],
        surface: ["#d1fae5", "#a7f3d0"],
        primary: ["#059669", "#047857"],
        success: ["#16a34a", "#15803d"],
        warning: ["#ca8a04", "#a16207"],
        danger: ["#dc2626", "#b91c1c"],
        muted: ["#6ee7b7", "#34d399"],
        empty: ["#ecfdf5", "#a7f3d0"],
    },
    backgrounds: {
        input: "#ffffff",
        editInput: "#d1fae5",
    },
    statusBarStyle: "dark",
};

export const sunsetColors: ColorScheme = {
    bg: "#fff7ed",
    surface: "#ffedd5",
    text: "#431407",
    textMuted: "#9a3412",
    border: "#fed7aa",
    primary: "#f97316",
    success: "#22c55e",
    warning: "#eab308",
    danger: "#ef4444",
    shadow: "#000000",
    gradients: {
        background: ["#fff7ed", "#fed7aa"],
        surface: ["#ffedd5", "#fed7aa"],
        primary: ["#f97316", "#ea580c"],
        success: ["#22c55e", "#16a34a"],
        warning: ["#eab308", "#ca8a04"],
        danger: ["#ef4444", "#dc2626"],
        muted: ["#fdba74", "#fb923c"],
        empty: ["#fff7ed", "#fed7aa"],
    },
    backgrounds: {
        input: "#ffffff",
        editInput: "#ffedd5",
    },
    statusBarStyle: "dark",
};

export const iceBlueColors: ColorScheme = {
    bg: "#f1f5f9",
    surface: "#e2e8f0",
    text: "#020617",
    textMuted: "#475569",
    border: "#cbd5f5",
    primary: "#0ea5e9",
    success: "#22c55e",
    warning: "#eab308",
    danger: "#ef4444",
    shadow: "#000000",
    gradients: {
        background: ["#f1f5f9", "#e2e8f0"],
        surface: ["#e2e8f0", "#cbd5f5"],
        primary: ["#0ea5e9", "#0284c7"],
        success: ["#22c55e", "#16a34a"],
        warning: ["#eab308", "#ca8a04"],
        danger: ["#ef4444", "#dc2626"],
        muted: ["#94a3b8", "#64748b"],
        empty: ["#f8fafc", "#e2e8f0"],
    },
    backgrounds: {
        input: "#ffffff",
        editInput: "#e2e8f0",
    },
    statusBarStyle: "dark",
};

export const roseColors: ColorScheme = {
    bg: "#fff1f2",
    surface: "#ffe4e6",
    text: "#500724",
    textMuted: "#9f1239",
    border: "#fecdd3",
    primary: "#f43f5e",
    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#be123c",
    shadow: "#000000",
    gradients: {
        background: ["#fff1f2", "#fecdd3"],
        surface: ["#ffe4e6", "#fecdd3"],
        primary: ["#f43f5e", "#e11d48"],
        success: ["#22c55e", "#16a34a"],
        warning: ["#f59e0b", "#d97706"],
        danger: ["#be123c", "#9f1239"],
        muted: ["#fda4af", "#fb7185"],
        empty: ["#fff1f2", "#fecdd3"],
    },
    backgrounds: {
        input: "#ffffff",
        editInput: "#ffe4e6",
    },
    statusBarStyle: "dark",
};

export const amethystColors: ColorScheme = {
    bg: "#faf5ff",
    surface: "#f3e8ff",
    text: "#3b0764",
    textMuted: "#6b21a8",
    border: "#e9d5ff",
    primary: "#9333ea",
    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#ef4444",
    shadow: "#000000",
    gradients: {
        background: ["#faf5ff", "#e9d5ff"],
        surface: ["#f3e8ff", "#e9d5ff"],
        primary: ["#9333ea", "#7e22ce"],
        success: ["#22c55e", "#16a34a"],
        warning: ["#f59e0b", "#d97706"],
        danger: ["#ef4444", "#dc2626"],
        muted: ["#c4b5fd", "#a78bfa"],
        empty: ["#faf5ff", "#e9d5ff"],
    },
    backgrounds: {
        input: "#ffffff",
        editInput: "#f3e8ff",
    },
    statusBarStyle: "dark",
};

export const amoledColors: ColorScheme = {
    bg: "#000000",
    surface: "#000000",
    text: "#ffffff",
    textMuted: "#9ca3af",
    border: "#1f2937",
    primary: "#3b82f6",
    success: "#22c55e",
    warning: "#eab308",
    danger: "#ef4444",
    shadow: "#000000",
    gradients: {
        background: ["#000000", "#000000"],
        surface: ["#000000", "#111827"],
        primary: ["#3b82f6", "#1d4ed8"],
        success: ["#22c55e", "#16a34a"],
        warning: ["#eab308", "#ca8a04"],
        danger: ["#ef4444", "#dc2626"],
        muted: ["#374151", "#4b5563"],
        empty: ["#000000", "#000000"],
    },
    backgrounds: {
        input: "#000000",
        editInput: "#000000",
    },
    statusBarStyle: "light",
};

/* ================================
    THEME NAME TYPE
   ================================ */

export type ThemeName =
    | "light"
    | "dark"
    | "neon"
    | "forest"
    | "sunset"
    | "iceBlue"
    | "rose"
    | "amethyst"
    | "amoled";

/* ================================
    THEME REGISTRY
   ================================ */

const themes: Record<ThemeName, ColorScheme> = {
    light: lightColors,
    dark: darkColors,
    neon: darkColors,
    forest: forestColors,
    sunset: sunsetColors,
    iceBlue: iceBlueColors,
    rose: roseColors,
    amethyst: amethystColors,
    amoled: amoledColors,
};

/* ================================
    CONTEXT
   ================================ */

interface ThemeContextType {
    themeName: ThemeName;
    setTheme: (theme: ThemeName) => void;
    colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* ================================
    PROVIDER
   ================================ */

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeName, setThemeName] = useState<ThemeName>("forest");

    useEffect(() => {
        AsyncStorage.getItem("theme").then((value) => {
            if (value) setThemeName(value as ThemeName);
        });
    }, []);

    const setTheme = async (theme: ThemeName) => {
        setThemeName(theme);
        await AsyncStorage.setItem("theme", theme);
    };

    const colors = themes[themeName];

    return (
        <ThemeContext.Provider value={{ themeName, setTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    );
};

/* ================================
    HOOK
   ================================ */

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
};