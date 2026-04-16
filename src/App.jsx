import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Download, Target, Zap, ArrowDown, X, Copy } from 'lucide-react';
import { mapData } from './data';

const colorStyles = {
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-500', border: 'border-cyan-500', lightBg: 'bg-cyan-950/20', textLight: 'text-cyan-100', bgDark: 'bg-[#003344]' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', lightBg: 'bg-orange-950/20', textLight: 'text-orange-100', bgDark: 'bg-[#442200]' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', lightBg: 'bg-emerald-950/20', textLight: 'text-emerald-100', bgDark: 'bg-[#003322]' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', lightBg: 'bg-pink-950/20', textLight: 'text-pink-100', bgDark: 'bg-[#440022]' }
};

const avatarPlaceholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00bcd4" />
          <stop offset="50%" stop-color="#4caf50" />
          <stop offset="100%" stop-color="#ff9800" />
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="120" fill="#0d1117"/>
      <circle cx="120" cy="88" r="42" fill="url(#g)" opacity="0.95"/>
      <path d="M48 204c13-39 41-60 72-60s59 21 72 60" fill="url(#g)" opacity="0.9"/>
    </svg>
  `);

// Reusable sleek arrow component for horizontal flow
const HorizontalArrow = ({ color }) => (
  <div className="flow-arrow-desktop hidden md:flex items-center justify-center z-10 shrink-0 relative w-6">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute top-1/2 -translate-y-1/2 drop-shadow-[0_0_5px_currentColor]" style={{ color }}>
      <path d="M0,12 L18,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
      <path d="M14,7 L22,12 L14,17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// Reusable sleek arrow component for bidirectional vertical flow
const VerticalBidirectionalArrow = ({ color }) => (
  <div className="relative w-8 h-12 flex items-center justify-center">
    <svg width="24" height="48" viewBox="0 0 24 48" fill="none" className="drop-shadow-[0_0_6px_currentColor]" style={{ color }}>
      <path d="M12,4 L12,44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" className="opacity-60" />
      <path d="M7,10 L12,2 L17,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7,38 L12,46 L17,38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// Module 1: Content (Cyan)
const ContentLayout = ({ module, theme }) => {
  return (
    <div className="flex flex-col w-full h-full p-6 md:p-8 gap-8 items-center justify-center bg-[#0a0a0a]">
      
      {/* System Flowchart & Content integrated */}
      <div className="flex flex-col items-center justify-center relative w-full max-w-6xl">
        
        {/* The 3 Top Nodes Container */}
        <div className="module-top-flow flex flex-col md:flex-row justify-between items-stretch w-full relative z-10 gap-6 md:gap-10">
          
          {/* Node 1: 选题系统 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#151e24] to-[#0a0a0a] border border-cyan-500/40 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,210,255,0.08)] relative z-10 hover:border-cyan-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-lg tracking-widest text-center mb-4 pb-3 border-b border-cyan-900/50">{module.scenarios[1].name}</h4>
            <div className="flex flex-col gap-3 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2.5 rounded border border-gray-800">
                <span className="text-[11px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[12px] text-gray-200 leading-relaxed font-medium">{module.scenarios[1].painPoint}</p>
              </div>
              <div className="bg-cyan-950/30 p-2.5 rounded border border-cyan-900/30">
                <span className="text-[11px] text-cyan-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[12px] text-cyan-50 leading-relaxed font-medium">{module.scenarios[1].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2.5 rounded border border-emerald-900/30">
                <span className="text-[11px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[12px] text-emerald-100/90 leading-relaxed font-medium">{module.scenarios[1].effect}</p>
              </div>
            </div>
          </div>

          {/* Arrow 1 -> 2 (Desktop) */}
          <HorizontalArrow color="#00bcd4" />
          {/* Arrow 1 -> 2 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-cyan-500 z-10 my-1">
            <ArrowDown size={28} strokeWidth={2.5} />
          </div>

          {/* Node 2: 内容生产系统 (脚本生产) */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#151e24] to-[#0a0a0a] border border-cyan-500/40 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,210,255,0.08)] relative z-10 hover:border-cyan-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-lg tracking-widest text-center mb-4 pb-3 border-b border-cyan-900/50">{module.scenarios[2].name}</h4>
            <div className="flex flex-col gap-3 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2.5 rounded border border-gray-800">
                <span className="text-[11px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[12px] text-gray-200 leading-relaxed font-medium">{module.scenarios[2].painPoint}</p>
              </div>
              <div className="bg-cyan-950/30 p-2.5 rounded border border-cyan-900/30">
                <span className="text-[11px] text-cyan-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[12px] text-cyan-50 leading-relaxed font-medium">{module.scenarios[2].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2.5 rounded border border-emerald-900/30">
                <span className="text-[11px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[12px] text-emerald-100/90 leading-relaxed font-medium">{module.scenarios[2].effect}</p>
              </div>
            </div>
          </div>

          {/* Arrow 2 -> 3 (Desktop) */}
          <HorizontalArrow color="#00bcd4" />
          {/* Arrow 2 -> 3 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-cyan-500 z-10 my-1">
            <ArrowDown size={28} strokeWidth={2.5} />
          </div>

          {/* Node 3: 复盘分析系统 (发布复盘) */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#151e24] to-[#0a0a0a] border border-cyan-500/40 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,210,255,0.08)] relative z-10 hover:border-cyan-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-lg tracking-widest text-center mb-4 pb-3 border-b border-cyan-900/50">{module.scenarios[3].name}</h4>
            <div className="flex flex-col gap-3 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2.5 rounded border border-gray-800">
                <span className="text-[11px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[12px] text-gray-200 leading-relaxed font-medium">{module.scenarios[3].painPoint}</p>
              </div>
              <div className="bg-cyan-950/30 p-2.5 rounded border border-cyan-900/30">
                <span className="text-[11px] text-cyan-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[12px] text-cyan-50 leading-relaxed font-medium">{module.scenarios[3].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2.5 rounded border border-emerald-900/30">
                <span className="text-[11px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[12px] text-emerald-100/90 leading-relaxed font-medium">{module.scenarios[3].effect}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Big Bidirectional Flow Arrows Container (3 arrows connecting top nodes to bottom) */}
        <div className="flex flex-row justify-around items-center py-6 w-full relative z-0 px-12 md:px-24">
          {/* Arrow 1 (Left) */}
          <VerticalBidirectionalArrow color="#00bcd4" />
          
          {/* Arrow 2 (Center) */}
          <VerticalBidirectionalArrow color="#00bcd4" />

          {/* Arrow 3 (Right) */}
          <VerticalBidirectionalArrow color="#00bcd4" />
        </div>

        {/* Bottom Node: 内容资产库 */}
        <div className={`knowledge-node w-full flex flex-col md:flex-row items-stretch bg-gradient-to-r from-[#0a0a0a] via-[#111820] to-[#0a0a0a] border-2 border-cyan-600/50 rounded-xl p-6 shadow-[0_0_30px_rgba(0,210,255,0.1)] relative z-10 gap-6`}>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwyMTAsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-50"></div>
          
          <div className="knowledge-title-col flex items-center justify-center md:w-[22%] border-b md:border-b-0 md:border-r border-cyan-900/50 pb-4 md:pb-0 md:pr-6 relative z-10">
            <h4 className="font-black text-white text-2xl tracking-[0.25em] text-center drop-shadow-md">{module.scenarios[0].name}</h4>
          </div>
          
          <div className="knowledge-grid flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-stretch">
             <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800">
                <span className="text-[11px] text-gray-400 font-bold tracking-wider block mb-1.5">解决什么问题:</span>
                <p className="text-[13px] text-gray-200 leading-relaxed font-medium">{module.scenarios[0].painPoint}</p>
              </div>
              <div className="bg-cyan-950/30 p-4 rounded-lg border border-cyan-900/30">
                <span className="text-[11px] text-cyan-400 font-bold tracking-wider block mb-1.5">AI能做什么:</span>
                <p className="text-[13px] text-cyan-50 leading-relaxed font-medium">{module.scenarios[0].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-4 rounded-lg border border-emerald-900/30">
                <span className="text-[11px] text-emerald-500 font-bold tracking-wider block mb-1.5">带来什么效果:</span>
                <p className="text-[13px] text-emerald-100/90 leading-relaxed font-medium">{module.scenarios[0].effect}</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Module 2: Conversion (Orange)
const ConversionLayout = ({ module, theme }) => {
  return (
    <div className="flex flex-col w-full h-full p-6 md:p-8 gap-8 items-center justify-center bg-[#0a0a0a]">
      
      {/* System Flowchart & Content integrated */}
      <div className="flex flex-col items-center justify-center relative w-full max-w-6xl">
        
        {/* The 4 Top Nodes Container */}
        <div className="module-top-flow flex flex-col md:flex-row justify-between items-stretch w-full relative z-10 gap-4 md:gap-6">
          
          {/* Node 1: 公域承接 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#24170a] to-[#0a0a0a] border border-orange-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(255,153,0,0.08)] relative z-10 hover:border-orange-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-orange-900/50">{module.scenarios[1].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[1].painPoint}</p>
              </div>
              <div className="bg-orange-950/30 p-2 rounded border border-orange-900/30">
                <span className="text-[10px] text-orange-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-orange-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[1].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-emerald-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[1].effect}</p>
              </div>
            </div>
          </div>

          {/* Arrow 1 -> 2 (Desktop) */}
          <HorizontalArrow color="#ff9900" />
          {/* Arrow 1 -> 2 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-orange-500 z-10 my-1">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>

          {/* Node 2: 私域筛选 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#24170a] to-[#0a0a0a] border border-orange-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(255,153,0,0.08)] relative z-10 hover:border-orange-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-orange-900/50">{module.scenarios[2].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[2].painPoint}</p>
              </div>
              <div className="bg-orange-950/30 p-2 rounded border border-orange-900/30">
                <span className="text-[10px] text-orange-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-orange-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[2].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-emerald-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[2].effect}</p>
              </div>
            </div>
          </div>

          {/* Arrow 2 -> 3 (Desktop) */}
          <HorizontalArrow color="#ff9900" />
          {/* Arrow 2 -> 3 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-orange-500 z-10 my-1">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>

          {/* Node 3: 成交推进 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#24170a] to-[#0a0a0a] border border-orange-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(255,153,0,0.08)] relative z-10 hover:border-orange-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-orange-900/50">{module.scenarios[3].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[3].painPoint}</p>
              </div>
              <div className="bg-orange-950/30 p-2 rounded border border-orange-900/30">
                <span className="text-[10px] text-orange-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-orange-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[3].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-emerald-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[3].effect}</p>
              </div>
            </div>
          </div>
          
          {/* Arrow 3 -> 4 (Desktop) */}
          <HorizontalArrow color="#ff9900" />
          {/* Arrow 3 -> 4 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-orange-500 z-10 my-1">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>

          {/* Node 4: 复盘分析 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#24170a] to-[#0a0a0a] border border-orange-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(255,153,0,0.08)] relative z-10 hover:border-orange-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-orange-900/50">{module.scenarios[4].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[4].painPoint}</p>
              </div>
              <div className="bg-orange-950/30 p-2 rounded border border-orange-900/30">
                <span className="text-[10px] text-orange-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-orange-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[4].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-emerald-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[4].effect}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Big Bidirectional Flow Arrows Container (4 arrows connecting top nodes to bottom) */}
        <div className="flex flex-row justify-around items-center py-5 w-full relative z-0 px-8 md:px-16">
          {/* Arrow 1 */}
          <VerticalBidirectionalArrow color="#ff9900" />
          
          {/* Arrow 2 */}
          <VerticalBidirectionalArrow color="#ff9900" />

          {/* Arrow 3 */}
          <VerticalBidirectionalArrow color="#ff9900" />
          
          {/* Arrow 4 */}
          <VerticalBidirectionalArrow color="#ff9900" />
        </div>

        {/* Bottom Node: 销售知识库支撑 */}
        <div className={`knowledge-node w-full flex flex-col md:flex-row items-stretch bg-gradient-to-r from-[#0a0a0a] via-[#1a1105] to-[#0a0a0a] border-2 border-orange-600/50 rounded-xl p-6 shadow-[0_0_30px_rgba(255,153,0,0.1)] relative z-10 gap-6`}>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDE1MywwLDAuMDUpIi8+PC9zdmc+')] opacity-50"></div>
          
          <div className="knowledge-title-col flex items-center justify-center md:w-[22%] border-b md:border-b-0 md:border-r border-orange-900/50 pb-4 md:pb-0 md:pr-6 relative z-10">
            <h4 className="font-black text-white text-2xl tracking-[0.2em] text-center drop-shadow-md">{module.scenarios[0].name}</h4>
          </div>
          
          <div className="knowledge-grid flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-stretch">
             <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800">
                <span className="text-[11px] text-gray-400 font-bold tracking-wider block mb-1.5">解决什么问题:</span>
                <p className="text-[13px] text-gray-200 leading-relaxed font-medium">{module.scenarios[0].painPoint}</p>
              </div>
              <div className="bg-orange-950/30 p-4 rounded-lg border border-orange-900/30">
                <span className="text-[11px] text-orange-400 font-bold tracking-wider block mb-1.5">AI能做什么:</span>
                <p className="text-[13px] text-orange-50 leading-relaxed font-medium">{module.scenarios[0].aiSolution}</p>
              </div>
              <div className="bg-emerald-950/20 p-4 rounded-lg border border-emerald-900/30">
                <span className="text-[11px] text-emerald-500 font-bold tracking-wider block mb-1.5">带来什么效果:</span>
                <p className="text-[13px] text-emerald-100/90 leading-relaxed font-medium">{module.scenarios[0].effect}</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Module 3: Delivery (Green)
const DeliveryLayout = ({ module, theme }) => {
  return (
    <div className="flex flex-col w-full h-full p-6 md:p-8 gap-8 items-center justify-center bg-[#0a0a0a]">
      
      {/* System Flowchart & Content integrated */}
      <div className="flex flex-col items-center justify-center relative w-full max-w-6xl">
        
        {/* The 4 Top Nodes Container */}
        <div className="module-top-flow flex flex-col md:flex-row justify-between items-stretch w-full relative z-10 gap-4 md:gap-6">
          
          {/* Node 1 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#0a1a11] to-[#0a0a0a] border border-emerald-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,230,118,0.08)] relative z-10 hover:border-emerald-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-emerald-900/50">{module.scenarios[1].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[1].painPoint}</p>
              </div>
              <div className="bg-emerald-950/30 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-emerald-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[1].aiSolution}</p>
              </div>
              <div className="bg-cyan-950/20 p-2 rounded border border-cyan-900/30">
                <span className="text-[10px] text-cyan-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-cyan-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[1].effect}</p>
              </div>
            </div>
          </div>

          {/* Arrow 1 -> 2 (Desktop) */}
          <HorizontalArrow color="#00e676" />
          {/* Arrow 1 -> 2 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-emerald-500 z-10 my-1">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>

          {/* Node 2 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#0a1a11] to-[#0a0a0a] border border-emerald-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,230,118,0.08)] relative z-10 hover:border-emerald-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-emerald-900/50">{module.scenarios[2].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[2].painPoint}</p>
              </div>
              <div className="bg-emerald-950/30 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-emerald-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[2].aiSolution}</p>
              </div>
              <div className="bg-cyan-950/20 p-2 rounded border border-cyan-900/30">
                <span className="text-[10px] text-cyan-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-cyan-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[2].effect}</p>
              </div>
            </div>
          </div>

          {/* Arrow 2 -> 3 (Desktop) */}
          <HorizontalArrow color="#00e676" />
          {/* Arrow 2 -> 3 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-emerald-500 z-10 my-1">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>

          {/* Node 3 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#0a1a11] to-[#0a0a0a] border border-emerald-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,230,118,0.08)] relative z-10 hover:border-emerald-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-emerald-900/50">{module.scenarios[3].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[3].painPoint}</p>
              </div>
              <div className="bg-emerald-950/30 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-emerald-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[3].aiSolution}</p>
              </div>
              <div className="bg-cyan-950/20 p-2 rounded border border-cyan-900/30">
                <span className="text-[10px] text-cyan-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-cyan-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[3].effect}</p>
              </div>
            </div>
          </div>
          
          {/* Arrow 3 -> 4 (Desktop) */}
          <HorizontalArrow color="#00e676" />
          {/* Arrow 3 -> 4 (Mobile) */}
          <div className="flow-arrow-mobile md:hidden flex justify-center text-emerald-500 z-10 my-1">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>

          {/* Node 4 */}
          <div className={`flex-1 flex flex-col bg-gradient-to-b from-[#0a1a11] to-[#0a0a0a] border border-emerald-500/40 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,230,118,0.08)] relative z-10 hover:border-emerald-400 transition-colors`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-t-xl opacity-80"></div>
            <h4 className="font-black text-white text-[15px] tracking-widest text-center mb-3 pb-2 border-b border-emerald-900/50">{module.scenarios[4].name}</h4>
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="bg-gray-900/40 p-2 rounded border border-gray-800">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider block mb-1">解决什么问题:</span>
                <p className="text-[11px] text-gray-200 leading-relaxed font-medium line-clamp-3">{module.scenarios[4].painPoint}</p>
              </div>
              <div className="bg-emerald-950/30 p-2 rounded border border-emerald-900/30">
                <span className="text-[10px] text-emerald-400 font-bold tracking-wider block mb-1">AI能做什么:</span>
                <p className="text-[11px] text-emerald-50 leading-relaxed font-medium line-clamp-3">{module.scenarios[4].aiSolution}</p>
              </div>
              <div className="bg-cyan-950/20 p-2 rounded border border-cyan-900/30">
                <span className="text-[10px] text-cyan-500 font-bold tracking-wider block mb-1">带来什么效果:</span>
                <p className="text-[11px] text-cyan-100/90 leading-relaxed font-medium line-clamp-3">{module.scenarios[4].effect}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Big Bidirectional Flow Arrows Container (4 arrows connecting top nodes to bottom) */}
        <div className="flex flex-row justify-around items-center py-5 w-full relative z-0 px-8 md:px-16">
          {/* Arrow 1 */}
          <VerticalBidirectionalArrow color="#00e676" />
          
          {/* Arrow 2 */}
          <VerticalBidirectionalArrow color="#00e676" />

          {/* Arrow 3 */}
          <VerticalBidirectionalArrow color="#00e676" />
          
          {/* Arrow 4 */}
          <VerticalBidirectionalArrow color="#00e676" />
        </div>

        {/* Bottom Node: 业务知识库支撑 */}
        <div className={`knowledge-node w-full flex flex-col md:flex-row items-stretch bg-gradient-to-r from-[#0a0a0a] via-[#051a0d] to-[#0a0a0a] border-2 border-emerald-600/50 rounded-xl p-6 shadow-[0_0_30px_rgba(0,230,118,0.1)] relative z-10 gap-6`}>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwyMzAsMTE4LDAuMDUpIi8+PC9zdmc+')] opacity-50"></div>
          
          <div className="knowledge-title-col flex items-center justify-center md:w-[22%] border-b md:border-b-0 md:border-r border-emerald-900/50 pb-4 md:pb-0 md:pr-6 relative z-10">
            <h4 className="font-black text-white text-2xl tracking-[0.2em] text-center drop-shadow-md">{module.scenarios[0].name}</h4>
          </div>
          
          <div className="knowledge-grid flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-stretch">
             <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800">
                <span className="text-[11px] text-gray-400 font-bold tracking-wider block mb-1.5">解决什么问题:</span>
                <p className="text-[13px] text-gray-200 leading-relaxed font-medium">{module.scenarios[0].painPoint}</p>
              </div>
              <div className="bg-emerald-950/30 p-4 rounded-lg border border-emerald-900/30">
                <span className="text-[11px] text-emerald-400 font-bold tracking-wider block mb-1.5">AI能做什么:</span>
                <p className="text-[13px] text-emerald-50 leading-relaxed font-medium">{module.scenarios[0].aiSolution}</p>
              </div>
              <div className="bg-cyan-950/20 p-4 rounded-lg border border-cyan-900/30">
                <span className="text-[11px] text-cyan-500 font-bold tracking-wider block mb-1.5">带来什么效果:</span>
                <p className="text-[13px] text-cyan-100/90 leading-relaxed font-medium">{module.scenarios[0].effect}</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Precipitaiton layout removed.

const Layouts = {
  content: ContentLayout,
  conversion: ConversionLayout,
  delivery: DeliveryLayout
};

function App() {
  const mapRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(null); // 'tanxiao' | 'xiyue' | null
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyWechat = async (wechatId) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(wechatId);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = wechatId;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setCopySuccess(true);
      window.setTimeout(() => setCopySuccess(false), 1800);
    } catch (error) {
      console.error('Copy failed:', error);
      alert('复制失败，请手动复制微信号');
    }
  };

  const handleDownload = async () => {
    if (!mapRef.current) return;

    try {
      setIsExporting(true);
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await toPng(mapRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#050505',
        skipFonts: true,
      });

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = '自媒体AI提效地图.png';
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      alert(`生成图片失败：${error?.message || '请重试'}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] p-4 md:p-8 flex flex-col items-center font-sans text-white">

      {/* Main Map Container (This is what gets exported) */}
      <div
        ref={mapRef}
        className={`map-container w-full max-w-[1200px] rounded-xl overflow-hidden relative border border-gray-800/50 shadow-2xl bg-[#050505] ${isExporting ? 'export-mode' : ''}`}
      >
        {/* Watermark Layer */}
        <div className="watermark-export-only absolute inset-0 pointer-events-none z-[100] overflow-hidden opacity-[0.04]">
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-24 gap-y-32 -rotate-12 scale-150 transform-gpu">
            {Array.from({ length: 150 }).map((_, i) => (
              <span key={i} className="text-4xl md:text-5xl font-black text-white whitespace-nowrap tracking-widest">
                谈笑AI
              </span>
            ))}
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center py-16 md:py-24 border-b border-gray-800 relative overflow-hidden bg-[#050505]">
          
          {/* Base Visual Background Effects - Reverted & Optimized */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-30"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full filter blur-[120px] pointer-events-none mix-blend-screen translate-y-[-50%]"></div>
          <div className="absolute bottom-0 right-[20%] w-[600px] h-[400px] bg-emerald-600/10 rounded-full filter blur-[150px] pointer-events-none mix-blend-screen translate-y-[50%]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

          {/* Tech lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
            <path d="M0,50 Q200,60 400,20 T800,80 T1200,40" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
            <path d="M0,150 Q300,100 600,180 T1200,120" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00bcd4" stopOpacity="0" />
                <stop offset="50%" stopColor="#00bcd4" stopOpacity="1" />
                <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="relative z-10 px-4 max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black mb-6 tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" style={{ fontFamily: 'var(--font-heading)' }}>
              {mapData.header.title}
            </h1>
            <p className="text-lg md:text-xl text-cyan-100/70 font-medium tracking-[0.3em] uppercase drop-shadow-md">
              {mapData.header.subtitle}
            </p>
          </div>
        </div>

        {/* Modules Stack */}
        <div className="modules-stack flex flex-col p-4 md:p-6 bg-[#050505] gap-6">
          {mapData.modules.map(module => {
            const Layout = Layouts[module.id];
            const theme = colorStyles[module.color];
            
            return (
              <div key={module.id} className="module-card flex flex-col md:flex-row bg-[#0a0a0a] rounded-xl border border-gray-800/80 overflow-hidden relative shadow-lg">
                {/* Vertical Title Bar */}
                <div className={`module-title-bar w-full md:w-20 lg:w-24 shrink-0 ${theme.bg} flex flex-col items-center justify-center py-4 md:py-10 relative`}>
                   {/* Mobile Horizontal Title */}
                   <h2 className="mobile-title text-3xl font-black text-black tracking-[0.2em] uppercase text-center md:hidden">
                     {module.id === 'content' ? '内容获客' : module.title}
                   </h2>
                   {/* Desktop Vertical Title */}
                   <h2 className="desktop-title hidden md:block text-4xl lg:text-[44px] font-black text-black tracking-[0.3em] uppercase text-center" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                     {module.id === 'content' ? '内容获客' : module.title}
                   </h2>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 relative flex flex-col">
                  {/* Module Description Header */}
                  <div className={`px-6 py-3 border-b border-gray-800/50 bg-[#111]/50 flex items-center gap-2 ${module.isSystemView ? 'bg-[#111]' : ''}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.bg} shadow-[0_0_5px_currentColor]`}></span>
                    <span className="text-xs md:text-[13px] text-gray-300 font-bold tracking-wide leading-relaxed">{module.description}</span>
                  </div>
                  
                  <div className="flex-1">
                    <Layout module={module} theme={theme} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA & Profiles */}
        <div className="px-4 pb-4 md:px-6 md:pb-6 bg-[#050505]">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f1419] via-[#0d1015] to-[#11161b] overflow-hidden relative shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,188,212,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(76,175,80,0.12),transparent_28%)] pointer-events-none"></div>
            <div className="relative px-6 py-8 md:px-10 md:py-12">

              <div className="hero-profile flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch relative z-10">
                
                {/* Profile 1 Card: 谭啸 */}
                <div className="flex-1 flex flex-col gap-5 rounded-3xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md px-6 py-7 shadow-[0_20px_60px_rgba(0,188,212,0.1)] hover:bg-cyan-950/20 transition-colors h-full w-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
                    <img
                      src={mapData.profiles[0].image ? `/src/assets/${mapData.profiles[0].image}` : avatarPlaceholder}
                      alt={mapData.profiles[0].avatarAlt}
                      className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full object-cover border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(0,188,212,0.25)]"
                    />
                    <div className="hero-profile-copy text-center sm:text-left flex-1 min-w-0 w-full">
                      <h3 className="text-xl md:text-2xl font-black tracking-[0.12em] text-white mb-2.5">
                        {mapData.profiles[0].name}
                      </h3>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-0 w-full">
                        {mapData.profiles[0].tags.map((tag, idx) => (
                          <span key={idx} className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border whitespace-nowrap shrink-0 ${idx === 0 ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-gray-800/40 text-gray-400 border-gray-700/30'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-3.5 w-full border border-cyan-900/20">
                    <p className="text-[13px] md:text-[14px] text-cyan-100/80 leading-relaxed tracking-[0.06em] text-center md:text-left font-medium">
                      "{mapData.profiles[0].value}"
                    </p>
                  </div>
                  <div className="w-full text-center mt-2 flex-1 flex flex-col justify-end gap-5">
                    <span className="text-cyan-300 font-bold tracking-widest text-[14px] md:text-[15px] block drop-shadow-[0_0_8px_rgba(0,188,212,0.4)]">
                      {mapData.profiles[0].actionText}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsContactOpen('tanxiao')}
                      className="no-print w-full rounded-2xl bg-cyan-500 text-[#041014] font-black py-3.5 px-4 tracking-[0.12em] shadow-[0_10px_30px_rgba(0,188,212,0.25)] hover:bg-cyan-400 transition-colors"
                    >
                      {mapData.profiles[0].buttonText}
                    </button>
                    
                    {/* Export Mode Only: QR Code and WeChat ID */}
                    <div className="export-only hidden flex-col items-center gap-3 mt-2 w-full">
                      <div className="bg-white p-2 rounded-xl shadow-lg border border-white/10 relative">
                        <img src={`/src/assets/${mapData.profiles[0].qrCode}`} alt="微信二维码" className="w-32 h-32 object-contain" />
                        <div className="absolute -bottom-3 -right-3 bg-cyan-500 text-[#041014] text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full shadow-md">
                          扫码诊断
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-cyan-100/70 text-[10px] tracking-widest uppercase mb-1">微信号</span>
                        <span className="text-white font-black text-lg tracking-wider bg-cyan-950/50 px-4 py-1 rounded-lg border border-cyan-500/20">{mapData.profiles[0].wechat}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile 2 Card: 汐月Amy */}
                <div className="flex-1 flex flex-col gap-5 rounded-3xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-md px-6 py-7 shadow-[0_20px_60px_rgba(76,175,80,0.1)] hover:bg-emerald-950/20 transition-colors h-full w-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
                    <img
                      src={mapData.profiles[1].image ? `/src/assets/${mapData.profiles[1].image}` : avatarPlaceholder}
                      alt={mapData.profiles[1].avatarAlt}
                      className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(76,175,80,0.25)]"
                    />
                    <div className="hero-profile-copy text-center sm:text-left flex-1 min-w-0 w-full">
                      <h3 className="text-xl md:text-2xl font-black tracking-[0.12em] text-white mb-2.5">
                        {mapData.profiles[1].name}
                      </h3>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-0 w-full">
                        {mapData.profiles[1].tags.map((tag, idx) => (
                          <span key={idx} className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border whitespace-nowrap shrink-0 ${idx === 0 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-gray-800/40 text-gray-400 border-gray-700/30'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-3.5 w-full border border-emerald-900/20">
                    <p className="text-[13px] md:text-[14px] text-emerald-100/80 leading-relaxed tracking-[0.06em] text-center md:text-left font-medium">
                      "{mapData.profiles[1].value}"
                    </p>
                  </div>
                  <div className="w-full text-center mt-2 flex-1 flex flex-col justify-end gap-5">
                    <span className="text-emerald-300 font-bold tracking-widest text-[14px] md:text-[15px] block drop-shadow-[0_0_8px_rgba(76,175,80,0.4)]">
                      {mapData.profiles[1].actionText}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsContactOpen('xiyue')}
                      className="no-print w-full rounded-2xl bg-emerald-500 text-[#041108] font-black py-3.5 px-4 tracking-[0.12em] shadow-[0_10px_30px_rgba(76,175,80,0.25)] hover:bg-emerald-400 transition-colors"
                    >
                      {mapData.profiles[1].buttonText}
                    </button>
                    
                    {/* Export Mode Only: QR Code and WeChat ID */}
                    <div className="export-only hidden flex-col items-center gap-3 mt-2 w-full">
                      <div className="bg-white p-2 rounded-xl shadow-lg border border-white/10 relative">
                        <img src={`/src/assets/${mapData.profiles[1].qrCode}`} alt="微信二维码" className="w-32 h-32 object-contain" />
                        <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-[#041108] text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full shadow-md">
                          扫码诊断
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-emerald-100/70 text-[10px] tracking-widest uppercase mb-1">微信号</span>
                        <span className="text-white font-black text-lg tracking-wider bg-emerald-950/50 px-4 py-1 rounded-lg border border-emerald-500/20">{mapData.profiles[1].wechat}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Actions */}
      <div className="no-print fixed right-4 bottom-5 md:right-6 md:bottom-6 z-50 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleDownload}
          className="w-[74px] h-[74px] rounded-full border border-cyan-400/25 bg-[#0d1318]/90 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,188,212,0.2)] flex flex-col items-center justify-center gap-1 text-white hover:bg-[#0f171d] transition-colors"
        >
          <Download size={18} className="text-cyan-300" />
          <span className="text-[11px] tracking-[0.12em] font-bold">下载图片</span>
        </button>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (() => {
        const profile = mapData.profiles.find(p => p.id === isContactOpen);
        if (!profile) return null;
        const isTanxiao = profile.id === 'tanxiao';
        const themeColor = isTanxiao ? 'cyan' : 'emerald';
        const themeHex = isTanxiao ? 'rgba(0,188,212' : 'rgba(76,175,80';

        const closeModal = () => {
          setIsContactOpen(null);
          setCopySuccess(false);
        };

        return (
          <div className="no-print fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
            <div className="relative w-full max-w-sm rounded-[28px] border border-white/10 bg-[#0d1117] shadow-[0_24px_90px_rgba(0,0,0,0.55)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,188,212,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(76,175,80,0.12),transparent_32%)] pointer-events-none"></div>
              <div className="relative p-6 md:p-7 flex flex-col items-center">
                
                <div className="w-full flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className={`text-${themeColor}-200/80 text-xs tracking-[0.22em] uppercase`}>联系{profile.name}</p>
                    <h3 className="mt-2 text-xl font-black tracking-[0.08em] text-white">扫码加微信进一步沟通</h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col items-center justify-center relative group">
                  <div className={`absolute inset-0 bg-${themeColor}-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <img src={`/src/assets/${profile.qrCode}`} alt={`${profile.name}微信二维码`} className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-xl shadow-lg border border-white/5 bg-white relative z-10" />
                </div>

                <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${themeColor}-500/10 to-transparent`}></div>
                  <p className="text-[11px] text-gray-400 tracking-[0.1em] mb-1.5 relative z-10">微信号</p>
                  <p className="text-xl font-black text-white tracking-[0.08em] relative z-10 mb-1.5">
                    {profile.wechat}
                  </p>
                  <p className={`text-[10px] text-${themeColor}-300/90 tracking-wider relative z-10 bg-${themeColor}-500/10 inline-block px-2 py-0.5 rounded-full border border-${themeColor}-500/20`}>
                    {profile.wechatNote}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyWechat(profile.wechat)}
                  className={`mt-5 w-full rounded-2xl bg-${themeColor}-500 text-[#041014] font-black py-3.5 px-4 tracking-[0.12em] shadow-[0_10px_30px_${themeHex},0.25)] flex items-center justify-center gap-2 hover:bg-${themeColor}-400 transition-colors`}
                >
                  <Copy size={16} />
                  <span>{copySuccess ? '已复制微信号' : '一键复制'}</span>
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default App;
