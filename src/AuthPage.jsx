import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden font-['Poppins'] text-white">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[10%] w-64 h-64 rounded-full bg-gradient-to-b from-gray-200 to-gray-600 opacity-80 blur-sm z-0"></div>
      <div className="absolute bottom-[5%] right-[15%] w-48 h-48 rounded-full bg-gradient-to-b from-gray-400 to-gray-700 opacity-60 blur-sm z-0"></div>
      <div className="absolute top-[40%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-b from-gray-500 to-gray-800 opacity-40 blur-md z-0"></div>

      {/* Mesh Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)` }}>
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-lg shadow-2xl">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 mb-2">
             <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <path d="M50 10 C 20 40, 10 50, 20 70 C 30 90, 60 90, 70 70 C 80 50, 60 40, 50 10" fill="#0033cc" className="opacity-80" />
                <path d="M45 20 C 15 50, 5 60, 15 80 C 25 100, 55 100, 65 80 C 75 60, 55 50, 45 20" fill="#0055ff" />
                <path d="M55 25 C 85 55, 95 65, 85 85 C 75 105, 45 105, 35 85 C 25 65, 45 55, 55 25" fill="#3388ff" className="opacity-70"/>
             </svg>
          </div>
          <h1 className="text-4xl font-['Great_Vibes'] tracking-wide">Hydro Finance</h1>
        </div>

        <h2 className="text-center text-lg font-bold tracking-wider mb-6 uppercase">
          {isLogin ? 'USER LOGIN' : 'USER SIGN UP'}
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-sm font-medium ml-1">Email</label>
            <input type="email" className="w-full h-12 px-4 rounded-xl bg-gray-500/40 border-none outline-none text-white placeholder-gray-300 focus:ring-1 focus:ring-white/50 transition-all" />
          </div>

          <div className="space-y-1 relative">
            <label className="text-sm font-medium ml-1">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password" } className="w-full h-12 px-4 rounded-xl bg-gray-500/40 border-none outline-none text-white placeholder-gray-300 focus:ring-1 focus:ring-white/50 transition-all" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-black/60 hover:text-black">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-start text-xs text-gray-300 hover:text-white cursor-pointer"><p>Forget Password</p></div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-400/50"></div>
            <span className="flex-shrink mx-2 text-xs text-gray-300">Or Continue With</span>
            <div className="flex-grow border-t border-gray-400/50"></div>
          </div>

          <button className="w-full h-12 rounded-xl bg-white/80 hover:bg-white text-black font-bold tracking-wide transition-all shadow-lg active:scale-95">
            {isLogin ? 'LOGIN' : 'SIGN UP'}
          </button>

          <button className="w-full h-12 rounded-xl bg-white/80 hover:bg-white text-black font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95">
             <span className="font-bold text-lg text-blue-600">G</span> 
             {isLogin ? 'Login With Google' : 'Sign up With Google'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-300">{isLogin ? "Don't have account? " : "Already have an account? "}</span>
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-400 font-semibold hover:text-blue-300 underline">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}