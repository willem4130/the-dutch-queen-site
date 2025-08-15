"use client";

import { motion } from "framer-motion";

export function TourDatesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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

  // Tour dates data
  const tourDates = [
    {
      date: "Aug 15, 2025",
      venue: "Ziggo Dome",
      city: "Amsterdam, NL",
      status: "tickets",
      ticketUrl: "#"
    },
    {
      date: "Aug 22, 2025", 
      venue: "De Doelen",
      city: "Rotterdam, NL",
      status: "tickets",
      ticketUrl: "#"
    },
    {
      date: "Sep 3, 2025",
      venue: "TivoliVredenburg",
      city: "Utrecht, NL", 
      status: "tickets",
      ticketUrl: "#"
    },
    {
      date: "Sep 12, 2025",
      venue: "Concertgebouw",
      city: "Amsterdam, NL",
      status: "soldout",
      ticketUrl: "#"
    },
    {
      date: "Sep 25, 2025",
      venue: "Heineken Music Hall", 
      city: "Amsterdam, NL",
      status: "tickets",
      ticketUrl: "#"
    },
    {
      date: "Oct 8, 2025",
      venue: "013",
      city: "Tilburg, NL",
      status: "tickets", 
      ticketUrl: "#"
    }
  ];

  return (
    <section id="shows" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tour Dates
          </h2>
          <p className="text-gray-400 text-lg">
            Catch The Dutch Queen live - Book your tickets now
          </p>
        </motion.div>

        {/* Tour List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-1"
        >
          {tourDates.map((show, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center justify-between py-4 px-6 bg-gray-900/30 hover:bg-gray-900/50 transition-colors border-b border-gray-800 last:border-b-0"
            >
              <div className="flex items-center space-x-8">
                <div className="text-white font-semibold w-24 text-sm">
                  {show.date}
                </div>
                <div className="text-white font-medium">
                  {show.venue}
                </div>
                <div className="text-gray-400 text-sm">
                  {show.city}
                </div>
              </div>
              
              <div>
                {show.status === "soldout" ? (
                  <span className="text-gray-500 text-sm font-medium">
                    Sold Out
                  </span>
                ) : (
                  <a
                    href={show.ticketUrl}
                    className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                  >
                    Tickets
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            More dates to be announced soon
          </p>
          <button className="border border-gray-600 text-gray-300 hover:border-white hover:text-white px-6 py-2 rounded-full text-sm transition-colors">
            Join Mailing List
          </button>
        </motion.div>

      </div>
    </section>
  );
}