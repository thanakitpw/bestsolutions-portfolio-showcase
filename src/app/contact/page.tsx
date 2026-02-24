"use client";

import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <main className="flex min-h-screen w-full flex-col bg-black pt-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8">ติดต่อเรา</h1>
          <p className="text-white/70 text-lg mb-12">
            สัมผัสการบริการระดับพรีเมียม ติดต่อทีมคอนเซียร์ของเราเพื่อนัดหมายทดลองขับรถ ขอบรอเล่มเล่ม หรือสอบถามข้อมูลรุ่นรถพิเศษของเรา
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-2">บริการคอนเซียร์</h3>
              <p className="text-white/80">+66 (0) 2555-0199</p>
            </div>
            <div>
              <h3 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-2">อีเมล</h3>
              <p className="text-white/80">concierge@luxury-auto.com</p>
            </div>
            <div>
              <h3 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-2">สำนักงานใหญ่</h3>
              <p className="text-white/80">100 ถนนหรูหรา<br/>เขตวัฒนา กรุงเทพมหานคร 10110</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] p-8 md:p-12 border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-white/60 text-xs uppercase tracking-widest">ชื่อจริง</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                  placeholder="ชื่อ"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-white/60 text-xs uppercase tracking-widest">นามสกุล</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                  placeholder="นามสกุล"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-white/60 text-xs uppercase tracking-widest">ที่อยู่อีเมล</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-white/60 text-xs uppercase tracking-widest">รุ่นที่สนใจ</label>
              <select 
                id="interest" 
                className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option value="s-class">S-Class</option>
                <option value="g-class">G-Class</option>
                <option value="amg-gt">AMG GT Coupe</option>
                <option value="eqs">EQS Sedan</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-white/60 text-xs uppercase tracking-widest">ข้อความ</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                required
                placeholder="กรุณากรอกข้อความของคุณ..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-semibold uppercase tracking-widest text-sm py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
