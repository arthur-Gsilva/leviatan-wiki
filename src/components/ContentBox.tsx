"use client"

import { ReactNode } from "react";

export const ContentBox = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="w-[90vw] sm:w-[82vw] max-w-5xl mx-auto mt-10 rounded-xl py-10 px-8 sm:px-12 text-white max-h-[80vh] overflow-y-scroll"
            style={{
                background: "linear-gradient(135deg, rgba(8,15,26,0.98) 0%, rgba(13,27,42,0.97) 60%, rgba(10,20,36,0.98) 100%)",
                border: "1px solid rgba(143,195,213,0.12)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(143,195,213,0.08)",
            }}
        >
            {children}
        </div>
    );
};