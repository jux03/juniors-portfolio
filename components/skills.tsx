import { Card, CardContent } from "@/components/ui/card"
import { Code, Network, Smartphone, Cpu, Zap, Star } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JAVA", "PYTHON", "C++"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
    },
    {
      title: "Networking & Systems",
      icon: <Network className="w-6 h-6" />,
      skills: ["Network Configuration", "Fiber Installation", "Router Setup", "System Maintenance"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
    },
    {
      title: "Mobile & Web Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Mobile Applications", "Web Development", "UI/UX Optimization", "Booking Systems"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
    },
    {
      title: "Emerging Technologies",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["IoT", "Blockchain", "Edge Computing", "Artificial Intelligence"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Combining technical proficiency with operational excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {category.title}
                  </h3>

                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-slate-300 text-sm flex items-center gap-2 group-hover:text-slate-200 transition-colors"
                      >
                        <Zap className="w-3 h-3 text-yellow-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
