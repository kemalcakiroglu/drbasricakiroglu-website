const testimonials = [
  {
    id: 1,
    name: 'Ahmet Y.',
    content: 'Prof. Dr. Çakıroğlu çok profesyonel ve ilgili bir doktordur. Tedavi süreci boyunca tüm sorularıma sabırla cevap verdi.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatma K.',
    content: 'Oğlumun sağlığı için endişeli idim ancak doktor çocuğumuzla çok iyi iletişim kurdu ve işlemi başarıyla tamamladı.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mehmet A.',
    content: 'Robotik cerrahi konusunda en iyi seçim yaptığıma inanıyorum. Sonuçlar beklendiğinden çok daha iyi oldu.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Hasta Yorumları</h2>
          <p className="section-subtitle">Hastalarımızın memnuniyet ve deneyimleri bizim başarımızdır</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">\"{testimonial.content}\"</p>
              <p className="font-bold text-medical-dark">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}