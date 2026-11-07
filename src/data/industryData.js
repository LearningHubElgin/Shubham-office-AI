export const industries = [
  {
    id: 'clinic',
    tier: 'Clinic',
    name: 'Clinic',
    shortName: 'Clinic',
    startingPrice: 'Plans from ₹23,999 a year + GST',
    priceValue: '₹23,999/yr',
    accColor: '#11a297',
    accBright: '#5eead4',
    accBg: 'rgba(17, 162, 151, 0.12)',
    heroTitle: 'Run your clinic, from the first message to the next visit',
    tagline: 'Appointments, patients, prescriptions, bills and payments in one app — with an AI front desk that books on WhatsApp at any hour.',
    readyDayOne: [
      { text: 'A diary for each doctor, with services, fees and reminders' },
      { text: 'Patient records and files, prescriptions and visit summaries' },
      { text: 'GST bills and treatments paid in parts; estimates on Clinic Growth' },
      { text: 'Reports, follow-ups and broadcasts on WhatsApp' }
    ],
    workingNumbers: [
      { metric: '94%', label: 'Reduction in no-show patient appointments' },
      { metric: '< 20s', label: 'Average WhatsApp triage & slot booking time' },
      { metric: '3.8x', label: 'More recurring review check-ups booked' },
      { metric: '100%', label: 'Encrypted patient records kept in India' }
    ],
    chatSimulation: {
      clientName: 'Ramesh K',
      clientAvatar: 'RK',
      channelText: 'WhatsApp · Smile Dental Care',
      calendarBadge: 'Appointment booked · Sat, 10:30 am',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '9:48 pm', text: 'Hi, pallu vali. Saturday morning doctor iruka?' },
          { from: 'bot', time: '9:48 pm', text: 'Sorry to hear that, Ramesh. Saturday Dr. Priya 10:30 am, 11:15 am free. Consultation ₹300. Edhu vasathi?' },
          { from: 'user', time: '9:49 pm', text: '10:30 ok' },
          { from: 'bot', time: '9:49 pm', text: 'Booked! Sat 10:30 am, Dr. Priya. Friday evening oru reminder anuppuren.', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '9:48 pm', text: 'வணக்கம், பல் வலி அதிகமாக உள்ளது. சனிக்கிழமை காலை டாக்டர் இருப்பாரா?' },
          { from: 'bot', time: '9:48 pm', text: 'வணக்கம் ரமேஷ்! சனிக்கிழமை டாக்டர் பிரியா 10:30 am மற்றும் 11:15 am நேரங்களில் உள்ளார். கட்டணம் ₹300. எந்த நேரம் வசதி?' },
          { from: 'user', time: '9:49 pm', text: '10:30 மணி சரி.' },
          { from: 'bot', time: '9:49 pm', text: 'பதிவு செய்யப்பட்டது! சனிக்கிழமை காலை 10:30, டாக்டர் பிரியா. வெள்ளிக்கிழமை மாலை நினைவூட்டல் அனுப்புகிறோம்.', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '9:48 pm', text: 'Hi, severe toothache. Is the doctor available Saturday morning?' },
          { from: 'bot', time: '9:48 pm', text: 'Sorry to hear that, Ramesh. Dr. Priya has slots open Saturday at 10:30 am and 11:15 am. Consultation is ₹300. Which works for you?' },
          { from: 'user', time: '9:49 pm', text: '10:30 am is good.' },
          { from: 'bot', time: '9:49 pm', text: 'Booked! Saturday 10:30 am with Dr. Priya. We will send a reminder Friday evening.', isConfirmation: true }
        ]
      }
    }
  },
  {
    id: 'coaching',
    tier: 'Coaching Institute',
    name: 'Coaching Institute',
    shortName: 'Coaching Institute',
    startingPrice: 'Plans from ₹23,999 a year + GST',
    priceValue: '₹23,999/yr',
    accColor: '#7357ff',
    accBright: '#bcadff',
    accBg: 'rgba(115, 87, 255, 0.12)',
    heroTitle: 'Run your institute, from admission to the last instalment',
    tagline: 'Admissions, batches, attendance and fees in one app — with an AI counsellor that answers parents and books demo classes.',
    readyDayOne: [
      { text: 'An admissions board, tracking students from enquiry to joining' },
      { text: 'Batches and attendance, with absence alerts sent to parents' },
      { text: 'Fees in instalments, auto-reminded with 1-click UPI links' },
      { text: 'Receipts on letterhead, and broadcast announcements to a batch' }
    ],
    workingNumbers: [
      { metric: '99.2%', label: 'Parent open rate on test score WhatsApp alerts' },
      { metric: '3.4x', label: 'Faster fee collection cycle with UPI links' },
      { metric: '42%', label: 'Increase in trial class attendance' },
      { metric: '1,500+', label: 'Students managed seamlessly per branch' }
    ],
    chatSimulation: {
      clientName: 'Lakshmi S',
      clientAvatar: 'LS',
      channelText: 'WhatsApp · parent',
      calendarBadge: 'Demo class booked · Sat, 10:00 am',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '8:15 pm', text: 'Hi, en paiyan 11th. NEET batch iruka? Fees evlo?' },
          { from: 'bot', time: '8:15 pm', text: 'Iruku! NEET 2-year, evening 5–7 pm, Mon–Sat. Fees ₹48,000 — 4 instalments la kattalam. Saturday 10 am free demo class varalama?' },
          { from: 'user', time: '8:16 pm', text: 'Sari, varom. Paiyan peru Arjun.' },
          { from: 'bot', time: '8:16 pm', text: 'Done! Arjun-ku Sat 10:00 am demo class booked. Location anuppuren.', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '8:15 pm', text: 'வணக்கம், என் மகன் 11ஆம் வகுப்பு. NEET பேட்ச் உள்ளதா? கட்டணம் எவ்வளவு?' },
          { from: 'bot', time: '8:15 pm', text: 'வணக்கம்! 2 வருட NEET பயிற்சி, மாலை 5-7 மணி. கட்டணம் ₹48,000 (4 தவணைகளில் செலுத்தலாம்). சனிக்கிழமை காலை 10 மணி இலவச மாதிரி வகுப்பு வர முடியுமா?' },
          { from: 'user', time: '8:16 pm', text: 'சரி வருகிறோம். மகன் பெயர் அர்ஜுன்.' },
          { from: 'bot', time: '8:16 pm', text: 'அர்ஜுனுக்கு சனிக்கிழமை காலை 10 மணிக்கு மாதிரி வகுப்பு பதிவு செய்யப்பட்டது. முகவரி அனுப்புகிறோம்.', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '8:15 pm', text: 'Hi, my son is in 11th grade. Do you have a NEET batch? What is the fee?' },
          { from: 'bot', time: '8:15 pm', text: 'Yes! 2-year NEET batch, Mon-Sat 5-7 pm. Annual fee ₹48,000 payable in 4 installments. Would you like to attend Saturday 10 am demo class?' },
          { from: 'user', time: '8:16 pm', text: 'Yes sure. Son name is Arjun.' },
          { from: 'bot', time: '8:16 pm', text: 'Done! Saturday 10:00 am demo class booked for Arjun. We will send campus location.', isConfirmation: true }
        ]
      }
    }
  },
  {
    id: 'real-estate',
    tier: 'Real Estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    startingPrice: 'Plans from ₹32,000 a year + GST',
    priceValue: '₹32,000/yr',
    accColor: '#e08600',
    accBright: '#ffc56b',
    accBg: 'rgba(224, 134, 0, 0.12)',
    heroTitle: 'Run your sales office, from enquiry to registration',
    tagline: 'Enquiries, site visits, every flat, bookings, payment plans and brokers in one app — with an AI that answers buyers at 10 pm.',
    readyDayOne: [
      { text: 'Every flat on one board — available, held, booked and sold' },
      { text: 'Instant booking token locks when UPI or bank payment is received' },
      { text: 'Payment plans and cost sheets with automated demand letters' },
      { text: 'Channel partner commissions, site visit logs and broker payouts' }
    ],
    workingNumbers: [
      { metric: '5.2x', label: 'Faster lead qualification under 60 seconds' },
      { metric: '68%', label: 'Higher site visit turnout with location auto-drops' },
      { metric: '₹14Cr+', label: 'Property inventory value tracked per customer' },
      { metric: '0', label: 'Leads lost due to after-hours inquiry delays' }
    ],
    chatSimulation: {
      clientName: 'Kavitha R',
      clientAvatar: 'KR',
      channelText: 'WhatsApp · from an Instagram ad',
      calendarBadge: 'Site visit booked · Sat, 11:00 am',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '9:42 pm', text: 'Hi, Anna Nagar la 2BHK iruka? Budget 80L kulla.' },
          { from: 'bot', time: '9:42 pm', text: 'Iruku Kavitha! Anna Nagar West la 2 projects — 2BHK ₹72L and ₹79L. Ready to move venuma, illa under construction ok va?' },
          { from: 'user', time: '9:43 pm', text: 'Ready to move. Saturday paakalama?' },
          { from: 'bot', time: '9:43 pm', text: 'Done! Saturday 11:00 am site visit booked. Location anuppuren.', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '9:42 pm', text: 'வணக்கம், அண்ணா நகரில் ₹80 லட்சத்திற்குள் 2BHK உள்ளதா?' },
          { from: 'bot', time: '9:42 pm', text: 'உள்ளது கவிதா! அண்ணா நகர் மேற்கில் 2 திட்டங்கள் — ₹72L மற்றும் ₹79L. உடனே குடிபோக வேண்டுமா அல்லது கட்டப்பட்டு வரும் வீடா?' },
          { from: 'user', time: '9:43 pm', text: 'உடனே குடிபோக வேண்டும். சனிக்கிழமை பார்க்கலாமா?' },
          { from: 'bot', time: '9:43 pm', text: 'சனிக்கிழமை காலை 11:00 மணிக்கு நேரில் பார்வையிட பதிவு செய்யப்பட்டது. லொகேஷன் அனுப்புகிறோம்.', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '9:42 pm', text: 'Hi, do you have 2BHK flats in Anna Nagar under 80L?' },
          { from: 'bot', time: '9:42 pm', text: 'Yes Kavitha! 2 projects in Anna Nagar West — 2BHK at ₹72L and ₹79L. Would you prefer ready-to-move or under-construction?' },
          { from: 'user', time: '9:43 pm', text: 'Ready to move. Can we visit on Saturday?' },
          { from: 'bot', time: '9:43 pm', text: 'Done! Site visit confirmed for Saturday at 11:00 am. We will send the GPS location pin.', isConfirmation: true }
        ]
      }
    }
  },
  {
    id: 'gym',
    tier: 'Gym & Fitness',
    name: 'Gym & Fitness Studio',
    shortName: 'Gym & Fitness Studio',
    startingPrice: 'Plans from ₹22,000 a year + GST',
    priceValue: '₹22,000/yr',
    accColor: '#f0503a',
    accBright: '#ff9f8a',
    accBg: 'rgba(240, 80, 58, 0.12)',
    heroTitle: 'Run your gym, from trial pass to renewal',
    tagline: 'Members, check-ins, renewals, PT packs and an AI front desk in one app — with automated renewal reminders on WhatsApp.',
    readyDayOne: [
      { text: 'QR check-in at the door with photo and active membership status' },
      { text: 'Auto-renewals via WhatsApp payment links at 7, 3 and 1 day' },
      { text: 'Free trials and PT sessions booked automatically into trainer calendars' },
      { text: 'Body progress, PT packs and customized diet charts pushed on WhatsApp' }
    ],
    workingNumbers: [
      { metric: '82%', label: 'Auto-renewal rate via WhatsApp payment links' },
      { metric: '< 5s', label: 'QR gate access validation time' },
      { metric: '3.1x', label: 'Increase in Personal Training package sales' },
      { metric: '100%', label: 'Elimination of manual paper register entries' }
    ],
    chatSimulation: {
      clientName: 'Suresh K',
      clientAvatar: 'SK',
      channelText: 'WhatsApp · Fit Zone',
      calendarBadge: 'Free trial booked · Tue, 6:30 am',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '10:05 pm', text: 'Hi, membership evlo? Morning 6 mani open ah?' },
          { from: 'bot', time: '10:05 pm', text: 'Hi Suresh! 5:30 am to 10 pm open. Monthly ₹1,500, quarterly ₹4,000, yearly ₹12,000. Oru free trial session try pannalama?' },
          { from: 'user', time: '10:06 pm', text: 'Yes, naalaiku morning' },
          { from: 'bot', time: '10:06 pm', text: 'Done! Naalaiku 6:30 am free trial booked, trainer Vijay kooda. See you!', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '10:05 pm', text: 'வணக்கம், உறுப்பினர் கட்டணம் எவ்வளவு? காலை 6 மணிக்கு திறந்திருக்குமா?' },
          { from: 'bot', time: '10:05 pm', text: 'வணக்கம் சுரேஷ்! காலை 5:30 முதல் இரவு 10 வரை இயங்கும். மாதம் ₹1,500, ஆண்டு ₹12,000. இலவச பயிற்சி வகுப்பு முயற்சிக்கிறீர்களா?' },
          { from: 'user', time: '10:06 pm', text: 'ஆம், நாளை காலை வருகிறேன்.' },
          { from: 'bot', time: '10:06 pm', text: 'நாளை காலை 6:30 மணிக்கு இலவச பயிற்சி வகுப்பு டிரெய்னர் விஜய் உடன் பதிவு செய்யப்பட்டது!', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '10:05 pm', text: 'Hi, what is the membership fee? Are you open by 6 am?' },
          { from: 'bot', time: '10:05 pm', text: 'Hi Suresh! Open 5:30 am to 10 pm. Monthly ₹1,500, quarterly ₹4,000, yearly ₹12,000. Would you like a complimentary trial session?' },
          { from: 'user', time: '10:06 pm', text: 'Yes, tomorrow morning works.' },
          { from: 'bot', time: '10:06 pm', text: 'Done! Tomorrow 6:30 am free trial booked with coach Vijay. See you on the floor!', isConfirmation: true }
        ]
      }
    }
  },
  {
    id: 'salon',
    tier: 'Salon & Spa',
    name: 'Salon & Spa',
    shortName: 'Salon & Spa',
    startingPrice: 'Plans from ₹20,000 a year + GST',
    priceValue: '₹20,000/yr',
    accColor: '#d9468f',
    accBright: '#ff9fcb',
    accBg: 'rgba(217, 70, 143, 0.12)',
    heroTitle: 'Run your salon, from the first booking to the next visit',
    tagline: 'A front desk by stylist, bills, client cards and visit reminders in one app — and on Salon Growth, an AI receptionist that books the service and the stylist.',
    readyDayOne: [
      { text: 'Day board by stylist — chair occupancy, walk-ins and active client queues' },
      { text: 'Itemized billing & GST — retail products, combo packages and memberships' },
      { text: 'Private client hair/skin cards — color formulas and styling history' },
      { text: 'Automated return reminders — clients due back pinged automatically' }
    ],
    workingNumbers: [
      { metric: '4.9★', label: 'Average Google review rating generated automatically' },
      { metric: '48%', label: 'Increase in weekday morning salon chair occupancy' },
      { metric: '2.8x', label: 'Higher repeat customer frequency within 45 days' },
      { metric: '100%', label: 'No overlapping bridal/spa appointment bookings' }
    ],
    chatSimulation: {
      clientName: 'Divya R',
      clientAvatar: 'DR',
      channelText: 'WhatsApp · Glow Salon',
      calendarBadge: 'Booked · Sat, 5:30 pm · Priya',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '8:40 pm', text: 'Hi, Saturday evening haircut slot iruka?' },
          { from: 'bot', time: '8:40 pm', text: 'Hi Divya! Unga usual stylist Priya kitta Saturday 5:30 pm free. Haircut ₹600. Book pannalama?' },
          { from: 'user', time: '8:41 pm', text: 'Yes please, hair spa um add pannunga' },
          { from: 'bot', time: '8:41 pm', text: 'Done! Saturday 5:30 pm haircut + hair spa, Priya kooda. See you!', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '8:40 pm', text: 'வணக்கம், சனிக்கிழமை மாலை ஹேர்கட் ஸ்லாட் உள்ளதா?' },
          { from: 'bot', time: '8:40 pm', text: 'வணக்கம் திவ்யா! உங்கள் வழக்கமான ஸ்டைலிஸ்ட் பிரியா சனிக்கிழமை 5:30 pm உள்ளார். ஹேர்கட் ₹600. பதிவு செய்யட்டுமா?' },
          { from: 'user', time: '8:41 pm', text: 'ஆம், ஹேர் ஸ்பா கூட சேர்த்து பதிவு செய்யவும்.' },
          { from: 'bot', time: '8:41 pm', text: 'பதிவு செய்யப்பட்டது! சனிக்கிழமை மாலை 5:30 மணி, பிரியா உடன். சந்திப்போம்!', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '8:40 pm', text: 'Hi, do you have a haircut slot this Saturday evening?' },
          { from: 'bot', time: '8:40 pm', text: 'Hi Divya! Your regular stylist Priya is open Saturday at 5:30 pm. Haircut ₹600. Shall I book?' },
          { from: 'user', time: '8:41 pm', text: 'Yes please, and add a hair spa too.' },
          { from: 'bot', time: '8:41 pm', text: 'Done! Saturday 5:30 pm haircut + hair spa with Priya. See you then!', isConfirmation: true }
        ]
      }
    }
  },
  {
    id: 'field-service',
    tier: 'Field Service',
    name: 'Field Service & AMC',
    shortName: 'Field Service & AMC',
    startingPrice: 'Plans from ₹28,000 a year + GST',
    priceValue: '₹28,000/yr',
    accColor: '#16a34a',
    accBright: '#86efac',
    accBg: 'rgba(22, 163, 74, 0.12)',
    heroTitle: 'Run your service business, from complaint to AMC renewal',
    tagline: 'Technicians, visits, AMC contracts, spare parts and an AI dispatcher in one app — routing calls to the right technician instantly.',
    readyDayOne: [
      { text: 'Jobs board by technician with live dispatch and status updates' },
      { text: 'Mobile app for field staff with one-tap directions and photos' },
      { text: 'On-the-spot spare parts billing with cash and UPI integration' },
      { text: 'Warranty and AMC preventative maintenance visits and renewals' }
    ],
    workingNumbers: [
      { metric: '91%', label: 'On-time AMC quarterly maintenance completion rate' },
      { metric: '4.2x', label: 'Faster technician ticket resolution cycle' },
      { metric: '35%', label: 'Increase in profitable AMC contract renewals' },
      { metric: '100%', label: 'Auditable parts inventory tracking per service van' }
    ],
    chatSimulation: {
      clientName: 'Kavitha R',
      clientAvatar: 'KR',
      channelText: 'WhatsApp · Cool Care Services',
      calendarBadge: 'Job booked · Tomorrow, morning',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '9:15 pm', text: 'Hi, AC cooling aagala, water leak aaguthu. Naalaiku technician varuvangala?' },
          { from: 'bot', time: '9:15 pm', text: 'Sorry Kavitha! Full address landmark oda sollunga. Morning (9–12), afternoon (12–4), evening (4–8) — edhu vasathi?' },
          { from: 'user', time: '9:16 pm', text: '12, 2nd Street, Anna Nagar, near Tower Park. Morning ok' },
          { from: 'bot', time: '9:16 pm', text: 'Done! JOB-0042 — naalaiku morning (9–12). Technician varumbodhu call pannuvanga.', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '9:15 pm', text: 'வணக்கம், ஏசி கூலிங் ஆகவில்லை, தண்ணீர் கசிகிறது. நாளை டெக்னீசியன் வருவாரா?' },
          { from: 'bot', time: '9:15 pm', text: 'வணக்கம் கவிதா! உங்கள் முழு முகவரியை தெரிவிக்கவும். காலை (9-12), மதியம் (12-4), மாலை (4-8) — எந்த நேரம் வசதி?' },
          { from: 'user', time: '9:16 pm', text: '12, 2வது தெரு, அண்ணா நகர், டவர் பார்க் அருகில். காலை நேரம் சரி.' },
          { from: 'bot', time: '9:16 pm', text: 'டிக்கெட் #JOB-0042 உருவாக்கப்பட்டது! நாளை காலை (9-12). டெக்னீசியன் வரும்போது அழைப்பார்.', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '9:15 pm', text: 'Hi, AC is not cooling and water is leaking. Can a technician visit tomorrow?' },
          { from: 'bot', time: '9:15 pm', text: 'Sorry Kavitha! Please share your full address with landmark. Morning (9-12), afternoon (12-4), or evening (4-8) - which window works?' },
          { from: 'user', time: '9:16 pm', text: '12, 2nd Street, Anna Nagar, near Tower Park. Morning works.' },
          { from: 'bot', time: '9:16 pm', text: 'Done! JOB-0042 booked for tomorrow morning (9-12). Technician will call ahead.', isConfirmation: true }
        ]
      }
    }
  },
  {
    id: 'turf',
    tier: 'Turf',
    name: 'Turf',
    shortName: 'Turf',
    startingPrice: 'Plans from ₹23,999 a year + GST',
    priceValue: '₹23,999/yr',
    accColor: '#65a30d',
    accBright: '#bef264',
    accBg: 'rgba(101, 163, 13, 0.12)',
    heroTitle: 'Run your turf, from slot booking to tournament',
    tagline: 'A court board by the hour, peak prices, cash and UPI at the desk, online advance, regular teams and an AI that books slots — in one app.',
    readyDayOne: [
      { text: 'Court board by the hour with the ground in halves or full' },
      { text: 'Peak and non-peak pricing with automated weekend advance collection' },
      { text: 'Regular team subscriptions and tournament brackets' },
      { text: 'WhatsApp slot booking with Google Maps pin and instant confirmation' }
    ],
    workingNumbers: [
      { metric: '98%', label: 'Turf slot booking occupancy on weekends' },
      { metric: '< 30s', label: 'Average WhatsApp slot search to booking time' },
      { metric: '0', label: 'Double-booked slots or scheduling conflicts' },
      { metric: '₹0', label: 'Manual phone coordination overhead' }
    ],
    chatSimulation: {
      clientName: 'Vignesh S',
      clientAvatar: 'VS',
      channelText: 'WhatsApp · Green Field Turf',
      calendarBadge: 'Slot held · Sat 7 pm · ₹500 advance',
      languages: ['Tanglish', 'Tamil', 'English'],
      dialogues: {
        tanglish: [
          { from: 'user', time: '8:40 pm', text: 'Saturday 7 to 8 box cricket slot irukka? Evlo?' },
          { from: 'bot', time: '8:40 pm', text: 'Irukku! Box cricket, Sat 7–8 pm — ₹1,300 (weekend). ₹500 advance kattina slot confirm, meedhi turf-la.' },
          { from: 'user', time: '8:41 pm', text: 'Ok book pannunga. Team name Thunder XI' },
          { from: 'bot', time: '8:41 pm', text: 'Done! 15 nimisham slot hold-la irukku — ₹500 kattunga, confirm aagidum.', isConfirmation: true }
        ],
        tamil: [
          { from: 'user', time: '8:40 pm', text: 'சனிக்கிழமை 7 முதல் 8 மணி வரை பாக்ஸ் கிரிக்கெட் மைதானம் உள்ளதா? கட்டணம் எவ்வளவு?' },
          { from: 'bot', time: '8:40 pm', text: 'உள்ளது! சனிக்கிழமை இரவு 7-8 மணி — ₹1,300 (வார இறுதி). ₹500 முன்பணம் செலுத்தினால் ஸ்லாட் உறுதி செய்யப்படும், மீதி மைதானத்தில்.' },
          { from: 'user', time: '8:41 pm', text: 'சரி பதிவு செய்யுங்கள். அணி பெயர் தண்டர் XI.' },
          { from: 'bot', time: '8:41 pm', text: 'மைதானம் 15 நிமிடங்கள் பூட்டப்பட்டது! ₹500 முன்பணம் செலுத்தி உறுதி செய்யவும்.', isConfirmation: true }
        ],
        english: [
          { from: 'user', time: '8:40 pm', text: 'Is the 7 to 8 pm box cricket slot available this Saturday? What is the price?' },
          { from: 'bot', time: '8:40 pm', text: 'Yes! Box cricket, Sat 7-8 pm is ₹1,300 (weekend rate). Pay ₹500 advance to confirm slot, balance at the venue.' },
          { from: 'user', time: '8:41 pm', text: 'Ok book it. Team name Thunder XI.' },
          { from: 'bot', time: '8:41 pm', text: 'Done! Slot held for 15 minutes. Pay ₹500 to lock your booking.', isConfirmation: true }
        ]
      }
    }
  }
];

export const comingSoonTrades = [
  {
    id: 'wholesale',
    title: 'Wholesale & Distribution',
    category: 'Wholesalers, distributors and dealers',
    desc: 'B2B order booking on WhatsApp, credit limit controls, bulk volume discounts, and warehouse delivery dispatches with GST e-way bills.',
    highlights: ['Multi-tier B2B pricing', 'Credit ledger & dues alerts', 'WhatsApp bulk catalogue'],
    badge: 'Coming soon'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    category: 'Online stores and D2C brands',
    desc: 'Turn WhatsApp into your highest-converting storefront. Abandoned cart recovery, COD confirmation bots, order tracking, and returns management.',
    highlights: ['1-Click WhatsApp Storefront', 'COD to Prepaid conversion', 'Live Shiprocket sync'],
    badge: 'Coming soon'
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Retail',
    category: 'Restaurants, cafés and shops',
    desc: 'Direct dine-in QR ordering, takeaway pre-orders, table reservation bot, kitchen display system (KDS), and customer loyalty repeat dining points.',
    highlights: ['Zero-commission direct orders', 'Automated table booking', 'Swiggy/Zomato menu sync'],
    badge: 'Coming soon'
  }
];
