import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-medium">Welcome to my portfolio</span>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                MUGABO GISAGARA
                <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  JUNIOR
                </span>
              </h1>

              <div className="space-y-2 mb-8">
                <p className="text-xl md:text-2xl text-blue-200 font-semibold">
                  Information Technology Computing Specialist
                </p>
                <p className="text-lg text-purple-200 font-medium">Operations Manager | Web & Booking Systems Expert</p>
              </div>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Aspiring technologist passionate about mobile app development, networking, and emerging technologies.
                Currently managing operations and digital systems at Kivu Expeditions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                +250782063101
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
                <span>@junygisa</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
                <span>Junior Karim</span>
              </div>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated rings around photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-20 scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-spin-slow opacity-20 scale-125 animation-delay-1000"></div>

              {/* Photo container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                {/* Use actual photo */}
                <img
                  src="/jux.jpg" // Make sure the image is placed in public folder
                  alt="Jux"
                  className="object-cover w-full h-full"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Available for Work
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                Operations Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
