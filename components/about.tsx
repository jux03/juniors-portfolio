import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Heart, Zap, Target } from "lucide-react"

export function About() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main story card */}
          <Card className="lg:col-span-2 bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-semibold text-white">My Passion & Journey</h3>
              </div>

              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p className="text-lg">
                  As an aspiring technologist, I thrive on creating innovative experiences. My passion lies in mobile
                  app development and programming where I enjoy enhancing user interfaces and optimizing performance.
                </p>
                <p>
                  Additionally, I'm fascinated by networking principles, from local area networks (LANs) to cloud-based
                  architectures. I eagerly explore emerging technologies like blockchain, edge computing, and artificial
                  intelligence.
                </p>
                <p>
                  Currently serving as Operations Manager at Kivu Expeditions, I oversee web systems, booking
                  management, and technical maintenance, combining my technical expertise with operational excellence.
                </p>
                <div className="flex items-center gap-2 mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200 font-medium">
                    "In this dynamic landscape, I'm committed to continuous learning and collaboration. Let's build the
                    future together!"
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Languages card */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Quick Facts</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-slate-300 mb-4">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Based in Rwanda</span>
                  </div>
                  <p className="text-sm text-slate-400 pl-7">04, Av. Ikaze, Mbugangari, Gisenyi, Rwanda</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Languages
                  </h4>
                  <div className="space-y-3">
                    {["English", "French", "Swahili", "Kinyarwanda"].map((lang, index) => (
                      <div key={lang} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                        <span className="text-slate-300">{lang}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                          </div>
                          <span className="text-xs text-green-400 font-medium">Fluent</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
