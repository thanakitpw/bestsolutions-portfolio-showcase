import Image from "next/image";

export default function DesignPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black pt-32 px-6 md:px-12 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8">ปรัชญาการออกแบบ</h1>
        <p className="text-white/70 max-w-2xl text-lg mb-16">
          ความสวยงามที่เรียบง่าย ภาษาการออกแบบของเรามีลักษณะเฉพาะด้วยสัดส่วนที่น่าทึ่งและพื้นผิวที่แสดงถึงทั้งปัญญาและอารมณ์
        </p>
        
        {/* Main Showcase Image */}
        <div className="relative w-full h-[60vh] md:h-[70vh] mb-24 overflow-hidden border border-white/5">
          <Image
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop"
            alt="รายละเอียดการออกแบบภายในหรูหรา"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-10 left-10 max-w-lg">
            <h2 className="font-playfair text-3xl text-white mb-4">ความกลมกลืนภายใน</h2>
            <p className="text-white/70">การผสมผสานระหว่างนวัตกรรมดิจิทัลและความหรูแบบดั้งเดิมอย่างลงตัว โดยทุกวัสดุถูกคัดสรรอย่างพิถีพิถันเพื่อกระตุ้นประสาทสัมผัส</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full overflow-hidden border border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2940&auto=format&fit=crop"
                alt="การออกแบบกระจังหน้าด้านหน้า"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-playfair text-2xl text-white mb-3">ความโดดเด่นที่น่าประทับใจ</h3>
              <p className="text-white/60 leading-relaxed">
                ด้านหน้าที่เป็นสัญลักษณ์ไม่ได้เพียงนำทางเท่านั้น—แต่ยังดึงดูดความสนใจ ทุกเส้นโค้งได้รับการปรับแต่งให้เหมาะสำหรับทั้งประสิทธิภาพทางอากาศพลศาสตร์และความสวยงามที่เป็นเอกลักษณ์
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:mt-24">
            <div className="relative aspect-square w-full overflow-hidden border border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop"
                alt="การออกแบบล้อแอโรไดนามิก"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-playfair text-2xl text-white mb-3">รูปแบบตามหน้าที่</h3>
              <p className="text-white/60 leading-relaxed">
                ความเป็นเลิศทางอากาศพลศาสตร์กำหนดรูปแบบของอนาคต เส้นที่สะอาดลดการลากตัวขณะที่เพิ่มเสถียรภาพ พิสูจน์ว่าประสิทธิภาพสูงสุดสามารถสวยงามได้
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
