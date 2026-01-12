import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden font-sans text-white">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      
      {/* 1. Static Gradient Orbs */}
      <div className="absolute top-[-10%] left-[10%] w-80 h-80 rounded-full bg-gradient-to-b from-gray-200 to-gray-500 opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-[5%] right-[5%] w-64 h-64 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 opacity-20 blur-3xl z-0"></div>

      {/* 2. The "Wireframe Wave" SVG */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 450 C 200 100, 400 100, 600 450 S 1000 800, 1500 450" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
          <path d="M-100 500 C 200 150, 400 150, 600 500 S 1000 850, 1500 500" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
          <path d="M-100 550 C 200 200, 400 200, 600 550 S 1000 900, 1500 550" stroke="white" strokeWidth="1" fill="none" opacity="0.1" />
        </svg>
      </div>

      {/* 3. Animated Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/40 animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* --- GLASS CARD (THE MAIN FORM) --- */}
      <div className="relative z-10 w-full max-w-sm p-8 rounded-[30px] border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
        
        {/* LOGO SECTION (Fixed: Side-by-Side) */}
        <div className="flex flex-row items-center justify-center gap-3 mb-8">
          <img 
            src="/Hydro Bank Logo.png" 
            alt="Hydro Finance Logo" 
            className="w-14 h-auto drop-shadow-2xl" 
          />
          <h1 className="text-3xl font-display tracking-wide text-white drop-shadow-md">
            Hydro Finance
          </h1>
        </div>

        {/* User Login Title */}
        <h2 className="text-center text-sm font-bold tracking-widest mb-8 uppercase text-gray-100">
          {isLogin ? 'USER LOGIN' : 'USER SIGN UP'}
        </h2>

        {/* FORM INPUTS */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1 text-gray-100">Email</label>
            <input 
              type="email" 
              className="w-full h-12 px-4 rounded-xl bg-gray-500/30 border border-white/10 outline-none text-white placeholder-gray-400 focus:bg-gray-500/50 transition-all"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1 text-gray-100">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                className="w-full h-12 px-4 rounded-xl bg-gray-500/30 border border-white/10 outline-none text-white placeholder-gray-400 focus:bg-gray-500/50 transition-all"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-300 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {/* Forget Password */}
            <div className="flex justify-start pt-1 pl-1">
               <button className="text-[11px] text-gray-300 hover:text-white font-light tracking-wide">
                 Forget Password
               </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-400/40"></div>
            <span className="flex-shrink mx-2 text-[10px] text-gray-300 uppercase tracking-wider">-Or Continue With-</span>
            <div className="flex-grow border-t border-gray-400/40"></div>
          </div>

          {/* Main Action Button (Grey) */}
          <button className="w-full h-12 rounded-xl bg-gray-400/80 hover:bg-gray-300 text-black font-bold tracking-widest shadow-lg transition-transform active:scale-95">
            {isLogin ? 'LOGIN' : 'SIGN UP'}
          </button>

          {/* Google Button (Grey) */}
          <button className="w-full h-12 rounded-xl bg-gray-400/80 hover:bg-gray-300 text-black font-bold tracking-wide shadow-lg transition-transform flex items-center justify-center gap-3 active:scale-95">
             <span className="font-bold text-xl text-blue-600">G</span> 
             {isLogin ? 'Login With Google' : 'Sign up With Google'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-xs">
          <span className="text-gray-300">
            {isLogin ? "Don't have account? " : "Already have an account? "}
          </span>
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-blue-400 font-bold hover:text-blue-300 ml-1"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.4; }
          100% { transform: translateY(-60px) translateX(-15px); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}