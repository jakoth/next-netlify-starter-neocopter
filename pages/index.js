import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <iframe
        src="https://chatbase.co/TNjB_E4fqCEvhZ1jNSKwE/help"
        width="100%"
        height="800"
        style={{ border: "none" }}
        title="Chatbase Chatbot"
      ></iframe>
    </div>
  );
}
