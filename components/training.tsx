import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Zap, Star } from "lucide-react"

export function Training() {
  const trainings = [
    {
      name: "SCAD (KEPLER)",
      institution: "IPRC TUMBA",
      year: "2023",
      type: "Professional Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "HUAWEI Certification",
      institution: "IPRC TUMBA",
      year: "2023",
      type: "Technical Certification",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "CISCO Online",
      institution: "IPRC TUMBA",
      year: "2021",
      type: "Networking",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Fundamentals of Health and Safety",
      institution: "ALISON",
      year: "2024",
      type: "Safety Certification",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Training
            </h2>
          </div>
          <p className="text-slate-300 text-lg">Continuous learning and professional development</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trainings.map((training, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 group"
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${training.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${training.color} rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Award className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {training.name}
                      </h3>
                      <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors">
                        {training.institution}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{training.year}</span>
                        </div>
                        <Badge className={`bg-gradient-to-r ${training.color} text-white border-0 shadow-lg`}>
                          {training.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effects */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-3 h-3 text-blue-400 animate-bounce" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
