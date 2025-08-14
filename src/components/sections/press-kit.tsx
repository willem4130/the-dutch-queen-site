"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Download, 
  FileText, 
  Image as ImageIcon, 
  Music, 
  Video, 
  Crown, 
  Calendar,
  Users,
  Award,
  Camera,
  Mic,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  CheckCircle,
  Newspaper
} from "lucide-react";

interface PressResource {
  id: string;
  title: string;
  type: "photo" | "document" | "video" | "audio" | "logo" | "rider";
  category: "press" | "marketing" | "technical" | "media";
  size: string;
  format: string;
  downloadUrl: string;
  previewUrl?: string;
  description: string;
  resolution?: string;
  updated: string;
  isNew?: boolean;
}

interface TechnicalSpec {
  category: string;
  items: {
    label: string;
    value: string;
    icon?: any;
  }[];
}

export function PressKitSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedSpecs, setExpandedSpecs] = useState<string | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pressResources: PressResource[] = [
    {
      id: "1",
      title: "Official Band Biography",
      type: "document",
      category: "press",
      size: "2.1 MB",
      format: "PDF",
      downloadUrl: "/press/dutch-queen-biography.pdf",
      description: "Comprehensive band biography including member backgrounds, formation story, and musical philosophy.",
      updated: "November 2024",
      isNew: true
    },
    {
      id: "2",
      title: "High-Resolution Stage Photos",
      type: "photo",
      category: "media",
      size: "45.2 MB",
      format: "ZIP (JPG)",
      downloadUrl: "/press/stage-photos-hires.zip",
      previewUrl: "/stage-photos.jpg",
      description: "Professional concert photography from recent performances, suitable for print and digital media.",
      resolution: "300 DPI, up to 6000x4000px",
      updated: "October 2024"
    },
    {
      id: "3",
      title: "Logo Package & Brand Assets",
      type: "logo",
      category: "marketing",
      size: "12.8 MB",
      format: "ZIP (SVG, PNG, EPS)",
      downloadUrl: "/press/logo-package.zip",
      previewUrl: "/logos.jpg",
      description: "Complete logo package with various formats and color variations for different applications.",
      updated: "September 2024"
    },
    {
      id: "4",
      title: "Technical Rider",
      type: "rider",
      category: "technical",
      size: "1.5 MB",
      format: "PDF",
      downloadUrl: "/press/technical-rider.pdf",
      description: "Complete technical requirements for sound, lighting, and stage setup.",
      updated: "November 2024",
      isNew: true
    },
    {
      id: "5",
      title: "Promotional Video Package",
      type: "video",
      category: "marketing",
      size: "180.5 MB",
      format: "ZIP (MP4)",
      downloadUrl: "/press/promo-videos.zip",
      previewUrl: "/promo-video.jpg",
      description: "Professional promotional videos and performance clips for marketing use.",
      resolution: "1080p HD",
      updated: "October 2024"
    },
    {
      id: "6",
      title: "Press Release Template",
      type: "document",
      category: "press",
      size: "0.8 MB",
      format: "DOCX",
      downloadUrl: "/press/press-release-template.docx",
      description: "Customizable press release template for event announcements.",
      updated: "August 2024"
    },
    {
      id: "7",
      title: "Audio Sample Collection",
      type: "audio",
      category: "media",
      size: "95.3 MB",
      format: "ZIP (MP3)",
      downloadUrl: "/press/audio-samples.zip",
      description: "High-quality audio samples from live performances and studio recordings.",
      updated: "November 2024"
    },
    {
      id: "8",
      title: "Individual Member Photos",
      type: "photo",
      category: "press",
      size: "28.1 MB",
      format: "ZIP (JPG)",
      downloadUrl: "/press/member-photos.zip",
      previewUrl: "/member-photos.jpg",
      description: "Professional headshots and individual member photos for press coverage.",
      resolution: "300 DPI, 3000x2000px",
      updated: "September 2024"
    }
  ];

  const technicalSpecs: TechnicalSpec[] = [
    {
      category: "Performance Requirements",
      items: [
        { label: "Stage Size (Minimum)", value: "6m x 4m", icon: Users },
        { label: "Power Requirements", value: "32A 3-phase", icon: Award },
        { label: "Load-in Time", value: "3 hours", icon: Calendar },
        { label: "Sound Check", value: "45 minutes", icon: Mic }
      ]
    },
    {
      category: "Audio Equipment",
      items: [
        { label: "PA System", value: "Full range, 2000W minimum" },
        { label: "Monitoring", value: "4 individual mixes required" },
        { label: "Microphones", value: "4 vocal, 8 instrument channels" },
        { label: "Piano/Keys", value: "88-key weighted keyboard provided" }
      ]
    },
    {
      category: "Lighting & Effects",
      items: [
        { label: "Basic Lighting", value: "LED wash and spot lights" },
        { label: "Special Effects", value: "Haze machine, uplights" },
        { label: "Backdrop", value: "Black or white backdrop preferred" },
        { label: "Control", value: "Basic DMX lighting board" }
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Resources", icon: Globe },
    { id: "press", name: "Press Materials", icon: Newspaper },
    { id: "marketing", name: "Marketing Assets", icon: Camera },
    { id: "technical", name: "Technical Info", icon: Award },
    { id: "media", name: "Media Files", icon: ImageIcon }
  ];

  const filteredResources = selectedCategory === "all" 
    ? pressResources 
    : pressResources.filter(resource => resource.category === selectedCategory);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "photo": return ImageIcon;
      case "document": return FileText;
      case "video": return Video;
      case "audio": return Music;
      case "logo": return Crown;
      case "rider": return Award;
      default: return FileText;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case "photo": return "from-stage-amber to-crown-gold";
      case "document": return "from-stage-platinum to-rock-steel";
      case "video": return "from-queen-burgundy to-velvet-burgundy";
      case "audio": return "from-royal-bronze to-queen-burgundy";
      case "logo": return "from-crown-gold to-stage-amber";
      case "rider": return "from-royal-bronze to-crown-gold";
      default: return "from-stage-platinum to-royal-bronze";
    }
  };

  const contactInfo = {
    booking: {
      name: "Alexandra van der Berg",
      title: "Booking Manager", 
      email: "booking@thedutchqueen.nl",
      phone: "+31 (0)6 1234 5678"
    },
    press: {
      name: "Marcus de Jong",
      title: "Press & Media Relations",
      email: "press@thedutchqueen.nl", 
      phone: "+31 (0)6 8765 4321"
    },
    technical: {
      name: "David Kramer",
      title: "Technical Coordinator",
      email: "tech@thedutchqueen.nl",
      phone: "+31 (0)6 5555 0123"
    }
  };

  return (
    <section id="press-kit" className="py-24 bg-gradient-to-b from-deep-black to-charcoal-stage relative overflow-hidden">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-36 h-36 border border-crown-gold rounded-full"></div>
        <div className="absolute bottom-24 right-12 w-24 h-24 border-2 border-royal-bronze transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-stage-platinum rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 border border-queen-burgundy transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Document Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-crown-gold to-transparent flex-1 max-w-32"></div>
            <FileText className="w-8 h-8 text-crown-gold mx-4" />
            <div className="h-px bg-gradient-to-r from-crown-gold via-crown-gold to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-display-lg font-display-primary text-gradient-royal mb-6">
            Press Kit & Resources
          </h2>
          <p className="text-content-primary text-text-muted-light max-w-3xl mx-auto">
            Everything you need to promote and book The Dutch Queen. Professional materials, 
            technical specifications, and high-quality media assets for venues, promoters, and press.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Press Resources", value: pressResources.length, icon: FileText },
            { label: "High-Res Photos", value: "50+", icon: ImageIcon },
            { label: "Video Samples", value: "15+", icon: Video },
            { label: "Audio Tracks", value: "25+", icon: Music }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="bg-gradient-to-br from-charcoal-stage to-midnight-velvet rounded-2xl p-6 border border-crown-gold/20 text-center backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-crown-gold mx-auto mb-3" />
              <div className="text-section-title text-pearl-white mb-1">{stat.value}</div>
              <div className="text-content-secondary text-text-muted-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-crown-gold text-deep-black border-crown-gold"
                      : "bg-charcoal-stage/50 text-crown-gold border-crown-gold/30 hover:border-crown-gold/60"
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredResources.map((resource) => {
            const ResourceIcon = getResourceIcon(resource.type);
            
            return (
              <motion.div
                key={resource.id}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-midnight-velvet to-charcoal-stage rounded-3xl overflow-hidden border border-crown-gold/20 hover:border-crown-gold/40 transition-all duration-500 backdrop-blur-sm"
              >
                {/* Preview Image */}
                {resource.previewUrl && (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={resource.previewUrl}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent"></div>
                    
                    {/* Resource Type Badge */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${getResourceColor(resource.type)} rounded-full p-2`}>
                      <ResourceIcon className="w-4 h-4 text-white" />
                    </div>

                    {/* New Badge */}
                    {resource.isNew && (
                      <div className="absolute top-4 left-4 bg-crown-gold text-deep-black px-3 py-1 rounded-full text-xs font-bold">
                        NEW
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-section-subtitle text-pearl-white mb-2 group-hover:text-crown-gold transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-text-muted-light mb-3">
                        <span className="bg-charcoal-stage/60 px-2 py-1 rounded-full uppercase font-semibold">
                          {resource.format}
                        </span>
                        <span>{resource.size}</span>
                        {resource.resolution && (
                          <span className="text-stage-amber">{resource.resolution}</span>
                        )}
                      </div>
                    </div>

                    {!resource.previewUrl && (
                      <div className={`w-12 h-12 bg-gradient-to-r ${getResourceColor(resource.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <ResourceIcon className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-content-secondary text-text-muted-light text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-text-muted-light mb-4">
                    <span>Updated: {resource.updated}</span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3 text-crown-gold" />
                      <span className="text-crown-gold">Verified</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={resource.downloadUrl}
                    download
                    className="w-full bg-gradient-to-r from-royal-bronze to-queen-burgundy hover:from-royal-bronze-dark hover:to-queen-burgundy-dark text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-royal-bronze/30 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-midnight-velvet to-charcoal-stage rounded-3xl p-8 border border-crown-gold/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-section-title text-crown-gold mb-4">
                Technical Specifications
              </h3>
              <p className="text-content-primary text-text-muted-light max-w-2xl mx-auto">
                Essential technical information for venues and sound engineers to ensure optimal performance setup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={spec.category}
                  variants={fadeInUp}
                  className="bg-charcoal-stage/50 rounded-2xl p-6 border border-stage-platinum/20"
                >
                  <h4 className="text-nav-primary text-crown-gold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    {spec.category}
                  </h4>
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-text-muted-light">
                          {item.icon && <item.icon className="w-4 h-4 text-stage-amber" />}
                          <span>{item.label}</span>
                        </div>
                        <span className="text-pearl-white font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/press/technical-rider.pdf"
                download
                className="inline-flex items-center space-x-2 bg-crown-gold text-deep-black px-6 py-3 rounded-full font-semibold hover:bg-stage-amber transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Full Technical Rider</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h3 className="text-section-title text-crown-gold mb-4">
              Press & Booking Contacts
            </h3>
            <p className="text-content-primary text-text-muted-light max-w-2xl mx-auto">
              Get in touch with the right person for your needs. We&apos;re here to help make your event perfect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(contactInfo).map(([type, contact]) => (
              <motion.div
                key={type}
                variants={fadeInUp}
                className="bg-gradient-to-br from-charcoal-stage to-midnight-velvet rounded-2xl p-6 border border-crown-gold/20 text-center backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-royal-bronze to-queen-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                  {type === 'booking' && <Calendar className="w-8 h-8 text-white" />}
                  {type === 'press' && <Newspaper className="w-8 h-8 text-white" />}
                  {type === 'technical' && <Award className="w-8 h-8 text-white" />}
                </div>
                
                <h4 className="text-section-subtitle text-pearl-white mb-1">{contact.name}</h4>
                <p className="text-content-secondary text-stage-amber mb-4 capitalize">{contact.title}</p>
                
                <div className="space-y-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center space-x-2 text-crown-gold hover:text-stage-amber transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contact.email}</span>
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center space-x-2 text-crown-gold hover:text-stage-amber transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contact.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-queen-burgundy/20 to-royal-bronze/20 rounded-3xl p-8 md:p-12 border border-crown-gold/20 backdrop-blur-sm">
            <Crown className="w-12 h-12 text-crown-gold mx-auto mb-6" />
            <h3 className="text-section-title text-crown-gold mb-4">
              Need Something Specific?
            </h3>
            <p className="text-content-primary text-text-muted-light mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? We&apos;re happy to provide custom materials, 
              additional photos, or specific technical information for your event or publication.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
              >
                <Mail className="w-5 h-5" />
                <span>Request Custom Materials</span>
              </a>
              
              <a
                href="/press/dutch-queen-media-kit.zip"
                download
                className="inline-flex items-center space-x-2 bg-charcoal-stage border-2 border-stage-platinum text-stage-platinum px-8 py-4 rounded-full font-semibold hover:bg-stage-platinum hover:text-deep-black transition-all duration-200 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download Complete Kit</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}