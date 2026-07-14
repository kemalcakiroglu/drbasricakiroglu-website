import type { Metadata } from 'next'
import { doctorInfo } from '@/data/services'

export const metadata: Metadata = {
  title: 'İletişim | Prof. Dr. Basri Çakıroğlu',
  description: 'Randevu ve iletişim bilgileri. Hemen bize ulaşın.',
}

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-medical-blue to-blue-700 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-blue-100">Bize ulaşın ve randevu alın</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">Randevu Formu</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Ad Soyad *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-medical-blue"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-medical-blue"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefon *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-medical-blue"
                    placeholder="+90 (XXX) XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Hizmet Seçiniz *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-medical-blue">
                    <option value="">Seçiniz</option>
                    <option value="endourology">Endoüroloji</option>
                    <option value="pediatric">Çocuk Ürolojisi</option>
                    <option value="oncology">Üroonkoloji</option>
                    <option value="andrology">Androloji</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mesajınız</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-medical-blue h-32 resize-none"
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Gönder
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">İletişim Bilgileri</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-medical-blue">📞</div>
                  <div>
                    <h3 className="font-bold text-lg text-medical-dark mb-1">Telefon</h3>
                    <p className="text-gray-700">{doctorInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-medical-blue">📧</div>
                  <div>
                    <h3 className="font-bold text-lg text-medical-dark mb-1">E-mail</h3>
                    <p className="text-gray-700">{doctorInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-medical-blue">🏥</div>
                  <div>
                    <h3 className="font-bold text-lg text-medical-dark mb-1">Hastane</h3>
                    <p className="text-gray-700">{doctorInfo.hospital}</p>
                    <p className="text-gray-700">İstanbul, Türkiye</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl text-medical-blue">🕐</div>
                  <div>
                    <h3 className="font-bold text-lg text-medical-dark mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-700">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-gray-700">Cumartesi: 10:00 - 16:00</p>
                    <p className="text-gray-700">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-medical-light rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  Harita entegrasyonu yapılacak
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}