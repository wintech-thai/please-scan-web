"use client";

import Footer from '@/modules/home/components/footer';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { env } from 'next-runtime-env';
import { useEffect, useState } from 'react';

const StatusPage = () => {
  const [client, setClient] = useState(false);

  const statusUrl = env("NEXT_PUBLIC_WEB_STATUS_URL") || "https://uptime.dev-hubs.com/status/please-scan";

  useEffect(() => {
    setClient(true);
  }, [])

  if (!client) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">System</span>
              <span className="text-green-400"> Status</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            ตรวจสอบสถานะระบบและการบริการต่างๆ ของ Please-Scan แบบเรียลไทม์
          </motion.p>
        </motion.div>

        {/* Status Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Activity className="w-6 h-6 mr-3 text-green-400" />
              Live System Monitor
            </h2>
            <p className="text-gray-300 mt-2">
              ติดตามสถานะระบบแบบเรียลไทม์
            </p>
          </div>

          {/* Iframe Container */}
          <div className="relative">
            <iframe
              src={statusUrl}
              className="w-full h-[600px] md:h-[700px] lg:h-[800px] border-0"
              title="Please-Scan System Status"
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
              style={{
                background: 'transparent',
                colorScheme: 'dark'
              }}
            />

            {/* Loading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-blue-800/50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="loading-overlay">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                <p className="text-gray-300">กำลังโหลดข้อมูลสถานะ...</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Script to handle iframe loading */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              const iframe = document.querySelector('iframe');
              const overlay = document.getElementById('loading-overlay');

              if (iframe && overlay) {
                iframe.addEventListener('load', function() {
                  overlay.style.opacity = '0';
                  setTimeout(() => {
                    overlay.style.display = 'none';
                  }, 500);
                });

                // Show loading initially
                overlay.style.opacity = '1';
                overlay.style.display = 'flex';
              }
            });
          `
        }}
      />
      <Footer />
    </div>
  );
}

export default StatusPage;
