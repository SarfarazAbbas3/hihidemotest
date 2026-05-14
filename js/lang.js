(function(){
'use strict';

// ALL keys matching EXACTLY what data-i18n attributes use in HTML
var T={
en:{
  _btn:'🇬🇧 EN', _hello:'Hello',
  topbar_address:'Majeed Colony Landhi Karachi',
  nav_order:'Place Order',
  hero_welcome:'Welcome to', hero_title:'HiHi Digitizing Services',
  about_para1:"We're a team of passionate embroidery experts dedicated to delivering high-quality digitizing solutions",
  follow_us:'Follow Us:',
  about_label:'About Hihi Digitizing Service',
  about_title:'Welcome to HiHi Digitizing Services',
  about_para2:'HiHi Digitizing is dedicated to delivering exceptional digitizing services for embroidery professionals. With a passion for precision and detail, our team expertly converts complex designs into stitch-perfect files.',
  stat_business:'Business Consulting', stat_expertise:'Year Of Expertise', stat_callus:'Call Us',
  services_label:'Our Services', services_title:'Quality Digitizing at Reasonable Price',
  svc_emb:'Embroidery Digitizing', svc_vector:'Raster to Vector', svc_vector2:'Raster to Vector',
  svc_emb_desc:'From logos to intricate designs, we digitize images with precision and attention to detail, ensuring smooth, high-quality stitches for every project.',
  svc_vec_desc:'Get crisp, scalable vector files perfect for printing. We expertly convert raster images into clean, editable vector files.',
  why_title:'Why Choose Hihi Digitizing Services?',
  why_1:'Quick Turnaround Time with Top-Quality Results',
  why_2:'Building Strong Relationships through Effective Communication',
  why_3:'Unlimited Revisions for Your Satisfaction',
  why_4:'Reasonable Pricing without Compromising Quality',
  why_para2:'We understand the importance of meeting deadlines. Our team delivers high-quality designs quickly to meet your production schedule.',
  why_para3:'We believe in fostering strong relationships with open and transparent communication.',
  why_para4:'We offer competitive pricing without sacrificing quality.',
  pricing_label:'Pricing', team_label:'Meet Our Advisers',
  price_time1:'Turnaround Time 2 to 4 hours', price_hats:'Hats, Beanies, Visors',
  price_chest:'L Chest, R Chest, Sleeves', price_time2:'Turnaround Time 6 to 10 hours',
  portfolio_label:'Our Portfolio', testimonial_label:'Testimonial',
  contact_label_cta:'Get In Touch',
  footer_quick:'Quick Links', footer_support:'Support', footer_contact:'Contact Info',
  footer_service:'Service', footer_contactus:'Contact us',
  nav_home:'Home', nav_about:'About', nav_services:'Services',
  nav_portfolio:'Portfolio', nav_contact:'Contact Us',
  top_register:'Register', top_login:'Login', top_logout:'Logout', top_placeorder:'Place Order',
},
ur:{
  _btn:'🇵🇰 UR', _hello:'خوش آمدید',
  topbar_address:'مجید کالونی لانڈھی کراچی',
  nav_order:'آرڈر دیں',
  hero_welcome:'خوش آمدید', hero_title:'ہی ہی ڈیجیٹائزنگ سروسز',
  about_para1:'ہم ایمبرائیڈری کے ماہرین کی ٹیم ہیں جو اعلیٰ معیار کی ڈیجیٹائزنگ خدمات فراہم کرتے ہیں',
  follow_us:'ہمیں فالو کریں:',
  about_label:'ہی ہی ڈیجیٹائزنگ کے بارے میں',
  about_title:'ہی ہی ڈیجیٹائزنگ میں خوش آمدید',
  about_para2:'ہی ہی ڈیجیٹائزنگ پیشہ ور افراد کے لیے بہترین ڈیجیٹائزنگ خدمات دینے کے لیے پرعزم ہے۔ ہماری ٹیم پیچیدہ ڈیزائنوں کو بہترین سٹچ فائلوں میں تبدیل کرتی ہے۔',
  stat_business:'کاروباری مشاورت', stat_expertise:'سال کا تجربہ', stat_callus:'ہمیں کال کریں',
  services_label:'ہماری خدمات', services_title:'معقول قیمت پر معیاری ڈیجیٹائزنگ',
  svc_emb:'ایمبرائیڈری ڈیجیٹائزنگ', svc_vector:'ریسٹر سے ویکٹر', svc_vector2:'ریسٹر سے ویکٹر',
  svc_emb_desc:'لوگو سے پیچیدہ ڈیزائنوں تک، ہم درستگی کے ساتھ ڈیجیٹائز کرتے ہیں۔',
  svc_vec_desc:'پرنٹنگ کے لیے واضح ویکٹر فائلیں حاصل کریں۔ ہم ریسٹر تصاویر کو قابل ترمیم ویکٹر فائلوں میں تبدیل کرتے ہیں۔',
  why_title:'ہی ہی ڈیجیٹائزنگ کیوں منتخب کریں؟',
  why_1:'اعلیٰ معیار کے ساتھ فوری ڈیلیوری',
  why_2:'مؤثر رابطے سے مضبوط تعلقات',
  why_3:'آپ کی تسلی کے لیے لامحدود ترامیم',
  why_4:'معیار پر سمجھوتہ کیے بغیر معقول قیمت',
  why_para2:'ہم ڈیڈ لائن کی اہمیت سمجھتے ہیں اور فوری اعلیٰ معیار کے ڈیزائن فراہم کرتے ہیں۔',
  why_para3:'ہم شفاف رابطے کے ذریعے اپنے کلائنٹس کے ساتھ مضبوط تعلقات قائم کرتے ہیں۔',
  why_para4:'ہم معیار پر سمجھوتہ کیے بغیر مسابقتی قیمتیں پیش کرتے ہیں۔',
  pricing_label:'قیمتیں', team_label:'ہمارے ماہرین',
  price_time1:'ڈیلیوری وقت 2 سے 4 گھنٹے', price_hats:'ٹوپیاں، بینیاں، وائزرز',
  price_chest:'بائیں/دائیں سینہ، آستین', price_time2:'ڈیلیوری وقت 6 سے 10 گھنٹے',
  portfolio_label:'ہماری پورٹ فولیو', testimonial_label:'تعریفیں',
  contact_label_cta:'ابھی رابطہ کریں',
  footer_quick:'فوری لنکس', footer_support:'سپورٹ', footer_contact:'رابطہ کی معلومات',
  footer_service:'خدمات', footer_contactus:'رابطہ کریں',
  nav_home:'ہوم', nav_about:'ہمارے بارے میں', nav_services:'خدمات',
  nav_portfolio:'پورٹ فولیو', nav_contact:'رابطہ کریں',
  top_register:'رجسٹر', top_login:'لاگ ان', top_logout:'لاگ آؤٹ', top_placeorder:'آرڈر دیں',
},
ar:{
  _btn:'🇸🇦 AR', _hello:'أهلاً',
  topbar_address:'ماجيد كولوني لانذي كراتشي، باكستان',
  nav_order:'اطلب الآن',
  hero_welcome:'مرحباً بكم في', hero_title:'خدمات هيهي للرقمنة',
  about_para1:'نحن فريق من خبراء التطريز المتخصصين في تقديم حلول رقمنة عالية الجودة',
  follow_us:'تابعونا:',
  about_label:'عن خدمة هيهي للرقمنة',
  about_title:'مرحباً بكم في هيهي للرقمنة',
  about_para2:'هيهي للرقمنة متخصصة في تقديم خدمات استثنائية لمحترفي التطريز بدقة واهتمام بالتفاصيل.',
  stat_business:'استشارات الأعمال', stat_expertise:'سنوات الخبرة', stat_callus:'اتصل بنا',
  services_label:'خدماتنا', services_title:'رقمنة عالية الجودة بأسعار معقولة',
  svc_emb:'رقمنة التطريز', svc_vector:'تحويل النقطي إلى متجه', svc_vector2:'تحويل النقطي إلى متجه',
  svc_emb_desc:'من الشعارات إلى التصاميم المعقدة، نرقمن الصور بدقة واهتمام.',
  svc_vec_desc:'احصل على ملفات متجه واضحة وقابلة للتوسيع مثالية للطباعة.',
  why_title:'لماذا تختار هيهي للرقمنة؟',
  why_1:'سرعة التسليم مع نتائج عالية الجودة',
  why_2:'بناء علاقات قوية بالتواصل الفعّال',
  why_3:'مراجعات غير محدودة لرضاكم',
  why_4:'أسعار معقولة دون المساس بالجودة',
  why_para2:'نفهم أهمية الالتزام بالمواعيد. فريقنا يسلم تصاميم عالية الجودة بسرعة.',
  why_para3:'نؤمن ببناء علاقات قوية من خلال التواصل الشفاف.',
  why_para4:'نقدم أسعاراً تنافسية دون التنازل عن الجودة.',
  pricing_label:'الأسعار', team_label:'فريق الخبراء',
  price_time1:'وقت التسليم 2-4 ساعات', price_hats:'القبعات والبيني والوايزر',
  price_chest:'الصدر الأيسر/الأيمن، الأكمام', price_time2:'وقت التسليم 6-10 ساعات',
  portfolio_label:'معرض أعمالنا', testimonial_label:'آراء العملاء',
  contact_label_cta:'تواصل معنا',
  footer_quick:'روابط سريعة', footer_support:'الدعم', footer_contact:'معلومات التواصل',
  footer_service:'الخدمات', footer_contactus:'تواصل معنا',
  nav_home:'الرئيسية', nav_about:'من نحن', nav_services:'خدماتنا',
  nav_portfolio:'معرض الأعمال', nav_contact:'تواصل معنا',
  top_register:'تسجيل', top_login:'دخول', top_logout:'خروج', top_placeorder:'اطلب الآن',
},
tr:{
  _btn:'🇹🇷 TR', _hello:'Merhaba',
  topbar_address:'Majeed Colony Landhi Karachi, Pakistan',
  nav_order:'Sipariş Ver',
  hero_welcome:'Hoş Geldiniz', hero_title:'HiHi Dijitalleştirme Hizmetleri',
  about_para1:'Yüksek kaliteli dijitalleştirme çözümleri sunan tutkulu nakış uzmanlarından oluşan bir ekibiz.',
  follow_us:'Bizi Takip Edin:',
  about_label:'HiHi Dijitalleştirme Hakkında',
  about_title:'HiHi Dijitalleştirme Hizmetlerine Hoş Geldiniz',
  about_para2:'HiHi Dijitalleştirme, nakış profesyonelleri için olağanüstü hizmetler sunmaya adanmıştır. Ekibimiz karmaşık tasarımları mükemmel dikiş dosyalarına dönüştürür.',
  stat_business:'İş Danışmanlığı', stat_expertise:'Yıllık Deneyim', stat_callus:'Bizi Arayın',
  services_label:'Hizmetlerimiz', services_title:'Makul Fiyata Kaliteli Dijitalleştirme',
  svc_emb:'Nakış Dijitalleştirme', svc_vector:'Taramalıdan Vektöre', svc_vector2:'Taramalıdan Vektöre',
  svc_emb_desc:'Logolardan karmaşık tasarımlara kadar hassasiyetle dijitalleştirme yapıyoruz.',
  svc_vec_desc:'Baskı için mükemmel, net ve ölçeklenebilir vektör dosyaları elde edin.',
  why_title:'Neden HiHi Dijitalleştirme?',
  why_1:'Üst Düzey Sonuçlarla Hızlı Teslim',
  why_2:'Etkili İletişimle Güçlü İlişkiler',
  why_3:'Sınırsız Revizyon',
  why_4:'Kaliteden Ödün Vermeden Makul Fiyat',
  why_para2:'Son teslim tarihlerine uymak kritiktir. Ekibimiz kaliteli tasarımları hızla teslim eder.',
  why_para3:'Müşterilerimizle açık iletişimle güçlü ilişkiler kuruyoruz.',
  why_para4:'Kaliteden ödün vermeden rekabetçi fiyatlar sunuyoruz.',
  pricing_label:'Fiyatlandırma', team_label:'Uzmanlarımız',
  price_time1:'Teslim Süresi 2-4 Saat', price_hats:'Şapkalar, Bereler',
  price_chest:'Sol/Sağ Göğüs, Kollar', price_time2:'Teslim Süresi 6-10 Saat',
  portfolio_label:'Portföyümüz', testimonial_label:'Müşteri Yorumları',
  contact_label_cta:'İletişime Geçin',
  footer_quick:'Hızlı Bağlantılar', footer_support:'Destek', footer_contact:'İletişim Bilgileri',
  footer_service:'Hizmetler', footer_contactus:'İletişim',
  nav_home:'Ana Sayfa', nav_about:'Hakkımızda', nav_services:'Hizmetler',
  nav_portfolio:'Portföy', nav_contact:'İletişim',
  top_register:'Kayıt Ol', top_login:'Giriş', top_logout:'Çıkış', top_placeorder:'Sipariş Ver',
},
es:{
  _btn:'🇪🇸 ES', _hello:'Hola',
  topbar_address:'Majeed Colony Landhi Karachi, Pakistán',
  nav_order:'Hacer Pedido',
  hero_welcome:'Bienvenido a', hero_title:'Servicios HiHi Digitizing',
  about_para1:'Somos un equipo de expertos en bordado dedicados a ofrecer soluciones de digitalización de alta calidad.',
  follow_us:'Síguenos:',
  about_label:'Acerca de HiHi Digitizing',
  about_title:'Bienvenido a HiHi Digitizing',
  about_para2:'HiHi Digitizing está dedicada a ofrecer servicios excepcionales para profesionales del bordado.',
  stat_business:'Consultoría', stat_expertise:'Años de Experiencia', stat_callus:'Llámenos',
  services_label:'Nuestros Servicios', services_title:'Digitalización de Calidad a Precio Razonable',
  svc_emb:'Digitalización de Bordado', svc_vector:'Raster a Vector', svc_vector2:'Raster a Vector',
  svc_emb_desc:'Desde logotipos hasta diseños complejos, digitalizamos con precisión.',
  svc_vec_desc:'Obtenga archivos vectoriales nítidos y escalables perfectos para impresión.',
  why_title:'¿Por qué elegir HiHi Digitizing?',
  why_1:'Entrega rápida con alta calidad',
  why_2:'Relaciones sólidas con comunicación efectiva',
  why_3:'Revisiones ilimitadas para su satisfacción',
  why_4:'Precios razonables sin comprometer calidad',
  why_para2:'Entendemos los plazos. Nuestro equipo entrega diseños rápidamente.',
  why_para3:'Creemos en relaciones sólidas con comunicación transparente.',
  why_para4:'Ofrecemos precios competitivos sin sacrificar la calidad.',
  pricing_label:'Precios', team_label:'Nuestros Expertos',
  price_time1:'Entrega en 2-4 horas', price_hats:'Sombreros, Gorros',
  price_chest:'Pecho Izq/Der, Mangas', price_time2:'Entrega en 6-10 horas',
  portfolio_label:'Nuestro Portafolio', testimonial_label:'Testimonios',
  contact_label_cta:'Contáctenos',
  footer_quick:'Enlaces Rápidos', footer_support:'Soporte', footer_contact:'Información de Contacto',
  footer_service:'Servicios', footer_contactus:'Contacto',
  nav_home:'Inicio', nav_about:'Nosotros', nav_services:'Servicios',
  nav_portfolio:'Portafolio', nav_contact:'Contacto',
  top_register:'Registrarse', top_login:'Ingresar', top_logout:'Salir', top_placeorder:'Hacer Pedido',
},
fr:{
  _btn:'🇫🇷 FR', _hello:'Bonjour',
  topbar_address:'Majeed Colony Landhi Karachi, Pakistan',
  nav_order:'Commander',
  hero_welcome:'Bienvenue chez', hero_title:'Services HiHi Digitizing',
  about_para1:"Nous sommes une équipe d'experts en broderie dédiés à fournir des solutions de numérisation de haute qualité.",
  follow_us:'Suivez-nous:',
  about_label:'À propos de HiHi Digitizing',
  about_title:'Bienvenue chez HiHi Digitizing',
  about_para2:"HiHi Digitizing est dédiée à fournir des services exceptionnels aux professionnels de la broderie.",
  stat_business:"Conseil d'entreprise", stat_expertise:"Années d'expérience", stat_callus:'Appelez-nous',
  services_label:'Nos Services', services_title:'Numérisation de qualité à prix raisonnable',
  svc_emb:'Numérisation de Broderie', svc_vector:'Raster vers Vecteur', svc_vector2:'Raster vers Vecteur',
  svc_emb_desc:'Des logos aux designs complexes, nous numérisons avec précision.',
  svc_vec_desc:"Obtenez des fichiers vectoriels nets parfaits pour l'impression.",
  why_title:'Pourquoi choisir HiHi Digitizing?',
  why_1:'Délai rapide avec haute qualité',
  why_2:'Relations solides par communication efficace',
  why_3:'Révisions illimitées pour votre satisfaction',
  why_4:'Prix raisonnables sans compromettre la qualité',
  why_para2:"Nous respectons les délais. Notre équipe livre rapidement des designs de haute qualité.",
  why_para3:"Nous construisons des relations solides par une communication ouverte.",
  why_para4:"Nous offrons des prix compétitifs sans sacrifier la qualité.",
  pricing_label:'Tarifs', team_label:'Nos Experts',
  price_time1:'Livraison en 2-4 heures', price_hats:'Chapeaux, Bonnets',
  price_chest:'Poitrine G/D, Manches', price_time2:'Livraison en 6-10 heures',
  portfolio_label:'Notre Portfolio', testimonial_label:'Témoignages',
  contact_label_cta:'Prendre Contact',
  footer_quick:'Liens Rapides', footer_support:'Support', footer_contact:'Informations de Contact',
  footer_service:'Services', footer_contactus:'Contact',
  nav_home:'Accueil', nav_about:'À propos', nav_services:'Services',
  nav_portfolio:'Portfolio', nav_contact:'Contact',
  top_register:"S'inscrire", top_login:'Connexion', top_logout:'Déconnexion', top_placeorder:'Commander',
},
};

// ── Switcher HTML ──
var SW='<div id="hdlw" style="position:relative;display:inline-flex;align-items:center;margin-right:6px">'
+'<button id="hdlb" onclick="hdLG(event)" style="background:#fff;border:1.5px solid #dde;border-radius:20px;'
+'padding:3px 9px 3px 8px;cursor:pointer;font-size:12px;font-weight:600;color:#333;'
+'display:flex;align-items:center;gap:4px;box-shadow:0 1px 4px rgba(0,0,0,.08);white-space:nowrap">'
+'<svg width="12" height="12" viewBox="0 0 24 24" fill="#0d6efd" style="flex-shrink:0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'
+'<span id="hdll">🇬🇧 EN</span>'
+'<svg width="9" height="9" viewBox="0 0 24 24" fill="#999"><path d="M7 10l5 5 5-5z"/></svg>'
+'</button>'
+'<div id="hdlm" style="display:none;position:absolute;top:calc(100% + 5px);right:0;background:#fff;'
+'border:1px solid #e5e5e5;border-radius:12px;box-shadow:0 8px 25px rgba(0,0,0,.13);'
+'min-width:148px;z-index:99999;overflow:hidden">'
+'<div style="padding:4px 0">'
+'<div class="hdlo" data-l="en" style="padding:8px 14px;cursor:pointer;font-size:13px" onmouseover="this.style.background=\'#f0f4ff\'" onmouseout="this.style.background=\'\'">🇬🇧 English</div>'
+'<div class="hdlo" data-l="ur" style="padding:8px 14px;cursor:pointer;font-size:13px" onmouseover="this.style.background=\'#f0f4ff\'" onmouseout="this.style.background=\'\'">🇵🇰 اردو</div>'
+'<div class="hdlo" data-l="ar" style="padding:8px 14px;cursor:pointer;font-size:13px" onmouseover="this.style.background=\'#f0f4ff\'" onmouseout="this.style.background=\'\'">🇸🇦 العربية</div>'
+'<div class="hdlo" data-l="tr" style="padding:8px 14px;cursor:pointer;font-size:13px" onmouseover="this.style.background=\'#f0f4ff\'" onmouseout="this.style.background=\'\'">🇹🇷 Türkçe</div>'
+'<div class="hdlo" data-l="es" style="padding:8px 14px;cursor:pointer;font-size:13px" onmouseover="this.style.background=\'#f0f4ff\'" onmouseout="this.style.background=\'\'">🇪🇸 Español</div>'
+'<div class="hdlo" data-l="fr" style="padding:8px 14px;cursor:pointer;font-size:13px" onmouseover="this.style.background=\'#f0f4ff\'" onmouseout="this.style.background=\'\'">🇫🇷 Français</div>'
+'</div></div></div>';

window.hdLG=function(e){
  e.stopPropagation();
  var m=document.getElementById('hdlm');
  m.style.display=m.style.display==='block'?'none':'block';
};
document.addEventListener('click',function(){
  var m=document.getElementById('hdlm');
  if(m) m.style.display='none';
});

// Replace text-nodes only — NEVER touch child elements or CSS
function hdST(el,txt){
  if(!el||txt===undefined) return;
  var found=false;
  el.childNodes.forEach(function(n){
    if(n.nodeType===3){
      if(!found){n.textContent=txt; found=true;}
      else n.textContent='';
    }
  });
  if(!found && el.children.length===0) el.textContent=txt;
}

function hdApply(code){
  var L=T[code]||T.en;
  try{localStorage.setItem('hd_lang',code);}catch(e){}

  // Update dropdown button label
  var lb=document.getElementById('hdll');
  if(lb) lb.textContent=L._btn;

  // Highlight selected option
  document.querySelectorAll('.hdlo').forEach(function(o){
    var active=o.getAttribute('data-l')===code;
    o.style.fontWeight=active?'700':'500';
    o.style.color=active?'#0d6efd':'#222';
  });

  // ── Translate ALL [data-i18n] elements by exact key match ──
  Object.keys(L).forEach(function(key){
    if(key.charAt(0)==='_') return;
    document.querySelectorAll('[data-i18n="'+key+'"]').forEach(function(el){
      hdST(el,L[key]);
    });
  });

  // ── Navbar links ──
  var NM={Home:L.nav_home,About:L.nav_about,Services:L.nav_services,
          Portfolio:L.nav_portfolio,'Contact Us':L.nav_contact};
  document.querySelectorAll('.navbar-nav .nav-link,.navbar-nav .nav-item.nav-link').forEach(function(el){
    if(el.getAttribute('data-i18n')) return;
    var orig=el.getAttribute('data-orig')||el.textContent.trim();
    el.setAttribute('data-orig',orig);
    if(NM[orig]) el.textContent=NM[orig];
  });

  // ── Navbar CTA "Place Order" button ──
  document.querySelectorAll('a.btn.rounded-pill').forEach(function(el){
    if(el.id&&el.id.indexOf('hd')===0) return;
    var orig=(el.getAttribute('data-orig')||el.textContent.trim()).toLowerCase().trim();
    if(!el.getAttribute('data-orig')) el.setAttribute('data-orig',el.textContent.trim());
    if(/^(place order|get started|sipari[sş] ver|commander|hacer pedido|آرڈر دیں|اطلب الآن|注文する)$/.test(orig)){
      el.textContent=L.nav_order;
    }
  });

  // ── Topbar: Register / Login (guest) ──
  var g=document.querySelectorAll('#topbar-guest a small');
  if(g[0]){var i0=g[0].querySelector('i');g[0].textContent=L.top_register;if(i0)g[0].prepend(i0);}
  if(g[1]){var i1=g[1].querySelector('i');g[1].textContent=L.top_login;if(i1)g[1].prepend(i1);}

  // ── Topbar: logged-in links ──
  var oa=document.querySelector('#topbar-loggedin a[href="order.html"] small');
  if(oa){var ioa=oa.querySelector('i');oa.textContent=L.top_placeorder;if(ioa)oa.prepend(ioa);}
  var la=document.querySelector('#topbar-logout small');
  if(la){var ila=la.querySelector('i');la.textContent=L.top_logout;if(ila)la.prepend(ila);}
  var he=document.querySelector('#topbar-loggedin > small');
  if(he){var ihe=he.querySelector('i');var nu=document.getElementById('topbar-username');
    he.textContent=(L._hello||'Hello')+', '+(nu?nu.textContent:'');if(ihe)he.prepend(ihe);}

  // ── Footer h4 headings ──
  var FH={'Quick Links':L.footer_quick,'Support':L.footer_support,'Contact Info':L.footer_contact};
  document.querySelectorAll('.footer-item h4').forEach(function(el){
    var o=el.getAttribute('data-orig')||el.textContent.trim();
    el.setAttribute('data-orig',o);
    if(FH[o]) el.textContent=FH[o];
  });

  // ── Footer links ──
  var FL={'About Us':L.nav_about,'Service':L.footer_service,'Portfolio':L.nav_portfolio,
          'Contact us':L.footer_contactus,'Contact Us':L.nav_contact};
  document.querySelectorAll('.footer-item a').forEach(function(el){
    var ic=el.querySelector('i');
    var o=el.getAttribute('data-orig')||el.textContent.trim();
    el.setAttribute('data-orig',o);
    if(FL[o]){el.textContent=FL[o];if(ic)el.prepend(ic);}
  });

  document.getElementById('hdlm').style.display='none';
}

// ── Inject switcher + init ──
function hdInit(){
  var guest=document.getElementById('topbar-guest');
  if(!guest) return;
  if(!document.getElementById('hdlw')){
    guest.insertAdjacentHTML('beforebegin',SW);
    document.querySelectorAll('.hdlo').forEach(function(o){
      o.addEventListener('click',function(){hdApply(o.getAttribute('data-l'));});
    });
  }
  var saved='en';
  try{saved=localStorage.getItem('hd_lang')||'en';}catch(e){}
  hdApply(saved);
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){setTimeout(hdInit,300);});
}else{
  setTimeout(hdInit,300);
}

})();
