// export default function Home() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
//       <iframe
//         src="https://chatbase.co/TNjB_E4fqCEvhZ1jNSKwE/help"
//         width="100%"
//         height="800"
//         style={{ border: "none" }}
//         title="Chatbase Chatbot"
//       ></iframe>
//     </div>
//   );
// }
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/help",
        destination: "https://chatbase.co/{agentId}/help",
      },
      // This second rule is needed to correctly proxy asset requests
      // like CSS, JS, and images from your help center.
      {
        source: "/help/:path*",
        destination: "https://chatbase.co/{agentId}/help/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
