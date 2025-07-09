import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Briefcase, Star, TrendingUp } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full stack Developer & Operations Manager",
      company: "HB lab",
      year: "2023 - Present",
      type: "Part-time Position",
      status: "Current",
      responsibilities: [
        "Daily operations and team coordination",
        "App development & DAtabase management",
        "Technical support",
        "Customer service",
      ],
      isCurrentRole: true,
    },
    {
      title: "Operations Manager",
      company: "KIVU EXPEDITION Ltd",
      year: "2021 - Present",
      type: "Full-time Position",
      status: "Current",
      responsibilities: [
        "Managing daily operations and team coordination",
        "Web development and booking system management",
        "IT equipment maintenance and technical support",
        "Digital transformation and system optimization",
        "Customer service and booking management",
      ],
      isCurrentRole: true,
    },
    {
      title: "Intern",
      company: "SOTRACOM RWANDA (MTN PARTNER)",
      year: "2022 - 2023",
      type: "Internship",
      status: "Completed",
      responsibilities: [
        "Supporting team in fiber installation and router configuration",
        "Data management & cloud storage system implementation",
        "Network troubleshooting and maintenance",
      ],
      isCurrentRole: false,
    },
    {
      title: "Intern",
      company: "Kivu Eco Tours",
      year: "2021 - 2022",
      type: "Internship",
      status: "Completed",
      responsibilities: [
        "Supporting team",
        "Web development and booking system management",
        "Network troubleshooting and maintenance",
      ],
      isCurrentRole: false,
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
          </div>
          <p className="text-slate-300 text-lg">
            Building expertise through hands-on experience and leadership
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ${
                exp.isCurrentRole ? "ring-2 ring-green-400/50" : ""
              }`}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {exp.isCurrentRole && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5"></div>
                )}

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                        {exp.isCurrentRole && (
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                              Current Role
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-slate-300 mb-3">
                        <Building className="w-5 h-5 text-blue-400" />
                        <span className="text-lg font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-3">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.year}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={`${
                          exp.isCurrentRole
                            ? "bg-green-500/20 text-green-300 border-green-400/30"
                            : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                        }`}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      Key Responsibilities & Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-slate-300 flex items-start gap-3 hover:text-slate-200 transition-colors"
                        >
                          <span className="text-blue-400 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
