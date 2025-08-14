"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Crown, Music, Mic, Guitar, Drum, Star, Heart, Users, Award } from "lucide-react";

interface BandMember {
  id: string;
  name: string;
  stage_name: string;
  role: string;
  queen_member: string;
  primary_instrument: string[];
  bio: string;
  queen_connection: string;
  favorite_song: string;
  years_experience: number;
  photo: string;
  achievements: string[];
  musical_background: string;
  fun_fact: string;
}

export function BandMembersSection() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, rotateY: 0 },
    hover: { scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }
  };

  const bandMembers: BandMember[] = [
    {
      id: "1",
      name: "Alex van der Berg",
      stage_name: "Alessandro Mercury",
      role: "Lead Vocalist",
      queen_member: "Freddie Mercury",
      primary_instrument: ["Vocals", "Piano", "Stage Performance"],
      bio: "With over 15 years of performance experience, Alex brings an authentic and respectful tribute to Freddie Mercury&apos;s legendary stage presence. His theatrical background and vocal range make every performance a royal experience.",
      queen_connection: "Studied at the Royal Conservatory and has been performing Queen tribute shows across Europe since 2009. Alex&apos;s passion for Freddie&apos;s humanitarian work and artistic vision drives every performance.",
      favorite_song: "Bohemian Rhapsody",
      years_experience: 15,
      photo: "/band/alex-mercury.jpg",
      achievements: [
        "Royal Conservatory Graduate",
        "500+ Queen Tribute Performances",
        "Featured in Dutch Music Magazine",
        "Charity Concert Organizer"
      ],
      musical_background: "Classical piano training since age 6, later discovered rock through Queen. Studied music therapy and performance arts.",
      fun_fact: "Can perform the entire &lsquo;Bohemian Rhapsody&rsquo; operatic section in 4 different languages"
    },
    {
      id: "2", 
      name: "Sophie Hendricks",
      stage_name: "Sofia May",
      role: "Lead Guitarist",
      queen_member: "Brian May",
      primary_instrument: ["Electric Guitar", "Acoustic Guitar", "Red Special Replica"],
      bio: "Sophie is a masterful guitarist who has crafted her own Red Special replica and studied Brian May&apos;s unique guitar techniques extensively. Her solos capture the astronomical beauty of Brian&apos;s compositions.",
      queen_connection: "Built her first Red Special replica at age 16 and has been perfecting Brian May&apos;s iconic sound ever since. Studied astrophysics as a tribute to Brian&apos;s academic background.",
      favorite_song: "The Show Must Go On",
      years_experience: 12,
      photo: "/band/sophie-may.jpg",
      achievements: [
        "Built Custom Red Special Replica",
        "Astrophysics Degree (Tribute to Brian)",
        "Guitar Workshop Instructor",
        "300+ Solo Performances"
      ],
      musical_background: "Started with classical guitar, transitioned to rock. Self-taught in Brian May&apos;s techniques through extensive study of Queen recordings.",
      fun_fact: "Uses authentic sixpence coins as guitar picks, just like Brian May"
    },
    {
      id: "3",
      name: "Marcus de Jong", 
      stage_name: "Marco Deacon",
      role: "Bass Guitarist",
      queen_member: "John Deacon",
      primary_instrument: ["Bass Guitar", "Electric Guitar", "Synthesizer"],
      bio: "Marcus provides the steady foundation that every Queen song demands. His deep understanding of John Deacon&apos;s melodic bass lines and technical precision keeps the band grounded while others soar.",
      queen_connection: "Like John Deacon, Marcus values the music over the spotlight. His technical knowledge of Queen's recordings and bass arrangements is encyclopedic.",
      favorite_song: "Another One Bites the Dust",
      years_experience: 14,
      photo: "/band/marcus-deacon.jpg",
      achievements: [
        "Music Production Diploma",
        "Session Musician for 50+ Artists",
        "Queen Archive Contributor",
        "Sound Engineering Specialist"
      ],
      musical_background: "Trained in both classical and electric bass. Also skilled in sound engineering and music production, bringing technical expertise to the band.",
      fun_fact: "Owns and plays a 1979 Fender Precision Bass, the same model John Deacon used"
    },
    {
      id: "4",
      name: "David Kramer",
      stage_name: "David Taylor", 
      role: "Drummer",
      queen_member: "Roger Taylor",
      primary_instrument: ["Drums", "Vocals", "Percussion"],
      bio: "David&apos;s powerful drumming and backing vocals recreate the driving force behind Queen&apos;s biggest hits. His energy and precision capture Roger Taylor&apos;s dynamic style and contribute to the band&apos;s authentic sound.",
      queen_connection: "Studied Roger Taylor&apos;s drumming techniques and vocal harmonies extensively. David&apos;s high-energy performance style embodies Roger&apos;s rock star charisma.",
      favorite_song: "We Will Rock You",
      years_experience: 13,
      photo: "/band/david-taylor.jpg",
      achievements: [
        "Berklee Online Certificate",
        "Drum Workshop Clinician", 
        "200+ Festival Performances",
        "Backing Vocals Specialist"
      ],
      musical_background: "Professional drummer for 13 years, studied at Berklee Online. Known for his stamina and ability to maintain Roger&apos;s signature backbeat through entire concerts.",
      fun_fact: "Uses the exact same Ludwig drum kit configuration that Roger Taylor used during Queen&apos;s peak years"
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case "lead vocalist": return Mic;
      case "lead guitarist": return Guitar;
      case "bass guitarist": return Music;
      case "drummer": return Drum;
      default: return Music;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "lead vocalist": return "from-crown-gold to-stage-amber";
      case "lead guitarist": return "from-queen-burgundy to-velvet-burgundy";
      case "bass guitarist": return "from-royal-bronze to-crown-gold";
      case "drummer": return "from-stage-platinum to-rock-steel";
      default: return "from-royal-bronze to-queen-burgundy";
    }
  };

  return (
    <section id="band-members" className="py-24 bg-gradient-to-b from-deep-black to-midnight-velvet relative overflow-hidden">
      {/* Royal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-10 w-36 h-36 border border-crown-gold rounded-full"></div>
        <div className="absolute bottom-24 left-12 w-24 h-24 border-2 border-royal-bronze transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-stage-platinum rounded-full"></div>
        <div className="absolute bottom-16 right-20 w-20 h-20 border border-queen-burgundy transform rotate-12"></div>
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
          {/* Crown Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-crown-gold to-transparent flex-1 max-w-32"></div>
            <Crown className="w-8 h-8 text-crown-gold mx-4" />
            <div className="h-px bg-gradient-to-r from-crown-gold via-crown-gold to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-display-lg font-display-primary text-gradient-royal mb-6">
            Meet The Band
          </h2>
          <p className="text-content-primary text-text-muted-light max-w-3xl mx-auto">
            Four talented musicians united by their passion for Queen&apos;s music and dedicated to honoring 
            the legacy of Freddie, Brian, Roger, and John with authenticity and respect.
          </p>
        </motion.div>

        {/* Band Members Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {bandMembers.map((member) => {
            const RoleIcon = getRoleIcon(member.role);
            const isSelected = selectedMember === member.id;
            
            return (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative cursor-pointer"
                onClick={() => setSelectedMember(isSelected ? null : member.id)}
              >
                <motion.div
                  variants={cardHover}
                  className={`relative bg-gradient-to-br from-charcoal-stage to-midnight-velvet rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                    isSelected 
                      ? "border-crown-gold shadow-2xl shadow-crown-gold/20" 
                      : "border-stage-platinum/30 hover:border-crown-gold/50"
                  }`}
                >
                  {/* Member Photo */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
                    
                    {/* Role Icon */}
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${getRoleColor(member.role)} rounded-full p-2`}>
                      <RoleIcon className="w-5 h-5 text-white" />
                    </div>

                    {/* Queen Member Badge */}
                    <div className="absolute top-4 left-4 bg-deep-black/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-crown-gold text-xs font-semibold uppercase tracking-wider">
                        {member.queen_member}
                      </span>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4 bg-royal-bronze/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">
                        {member.years_experience}+ Years
                      </span>
                    </div>

                    {/* Royal Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-crown-gold/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-section-subtitle text-pearl-white mb-1 group-hover:text-crown-gold transition-colors duration-300">
                        {member.stage_name}
                      </h3>
                      <p className="text-content-secondary text-stage-amber mb-2">
                        {member.role}
                      </p>
                      <p className="text-performance-detail text-text-muted-light">
                        {member.name}
                      </p>
                    </div>

                    {/* Primary Instruments */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.primary_instrument.slice(0, 2).map((instrument, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-charcoal-stage/80 border border-stage-platinum/30 rounded-full text-xs text-stage-platinum"
                        >
                          {instrument}
                        </span>
                      ))}
                    </div>

                    {/* Favorite Song */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-queen-burgundy">
                        <Heart className="w-4 h-4" />
                        <span className="text-performance-detail">
                          {member.favorite_song}
                        </span>
                      </div>
                    </div>

                    {/* Click Indicator */}
                    <div className="text-center mt-4">
                      <span className="text-xs text-text-muted-light">
                        {isSelected ? "Click to collapse" : "Click to learn more"}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Expanded Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: isSelected ? 1 : 0, 
                    height: isSelected ? "auto" : 0 
                  }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  {isSelected && (
                    <div className="mt-6 bg-gradient-to-br from-midnight-velvet/80 to-charcoal-stage/80 backdrop-blur-sm rounded-2xl p-6 border border-crown-gold/30">
                      {/* Bio */}
                      <div className="mb-6">
                        <h4 className="text-nav-primary text-crown-gold mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          About {member.stage_name}
                        </h4>
                        <p className="text-content-secondary text-text-muted-light leading-relaxed mb-4">
                          {member.bio}
                        </p>
                        <p className="text-content-secondary text-stage-amber leading-relaxed">
                          {member.queen_connection}
                        </p>
                      </div>

                      {/* Musical Background */}
                      <div className="mb-6">
                        <h4 className="text-nav-primary text-crown-gold mb-3 flex items-center">
                          <Music className="w-4 h-4 mr-2" />
                          Musical Background
                        </h4>
                        <p className="text-content-secondary text-text-muted-light leading-relaxed">
                          {member.musical_background}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-nav-primary text-crown-gold mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Achievements
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {member.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-2 text-text-muted-light">
                              <Star className="w-3 h-3 text-stage-amber flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fun Fact */}
                      <div className="bg-royal-bronze/10 border border-royal-bronze/30 rounded-xl p-4">
                        <h4 className="text-nav-primary text-royal-bronze mb-2">Fun Fact</h4>
                        <p className="text-content-secondary text-text-muted-light">
                          {member.fun_fact}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
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
              Experience Queen Like Never Before
            </h3>
            <p className="text-content-primary text-text-muted-light mb-8 max-w-2xl mx-auto">
              Four musicians, countless hours of dedication, and one shared passion: bringing Queen&apos;s 
              legendary music to life with authenticity, respect, and royal flair.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-royal-bronze to-queen-burgundy text-white px-8 py-4 rounded-full font-semibold hover:from-royal-bronze-dark hover:to-queen-burgundy-dark transition-all duration-200 transform hover:scale-105 shadow-lg shadow-royal-bronze/30"
              >
                <Music className="w-5 h-5" />
                <span>Book The Band</span>
              </a>
              
              <a
                href="#gallery"
                className="inline-flex items-center space-x-2 bg-charcoal-stage border-2 border-stage-platinum text-stage-platinum px-8 py-4 rounded-full font-semibold hover:bg-stage-platinum hover:text-deep-black transition-all duration-200 transform hover:scale-105"
              >
                <Users className="w-5 h-5" />
                <span>See Them Perform</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}