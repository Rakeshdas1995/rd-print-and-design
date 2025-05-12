
const pages = {
  home: {
    en: "<h1>Welcome to RD Print & Design Solutions</h1><img src='assets/images/rishav_das.jpg' alt='Profile' width='200'><p>Creative print and DTP services.</p>",
    as: "<h1>RD প্ৰিণ্ট & ডিজাইন ছলিউচনচলৈ স্বাগতম</h1><img src='assets/images/rishav_das.jpg' alt='প্ৰোফাইল' width='200'><p>সৃষ্টিশীল প্ৰিণ্ট আৰু DTP সেৱা।</p>"
  },
  about: {
    en: "<h2>About Me</h2><p>I am Rakesh Das from Barpeta Town. I specialize in DTP, book layout, and design work.</p>",
    as: "<h2>মোৰ বিষয়ে</h2><p>মই ৰাকেশ দাস, বৰপেটা টাউনৰ পৰা। মই ডিটিপি, কিতাপ সাজনি আৰু ডিজাইনৰ কাম কৰোঁ।</p>"
  },
  portfolio: {
    en: "<h2>Portfolio</h2><ul><li><a href='assets/pdf/dtp_sample.pdf'>DTP Sample PDF</a></li><li><a href='assets/pdf/marriage_sample.pdf'>Marriage Card PDF</a></li><li><a href='assets/pdf/typing_sample.pdf'>Typing Sample PDF</a></li></ul><button disabled>Upload Your Work (Coming Soon)</button>",
    as: "<h2>পৰ্টফলিঅ'</h2><ul><li><a href='assets/pdf/dtp_sample.pdf'>DTP চ্যাম্পল PDF</a></li><li><a href='assets/pdf/marriage_sample.pdf'>বিয়া কাৰ্ড PDF</a></li><li><a href='assets/pdf/typing_sample.pdf'>টাইপিং চ্যাম্পল PDF</a></li></ul><button disabled>আপোনাৰ কাম আপল'ড কৰক (সোনকালে আহি আছে)</button>"
  },
  contact: {
    en: "<h2>Contact Me</h2><p>Email: rakeshdas190@gmail.com<br>Phone: 6003529909</p>",
    as: "<h2>যোগাযোগ কৰক</h2><p>ই-মেইল: rakeshdas190@gmail.com<br>ফোন: 6003529909</p>"
  }
};
let currentLang = "en";
function navigate(page) {
  document.getElementById('content').innerHTML = pages[page][currentLang];
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
