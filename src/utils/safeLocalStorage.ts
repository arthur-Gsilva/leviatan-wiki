export function safeLocalStorage() {
    try {
        return window.localStorage;
    } catch {
        return null;
    }
}