// export default function Home() {
//   return (
//     <div> 
//       <iframe
//         src="https://chatbase.co/TNjB_E4fqCEvhZ1jNSKwE/help"
//       ></iframe>
//     </div>
//   );
// }
// next.config.js

import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Welcome to my site</h1>
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.Chatbase = {
            config: {
              chatbotId: "TNjB_E4fqCEvhZ1jNSKwE", // replace with your ID
            },
          };
        }}
      />
      <div id="chatbase-root"></div>
    </>
  );
}
