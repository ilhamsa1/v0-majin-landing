"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Smartphone, Bitcoin, Code, Layers, Palette, Menu, X } from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-bgpink">
      {/* Header */}
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-transparent backdrop-blur-sm border-b border-gray-200/20" : "bg-[#371339] text-white"
        }`}
      >
        <div className="container flex h-16 items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image src="/images/majin-logo.png" alt="Majin" width={100} height={40} priority />
            </Link>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link
              href="#services"
              className={`text-sm font-light transition-colors ${
                isScrolled ? "text-black hover:text-[#371339]" : "text-white hover:text-white/70"
              }`}
            >
              Services
            </Link>
            <Link
              href="#work"
              className={`text-sm font-light transition-colors ${
                isScrolled ? "text-black hover:text-[#371339]" : "text-white hover:text-white/70"
              }`}
            >
              Work
            </Link>
            <Link
              href="#about"
              className={`text-sm font-light transition-colors ${
                isScrolled ? "text-black hover:text-[#371339]" : "text-white hover:text-white/70"
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-light transition-colors ${
                isScrolled ? "text-black hover:text-[#371339]" : "text-white hover:text-white/70"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button size="sm" className={`hidden md:flex font-light bg-[#371339] hover:bg-[#371339]/90 text-white`}>
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#371339] pt-16 px-4 text-white">
          <nav className="flex flex-col gap-6 py-8">
            <Link
              href="#services"
              className="text-xl font-light border-b border-white/10 pb-4 transition-colors hover:text-white/70"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-xl font-light border-b border-white/10 pb-4 transition-colors hover:text-white/70"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-xl font-light border-b border-white/10 pb-4 transition-colors hover:text-white/70"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-xl font-light border-b border-white/10 pb-4 transition-colors hover:text-white/70"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="mt-4 bg-[#371339] text-white border border-white hover:bg-white hover:text-[#371339] font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full min-h-screen flex items-center justify-center overflow-hidden geometric-bg"
        >
          {/* Geometric shapes */}
          <div className="shape shape-1 shape-circle animate-float"></div>
          <div className="shape shape-2 shape-diamond animate-float"></div>
          <div className="shape shape-3 shape-square animate-float"></div>
          <div className="shape shape-4 shape-triangle animate-float"></div>
          <div className="shape shape-5 shape-diamond animate-float"></div>
          <div className="shape shape-6 shape-circle animate-float"></div>

          <motion.div style={{ opacity, scale, y }} className="container px-4 md:px-6 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h2 className="text-lg md:text-xl font-light text-[#371339] mb-2">Technology & Design</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#371339]">
                  SOFTWARE STUDIO
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-lg md:text-xl text-gray-600 mb-8 font-light">
                  We craft bespoke digital solutions that blend cutting-edge technology with thoughtful design to solve
                  complex problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#371339] hover:bg-[#371339]/90 font-light text-white">
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#999374] text-[#999374] hover:bg-[#999374]/10 font-light"
                  >
                    Get in Touch
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <Link href="#services">
                <div className="rounded-full border border-gray-300 p-2">
                  <ArrowRight className="h-5 w-5 rotate-90 text-gray-400" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-24 md:py-32 geometric-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-light text-[#371339]">Our Services</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-[#371339]">BESPOKE SOLUTIONS</h2>
                <div className="w-24 h-1 bg-[#371339]/20 mx-auto mt-4"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Web */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-[#e9e2ba] rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-[#371339]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#371339]">Web</h3>
                <p className="text-gray-600 font-light">Specialize in enterprise + startup level POC web solutions</p>
              </motion.div>

              {/* Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-[#e9e2ba] rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-[#371339]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#371339]">Mobile</h3>
                <p className="text-gray-600 font-light">Smooth performance mobile solutions for Android and iOS</p>
              </motion.div>

              {/* Blockchain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-[#e9e2ba] rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bitcoin className="h-8 w-8 text-[#371339]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#371339]">Blockchain</h3>
                <p className="text-gray-600 font-light">Extensive capability in Web3 dapp software development</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-24 md:py-32 bg-gray-50 geometric-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-light text-[#371339]">How We Work</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-[#371339]">OUR PROCESS</h2>
                <div className="w-24 h-1 bg-[#371339]/20 mx-auto mt-4"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {/* Discovery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#371339] text-white flex items-center justify-center font-light">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#371339]">Discovery</h3>
                  <p className="text-gray-600 text-sm font-light">
                    We begin by understanding your business goals, target audience, and project requirements.
                  </p>
                </div>
              </motion.div>

              {/* Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#371339] text-white flex items-center justify-center font-light">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#371339]">Strategy</h3>
                  <p className="text-gray-600 text-sm font-light">
                    We develop a comprehensive plan that outlines the technical approach and design direction.
                  </p>
                </div>
              </motion.div>

              {/* Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#371339] text-white flex items-center justify-center font-light">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#371339]">Development</h3>
                  <p className="text-gray-600 text-sm font-light">
                    Our team builds your solution with clean code, regular updates, and iterative feedback.
                  </p>
                </div>
              </motion.div>

              {/* Launch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#371339] text-white flex items-center justify-center font-light">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#371339]">Launch & Support</h3>
                  <p className="text-gray-600 text-sm font-light">
                    We deploy your solution and provide ongoing maintenance and support to ensure long-term success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="w-full py-24 md:py-32 geometric-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-light text-[#371339]">Our Portfolio</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-[#371339]">SELECTED WORK</h2>
                <div className="w-24 h-1 bg-[#371339]/20 mx-auto mt-4"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Project 1"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-[#371339]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Enterprise Dashboard</h3>
                  <p className="text-white/80 text-sm mt-2 font-light">Web Application</p>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Project 2"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-[#371339]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Mobile Banking App</h3>
                  <p className="text-white/80 text-sm mt-2 font-light">iOS & Android</p>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Project 3"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-[#371339]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">NFT Marketplace</h3>
                  <p className="text-white/80 text-sm mt-2 font-light">Blockchain</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="border-[#999374] text-[#999374] hover:bg-[#999374]/10 font-light">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-24 md:py-32 bg-gray-50 geometric-bg">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="About Majin"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e9e2ba] rounded-lg"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-light text-[#371339]">About Us</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-6 text-[#371339]">WHO WE ARE</h2>

                <p className="text-gray-600 mb-4 font-light">
                  Majin is a boutique software studio specializing in creating bespoke digital solutions that blend
                  cutting-edge technology with thoughtful design.
                </p>

                <p className="text-gray-600 mb-6 font-light">
                  Founded by a team of passionate technologists and designers, we work with startups and enterprises to
                  build products that solve complex problems and deliver exceptional user experiences.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-[#371339]" />
                    <span className="font-light">Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#371339]" />
                    <span className="font-light">Scalable Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-[#371339]" />
                    <span className="font-light">Thoughtful Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-[#371339]" />
                    <span className="font-light">Agile Development</span>
                  </div>
                </div>

                <Button className="bg-[#371339] hover:bg-[#371339]/90 font-light text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-24 md:py-32 geometric-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-light text-[#371339]">Get In Touch</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 text-[#371339]">START A PROJECT</h2>
                <div className="w-24 h-1 bg-[#371339]/20 mx-auto mt-4"></div>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-light">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#371339]"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-light">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#371339]"
                    placeholder="Your email"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="subject" className="text-sm font-light">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#371339]"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#371339]"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#371339] hover:bg-[#371339]/90 w-full md:w-auto font-light text-white"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#371339] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/majin-logo.png" alt="Majin" width={80} height={32} />
              </div>
              <p className="text-sm text-white/80 font-light">
                A technology & design software studio crafting bespoke digital solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-light">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-light">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-light">
                    Blockchain Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-light">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-white/80 hover:text-white font-light">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="text-white/80 hover:text-white font-light">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white font-light">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/80 hover:text-white font-light">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
              <div className="pt-2">
                <p className="text-sm text-white/80 font-light">Email us at:</p>
                <a href="mailto:hello@majin.land" className="text-sm font-light text-white hover:text-white/80">
                  hello@majin.land
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-xs text-center text-white/70 font-light">
              © {new Date().getFullYear()} Majin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
