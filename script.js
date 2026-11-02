// Ubah URL / tambah tautan di sini saja. Tidak perlu mengubah HTML.
const instagram = "https://www.instagram.com/";

const links = [
  { title: "Registration Form", url: "https://example.com/registration", target: "_blank" },
  { title: "Rulebook [English Version]", url: "https://example.com/rulebook-en", target: "_blank" },
  { title: "Rulebook [Indonesia Version]", url: "https://example.com/rulebook-id", target: "_blank" },
  { title: "Contact Sir Ananta", url: "https://wa.me/", target: "_blank" },
  { title: "Contact Sir Raj", url: "https://wa.me/", target: "_blank" },
  { title: "Contact Sir Vincent", url: "https://wa.me/", target: "_blank" },
  { title: "Join WhatsApp Group", desc: "WhatsApp Community • Free to join", url: "https://chat.whatsapp.com/", target: "_blank" },
  { title: "Check Out on Instagram", url: instagram, target: "_blank" }
];

document.getElementById("instagram").href = instagram;

document.getElementById("links").innerHTML = links.map(({ title, desc, url, target = "_blank" }) =>
  `<a class="link" href="${url}" target="${target}" rel="noopener noreferrer">${title}${desc ? `<small>${desc}</small>` : ""}</a>`
).join("");
