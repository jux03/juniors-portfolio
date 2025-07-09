import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Graduate Diploma in Information Technology",
      option: "Information Computing Technology",
      institution: "Integrated Polytechnic Regional College (IPRC) TUMBA",
      location: "Rwanda",
      year: "2025",
      isHighest: true,
    },
    {
      degree: "Baccalaureate",
      institution: "College BAPTISTE",
      location: "Gisenyi, Rwanda",
      year: "2019",
      isHighest: false,
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Academic Foundation
            </h2>
          </div>
          <p className="text-slate-300 text-lg">Building knowledge through quality education</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ${
                edu.isHighest ? "ring-2 ring-purple-400/50" : ""
              }`}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {edu.isHighest && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
                )}

                <div className="flex items-start gap-6 relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      edu.isHighest ? "from-purple-500 to-blue-500" : "from-blue-500 to-cyan-500"
                    } rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                  >
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{edu.degree}</h3>
                      {edu.isHighest && <Award className="w-5 h-5 text-yellow-400" />}
                    </div>

                    {edu.option && (
                      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-3 mb-4 border border-purple-400/30">
                        <p className="text-purple-300 font-medium">Specialization: {edu.option}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="font-medium">{edu.institution}</p>
                          <p className="text-sm text-slate-400">{edu.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="font-medium">Graduated {edu.year}</p>
                          <p className="text-sm text-slate-400">Academic Achievement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
