import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Simpan log kontak (dalam implementasi nyata, ini akan disimpan ke database)
    const contactData = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip: request.ip || 'unknown'
    };

    // Di sini Anda bisa:
    // 1. Menyimpan ke database
    // 2. Mengirim email notifikasi
    // 3. Mengirim notifikasi ke tim

    console.log('Contact form submission:', contactData);

    // Kirim notifikasi menggunakan ZAI (opsional)
    try {
      const zai = await ZAI.create();
      
      const notificationPrompt = `Pesan kontak baru dari PT DAVVIN ARETHA PANGESTU website:
      
Nama: ${name}
Email: ${email}
Subjek: ${subject}
Pesan: ${message}
Waktu: ${contactData.timestamp}

Silakan follow up segera.`;

      await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Anda adalah asisten yang membantu mengelola notifikasi kontak bisnis.'
          },
          {
            role: 'user',
            content: notificationPrompt
          }
        ],
        max_tokens: 100
      });
    } catch (aiError) {
      console.error('AI notification failed:', aiError);
      // Lanjutkan meskipun AI gagal
    }

    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}