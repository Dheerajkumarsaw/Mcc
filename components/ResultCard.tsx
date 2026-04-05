"use client";

import { useState } from "react";
import { ChannelVisual } from "@/lib/types";

interface ResultCardProps {
  title: string;
  icon: string;
  content: string | string[];
  visual?: ChannelVisual;
  gradient?: string;
}

export default function ResultCard({ title, icon, content, visual, gradient = "from-blue-600 to-indigo-700" }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);

  function getCopyText(): string {
    if (Array.isArray(content)) {
      return content.join("\n\n");
    }
    return content;
  }

  async function copyToClipboard(text: string, setter: (v: boolean) => void) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setter(true);
    setTimeout(() => setter(false), 2000);
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* Visual Banner */}
      {visual && (
        <div className={`relative bg-linear-to-br ${gradient} p-6 sm:p-8 overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`vgrid-${title.replace(/\s/g, "")}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="0.8" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#vgrid-${title.replace(/\s/g, "")})`} />
            </svg>
          </div>

          <div className="relative">
            {/* Slogan */}
            <p className="text-white text-xl sm:text-2xl font-bold leading-snug max-w-md">
              &ldquo;{visual.slogan}&rdquo;
            </p>

            {/* Image Prompt */}
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <span className="text-white/70 text-xs font-medium uppercase tracking-wider">Image Prompt</span>
                </div>
                <button
                  onClick={() => copyToClipboard(visual.imagePrompt, setPromptCopied)}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/10"
                >
                  {promptCopied ? "Copied!" : "Copy Prompt"}
                </button>
              </div>
              <p className="text-white/80 text-xs leading-relaxed line-clamp-3">
                {visual.imagePrompt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            {title}
          </h3>
          <button
            onClick={() => copyToClipboard(getCopyText(), setCopied)}
            className="text-sm px-3 py-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {Array.isArray(content) ? (
            <div className="space-y-3">
              {content.map((item, i) => (
                <div
                  key={i}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <span className="text-xs font-medium text-gray-400 block mb-1">
                    Tweet {i + 1}
                  </span>
                  <p className="whitespace-pre-wrap">{item}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="whitespace-pre-wrap">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}
