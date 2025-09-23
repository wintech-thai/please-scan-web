import Footer from "@/modules/home/components/footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 no-scroll-x">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-400 mb-8">
            🛡️ นโยบายความเป็นส่วนตัว (Privacy Policy)
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-200 text-lg mb-8">
              Please-Scan ให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลผู้ใช้เป็นอันดับแรก นโยบายนี้อธิบายว่าเรามีการเก็บ ใช้ และปกป้องข้อมูลของคุณอย่างไร
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. ข้อมูลที่เราเก็บ</h2>
              <div className="text-gray-200 space-y-3">
                <p><strong>ข้อมูลที่คุณให้เรา</strong> เช่น อีเมล เบอร์โทรศัพท์ หรือชื่อบริษัท (เมื่อมีการติดต่อหรือลงทะเบียน)</p>
                <p><strong>ข้อมูลการใช้งาน</strong> เช่น ประวัติการสแกนสินค้า การเข้าถึงเว็บไซต์ และคุกกี้</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. วิธีการใช้ข้อมูล</h2>
              <p className="text-gray-200 mb-4">เราใช้ข้อมูลเพื่อ:</p>
              <div className="text-gray-200 space-y-3">
                <p><strong>ให้บริการตรวจสอบความแท้ของสินค้า</strong></p>
                <p><strong>ปรับปรุงประสบการณ์การใช้งานและความปลอดภัยของระบบ</strong></p>
                <p><strong>ติดต่อคุณเมื่อต้องการให้ข้อมูล ข่าวสาร หรือการสนับสนุน</strong></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. การปกป้องข้อมูล</h2>
              <div className="text-gray-200 space-y-3">
                <p><strong>เราใช้มาตรการด้านความปลอดภัยและการเข้ารหัสตามมาตรฐาน</strong> เพื่อปกป้องข้อมูลไม่ให้รั่วไหลหรือถูกเข้าถึงโดยไม่ได้รับอนุญาต</p>
                <p><strong>ข้อมูลของคุณจะถูกจัดเก็บอย่างปลอดภัย</strong> และเข้าถึงได้เฉพาะบุคคลที่มีสิทธิ์เท่านั้น</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. การแบ่งปันข้อมูล</h2>
              <div className="text-gray-200 space-y-3">
                <p><strong>เรา จะไม่ขายหรือให้เช่าข้อมูลส่วนบุคคล</strong> ของคุณแก่บุคคลที่สาม</p>
                <p><strong>อาจมีการแบ่งปันข้อมูลกับพันธมิตรที่เกี่ยวข้องกับการให้บริการเท่านั้น</strong> และจะอยู่ภายใต้นโยบายความปลอดภัยที่เข้มงวด</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. สิทธิ์ของคุณ</h2>
              <p className="text-gray-200 mb-4">คุณสามารถ:</p>
              <div className="text-gray-200 space-y-3">
                <p><strong>ขอเข้าถึงหรือแก้ไขข้อมูลส่วนตัวของคุณ</strong></p>
                <p><strong>ขอให้ลบข้อมูลส่วนบุคคลออกจากระบบ</strong> (หากไม่จำเป็นต้องเก็บตามกฎหมาย)</p>
                <p><strong>ปฏิเสธการรับข่าวสารทางการตลาดเมื่อใดก็ได้</strong></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. การปรับปรุงนโยบาย</h2>
              <p className="text-gray-200">
                เราอาจมีการปรับปรุงนโยบายความเป็นส่วนตัวเป็นครั้งคราว โดยจะประกาศเวอร์ชันล่าสุดบนเว็บไซต์
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. ติดต่อเรา</h2>
              <p className="text-gray-200 mb-4">
                หากมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายนี้ สามารถติดต่อเราได้ที่:
              </p>
              <div className="text-gray-200 space-y-3">
                <p><strong>บริษัท เดฟฮับ จำกัด (DevHub Co., Ltd.)</strong></p>
                <p><strong>📍</strong> 55 ถนนสุทธิสารวินิจฉัย แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400</p>
                <p><strong>📧</strong> อีเมล: <a href="mailto:contact@please-scan.com" className="text-blue-400 hover:text-blue-300 underline">contact@please-scan.com</a></p>
                <p><strong>📞</strong> โทร: 66(0) 94-249-4880</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPage;
