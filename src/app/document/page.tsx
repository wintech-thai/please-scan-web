"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Loader2 } from 'lucide-react'; 
import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";

const DocumentCard = ({ doc, index }: { doc: any, index: number }) => {
  const [isQrLoading, setIsQrLoading] = useState(true); // State สำหรับเช็คว่า QR มาหรือยัง

  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center md:items-start group"
    >
      {/* QR Code Section */}
      <div className="bg-white p-3 rounded-xl shadow-lg flex-shrink-0 relative overflow-hidden w-32 h-auto flex flex-col items-center justify-between min-h-[160px]">
        
        <div className="relative w-full aspect-square flex items-center justify-center">
          {isQrLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
          )}

          {/* รูป QR Code เรียกใช้ API ฟรี สำหรับสร้าง QR CODE*/}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(doc.url)}`}
            alt="Scan to download"
            className={`w-full h-full object-contain transition-opacity duration-300 ${isQrLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsQrLoading(false)} // เมื่อโหลดเสร็จ ให้ปิด Loading
            loading="lazy"
          />
        </div>

        <p className="text-slate-900 text-[10px] text-center mt-2 font-bold tracking-wider">
          PLEASE SCAN
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <FileText className="text-blue-400 w-5 h-5" />
          <span className="text-blue-400 font-semibold text-sm">{doc.version}</span>
          <span className="text-gray-500 text-xs border-l border-gray-600 pl-2">{doc.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>
        <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{doc.description}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a 
            href={doc.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            <ExternalLink size={16} />
            Open PDF
          </a>
          
          <button
            onClick={() => handleDownload(doc.url, doc.fileName)}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            <Download size={16} />
            Download
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. Main Page Component ---
export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: 'Please Scan Manual (v2)',
      description: 'เอกสารคู่มือการใช้งาน Please Scan เวอร์ชันล่าสุด',
      url: 'https://cdn.jsdelivr.net/gh/wintech-thai/dev-hubs-artifacts@main/please-scan.v2.pdf',
      version: 'v2.0',
      date: 'Dec 2025',
      fileName: 'Please-Scan-Manual-v2.pdf'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col">
       {/* Background Effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documents <span className="text-blue-400">& Downloads</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ศูนย์รวมเอกสาร คู่มือการใช้งาน และไฟล์ที่จำเป็นสำหรับคุณ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {documents.map((doc, index) => (
              <DocumentCard key={doc.id} doc={doc} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}