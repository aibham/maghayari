// Editable data: payment links (PAY), template previews (PV), page titles (TT)
// لینک پرداخت هر فایل را در PAY بگذارید؛ اگر خالی باشد دکمه به بخش «ارتباط» می‌رود.
const TT={fa:'علی | حسابدار و مشاور مالی و مالیاتی',en:'Ali | Accountant & Tax Advisor'};
const PAY={acc:'',bud:'',pay:'',dep:''};
const PV={
acc:{c:['کد|Code','حساب|Account','بدهکار|Debit','بستانکار|Credit'],r:[['1101','صندوق|Cash','25,000,000','—'],['1201','بانک|Bank','480,000,000','—'],['2101','حساب‌های پرداختنی|Accounts payable','—','310,000,000'],['4101','درآمد فروش|Sales revenue','—','1,250,000,000']],n:'ریال؛ مقادیر نمونه|Rial; sample values'},
bud:{c:['شرح|Item','ماه ۱|Month 1','ماه ۲|Month 2','جمع|Total'],r:[['درآمد خدمات|Service revenue','120','130','250'],['هزینه حقوق|Payroll cost','60','60','120'],['هزینه اداری|Admin expenses','15','18','33'],['سود عملیاتی|Operating profit','45','52','97']],n:'میلیون تومان؛ مقادیر نمونه|Million Toman; sample values'},
pay:{c:['کارمند|Employee','حقوق پایه|Base salary','بیمه سهم کارمند|Employee insurance','خالص پرداختی|Net pay'],r:[['کارمند ۱|Employee 1','18,000,000','1,260,000','16,740,000'],['کارمند ۲|Employee 2','24,000,000','1,680,000','22,320,000'],['کارمند ۳|Employee 3','15,000,000','1,050,000','13,950,000']],n:'تومان؛ نمونه ساده‌شده بدون مالیات و مزایا|Toman; simplified sample, excluding tax and benefits'},
dep:{c:['دارایی|Asset','بهای تمام‌شده|Cost','نرخ|Rate','استهلاک سالانه|Annual depreciation'],r:[['اثاثه اداری|Office furniture','500,000,000','10%','50,000,000'],['تجهیزات رایانه‌ای|Computer equipment','300,000,000','15%','75,000,000'],['ماشین‌آلات|Machinery','1,200,000,000','20%','240,000,000']],n:'ریال؛ نرخ‌ها صرفاً نمونه‌اند|Rial; rates are illustrative only'}};
