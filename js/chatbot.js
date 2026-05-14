(function(){
var LOGO='./img/logo png.png';
var s=document.createElement('style');
s.textContent=
'#hd-fab{position:fixed;bottom:80px;right:26px;width:56px;height:56px;'
+'background:linear-gradient(135deg,#0d6efd,#0052cc);border-radius:50%;border:2.5px solid rgba(255,255,255,.5);'
+'cursor:pointer;z-index:9990;display:flex;align-items:center;justify-content:center;'
+'box-shadow:0 4px 20px rgba(13,110,253,.55);transition:all .2s;padding:0}'
+'#hd-fab:hover{transform:scale(1.1)}'
+'#hd-fi{width:40px;height:40px;object-fit:contain;border-radius:50%;background:#fff;padding:4px}'
+'#hd-badge{position:absolute;top:-2px;right:-2px;background:#e74c3c;color:#fff;'
+'border-radius:50%;width:17px;height:17px;font-size:10px;font-weight:700;'
+'display:flex;align-items:center;justify-content:center;pointer-events:none}'
+'#hd-box{position:fixed;bottom:148px;right:26px;width:345px;'
+'background:#fff;border-radius:18px;overflow:hidden;z-index:9991;'
+'box-shadow:0 16px 50px rgba(0,0,0,.18);display:none;flex-direction:column;'
+'border:1px solid rgba(13,110,253,.12);font-family:Inter,system-ui,sans-serif;'
+'min-height:380px;max-height:500px}'
+'#hd-box.open{display:flex;animation:hdUp .25s ease}'
+'@keyframes hdUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}'
+'.hd-hd{background:linear-gradient(135deg,#0d6efd,#0052cc);padding:12px 14px;'
+'display:flex;align-items:center;justify-content:space-between;flex-shrink:0}'
+'.hd-hl{display:flex;align-items:center;gap:9px}'
+'.hd-av{width:38px;height:38px;border-radius:50%;background:#fff;overflow:hidden;flex-shrink:0;'
+'display:flex;align-items:center;justify-content:center}'
+'.hd-av img{width:34px;height:34px;object-fit:contain}'
+'.hd-nm{color:#fff;font-weight:700;font-size:13.5px;margin:0}'
+'.hd-st{color:rgba(255,255,255,.82);font-size:10.5px;margin:0;display:flex;align-items:center;gap:3px}'
+'.hd-dot{width:6px;height:6px;background:#2ecc71;border-radius:50%;display:inline-block}'
+'.hd-x{background:rgba(255,255,255,.18);border:none;color:#fff;width:27px;height:27px;'
+'border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center}'
+'.hd-x:hover{background:rgba(255,255,255,.32)}'
+'.hd-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:9px;'
+'background:#f7f9ff;min-height:0}'
+'.hd-msgs::-webkit-scrollbar{width:3px}'
+'.hd-msgs::-webkit-scrollbar-thumb{background:#c8d5f0;border-radius:3px}'
+'.hd-b{max-width:88%;padding:9px 13px;border-radius:14px;font-size:13px;line-height:1.58;word-break:break-word}'
+'.hd-bot{background:#fff;color:#1a1a2e;border-radius:4px 14px 14px 14px;'
+'box-shadow:0 1px 5px rgba(0,0,0,.08);align-self:flex-start}'
+'.hd-usr{background:linear-gradient(135deg,#0d6efd,#0052cc);color:#fff;'
+'border-radius:14px 14px 4px 14px;align-self:flex-end}'
+'.hd-tw{align-self:flex-start}'
+'.hd-typ{display:flex;gap:4px;padding:9px 13px;background:#fff;'
+'border-radius:4px 14px 14px 14px;box-shadow:0 1px 5px rgba(0,0,0,.08)}'
+'.hd-typ span{width:7px;height:7px;background:#b0bdd0;border-radius:50%;animation:hdDt 1.2s infinite}'
+'.hd-typ span:nth-child(2){animation-delay:.2s}.hd-typ span:nth-child(3){animation-delay:.4s}'
+'@keyframes hdDt{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}'
+'.hd-qk{display:flex;flex-wrap:wrap;gap:4px;padding:7px 11px 5px;flex-shrink:0;'
+'background:#fff;border-top:1px solid #eef0f8}'
+'.hd-qb{background:#eef2ff;color:#0d6efd;border:none;border-radius:20px;'
+'padding:4px 11px;font-size:11.5px;cursor:pointer;font-weight:500;transition:.18s}'
+'.hd-qb:hover{background:#0d6efd;color:#fff}'
+'.hd-ft{padding:8px 10px 10px;border-top:1px solid #eef0f8;background:#fff;'
+'display:flex;gap:7px;align-items:flex-end;flex-shrink:0}'
+'.hd-inp{flex:1;border:1.5px solid #dde3f5;border-radius:12px;padding:8px 11px;font-size:13px;'
+'resize:none;outline:none;max-height:80px;font-family:inherit;background:#f9faff;transition:.2s}'
+'.hd-inp:focus{border-color:#0d6efd;background:#fff}'
+'.hd-s{width:36px;height:36px;border:none;border-radius:10px;cursor:pointer;'
+'background:linear-gradient(135deg,#0d6efd,#0052cc);display:flex;align-items:center;'
+'justify-content:center;flex-shrink:0;transition:.2s}'
+'.hd-s:hover{transform:scale(1.07)}'
+'.hd-s:disabled{opacity:.4;cursor:not-allowed;transform:none}'
+'.hd-s svg{width:15px;height:15px;fill:#fff}'
+'.hd-pw{text-align:center;font-size:10px;color:#b0b8cc;padding:3px 0 6px;background:#fff}'
+'@media(max-width:480px){'
+'#hd-box{width:calc(100vw - 14px);right:7px;bottom:142px;max-height:460px}'
+'#hd-fab{right:12px;bottom:76px}}';
document.head.appendChild(s);

document.body.insertAdjacentHTML('beforeend',
'<button id="hd-fab" title="Chat with Hihi AI">'
+'<img id="hd-fi" src="'+LOGO+'" alt="Hihi" onerror="this.style.display=\'none\'">'
+'<div id="hd-badge">1</div>'
+'</button>'
+'<div id="hd-box">'
+'<div class="hd-hd">'
+'<div class="hd-hl">'
+'<div class="hd-av"><img src="'+LOGO+'" alt="Hihi" onerror="this.parentElement.innerHTML=\'<span style=&quot;font-size:20px&quot;>&#x1F9F5;</span>\'"></div>'
+'<div><p class="hd-nm">Hihi Digitizing AI</p>'
+'<p class="hd-st"><span class="hd-dot"></span>&nbsp;Online &bull; Any Language</p></div>'
+'</div>'
+'<button class="hd-x" id="hd-xb">&#x2715;</button>'
+'</div>'
+'<div class="hd-msgs" id="hd-msgs">'
+'<div class="hd-b hd-bot">&#x1F44B; Hi! Welcome to <strong>Hihi Digitizing Services</strong>!<br><br>Ask me anything about our services, pricing, experience, file formats and more &mdash; in any language! &#x1F30D;</div>'
+'</div>'
+'<div class="hd-qk" id="hd-qk">'
+'<button class="hd-qb">&#x1F4B0; Pricing</button>'
+'<button class="hd-qb">&#x23F1; Turnaround</button>'
+'<button class="hd-qb">&#x1F4C1; Formats</button>'
+'<button class="hd-qb">&#x1F3A8; Services</button>'
+'<button class="hd-qb">&#x1F4CB; Experience</button>'
+'<button class="hd-qb">&#x1F4DE; Contact</button>'
+'</div>'
+'<div class="hd-ft">'
+'<textarea class="hd-inp" id="hd-inp" rows="1" placeholder="Type anything in any language..."></textarea>'
+'<button class="hd-s" id="hd-s"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>'
+'</div>'
+'<div class="hd-pw">Powered by Claude AI &bull; Hihi Digitizing</div>'
+'</div>');

// ══════════════════════════════════════════════════
// COMPLETE KNOWLEDGE BASE — Every Q&A + multilingual
// ══════════════════════════════════════════════════
var KB = [
  // Experience
  { q:['experience','how many years','years of experience','how long','kitne saal','تجربہ','سال','experience kitna'], 
    a:'✅ **11 Years of Experience!**\n\nHihi Digitizing has been providing professional embroidery digitizing services for almost **11 years**. With this experience, we deliver clean, production-ready, and machine-compatible files every time.' },

  // Clean files
  { q:['clean','production ready','production-ready','clean files','quality files','صاف فائل'],
    a:'✅ **Clean & Production-Ready Files**\n\nYes! We focus on delivering **clean and production-ready files**. Every file is properly digitized with correct underlay, pull compensation, and optimized stitch count for smooth production.' },

  // Small text
  { q:['small text','tiny text','small lettering','choti writing','چھوٹا ٹیکسٹ','small letters'],
    a:'✅ **Small Text Digitizing Available**\n\nYes, we digitize **small text** professionally. We use proper satin columns, correct density, and underlay settings to ensure small text looks sharp and runs clean on any machine.' },

  // 3D Puff
  { q:['3d puff','3d','puff','three dimension','utha hua','ابھرا','puff digitizing'],
    a:'✅ **Professional 3D Puff Digitizing**\n\nYes! We offer professional **3D Puff digitizing**. We set correct push compensation, density, and underlay specifically for foam/puff embroidery to get a perfect raised effect.' },

  // Cap files
  { q:['cap','hat','cap file','topi','ٹوپی','cap digitizing','hat file','cap optimized'],
    a:'✅ **Cap Files Properly Optimized**\n\nYes, our **cap files are properly optimized** — correct center start, proper underlay for curved surfaces, optimized pull compensation, and right stitch direction for clean cap embroidery every time.' },

  // Pull compensation
  { q:['pull compensation','pull comp','compensation','کھنچاؤ','pull'],
    a:'✅ **Manual Pull Compensation**\n\nYes, we apply **pull compensation manually** based on design type and fabric. This ensures the embroidery looks perfect when stitched — not stretched or distorted.' },

  // Density
  { q:['density','stitch density','densit','کثافت','tight stitches','loose stitches'],
    a:'✅ **Smart Density Management**\n\nDensity is **adjusted according to fabric and design type**. We use the right density for every fabric — cotton, polyester, caps, fleece, leather — to avoid thread breaks and puckering.' },

  // Trims & jumps
  { q:['trim','jump','trims','jumps','thread trim','jump stitch','صاف','clean jumps'],
    a:'✅ **Clean Trims & Jumps**\n\nYes! We keep **trims and jumps clean and minimal**. Proper sequencing means less thread waste, fewer manual trims, and faster production runs on your machine.' },

  // Fabric type
  { q:['fabric','fabric type','kapra','کپڑا','fleece','cotton','denim','leather','polyester'],
    a:'✅ **Fabric-Based Digitizing**\n\nYes! Files are **digitized based on fabric type**. We adjust underlay, density, and pull compensation differently for cotton, polyester, fleece, denim, leather, caps, and more.' },

  // File formats
  { q:['format','file format','dst','pes','emb','jef','vp3','فارمیٹ','which format','what format'],
    a:'✅ **All Major File Formats**\n\nWe provide:\n**DST, PES, EMB, JEF, VP3**, XXX, EXP, HUS, SEW, TAP and more.\n\nJust tell us your machine brand and we send the right format!' },

  // Machine compatible
  { q:['machine','compatible','tajima','barudan','brother','janome','singer','machine compatible','مشین','کون سی مشین'],
    a:'✅ **All Machines Supported**\n\nYes! Files are compatible with **Tajima, Barudan, Brother, Janome, Singer, Bernina, Pfaff, Happy, SWF**, and all other major embroidery machines.' },

  // Cap vs flat
  { q:['cap and flat','separate file','flat embroidery','cap separate','different file','الگ فائل'],
    a:'✅ **Separate Cap & Flat Files**\n\nYes! We can make **separate files for cap and flat embroidery** with different settings — cap files have center start, proper compensation, while flat files are optimized for flat hooping.' },

  // Vector files
  { q:['vector','vector file','vector chahiye','ai file','eps file','svg','ویکٹر','رسٹر'],
    a:'✅ **Vector Preferred, Images Also Work**\n\n**Vector files (AI, EPS, SVG) are preferred** for best results, but **JPG, PNG, PDF, PSD** also work fine. We can clean up and work with almost any file you send.' },

  // Turnaround time
  { q:['turnaround','how long','delivery time','kitna waqt','کتنا وقت','time','deliver','fast','کب تک'],
    a:'⏱ **Turnaround Time: 2–6 Hours!**\n\nStandard turnaround time is **2 to 6 hours**.\n\n• Urgent orders are also accepted\n• Weekends available too\n• Bulk orders: timeline discussed\n\nNeed it fast? WhatsApp: **+92 345 2669812**' },

  // Urgent orders
  { q:['urgent','rush','emergency','jaldi','جلدی','urgent order','same day','فوری'],
    a:'✅ **Urgent Orders Accepted!**\n\nYes, **urgent orders are accepted**! We understand production deadlines. Contact us on WhatsApp for urgent requests:\n📱 **+92 345 2669812**' },

  // Revisions
  { q:['revision','revisions','free revision','change','edit','correction','تبدیلی','ترمیم','free'],
    a:'✅ **Revisions Are FREE!**\n\nYes, **revisions are free** — we make changes until you are 100% satisfied with the result. No extra charge for corrections.' },

  // Weekends
  { q:['weekend','saturday','sunday','week end','ہفتہ','اتوار','sat','sun','available weekend'],
    a:'✅ **Available on Weekends!**\n\nYes, we are **available on weekends** as well. You can reach us any day via WhatsApp or email.' },

  // Bulk orders
  { q:['bulk','bulk order','many','multiple','lot of','زیادہ آرڈر','bulk discount','lots of orders'],
    a:'✅ **Bulk Orders Welcome!**\n\nYes, **bulk orders are welcome**! We handle large volumes efficiently.\n\n• Bulk discounts available\n• Consistent quality across all files\n• Contact us to discuss bulk pricing: **+92 345 2669812**' },

  // Pricing / how much
  { q:['price','pricing','cost','charge','how much','rate','fee','paise','پیسے','قیمت','كم','كلفة','fiyat'],
    a:'💰 **Our Pricing:**\n\n• **Cap & Left Chest** (under 5 inches): **$10**\n• **Jacket Back** (6 inches & above): **$20**\n• Complex designs may have extra charges\n• Bulk discounts available\n• **Editing is FREE** — no extra charge\n\nPayment: **PayPal preferred**\nFor custom quote: **+92 345 2669812**' },

  // Cap & left chest price
  { q:['cap price','left chest price','$10','10 dollar','chest logo price','cap logo'],
    a:'💰 **Cap & Left Chest Logo: $10**\n\nStandard pricing for **cap and left chest logos** (under 5 inches) is **$10**.\n\nFast turnaround, free revisions, all formats included!' },

  // Jacket back price
  { q:['jacket back','jacket price','back design','$20','20 dollar','back logo','jacket cost'],
    a:'💰 **Jacket Back Design: $20**\n\nYes, **jacket back designs cost $20** due to higher stitch count (6 inches and above).\n\nThis includes all formats, free revisions, and fast delivery!' },

  // Complex designs
  { q:['complex design','complicated','complex','difficult design','پیچیدہ','extra charge complex'],
    a:'💰 **Complex Designs**\n\nYes, **complex designs may require extra charges** depending on:\n• Stitch count\n• Number of colors\n• Small details / gradients\n\nSend us your design for an accurate quote: **+92 345 2669812**' },

  // Editing cost
  { q:['editing','edit charge','edit cost','editing fee','editing free','no charge edit'],
    a:'✅ **Editing is FREE!**\n\nNo, **editing is free of cost**. We make any changes or adjustments at no extra charge until you are fully satisfied.' },

  // Bulk discounts
  { q:['bulk discount','discount','offer','less price','سستا','ڈسکاؤنٹ','discount available'],
    a:'✅ **Bulk Discounts Available!**\n\nYes, **bulk discounts are available**! The more orders you place, the better the rate.\n\nContact us to discuss: **+92 345 2669812**\n📧 **hihidigitizing@gmail.com**' },

  // Sewout photos
  { q:['sewout','sew out','photo','video','sample','stitched sample','نمونہ','تصویر'],
    a:'📸 **Sewout Photos & Videos Available!**\n\nYes! **Sewout photos and videos are available** to show you the actual stitched result before you go into production.' },

  // Communication methods
  { q:['contact','communication','whatsapp','email','facebook','how to contact','reach','رابطہ','واٹس ایپ'],
    a:'📞 **Contact Hihi Digitizing:**\n\n• 📱 WhatsApp: **+92 345 2669812**\n• 📧 Email: **hihidigitizing@gmail.com**\n• 👥 Facebook: Hihi Digitizing Services\n\nWe reply within minutes!' },

  // Payment methods
  { q:['payment','pay','paypal','how to pay','payment method','ادائیگی','پیمنٹ'],
    a:'💳 **Payment Methods:**\n\nMultiple payment methods accepted.\n✅ **PayPal preferred**\n\nContact us to discuss payment options:\n📱 **+92 345 2669812**' },

  // Long term work
  { q:['long term','long-term','regular work','permanent','ongoing','collaboration','مستقل کام'],
    a:'🤝 **Long-Term Collaboration Welcome!**\n\nYes, **long-term collaboration is welcome**! We love building ongoing relationships with clients who need consistent, high-quality digitizing work.\n\nContact us: **+92 345 2669812**' },

  // Underlay
  { q:['underlay','under layer','underlay type','underlay use','base stitch','انڈرلے'],
    a:'✅ **Smart Underlay Usage**\n\n**Underlay is used according to fabric needs.** We select the correct underlay type (run, zigzag, edge walk, center walk) based on:\n• Fabric type\n• Design element (text, fill, satin)\n• Stitch direction\n\nThis ensures stability and clean top stitching.' },

  // Push & pull compensation
  { q:['push pull','push compensation','registration','push and pull','push&pull','دھکا کھنچاؤ'],
    a:'✅ **Push & Pull Compensation**\n\n**Push & pull compensation is properly managed** for every design. This prevents distortion, keeps registration accurate, and ensures the embroidery looks exactly as designed when stitched.' },

  // Stitch count optimization
  { q:['stitch count','optimize stitch','stitch optimiz','سٹچ کاؤنٹ','fewer stitches'],
    a:'✅ **Stitch Count Optimized**\n\nYes! **Stitch count is optimized** for smooth production. We remove unnecessary stitches while maintaining quality — faster runs, less thread usage, lower machine wear.' },

  // Thread breaks
  { q:['thread break','thread breaks','breaks','thread snapping','دھاگہ ٹوٹنا','thread snap'],
    a:'✅ **Minimizing Thread Breaks**\n\nFiles are **digitized to reduce thread breaks** by:\n• Correct density settings\n• Proper underlay\n• Smart tie-in and tie-off\n• Smooth stitch transitions\n• Fabric-specific settings' },

  // Registration issues
  { q:['registration','alignment','misalignment','registration issue','layer alignment','رجسٹریشن'],
    a:'✅ **Registration Issues Controlled**\n\n**Registration issues are carefully controlled** through:\n• Proper pull compensation\n• Correct underlay\n• Smart stitch sequencing\n• Center-start for caps\n• Fabric-appropriate density\n\nResult: perfect alignment in every file.' },

  // Services overview
  { q:['service','what do you do','what you offer','services','kya karte ho','کیا خدمات','services list'],
    a:'🧵 **Hihi Digitizing Services:**\n\n• **Embroidery Digitizing** (logos, text, artwork)\n• **Vector Conversion** (raster to vector)\n• **Patch Digitizing** (iron-on, sew-on)\n• **Cap/Hat Digitizing** (optimized)\n• **3D Puff Digitizing** (professional)\n• **Applique Digitizing**\n• **Jacket Back, Left Chest, Sleeve** placements\n\n11 years experience | Free revisions | Fast delivery' },

  // How to order
  { q:['order','how to order','place order','get started','start work','آرڈر','كيف','ordering'],
    a:'📦 **How to Order:**\n\n1. Send your design file (WhatsApp/Email)\n2. Mention placement, size & fabric type\n3. We confirm price and turnaround\n4. You approve → we digitize\n5. File delivered within **2–6 hours** ✅\n\n📱 **WhatsApp: +92 345 2669812**\n📧 **hihidigitizing@gmail.com**' },

  // Greeting
  { q:['hi','hello','hey','salam','salaam','assalam','hy','helo','مرحبا','ہیلو','السلام','خوش آمدید'],
    a:'👋 **Assalamu Alaikum! Welcome to Hihi Digitizing Services!**\n\nWe have **11 years of professional embroidery digitizing experience**.\n\nAsk me anything — pricing, services, formats, turnaround, or any other question!\n\n📱 WhatsApp: **+92 345 2669812**' },
];

// System prompt for Claude API
var SYS='You are a helpful AI assistant for Hihi Digitizing Services — a professional embroidery digitizing company with 11 years of experience.\n\n'
+'CRITICAL RULES:\n'
+'1. Always reply in the EXACT same language the user writes in.\n'
+'2. Answer EVERY question fully and helpfully.\n'
+'3. Never refuse to answer anything.\n\n'
+'KEY FACTS:\n'
+'• 11 years of digitizing experience\n'
+'• Services: Embroidery Digitizing, Vector Conversion, Patch, Cap, 3D Puff, Applique\n'
+'• Pricing: Cap/Left Chest (under 5 inches) = $10 | Jacket Back (6 inches+) = $20 | Complex = extra\n'
+'• Editing is FREE | Revisions are FREE\n'
+'• Turnaround: 2-6 hours standard | Urgent accepted\n'
+'• Formats: DST, PES, EMB, JEF, VP3, XXX, EXP, HUS and more\n'
+'• Machines: Tajima, Barudan, Brother, Janome, Singer, Bernina, Pfaff, Happy, SWF\n'
+'• Payment: PayPal preferred | Bulk discounts available\n'
+'• Available weekends | Long-term work welcome\n'
+'• Pull compensation applied manually | Density adjusted per fabric\n'
+'• Underlay used per fabric needs | Trims and jumps kept clean\n'
+'• Small text digitizing available | Sewout photos/videos available\n'
+'• Communication: WhatsApp +92 345 2669812 | Email: hihidigitizing@gmail.com | Facebook\n\n'
+'Keep answers concise and helpful. Use **bold** for key info.';

var hist=[];
var busy=false;

function getLocalAnswer(text){
  var t=text.toLowerCase().trim();
  // Check each KB entry
  for(var i=0;i<KB.length;i++){
    var entry=KB[i];
    for(var j=0;j<entry.q.length;j++){
      if(t.indexOf(entry.q[j])!==-1){
        return entry.a;
      }
    }
  }
  // Detect language for generic fallback
  var isUrdu=/[\u0600-\u06FF]/.test(text)&&/ہے|کیا|ہیں|کرو|کا|کی/.test(text);
  var isArabic=/[\u0600-\u06FF]/.test(text)&&!isUrdu;
  if(isUrdu) return '😊 آپ کے سوال کا شکریہ!\n\nمیں مدد کر سکتا ہوں:\n💰 قیمت | ⏱ وقت | 📁 فارمیٹ | 🧵 خدمات | 📞 رابطہ\n\n📱 واٹس ایپ: **+92 345 2669812**';
  if(isArabic) return '😊 شكراً لسؤالك!\n\nيمكنني المساعدة في:\n💰 الأسعار | ⏱ التسليم | 📁 الصيغ | 🧵 الخدمات\n\n📱 واتساب: **+92 345 2669812**';
  return '😊 Great question! Ask me about:\n\n💰 **Pricing** ($10 cap/chest, $20 jacket back)\n⏱ **Turnaround** (2-6 hours)\n📁 **Formats** (DST, PES, EMB, JEF, VP3...)\n🧵 **Services** (11 years experience!)\n📞 **Contact**: +92 345 2669812';
}

var fab=document.getElementById('hd-fab');
var box=document.getElementById('hd-box');
var xb=document.getElementById('hd-xb');
var msgs=document.getElementById('hd-msgs');
var inp=document.getElementById('hd-inp');
var sb=document.getElementById('hd-s');
var badge=document.getElementById('hd-badge');
var qk=document.getElementById('hd-qk');

function addMsg(text,who){
  var d=document.createElement('div');
  d.className='hd-b hd-'+who;
  if(who==='bot'){
    d.innerHTML=text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
      .replace(/\n/g,'<br>');
  } else {
    d.textContent=text;
  }
  msgs.appendChild(d);
  msgs.scrollTop=msgs.scrollHeight;
}

function showTyping(){
  var w=document.createElement('div');
  w.className='hd-tw';w.id='hd-typ';
  w.innerHTML='<div class="hd-typ"><span></span><span></span><span></span></div>';
  msgs.appendChild(w);msgs.scrollTop=msgs.scrollHeight;
}
function hideTyping(){var t=document.getElementById('hd-typ');if(t)t.remove();}

function send(text){
  text=(text||'').trim();
  if(!text||busy)return;
  busy=true;sb.disabled=true;
  qk.style.display='none';
  addMsg(text,'usr');
  inp.value='';inp.style.height='auto';
  showTyping();
  hist.push({role:'user',content:text});

  fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'anthropic-version':'2023-06-01',
      'anthropic-dangerous-direct-browser-access':'true'
    },
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:500,
      system:SYS,
      messages:hist.slice(-12)
    })
  })
  .then(function(r){if(!r.ok)throw new Error(r.status);return r.json();})
  .then(function(data){
    hideTyping();
    var reply=data&&data.content&&data.content[0]&&data.content[0].text;
    if(!reply)throw new Error('empty');
    hist.push({role:'assistant',content:reply});
    addMsg(reply,'bot');
  })
  .catch(function(){
    hideTyping();
    var reply=getLocalAnswer(text);
    hist.push({role:'assistant',content:reply});
    addMsg(reply,'bot');
  })
  .then(function(){busy=false;sb.disabled=false;});
}

fab.addEventListener('click',function(){box.classList.toggle('open');badge.style.display='none';});
xb.addEventListener('click',function(){box.classList.remove('open');});
sb.addEventListener('click',function(){send(inp.value);});
inp.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(inp.value);}});
inp.addEventListener('input',function(){inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,80)+'px';});

var QM={
  'Pricing':'What is your pricing for cap and jacket back?',
  'Turnaround':'What is your turnaround time?',
  'Formats':'Which file formats do you provide?',
  'Services':'What digitizing services do you offer?',
  'Experience':'How many years of experience do you have?',
  'Contact':'How can I contact Hihi Digitizing?'
};
document.querySelectorAll('.hd-qb').forEach(function(btn){
  btn.addEventListener('click',function(){
    var txt=btn.textContent.replace(/[^\w\s]/g,'').trim();
    send(QM[txt]||btn.textContent);
  });
});
})();
