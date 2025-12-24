'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            <Shield className="text-4xl" />
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">Kebijakan Privasi</h1>
              <p className="text-xl text-blue-100 mt-2">
                Perlindungan data Anda adalah prioritas utama kami
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
                <Eye className="mr-3 text-blue-600" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selamat datang di Kebijakan Privasi PT DAVVIN ARETHA PANGESTU. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia, termasuk Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik serta peraturan turunannya.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <UserCheck className="mr-3 text-blue-600" />
                Informasi yang Kami Kumpulkan
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Informasi Pribadi</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami dapat mengumpulkan informasi pribadi berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Nama lengkap dan identitas diri</li>
                <li>Alamat email dan nomor telepon</li>
                <li>Alamat lengkap (rumah atau kantor)</li>
                <li>Informasi pembayaran dan faktur</li>
                <li>Data identifikasi seperti KTP atau NPWP (jika diperlukan)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Informasi Teknis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Informasi teknis yang kami kumpulkan meliputi:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Alamat IP dan lokasi geografis</li>
                <li>Jenis browser dan perangkat yang digunakan</li>
                <li>Informasi log dan penggunaan website</li>
                <li>Cookie dan data pelacakan lainnya</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Informasi Non-Pribadi</h3>
              <p className="text-gray-700 leading-relaxed">
                Informasi agregat dan anonim tentang penggunaan layanan kami untuk tujuan analisis dan peningkatan layanan.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="mr-3 text-blue-600" />
                Penggunaan Informasi
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Penyediaan Layanan:</strong> Menyediakan, mengelola, dan meningkatkan layanan yang Anda minta</li>
                <li><strong>Komunikasi:</strong> Menghubungi Anda terkait layanan, pembaruan, dan informasi penting</li>
                <li><strong>Keamanan:</strong> Melindungi keamanan dan integritas platform kami</li>
                <li><strong>Analisis:</strong> Menganalisis penggunaan untuk meningkatkan pengalaman pengguna</li>
                <li><strong>Kepatuhan:</strong> Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li><strong>Pemasaran:</strong> Memberikan informasi tentang produk dan layanan yang relevan (dengan persetujuan Anda)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pembagian Informasi</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam situasi berikut:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu kami mengoperasikan layanan (hosting, payment gateway, dll)</li>
                <li><strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau perintah pengadilan</li>
                <li><strong>Perlindungan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau pengguna lain</li>
                <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Keamanan Data</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                PT DAVVIN ARETHA PANGESTU menerapkan langkah-langkah keamanan yang wajar dan sesuai untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pembagian yang tidak sah. Langkah-langkah ini meliputi:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Audit keamanan berkala</li>
                <li>Pelatihan staf tentang perlindungan data</li>
                <li>Kebijakan retensi data yang jelas</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hak Anda</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Sebagai pemilik data, Anda memiliki hak:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Akses:</strong> Meminta salinan informasi pribadi yang kami simpan tentang Anda</li>
                <li><strong>Koreksi:</strong> Memperbaiki informasi pribadi yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan informasi pribadi Anda (dengan pengecualian tertentu)</li>
                <li><strong>Pembatasan:</strong> Membatasi pemrosesan informasi pribadi Anda</li>
                <li><strong>Portabilitas:</strong> Meminta transfer informasi pribadi Anda kepada pihak ketiga</li>
                <li><strong>Penolakan:</strong> Menolak pemrosesan informasi pribadi Anda untuk tujuan tertentu</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie dan Pelacakan</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan website. Cookie adalah file teks kecil yang disimpan di browser Anda.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anda dapat mengatur browser untuk menolak cookie atau memberi tahu Anda saat cookie dikirim. Namun, beberapa fitur website mungkin tidak berfungsi dengan baik tanpa cookie.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Anak di Bawah Umur</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Layanan kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan informasi pribadi dari anak di bawah umur. Jika kami mengetahui telah mengumpulkan informasi dari anak di bawah umur, kami akan mengambil langkah-langkah untuk menghapus informasi tersebut segera.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perubahan Kebijakan</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email Anda. Penggunaan layanan kami yang berkelanjutan setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontak Kami</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi ini, silakan hubungi kami:
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
                  <strong>Email:</strong> privacy@davvinarethapangestu.co.id
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