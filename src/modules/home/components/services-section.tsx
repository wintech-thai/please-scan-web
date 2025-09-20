"use client";

import { motion } from 'framer-motion';
import { Code, Globe, Server, Settings } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Fullstack Development',
      description: 'Complete end-to-end web application development using modern technologies and best practices.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive and performant websites that deliver exceptional user experiences.',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'Robust and scalable APIs that power your applications with security and efficiency.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'DevOps Solutions',
      description: 'Streamlined deployment, monitoring, and infrastructure management for optimal performance.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-blue-400">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We provide comprehensive technology solutions to help your business thrive in the digital world
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-300 mb-8"
          >
            Ready to bring your ideas to life?
          </motion.p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Get Started
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
