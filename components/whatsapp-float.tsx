'use client'

import { MessageCircle } from 'lucide-react'

const PHONE = '254701347075'
const MESSAGE = "Hi Lush by Wambo! I'd like to make an enquiry."

export default function WhatsAppFloat() {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  )
}
