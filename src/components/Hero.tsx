"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs } from "react-icons/si";

const CodingDoodle = () => (
  <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Desk with shadow */}
    <motion.path
      d="M50 380 L350 380"
      stroke="#1a1a1a"
      strokeWidth="6"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.ellipse
      cx="200"
      cy="385"
      rx="140"
      ry="8"
      fill="#0a0a0a"
      opacity="0.1"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    
    {/* Chair with more details */}
    <motion.path
      d="M100 420 L100 380 M100 400 L80 420 M100 400 L120 420 M95 390 L105 390"
      stroke="#2a2a2a"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />
    
    {/* Neck */}
    <motion.rect
      x="140"
      y="300"
      width="20"
      height="15"
      rx="3"
      fill="#f5e6d3"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.75 }}
    />
    
    {/* Shirt/Collar */}
    <motion.path
      d="M130 315 L130 340 Q150 345 170 340 L170 315 Q165 310 150 310 Q135 310 130 315"
      fill="#4A90E2"
      stroke="#3A7BC8"
      strokeWidth="2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    />
    {/* Collar details */}
    <motion.path
      d="M135 315 L140 310 M165 315 L160 310"
      stroke="#3A7BC8"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.75 }}
    />
    
    {/* Body sitting - more refined shape */}
    <motion.ellipse
      cx="150"
      cy="345"
      rx="40"
      ry="38"
      fill="#4A90E2"
      stroke="#3A7BC8"
      strokeWidth="2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.7 }}
    />
    
    {/* Head - more refined */}
    <motion.circle
      cx="150"
      cy="270"
      r="35"
      fill="url(#headGradient)"
      stroke="#d4c4b0"
      strokeWidth="1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    />
    
    {/* Ear - more refined */}
    <motion.ellipse
      cx="118"
      cy="273"
      rx="5"
      ry="9"
      fill="#f0dcc8"
      stroke="#d4c4b0"
      strokeWidth="1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2, delay: 0.9 }}
    />
    {/* Inner ear detail */}
    <motion.path
      d="M120 273 Q122 273 122 275"
      stroke="#d4c4b0"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.1, delay: 0.95 }}
    />
    
    {/* Professional hairstyle - cleaner, more styled */}
    <motion.path
      d="M118 248 Q125 235 135 238 Q145 232 150 237 Q155 232 165 238 Q175 235 182 248 L182 260 Q180 265 175 268 Q170 255 165 258 Q160 252 150 255 Q140 252 135 258 Q130 255 125 268 Q120 265 118 260 Z"
      fill="#2a2a2a"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.85 }}
    />
    {/* Hair texture/strands */}
    <motion.path
      d="M130 245 Q135 240 140 243 M145 240 Q150 238 155 241 M160 240 Q165 238 170 242"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 0.95 }}
    />
    
    {/* Eyebrows - more defined */}
    <motion.path
      d="M128 263 Q133 261 138 262"
      stroke="#2a2a2a"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.95 }}
    />
    <motion.path
      d="M162 262 Q167 261 172 263"
      stroke="#2a2a2a"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 0.95 }}
    />
    
    {/* Modern glasses - sleeker design */}
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      {/* Left lens */}
      <rect x="125" y="268" width="20" height="16" rx="3" fill="rgba(200,220,255,0.15)" stroke="#1a1a1a" strokeWidth="2.5"/>
      {/* Right lens */}
      <rect x="155" y="268" width="20" height="16" rx="3" fill="rgba(200,220,255,0.15)" stroke="#1a1a1a" strokeWidth="2.5"/>
      {/* Bridge */}
      <path d="M145 276 L155 276" stroke="#1a1a1a" strokeWidth="2.5"/>
      {/* Left temple */}
      <path d="M125 276 L118 276" stroke="#1a1a1a" strokeWidth="2.5"/>
      {/* Right temple */}
      <path d="M175 276 L182 276" stroke="#1a1a1a" strokeWidth="2.5"/>
    </motion.g>
    {/* Glasses reflection - more realistic */}
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
      <path d="M127 270 L132 273" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M157 270 L162 273" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </motion.g>
    
    {/* Eyes - more detailed */}
    <motion.circle cx="135" cy="276" r="2" fill="#1a1a1a" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.05 }}/>
    <motion.circle cx="165" cy="276" r="2" fill="#1a1a1a" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.05 }}/>
    {/* Eye highlights */}
    <motion.circle cx="136" cy="275" r="0.8" fill="#ffffff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }}/>
    <motion.circle cx="166" cy="275" r="0.8" fill="#ffffff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }}/>
    
    {/* Nose - subtle */}
    <motion.path
      d="M150 280 Q148 285 147 287 M150 280 Q152 285 153 287"
      stroke="#d4c4b0"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.15 }}
    />
    
    {/* Smile - friendly */}
    <motion.path
      d="M140 290 Q150 295 160 290"
      stroke="#d4926f"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay: 1.2 }}
    />
    
    {/* Arms - professional sleeves */}
    <motion.path
      d="M125 325 Q105 345 115 360 L185 355"
      stroke="#4A90E2"
      strokeWidth="16"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.1 }}
    />
    <motion.path
      d="M175 325 Q195 345 185 360 L240 355"
      stroke="#4A90E2"
      strokeWidth="16"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.1 }}
    />
    {/* Sleeve cuffs */}
    <motion.path
      d="M115 360 Q115 362 117 362 L183 357 Q185 357 185 355"
      stroke="#3A7BC8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.15 }}
    />
    <motion.path
      d="M185 360 Q185 362 187 362 L238 357 Q240 357 240 355"
      stroke="#3A7BC8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.2, delay: 1.15 }}
    />
    
    {/* Hands - more refined */}
    <motion.ellipse cx="185" cy="356" rx="9" ry="7" fill="#f5e6d3" stroke="#d4c4b0" strokeWidth="1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.15 }} />
    <motion.ellipse cx="240" cy="356" rx="9" ry="7" fill="#f5e6d3" stroke="#d4c4b0" strokeWidth="1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.15 }} />
    {/* Finger details */}
    <motion.path d="M182 354 L182 358 M188 354 L188 358" stroke="#d4c4b0" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }}/>
    <motion.path d="M237 354 L237 358 M243 354 L243 358" stroke="#d4c4b0" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }}/>
    
    {/* Laptop base - enhanced */}
    <motion.rect
      x="175"
      y="350"
      width="130"
      height="10"
      rx="3"
      fill="#2a2a2a"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, delay: 1.2 }}
    />
    <motion.rect
      x="180"
      y="352"
      width="120"
      height="6"
      rx="2"
      fill="#3a3a3a"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, delay: 1.25 }}
    />
    
    {/* Laptop screen - enhanced */}
    <motion.path
      d="M185 350 L195 275 L295 275 L305 350"
      fill="#1a1a1a"
      stroke="#2a2a2a"
      strokeWidth="4"
      initial={{ pathLength: 0, fillOpacity: 0 }}
      animate={{ pathLength: 1, fillOpacity: 1 }}
      transition={{ duration: 0.4, delay: 1.3 }}
    />
    {/* Screen glow */}
    <motion.path
      d="M195 280 L290 280 L300 345 L190 345 Z"
      fill="url(#screenGlow)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.4, delay: 1.4 }}
    />
    
    {/* Code lines on screen - enhanced */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.rect x="205" y="290" width="50" height="5" rx="2" fill="#76D362" 
        animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.rect x="205" y="300" width="75" height="5" rx="2" fill="#3178C6"
        animate={{ opacity: [1, 0.6, 1], scaleX: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.rect x="205" y="310" width="60" height="5" rx="2" fill="#F7DF1E"
        animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
      <motion.rect x="205" y="320" width="50" height="5" rx="2" fill="#76D362"
        animate={{ opacity: [1, 0.6, 1], scaleX: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
      />
      <motion.rect x="205" y="330" width="65" height="5" rx="2" fill="#E34F26"
        animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
      />
    </motion.g>
    
    {/* Realistic Coffee Cup */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
    >
      {/* Cup shadow */}
      <motion.ellipse
        cx="332"
        cy="382"
        rx="18"
        ry="4"
        fill="#0a0a0a"
        opacity="0.2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.65 }}
      />
      
      {/* Cup body - 3D perspective */}
      <defs>
        <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="50%" stopColor="#6D4C41" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
        <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3E2723" />
          <stop offset="100%" stopColor="#4E342E" />
        </linearGradient>
      </defs>
      
      {/* Main cup body */}
      <path 
        d="M315 355 Q315 350 318 350 L346 350 Q349 350 349 355 L349 375 Q349 380 346 380 L318 380 Q315 380 315 375 Z" 
        fill="url(#cupGradient)" 
        stroke="#4E342E" 
        strokeWidth="2"
      />
      
      {/* Cup sleeve/band */}
      <rect x="316" y="362" width="32" height="10" rx="1" fill="#8D6E63" opacity="0.6"/>
      <path d="M318 365 L346 365 M318 369 L346 369" stroke="#6D4C41" strokeWidth="0.5" opacity="0.5"/>
      
      {/* Coffee liquid surface - ellipse for 3D effect */}
      <ellipse cx="332" cy="353" rx="14" ry="4" fill="url(#coffeeGradient)"/>
      {/* Coffee surface shine */}
      <ellipse cx="332" cy="353" rx="8" ry="2" fill="#5D4037" opacity="0.4"/>
      
      {/* Cup rim highlight */}
      <ellipse cx="332" cy="350" rx="15" ry="3" fill="none" stroke="#8D6E63" strokeWidth="1.5"/>
      
      {/* Handle - 3D curved */}
      <path 
        d="M349 358 Q357 358 359 363 Q361 368 359 373 Q357 378 349 378" 
        fill="none" 
        stroke="url(#cupGradient)" 
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Handle inner curve */}
      <path 
        d="M349 360 Q355 360 356 365 Q357 370 355 375 Q353 376 349 376" 
        fill="none" 
        stroke="#4E342E" 
        strokeWidth="1.5"
      />
      {/* Handle highlight */}
      <path 
        d="M349 359 Q354 359 355 363" 
        stroke="#8D6E63" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Steam - more realistic wavy lines */}
      <motion.g
        animate={{ y: [-4, 4, -4], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path 
          d="M325 345 Q327 340 329 338 Q331 336 333 338 Q335 340 337 345" 
          stroke="#e0e0e0" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none"
          opacity="0.5"
        />
      </motion.g>
      <motion.g
        animate={{ y: [-3, 5, -3], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <path 
          d="M330 343 Q332 337 334 335 Q336 333 338 335 Q340 337 342 343" 
          stroke="#e0e0e0" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none"
          opacity="0.6"
        />
      </motion.g>
      <motion.g
        animate={{ y: [-2, 6, -2], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <path 
          d="M335 345 Q337 339 339 337 Q341 335 343 337 Q345 339 347 345" 
          stroke="#e0e0e0" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none"
          opacity="0.5"
        />
      </motion.g>
    </motion.g>
    
    {/* Floating code symbols - enhanced */}
    <motion.text
      x="50"
      y="200"
      fill="#76D362"
      fontSize="28"
      fontFamily="monospace"
      fontWeight="bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.5, 1, 0.5], y: [0, -12, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
    >
      {"</>"}
    </motion.text>
    
    <motion.text
      x="310"
      y="170"
      fill="#3178C6"
      fontSize="24"
      fontFamily="monospace"
      fontWeight="bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.5, 1, 0.5], y: [0, -10, 0], rotate: [5, -5, 5] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
    >
      {"{ }"}
    </motion.text>
    
    <motion.text
      x="75"
      y="110"
      fill="#F7DF1E"
      fontSize="22"
      fontFamily="monospace"
      fontWeight="bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.9, 0.4], rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity, delay: 2.2 }}
    >
      JS
    </motion.text>
    
    <motion.text
      x="290"
      y="90"
      fill="#E34F26"
      fontSize="20"
      fontFamily="monospace"
      fontWeight="bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -8, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: 2.4 }}
    >
      {"( )"}
    </motion.text>
    
    {/* Additional floating elements */}
    <motion.text
      x="340"
      y="250"
      fill="#61DAFB"
      fontSize="26"
      fontFamily="monospace"
      fontWeight="bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.8, 0.3], x: [0, -5, 0], rotate: [-10, 10, -10] }}
      transition={{ duration: 3.8, repeat: Infinity, delay: 2.6 }}
    >
      {"=>"}
    </motion.text>
    
    <motion.circle
      cx="60"
      cy="150"
      r="4"
      fill="#9D4EDD"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, delay: 2.8 }}
    />
    
    <motion.circle
      cx="350"
      cy="130"
      r="5"
      fill="#FF006E"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
      transition={{ duration: 3.2, repeat: Infinity, delay: 3 }}
    />
    
    {/* Lightbulb idea - enhanced */}
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <motion.circle
        cx="75"
        cy="235"
        r="18"
        fill="#FFD700"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="75"
        cy="235"
        r="22"
        fill="#FFD700"
        opacity="0.3"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <path d="M75 253 L75 265" stroke="#2a2a2a" strokeWidth="4" strokeLinecap="round"/>
      <path d="M70 260 L80 260" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round"/>
      <path d="M72 265 L78 265" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round"/>
      {/* Light rays */}
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "75px 235px" }}
      >
        <path d="M75 215 L75 210" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M95 235 L100 235" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M55 235 L50 235" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M88 222 L92 218" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M62 248 L58 252" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
      </motion.g>
    </motion.g>
    
    {/* Gradients */}
    <defs>
      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f5e6d3" />
        <stop offset="100%" stopColor="#e8d5c4" />
      </linearGradient>
      <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef0e0" />
        <stop offset="100%" stopColor="#f5e6d3" />
      </linearGradient>
      <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#76D362" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#76D362" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#76D362]/10 backdrop-blur-sm rounded-full border border-[#76D362]/20">
                <Sparkles size={16} className="text-[#76D362]" />
                <span className="text-[#76D362] text-sm font-medium">Available for work</span>
                <span className="w-2 h-2 bg-[#76D362] rounded-full animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-6">
                <span className="block">Hi, I&apos;m a</span>
                <span className="block mt-2">
                  <span className="text-[#76D362]">Full Stack</span>
                </span>
                <span className="block mt-2">Developer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-xl mt-6 leading-relaxed"
            >
              Computer Science Engineer passionate about crafting beautiful, 
              performant web experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a 
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 bg-[#76D362] text-black rounded-full font-semibold text-lg hover:bg-[#5fb84a] transition-all duration-300 hover:scale-105"
              >
                <Code2 size={20} />
                View My Work
              </a>
              <a 
                href="#contact"
                className="flex items-center gap-3 px-8 py-4 bg-black/5 text-black backdrop-blur-sm rounded-full font-semibold text-lg border border-black/20 hover:bg-black/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-8 mt-12"
            >
              <div className="flex -space-x-3">
                {[SiReact, SiNextdotjs, SiTypescript, SiNodedotjs].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-[#76D362] shadow-md">
                    <Icon size={18} className="text-black" />
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-bold text-black">5+ years</span> of building digital products
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="hidden lg:block"
          >
            <div className="w-full max-w-md mx-auto">
              <CodingDoodle />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="text-[#76D362]" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}