import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Eye, Facebook, Lock, Mail } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      
      {/* Background Blobs for Vibrant Gradient Effect */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-[20%] right-[30%] h-[300px] w-[300px] rounded-full bg-teal-500/20 blur-[100px] animate-pulse delay-700" />

      {/* Glassmorphism Card */}
      <div className="z-10 w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h2>
          <p className="text-sm text-slate-400">Please enter your details to sign in.</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div className="space-y-4">
            
            {/* Email Field with Icon */}
            <div className="relative group">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-indigo-400" />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="pl-10 h-11 bg-black/20 border-white/10 text-white placeholder:text-slate-500 hover:border-white/20 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500 transition-all duration-300"
              />
            </div>

            {/* Password Field with Icons */}
            <div className="relative group">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-indigo-400" />
              <Input 
                type="password" 
                placeholder="Password" 
                className="pl-10 pr-10 h-11 bg-black/20 border-white/10 text-white placeholder:text-slate-500 hover:border-white/20 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500 transition-all duration-300"
              />
              <button type="button" className="absolute right-3 top-2.5 text-slate-400 hover:text-white transition-colors">
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link 
              href="#" 
              className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button 
            className="w-full h-11 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/20 border-none transition-all duration-300 transform hover:scale-[1.02]"
          >
            Login
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
             {/* Google Icon (Custom SVG for color accuracy or use generic) */}
            <Button variant="outline" size="icon" type="button" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-colors h-12 w-12">
               <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
            </Button>
            <Button variant="outline" size="icon" type="button" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-colors h-12 w-12">
              <Apple className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" type="button" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-colors h-12 w-12">
              <Facebook className="h-5 w-5 text-blue-500" />
            </Button>
          </div>
        </form>
        
        {/* Footer */}
        <p className="text-center text-xs text-slate-500">
          Don't have an account?{" "}
          <Link href="#" className="font-medium text-indigo-400 hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  )
}
