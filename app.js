
const pages = {
  home: {
    en: "<h1>Welcome to RD Print & Design Solutions</h1><p>Creative print and DTP services from Barpeta, Assam.</p>",
    as: "<h1>RD প্ৰিণ্ট & ডিজাইন ছলিউচনচলৈ স্বাগতম</h1><p>বৰপেটাৰ পৰা সৃষ্টিশীল প্ৰিণ্ট আৰু DTP সেৱা।</p>"
  },
  about: {
    en: "<h2>About</h2><p>I am Rakesh Das. I specialize in professional design, DTP, and layout services.</p>",
    as: "<h2>আমাৰ বিষয়ে</h2><p>মই ৰাকেশ দাস। মই প্ৰফেছনেল ডিজাইন, ডিটিপি আৰু প্ৰিণ্ট সাজনিৰ কাম কৰোঁ।</p>"
  },
  portfolio: {
    en: `<h2>Portfolio</h2>
        <ul>
          <li><a href='assets/pdf/dtp_sample.pdf'>DTP Sample PDF</a></li>
          <li><a href='assets/pdf/marriage_sample.pdf'>Marriage Card PDF</a></li>
          <li><a href='assets/pdf/typing_sample.pdf'>Typing Sample PDF</a></li>
        </ul>
        <button disabled>Upload Your Work (Coming Soon)</button>`,
    as: `<h2>পৰ্টফলিঅ'</h2>
        <ul>
          <li><a href='assets/pdf/dtp_sample.pdf'>DTP চ্যাম্পল PDF</a></li>
          <li><a href='assets/pdf/marriage_sample.pdf'>বিয়া কাৰ্ড</a></li>
          <li><a href='assets/pdf/typing_sample.pdf'>টাইপিং PDF</a></li>
        </ul>
        <button disabled>আপোনাৰ কাম আপল'ড কৰক (চিগচোন আহিব)</button>`
  },
  contact: {
    en: "<h2>Contact</h2><p>Email: rakeshdas190@gmail.com<br>Phone: 6003529909</p>",
    as: "<h2>যোগাযোগ</h2><p>ই-মেইল: rakeshdas190@gmail.com<br>ফোন: 6003529909</p>"
  }
};
let currentLang = "en";
function navigate(page) {
  document.getElementById("content").innerHTML = pages[page][currentLang];
}
function toggleLanguage() {
  currentLang = document.getElementById("languageToggle").value;
  const hash = window.location.hash.slice(1) || "home";
  navigate(hash);
}
window.onload = () => {
  const hash = window.location.hash.slice(1) || "home";
  navigate(hash);
};
