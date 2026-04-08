"use client"

import { ReactNode } from "react";

export const ContentBox = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="w-full sm:w-[82vw] max-w-5xl mx-auto mt-10 rounded-xl py-10 px-8 sm:px-12 text-white max-h-[80vh] overflow-y-scroll custom-scrollbar"
            style={{
                background: "linear-gradient(135deg, rgb(var(--bg-900) / 0.98) 0%, rgb(var(--bg-800) / 0.97) 60%, rgb(var(--bg-700) / 0.98) 100%)",
                border: "1px solid rgb(var(--p) / 0.12)",
                boxShadow: "0 8px 40px rgb(0 0 0 / 0.5), inset 0 1px 0 rgb(var(--p) / 0.08)",
                color: "rgb(var(--p))"
            }}
        >
            {children}
        </div>
    );
};