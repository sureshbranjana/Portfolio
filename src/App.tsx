
import { ArrowRight, CheckCircle, Code, Database, Github, Linkedin, Mail, Server, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full"></div>
          Branjana
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#specialities" className="hover:text-purple-600 transition-colors">Specialities</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
        </div>
        <a
          href="mailto:sasuduln@gmail.com"
          className="hidden md:block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Contact Me
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500">👋</span>
              <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">Hello, World!</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2">
              I'm Suresh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Branjana
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-4">
              Software Engineer & Full-Stack Developer
            </h2>
            <p className="text-gray-500 max-w-md mb-4 leading-relaxed">
              Undergraduate software engineer at NIBM, Sri Lanka, focused on building real-world applications from backend APIs and databases to clean, responsive user interfaces.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                Backend-first mindset
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700">
                Full-stack Java / JavaScript
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                Always learning something new
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:sasuduln@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-orange-400 text-white rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1"
              >
                Say Hello
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:border-gray-900 transition-colors"
              >
                My Works
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-orange-300 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
            
            {/* Main Image */}
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-[100px] overflow-hidden border-8 border-white shadow-2xl bg-white">
              <img 
                src="/branjana-nobg.png" 
                alt="Suresh Branjana" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">Open to opportunities</p>
                <p className="text-[11px] text-gray-500">Internships &amp; real-world projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-y border-gray-200 bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Technologies
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-xl"><span className="text-yellow-500">JS</span> JavaScript</div>
              <div className="flex items-center gap-2 font-bold text-xl"><span className="text-red-500">☕</span> Java</div>
              <div className="flex items-center gap-2 font-bold text-xl"><span className="text-green-500">⬢</span> Node.js</div>
              <div className="flex items-center gap-2 font-bold text-xl"><span className="text-green-600">🍃</span> Spring Boot</div>
              <div className="flex items-center gap-2 font-bold text-xl"><span className="text-blue-500">🐬</span> MySQL</div>
              <div className="flex items-center gap-2 font-bold text-xl"><span className="text-green-500">🍃</span> MongoDB</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 flex items-center justify-center text-white shadow-2xl shadow-purple-500/20">
              <div className="text-center">
                <span className="block text-6xl font-black mb-2">15+</span>
                <span className="block text-sm font-medium uppercase tracking-widest opacity-80">Projects<br/>Completed</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Turning complex ideas into <span className="text-purple-600">clean, reliable software.</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              As an undergraduate software engineer at NIBM, I focus on building end-to-end solutions using JavaScript, Java, Node.js, Spring Boot, and modern web tooling, backed by solid data layers with MySQL and MongoDB. I enjoy taking a problem from concept to deployment and designing APIs, services, and interfaces that feel fast, intuitive, and dependable.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              I treat every project as a chance to learn, experiment, and raise the quality bar. Whether it is optimizing a backend, refining a user flow, or structuring a codebase for long-term growth, I care about clarity, scalability, and real-world impact not just getting something to work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">6+</h4>
                <p className="text-sm text-gray-500 font-medium">Core Technologies</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">100%</h4>
                <p className="text-sm text-gray-500 font-medium">Problem-Solving Focus</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">NIBM</h4>
                <p className="text-sm text-gray-500 font-medium">Undergraduate</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase mb-1">Currently</p>
                <p className="text-sm text-gray-700">
                  Deepening my backend architecture, API design, and database skills through hands-on projects.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase mb-1">Building</p>
                <p className="text-sm text-gray-700">
                  A portfolio of real-world applications that showcase clean code, testing, and scalable structure.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-600 tracking-widest uppercase mb-1">Exploring</p>
                <p className="text-sm text-gray-700">
                  Modern development practices such as system design, performance tuning, and DevOps basics.
                </p>
              </div>
            </div>

            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2">
              Download My Resume <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Experience &amp; <span className="text-purple-600">education.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                A quick snapshot of how I&apos;m growing as an engineer combining formal learning, self-study, and
                practical projects.
              </p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <div className="relative pl-8 border-l border-gray-200">
                <span className="absolute -left-2 top-1 w-3 h-3 bg-purple-500 rounded-full"></span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Undergraduate &mdash; NIBM, Sri Lanka
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Software engineering · Current
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Studying core software engineering concepts while applying them in projects that mirror real-world
                  workflows, from backend services to user-facing applications.
                </p>
              </div>

              <div className="relative pl-8 border-l border-gray-200">
                <span className="absolute -left-2 top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Full-stack &amp; backend projects
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Java · Spring Boot · Node.js · React
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Designing APIs, modeling databases, and building responsive frontends that work together smoothly,
                  with attention to performance, security, and maintainability.
                </p>
              </div>

              <div className="relative pl-8 border-l border-gray-200">
                <span className="absolute -left-2 top-1 w-3 h-3 bg-gray-700 rounded-full"></span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Self-learning &amp; practice
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Tutorials · Docs · Side projects
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Continuously exploring new tools, patterns, and best practices and turning that knowledge into small
                  experiments, utilities, and improvements to existing projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section id="specialities" className="py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">My specialities</h2>
            <a href="mailto:sasuduln@gmail.com" className="hidden md:flex items-center gap-2 hover:text-orange-200 transition-colors">
              <Mail size={20} /> sureshbranjana6@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Dev</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Responsive Web Apps</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Modern JS Frameworks</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Seamless Integration</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> UI/UX Implementation</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend Systems</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> RESTful APIs</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Java & Spring Boot</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Node.js Architecture</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> System Design</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile App Dev</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Cross-platform Apps</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Mobile-first Design</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Performance Tuning</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> API Integration</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Database Management</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> MySQL Relational DBs</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> MongoDB NoSQL</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Data Modeling</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> Query Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Featured projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform API</h3>
                <p className="text-gray-600 mb-4">A robust backend system built with Spring Boot and MySQL, featuring secure authentication, product management, and order processing.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">MySQL</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management Dashboard</h3>
                <p className="text-gray-600 mb-4">A responsive full-stack application using React and Node.js with MongoDB for real-time task tracking and team collaboration.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Got a project?<br/>let's talk</h2>
              <p className="text-gray-400 mb-8 max-w-md">
                My goal is to grow into a skilled software engineer who builds impactful, scalable, and innovative solutions that improve everyday digital experiences.
              </p>
              <a href="mailto:sasuduln@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-colors">
                <Mail size={20} /> Email Me
              </a>
            </div>
            
            <div className="md:w-1/3 w-full">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Connect with me</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-3 hover:bg-gray-700 rounded-xl">
                    <Linkedin size={24} className="text-blue-400" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors p-3 hover:bg-gray-700 rounded-xl">
                    <Github size={24} />
                    <span className="font-medium">GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Suresh Branjana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

