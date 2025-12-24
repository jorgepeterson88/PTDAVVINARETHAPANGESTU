'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/#about' },
    { name: 'Layanan', href: '/#services' },
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="PT DAVVIN ARETHA PANGESTU" className="h-10 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  PT DAVVIN ARETHA PANGESTU
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="w-full text-left bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="pt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/" className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <FileText className="text-4xl" />
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">Syarat & Ketentuan</h1>
              <p className="text-xl text-blue-100 mt-2">
                Aturan main untuk kerjasama yang transparan dan adil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700">
                <strong>Terakhir diperbarui:</strong> 1 Januari 2024<br />
                <strong>Berlaku efektif:</strong> 1 Januari 2024
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="mr-3 text-blue-600" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selamat datang di Syarat dan Ketentuan PT DAVVIN ARETHA PANGESTU. Dokumen ini mengatur penggunaan layanan kami dan hubungan hukum antara PT DAVVIN ARETHA PANGESTU dan klien.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan yang diuraikan dalam dokumen ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap jangan gunakan layanan kami.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="mr-3 text-blue-600" />
                Definisi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dalam syarat dan ketentuan ini:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>"Perusahaan"</strong> merujuk pada PT DAVVIN ARETHA PANGESTU</li>
                <li><strong>"Klien"</strong> merujuk pada individu atau entitas bisnis yang menggunakan layanan kami</li>
                <li><strong>"Layanan"</strong> merujuk pada semua produk dan jasa yang ditawarkan oleh Perusahaan</li>
                <li><strong>"Platform"</strong> merujuk pada website, aplikasi, dan semua media digital Perusahaan</li>
                <li><strong>"Konten"</strong> merujuk pada semua materi, informasi, dan data yang disediakan melalui Platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Layanan Kami</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Deskripsi Layanan</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                PT DAVVIN ARETHA PANGESTU menyediakan berbagai layanan bisnis termasuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Konsultasi bisnis dan strategi</li>
                <li>Manajemen proyek dan implementasi</li>
                <li>Solusi teknologi dan digital</li>
                <li>Pengembangan sumber daya manusia</li>
                <li>Analisis pasar dan riset</li>
                <li>Dukungan operasional bisnis</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Ketersediaan Layanan</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami berusaha untuk menyediakan layanan yang tersedia secara kontinu, namun tidak menjamin ketersediaan 100%. Layanan mungkin tidak tersedia karena:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Pemeliharaan terjadwal atau darurat</li>
                <li>Gangguan teknis atau jaringan</li>
                <li>Force majeure atau keadaan di luar kendali kami</li>
                <li>Pembaruan atau peningkatan sistem</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kewajiban Klien</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Sebagai klien, Anda setuju untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Informasi Akurat:</strong> Memberikan informasi yang benar, lengkap, dan terkini</li>
                <li><strong>Kepatuhan:</strong> Mematuhi semua hukum dan peraturan yang berlaku</li>
                <li><strong>Penggunaan Wajar:</strong> Menggunakan layanan kami hanya untuk tujuan yang sah dan etis</li>
                <li><strong>Keamanan:</strong> Menjaga kerahasiaan kredensial akses Anda</li>
                <li><strong>Pembayaran:</strong> Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                <li><strong>Kerjasama:</strong> Bekerja sama dengan tim kami untuk pencapaian tujuan bersama</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kewajiban Perusahaan</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                PT DAVVIN ARETHA PANGESTU berkomitmen untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Profesionalisme:</strong> Menyediakan layanan dengan standar profesional tertinggi</li>
                <li><strong>Kualitas:</strong> Memberikan layanan berkualitas sesuai kesepakatan</li>
                <li><strong>Kerahasiaan:</strong> Melindungi informasi klien sesuai kebijakan privasi</li>
                <li><strong>Transparansi:</strong> Memberikan informasi yang jelas mengenai layanan dan biaya</li>
                <li><strong>Dukungan:</strong> Menyediakan dukungan teknis dan konsultasi yang diperlukan</li>
                <li><strong>Perbaikan:</strong> Terus meningkatkan kualitas layanan kami</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Biaya dan Pembayaran</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Struktur Biaya</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biaya layanan kami meliputi:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Biaya konsultasi (per jam atau per proyek)</li>
                <li>Biaya implementasi dan setup</li>
                <li>Biaya berlangganan (untuk layanan berkelanjutan)</li>
                <li>Biaya tambahan untuk layanan ekstra</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Syarat Pembayaran</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Pembayaran harus dilakukan sesuai faktur yang diterbitkan</li>
                <li>Metode pembayaran yang tersedia: transfer bank, kartu kredit, atau e-wallet</li>
                <li>Keterlambatan pembayaran dapat dikenakan denda sesuai peraturan</li>
                <li>Pembayaran dianggap sah setelah diterima di rekening Perusahaan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="mr-3 text-blue-600" />
                Kebijakan Pembatalan dan Pengembalian
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Pembatalan oleh Klien</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Pembatalan dapat dilakukan dengan pemberitahuan tertulis minimal 7 hari kerja</li>
                <li>Pembatalan kurang dari 7 hari kerja dikenakan biaya 50% dari total nilai kontrak</li>
                <li>Pembatalan setelah layanan dimulai tidak eligible untuk pengembalian</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Pembatalan oleh Perusahaan</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Perusahaan berhak membatalkan layanan dengan pemberitahuan tertulis</li>
                <li>Pengembalian penuh akan diberikan jika pembatalan dilakukan oleh Perusahaan</li>
                <li>Perusahaan tidak bertanggung jawab atas kerugian akibat pembatalan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hak Kekayaan Intelektual</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Semua konten, materi, dan kekayaan intelektual yang disediakan oleh Perusahaan dilindungi oleh hukum hak cipta dan kekayaan intelektual.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Klien diberikan lisensi non-eksklusif untuk menggunakan materi yang disediakan</li>
                <li>Reproduksi, distribusi, atau penggunaan komersial tanpa izin dilarang</li>
                <li>Perusahaan mempertahankan kepemilikan atas semua kekayaan intelektual asli</li>
                <li>Klien mempertahankan kepemilikan atas informasi dan data yang mereka berikan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kerahasiaan</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Kedua belah pihak setuju untuk menjaga kerahasiaan informasi yang dibagikan selama kerjasama:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Informasi rahasia meliputi data bisnis, strategi, dan informasi sensitif lainnya</li>
                <li>Kewajiban kerahasiaan tetap berlaku setelah kerjasama berakhir</li>
                <li>Informasi dapat dibagikan hanya dengan persetujuan tertulis dari pihak yang bersangkutan</li>
                <li>Pengecualian berlaku untuk informasi yang sudah publik atau diwajibkan oleh hukum</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Penyangkalan Jaminan</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Layanan kami disediakan "sebagaimana adanya" tanpa jaminan tersurat maupun tersirat:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Kami tidak menjamin hasil bisnis tertentu dari penggunaan layanan kami</li>
                <li>Kami tidak bertanggung jawab atas keputusan bisnis yang dibuat berdasarkan konsultasi kami</li>
                <li>Kami tidak menjamin ketersediaan atau keandalan platform 100%</li>
                <li>Klien bertanggung jawab atas implementasi dan penggunaan saran yang diberikan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Batasan Tanggung Jawab</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Tanggung jawab Perusahaan dibatasi sebagai berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Tanggung jawab maksimal terbatas pada nilai kontrak yang telah dibayarkan</li>
                <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung, konsekuensial, atau hukuman</li>
                <li>Perusahaan tidak bertanggung jawab atas kehilangan data atau kerusakan sistem klien</li>
                <li>Klien setuju untuk mengganti rugi Perusahaan dari klaim pihak ketiga</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Force Majeure</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Perusahaan tidak bertanggung jawab atas kegagalan atau keterlambatan dalam melaksanakan kewajibannya jika disebabkan oleh keadaan di luar kendali yang wajar (force majeure), termasuk tetapi tidak terbatas pada bencana alam, perang, terorisme, pemogokan, atau tindakan pemerintah.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Penyelesaian Sengketa</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan diselesaikan sebagai berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Upaya damai melalui negosiasi antara kedua belah pihak</li>
                <li>Mediasi atau arbitrase jika negosiasi gagal</li>
                <li>Pengadilan di wilayah hukum Pontianak, Kalimantan Barat sebagai yurisdiksi terakhir</li>
                <li>Hukum Republik Indonesia yang berlaku</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perubahan Syarat dan Ketentuan</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Perusahaan berhak mengubah syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diberitahukan kepada klien melalui email atau pengumuman di website. Penggunaan layanan yang berkelanjutan setelah perubahan menunjukkan penerimaan terhadap syarat yang diperbarui.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontak Kami</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan atau memerlukan klarifikasi mengenai syarat dan ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>PT DAVVIN ARETHA PANGESTU</strong><br />
                  Jl. Karna Sosial Gg. Purwosari 1 No. 28, Desa/Kelurahan Parittokaya<br />
                  Kec. Pontianak Selatan, Kota Pontianak, Provinsi Kalimantan Barat<br />
                  Kode Pos: 78121
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telepon:</strong> 082382466170<br />
                  <strong>Email:</strong> legal@davvinarethapangestu.co.id
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="PT DAVVIN ARETHA PANGESTU" className="h-10 w-auto" />
                <h3 className="text-xl font-bold">PT DAVVIN ARETHA PANGESTU</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Mitra terpercaya untuk solusi bisnis terintegrasi dan berkualitas tinggi di Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigasi Cepat</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Layanan</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 PT DAVVIN ARETHA PANGESTU. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}