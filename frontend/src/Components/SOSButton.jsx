import { AlertCircle } from 'lucide-react'
import { useState } from 'react'

const SOSButton = () => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <button
      className={`
        relative group
        w-36 h-36
        rounded-full
        bg-red-400
        text-white
        font-mono font-bold text-2xl
        transition-all duration-300
        hover:bg-red-500
        active:scale-95
        flex flex-col items-center justify-center gap-3
        shadow-[0_0_15px_rgba(239,68,68,0.5)]
        hover:shadow-[0_0_25px_rgba(239,68,68,0.7)]
        ${isPressed ? 'animate-pulse' : ''}
      `}
      onClick={() => setIsPressed(true)}
      onAnimationEnd={() => setIsPressed(false)}
    >
      <div className="absolute inset-0 rounded-full border-4 border-red-300 border-double opacity-70" />
      <div className="absolute inset-0 rounded-full animate-ping border-2 border-red-300 opacity-20" />
      
      <AlertCircle 
        className="w-8 h-8 animate-bounce" 
        strokeWidth={2.5}
      />
      
      <span className="relative">
        SOS
        <span className="absolute -inset-1 rounded-lg bg-red-500/20 blur-sm animate-pulse" />
      </span>
    </button>
  )
}

export default SOSButton