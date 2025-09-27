import React, { useState, useEffect, useRef } from 'react'
import PageContainer from '../components/PageContainer'

function botReply(text) {
  const t = text.toLowerCase()
  if (t.includes('fee')) return 'For fee-related queries, visit the Fee Payment page or contact accounts@institution.edu.'
  if (t.includes('exam')) return 'Exam schedules are available on your dashboard and the Exam Schedule page.'
  if (t.includes('password') || t.includes('login')) return 'If you forgot your password, use the Reset Password link or contact IT support.'
  if (t.includes('certificate')) return 'To upload certificates, go to the Certificates page and use the Upload form.'
  return "Thanks — we've received your message. A portal admin will respond soon (simulated)."
}

export default function AskPortalPage() {
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('portal_chat') || '[]'))
  const [text, setText] = useState('')
  const listRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('portal_chat', JSON.stringify(messages))
    // scroll to bottom
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages])

  function send(e) {
    e?.preventDefault()
    if (!text.trim()) return
    const userMsg = { id: Date.now(), who: 'user', text: text.trim(), at: new Date().toISOString() }
    setMessages((m) => [...m, userMsg])
    setText('')

    // simulate bot reply
    setTimeout(() => {
      const reply = { id: Date.now() + 1, who: 'bot', text: botReply(userMsg.text), at: new Date().toISOString() }
      setMessages((m) => [...m, reply])
    }, 700)
  }

  function clearChat() {
    setMessages([])
    localStorage.removeItem('portal_chat')
  }

  return (
    <PageContainer title="Ask Portal (Chat)">
      <div className="max-w-3xl">
        <div ref={listRef} className="bg-white rounded shadow-sm p-4 h-96 overflow-auto flex flex-col gap-3">
          {messages.length === 0 && <div className="text-gray-500">No messages yet. Ask a question below.</div>}
          {messages.map((m) => (
            <div key={m.id} className={`max-w-3/4 p-3 rounded-lg ${m.who === 'user' ? 'bg-indigo-600 text-white self-end' : 'bg-gray-100 text-gray-800 self-start'}`}>
              <div className="text-sm">{m.text}</div>
              <div className="text-xs text-gray-400 mt-1">{new Date(m.at).toLocaleString()}</div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="mt-3 flex gap-3">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your message..." className="flex-1 px-3 py-2 rounded bg-white border" />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
          <button type="button" onClick={clearChat} className="px-3 py-2 bg-gray-200 rounded">Clear</button>
        </form>
      </div>
    </PageContainer>
  )
}
