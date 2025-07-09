import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "gkjunior01@gmail.com",
      href: "mailto:gkjunior01@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+250782063101",
      href: "tel:+250782063101",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "04, Av. Ikaze, Mbugangari, Gisenyi, Rwanda",
      href: null,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@junygisa",
      href: "https://github.com/jux03",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Junior Karim",
      href: "https://www.linkedin.com/in/junior-gisa-2a0a39306/",
      color: "from-blue-600 to-blue-800",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-400" />
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400 mb-1">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-white hover:text-blue-300 transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Links & CTA */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <Github className="w-6 h-6 text-purple-400" />
                Connect With Me
              </h3>

              <div className="space-y-6 mb-8">
                {socialLinks.map((social, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400 mb-1">{social.label}</p>
                        <a
                          href={social.href}
                          className="text-white hover:text-purple-300 transition-colors font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Availability status */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Available for new opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <p className="text-slate-300 text-lg mb-2">© 2024 Mugabo Gisagara Junior</p>
            <p className="text-blue-300 font-medium">"Ready to build the future together!"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
