"use client";
import React, { useState, useEffect, useRef } from 'react';

const codeSamples = {
  python: [
    {
      plain: 'class Developer:',
      jsx: <><span className="text-blue-400">class</span> <span className="text-yellow-200">Developer</span><span className="text-gray-300">:</span></>,
    },
    {
      plain: '    name = "Héctor Estrada"',
      jsx: <><span className="text-purple-300">    name</span> <span className="text-gray-300">=</span> <span className="text-green-400">&quot;Héctor Estrada&quot;</span></>,
    },
    {
      plain: '    stack = ["React", "Node.js", "PostgreSQL"]',
      jsx: <><span className="text-purple-300">    stack</span> <span className="text-gray-300">=</span> <span className="text-green-300">[&quot;React&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;]</span></>,
    },
    {
      plain: '    learning = ["Docker", "TypeScript"]',
      jsx: <><span className="text-purple-300">    learning</span> <span className="text-gray-300">=</span> <span className="text-green-300">[&quot;Docker&quot;, &quot;TypeScript&quot;]</span></>,
    },
    {
      plain: '    goal = "Internship-ready software engineer"',
      jsx: <><span className="text-purple-300">    goal</span> <span className="text-gray-300">=</span> <span className="text-green-400">&quot;Internship-ready software engineer&quot;</span></>,
    },
  ],
  typescript: [
    {
      plain: 'class Developer {',
      jsx: <><span className="text-blue-400">class</span> <span className="text-yellow-200">Developer</span> <span className="text-gray-300">{'{'}</span></>,
    },
    {
      plain: '  name: string = "Héctor Estrada";',
      jsx: <><span className="text-purple-300">  name</span><span className="text-gray-300">: string =</span> <span className="text-green-400">&quot;Héctor Estrada&quot;</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '  stack: string[] = ["React", "Node.js", "PostgreSQL"];',
      jsx: <><span className="text-purple-300">  stack</span><span className="text-gray-300">: string[] =</span> <span className="text-green-300">[&quot;React&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;]</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '  learning: string[] = ["Docker", "TypeScript"];',
      jsx: <><span className="text-purple-300">  learning</span><span className="text-gray-300">: string[] =</span> <span className="text-green-300">[&quot;Docker&quot;, &quot;TypeScript&quot;]</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '  goal: string = "Internship-ready software engineer";',
      jsx: <><span className="text-purple-300">  goal</span><span className="text-gray-300">: string =</span> <span className="text-green-400">&quot;Internship-ready software engineer&quot;</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '}',
      jsx: <span className="text-gray-300">{'}'}</span>,
    },
  ],
  java: [
    {
      plain: 'public class Developer {',
      jsx: <><span className="text-blue-400">public class</span> <span className="text-yellow-200">Developer</span> <span className="text-gray-300">{'{'}</span></>,
    },
    {
      plain: '    String name = "Héctor Estrada";',
      jsx: <><span className="text-purple-300">    String name</span> <span className="text-gray-300">=</span> <span className="text-green-400">&quot;Héctor Estrada&quot;</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '    String[] stack = ["React", "Node.js", "PostgreSQL"];',
      jsx: <><span className="text-purple-300">    String[] stack</span> <span className="text-gray-300">=</span> <span className="text-green-300">[&quot;React&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;]</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '    String[] learning = ["Docker", "TypeScript"];',
      jsx: <><span className="text-purple-300">    String[] learning</span> <span className="text-gray-300">=</span> <span className="text-green-300">[&quot;Docker&quot;, &quot;TypeScript&quot;]</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '    String goal = "Internship-ready software engineer";',
      jsx: <><span className="text-purple-300">    String goal</span> <span className="text-gray-300">=</span> <span className="text-green-400">&quot;Internship-ready software engineer&quot;</span><span className="text-gray-300">;</span></>,
    },
    {
      plain: '}',
      jsx: <span className="text-gray-300">{'}'}</span>,
    },
  ],
};

export default function AnimatedCodeBlock() {
  const [language, setLanguage] = useState<'python' | 'typescript' | 'java'>('python');
  const codeLines = codeSamples[language];
  const [currentLine, setCurrentLine] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset animation when language changes
  useEffect(() => {
    setCurrentLine(0);
    setTypedLines([]);
    setCharIndex(0);
  }, [language]);

  // Typing effect
  useEffect(() => {
    if (currentLine < codeLines.length) {
      if (charIndex < codeLines[currentLine].plain.length) {
        timerRef.current = setTimeout(() => {
          setCharIndex((i) => i + 1);
        }, 22);
      } else {
        // Line finished, wait, then move to next line
        timerRef.current = setTimeout(() => {
          setTypedLines((prev) => [...prev, codeLines[currentLine].plain]);
          setCurrentLine((line) => line + 1);
          setCharIndex(0);
        }, 400);
      }
    } else {
      // All lines finished, wait, then reset
      timerRef.current = setTimeout(() => {
        setTypedLines([]);
        setCurrentLine(0);
        setCharIndex(0);
      }, 2000);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [charIndex, currentLine, codeLines]);

  // Blinking cursor effect
  useEffect(() => {
    const blink = setInterval(() => setIsBlinking((b) => !b), 550);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="bg-[#181c24] text-white font-mono rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-md mx-auto border border-gray-800 relative">
      {/* Language Toggle */}
      <div className="flex gap-2 mb-2">
        {(['python', 'typescript', 'java'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 rounded text-xs font-semibold border transition-colors duration-150 ${language === lang ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'}`}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>
      {/* IDE-style header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
        <span className="ml-3 text-xs text-gray-400">developer.{language === 'python' ? 'py' : language === 'typescript' ? 'ts' : 'java'}</span>
      </div>
      <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base leading-relaxed min-h-[120px]">
        {typedLines.map((line, idx) => (
          <span key={idx} className="block">{codeLines[idx].jsx}</span>
        ))}
        {currentLine < codeLines.length && (
          <span className="block">
            <span>
              {codeLines[currentLine].plain.slice(0, charIndex)}
              {isBlinking && <span className="blinking-cursor text-white">|</span>}
            </span>
          </span>
        )}
        {currentLine === codeLines.length && (
          <span className="blinking-cursor text-white">|</span>
        )}
      </pre>
      <style>{`
        .blinking-cursor {
          animation: blink 1.1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
} 