/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
'use client';



import '../../../../public/nimna-tuition.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CommentWidget from '@/components/CommentWidget';

// =========================================================
// CONFIG
// =========================================================
const WhatsAppNumber = '94770202138';

// =========================================================
// TRANSLATIONS
// =========================================================
const translations = {
  en: {
    // Nav
    navHome: 'Home',
    navAbout: 'About',
    navClasses: 'Classes',
    navResearch: 'Research',
    navSchedule: 'Schedule',
    navContact: 'Contact',
    navCta: 'Book Free Trial',

    // Brand
    brandName: 'Ms. Sandunika',
    brandTag: 'A/L Biology Classes',

    // Hero
    heroBadge: 'G.C.E. A/L Biology Classes - Enrolling Now',
    heroTitle1: 'Learn A/L Biology from someone who ',
    heroTitleEm: 'lives it.',
    heroSub:
      'Theory, revision, and paper classes taught by an active researcher in Biotechnology and BioProcess Engineering - with a BSc (Hons) from Uva Wellassa University.',
    heroCtaPrimary: 'Book a Free Trial Class',
    heroCtaSecondary: 'View Class Types →',
    statYears: 'Years Teaching',
    statStudents: 'Students Taught',
    statPassRate: 'A/B Pass Rate',
    statRating: 'Parent Rating',

    // About
    aboutEyebrow: 'About',
    aboutTitle1: 'An educator and researcher, ',
    aboutTitleEm: 'in equal measure.',
    aboutP1a: "I'm an academic and research professional with an interdisciplinary background spanning ",
    aboutP1b: 'BioProcess Engineering, Biotechnology, Agricultural Sciences, and Polymer Technology.',
    aboutP2a: 'I hold a ',
    aboutP2b: 'BSc (Hons) from Uva Wellassa University',
    aboutP2c:
      ' and continue to pursue advanced research in BioProcess Engineering - alongside my work in academic teaching, laboratory research, and scientific communication.',
    aboutP3:
      'Teaching A/L Biology is my way of bringing that research experience directly to students. My classes are built to help students not just memorise the syllabus, but genuinely understand the science - so they walk into the exam with confidence, not anxiety.',
    credDegree: 'BSc (Hons)',
    credDegreeSub: 'Uva Wellassa University',
    credResearcher: 'Active Researcher',
    credResearcherSub: 'BioProcess Engineering',
    credSpecialized: 'Specialized In',
    credSpecializedSub: 'Biotechnology & Molecular Science',
    credTeacher: 'A/L Biology Teacher',
    credTeacherSub: 'Theory • Revision • Papers',

    // Classes
    classesEyebrow: 'Class Types',
    classesTitle1: 'Three classes. ',
    classesTitleEm: 'One complete system.',
    classesSub:
      'Every student goes through the same journey - learning the syllabus, consolidating it, then mastering exam technique.',
    classEnquire: 'Enquire on WhatsApp →',

    // Research
    researchEyebrow: 'Research Background',
    researchTitle1: 'An interdisciplinary ',
    researchTitleEm: 'research foundation.',
    researchSub:
      'Four scientific disciplines that inform how Biology is taught in every class - from cell theory to applied biotechnology.',
    researchNoteTitle: 'Why this matters for A/L students',
    researchNoteBody:
      'Units like Molecular Biology, Recombinant DNA Technology, and Applied Biology are taught from hands-on experience - not just textbook theory. That depth of understanding is what separates a top-grade student from an average one.',

    // Why Choose
    whyEyebrow: 'Why Choose',
    whyTitle1: 'What makes classes ',
    whyTitleEm: 'different here.',

    // Schedule
    scheduleEyebrow: 'Weekly Schedule',
    scheduleTitle1: 'Find the batch ',
    scheduleTitleEm: 'that fits you.',
    scheduleSub:
      'Both physical (Colombo) and online batches available. Contact us to reserve a seat.',
    tableDay: 'Day',
    tableTime: 'Time',
    tableClass: 'Class',
    tableMode: 'Mode',
    modePhysical: 'Physical',
    modeOnline: 'Online',

    // Testimonials
    testEyebrow: 'Testimonials',
    testTitle1: 'What ',
    testTitleEm: 'students & parents say.',

    // FAQ
    faqEyebrow: 'FAQ',
    faqTitle1: 'Questions from ',
    faqTitleEm: 'students & parents.',

    // Contact
    contactEyebrow: 'Contact',
    contactTitle1: 'Ready to ',
    contactTitleEm: 'get started?',
    contactSub:
      "Send an enquiry and we'll reply on WhatsApp within a few hours. The first class is always free.",
    contactWhatsapp: 'WhatsApp (fastest)',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    contactLocationValue: 'Colombo, Sri Lanka',
    contactEmail: 'Email',

    // Form
    formStudent: 'Student Name',
    formPhone: 'Phone / WhatsApp',
    formSchool: 'School',
    formGrade: 'Grade',
    formGradePlaceholder: 'Select grade',
    formGradeOption1: 'Grade 12 (2027 A/L)',
    formGradeOption2: 'Grade 13 (2026 A/L)',
    formGradeOption3: 'Repeat Student',
    formClassType: 'Class Type Interested In',
    formClassTypePlaceholder: 'Select class type',
    formClassTypeOption1: 'Theory Class',
    formClassTypeOption2: 'Revision Class',
    formClassTypeOption3: 'Paper Class',
    formClassTypeOption4: 'All Three (Complete Package)',
    formClassTypeOption5: 'Not sure - please advise',
    formMessage: 'Message',
    formMessagePlaceholder: "Anything you'd like to know?",
    formSubmit: 'Send Enquiry',
    formSubmitting: 'Sending...',
    formNote1: 'Or message directly on ',
    formNote2: ' for a faster reply.',

    // Footer
    footerTagline:
      'Biology taught with scientific depth - from a researcher who works with this science every day.',
    footerColClasses: 'Classes',
    footerColCompany: 'Company',
    footerColTouch: 'Get in Touch',
    footerCopyright: 'Ms. Sandunika A/L Biology Classes. All rights reserved.',
    footerDemo: 'Demo site by',

    // Toast
    toastMissing: 'Please fill in your name and phone number.',
    toastSuccess: "Thank you! We'll contact you on WhatsApp shortly.",
    toastError: 'Something went wrong. Please try WhatsApp instead.',

    // Form grades
    formStudentPlaceholder: 'e.g. Kavindu Perera',
    formPhonePlaceholder: '+94 77 XXX XXXX',
    formSchoolPlaceholder: 'e.g. Royal College',

    // Milestones
milestonesEyebrow: 'Milestones',
milestonesTitle1: 'A journey of ',
milestonesTitleEm: 'teaching & research.',
milestonesSub:
  'Every milestone reflects a commitment to both scientific research and student success.',

// Video
videoEyebrow: 'Watch',
videoTitle1: 'See how classes ',
videoTitleEm: 'actually feel.',
videoSub:
  'A short look at the teaching style, classroom atmosphere, and how students engage with the subject.',
videoCaption: 'A/L Biology — Inside the Classroom',

// Gallery
galleryEyebrow: 'Gallery',
galleryTitle1: 'Moments from ',
galleryTitleEm: 'our classes.',
gallerySub:
  'Classroom sessions, lab experiments, and student achievements from over the years.',
galleryClose: 'Close',
  },

  si: {

    // Milestones
milestonesEyebrow: 'සන්ධිස්ථාන',
milestonesTitle1: 'ඉගැන්වීම සහ පර්යේෂණ ',
milestonesTitleEm: 'ගමන් මගක්.',
milestonesSub:
  'සෑම සන්ධිස්ථානයක්ම විද්‍යාත්මක පර්යේෂණ සහ සිසු සාර්ථකත්වය කෙරෙහි ඇති කැපවීම පිළිබිඹු කරයි.',

// Video
videoEyebrow: 'නරඹන්න',
videoTitle1: 'පන්ති සැබවින්ම ',
videoTitleEm: 'දැනෙන ආකාරය බලන්න.',
videoSub:
  'ඉගැන්වීමේ ශෛලිය, පන්ති කාමරයේ වාතාවරණය සහ සිසුන් විෂය සමඟ කෙසේ නිරත වන්නේද යන්න පිළිබඳ කෙටි දසුනක්.',
videoCaption: 'උසස් පෙළ ජීව විද්‍යාව — පන්ති කාමරය තුළ',

// Gallery
galleryEyebrow: 'ගැලරිය',
galleryTitle1: 'අපගේ පන්තිවලින් ',
galleryTitleEm: 'මොහොතවල්.',
gallerySub:
  'පන්ති කාමර සැසි, රසායනාගාර පරීක්ෂණ සහ වසර ගණනාවක් පුරා සිසු ජයග්‍රහණ.',
galleryClose: 'වසන්න',

    // Nav
    navHome: 'මුල් පිටුව',
    navAbout: 'මා ගැන',
    navClasses: 'පන්ති',
    navResearch: 'පර්යේෂණ',
    navSchedule: 'කාලසටහන',
    navContact: 'සම්බන්ධ වන්න',
    navCta: 'නොමිලේ පන්තිය',

    // Brand
    brandName: 'සඳුනිකා මිස්',
    brandTag: 'උසස් පෙළ ජීව විද්‍යා පන්ති',

    // Hero
    heroBadge: 'උසස් පෙළ ජීව විද්‍යා පන්ති - දැන් ලියාපදිංචි වන්න',
    heroTitle1: 'උසස් පෙළ ජීව විද්‍යාව ඉගෙන ගන්න - ',
    heroTitleEm: 'විද්‍යාව ජීවත් කරන ගුරුවරියකගෙන්.',
    heroSub:
      'ජෛව තාක්ෂණය සහ ජෛව ක්‍රියාවලි ඉංජිනේරු විද්‍යාව පිළිබඳ පර්යේෂකයෙකු විසින් මෙහෙයවන තියරි, පුනරීක්ෂණ සහ ප්‍රශ්න පත්‍ර පන්ති - ඌව වෙල්ලස්ස විශ්වවිද්‍යාලයේ BSc (Hons) උපාධිධාරිනියක්.',
    heroCtaPrimary: 'නොමිලේ පන්තියක් වෙන් කරන්න',
    heroCtaSecondary: 'පන්ති වර්ග බලන්න →',
    statYears: 'වසරක ඉගැන්වීම',
    statStudents: 'ශිෂ්‍යයන්',
    statPassRate: 'A/B සමත් අනුපාතය',
    statRating: 'දෙමාපිය ශ්‍රේණිගත කිරීම',

    // About
    aboutEyebrow: 'මා ගැන',
    aboutTitle1: 'ගුරුවරියක් සහ පර්යේෂකයෙක් - ',
    aboutTitleEm: 'සමාන මට්ටමින්.',
    aboutP1a: 'මම අන්තර්-විෂය ක්ෂේත්‍රයේ පසුබිමක් සහිත ශාස්ත්‍රීය සහ පර්යේෂණ වෘත්තිකයෙක් - ',
    aboutP1b: 'ජෛව ක්‍රියාවලි ඉංජිනේරු විද්‍යාව, ජෛව තාක්ෂණය, කෘෂි විද්‍යාව සහ පොලිමර් තාක්ෂණය ඇතුළු විෂය පථ.',
    aboutP2a: 'මට ',
    aboutP2b: 'ඌව වෙල්ලස්ස විශ්වවිද්‍යාලයේ BSc (Hons) උපාධියක්',
    aboutP2c:
      ' ඇති අතර ජෛව ක්‍රියාවලි ඉංජිනේරු විද්‍යාව සම්බන්ධ උසස් පර්යේෂණ කටයුතු කරගෙන යනවා - ශාස්ත්‍රීය ඉගැන්වීම්, පර්යේෂණාගාර පර්යේෂණ සහ විද්‍යාත්මක සන්නිවේදනය සමඟින්.',
    aboutP3:
      'උසස් පෙළ ජීව විද්‍යාව ඉගැන්වීම මට මගේ පර්යේෂණ අත්දැකීම් කෙලින්ම සිසුන්ට ලබා දීමට ඇති ක්‍රමයක්. මගේ පන්ති සැකසී ඇත්තේ සිසුන්ට විෂය නිර්දේශය කටපාඩම් කිරීමට නොව, විද්‍යාව සැබවින්ම තේරුම් ගැනීමට උපකාරී වන ලෙසයි - එවිට ඔවුන් විභාගයට ආත්ම විශ්වාසයෙන් යනවා, කනස්සල්ලෙන් නොවේ.',
    credDegree: 'BSc (Hons)',
    credDegreeSub: 'ඌව වෙල්ලස්ස විශ්වවිද්‍යාලය',
    credResearcher: 'ක්‍රියාකාරී පර්යේෂක',
    credResearcherSub: 'ජෛව ක්‍රියාවලි ඉංජිනේරු',
    credSpecialized: 'විශේෂඥතාව',
    credSpecializedSub: 'ජෛව තාක්ෂණය සහ අණුක විද්‍යාව',
    credTeacher: 'උසස් පෙළ ජීව විද්‍යා ගුරුවරිය',
    credTeacherSub: 'තියරි • පුනරීක්ෂණ • ප්‍රශ්න පත්‍ර',

    // Classes
    classesEyebrow: 'පන්ති වර්ග',
    classesTitle1: 'පන්ති තුනක්. ',
    classesTitleEm: 'සම්පූර්ණ පද්ධතියක්.',
    classesSub:
      'සෑම සිසුවෙකුම එකම ගමන් මගක් හරහා යනවා - විෂය නිර්දේශය ඉගෙන ගැනීම, එය තහවුරු කිරීම, පසුව විභාග තාක්ෂණය ප්‍රගුණ කිරීම.',
    classEnquire: 'WhatsApp හරහා විමසන්න →',

    // Research
    researchEyebrow: 'පර්යේෂණ පසුබිම',
    researchTitle1: 'අන්තර්-විෂය ',
    researchTitleEm: 'පර්යේෂණ පදනමක්.',
    researchSub:
      'සෑම පන්තියකම ජීව විද්‍යාව ඉගැන්වීමට බලපාන විද්‍යාත්මක විෂය ක්ෂේත්‍ර හතරක් - සෛල වාදයේ සිට ව්‍යවහාරික ජෛව තාක්ෂණය දක්වා.',
    researchNoteTitle: 'මෙය උසස් පෙළ සිසුන්ට වැදගත් ඇයි',
    researchNoteBody:
      'අණුක ජීව විද්‍යාව, ප්‍රතිසංයෝජිත DNA තාක්ෂණය සහ ව්‍යවහාරික ජීව විද්‍යාව වැනි ඒකක ඉගැන්වෙන්නේ ප්‍රායෝගික අත්දැකීම් මතින් - පෙළ පොත් සිද්ධාන්තයෙන් පමණක් නොවේ. එම ගැඹුරු අවබෝධය තමයි සාමාන්‍ය සිසුවෙකුගෙන් ඉහළම ශ්‍රේණියේ සිසුවෙකු වෙන් කරන දේ.',

    // Why
    whyEyebrow: 'ඇයි මෙය තෝරා ගන්නේ',
    whyTitle1: 'මෙහි පන්ති ',
    whyTitleEm: 'වෙනස් වන්නේ ඇයි.',

    // Schedule
    scheduleEyebrow: 'සතියේ කාලසටහන',
    scheduleTitle1: 'ඔබට ගැලපෙන ',
    scheduleTitleEm: 'කණ්ඩායම සොයා ගන්න.',
    scheduleSub:
      'භෞතික (කොළඹ) සහ ඔන්ලයින් කණ්ඩායම් දෙකම ඇත. ආසනයක් වෙන් කර ගැනීමට අප හා සම්බන්ධ වන්න.',
    tableDay: 'දිනය',
    tableTime: 'වේලාව',
    tableClass: 'පන්තිය',
    tableMode: 'ක්‍රමය',
    modePhysical: 'භෞතික',
    modeOnline: 'ඔන්ලයින්',

    // Testimonials
    testEyebrow: 'ප්‍රතිචාර',
    testTitle1: 'සිසුන් සහ දෙමාපියන් ',
    testTitleEm: 'පවසන දේ.',

    // FAQ
    faqEyebrow: 'නිතර අසන ප්‍රශ්න',
    faqTitle1: 'සිසුන් සහ දෙමාපියන්ගේ ',
    faqTitleEm: 'ප්‍රශ්න.',

    // Contact
    contactEyebrow: 'සම්බන්ධ වන්න',
    contactTitle1: 'ආරම්භ කිරීමට ',
    contactTitleEm: 'සූදානම්ද?',
    contactSub:
      'විමසුමක් එවන්න - අපි පැය කිහිපයක් ඇතුළත WhatsApp හරහා පිළිතුරු දෙන්නෙමු. පළමු පන්තිය සැමවිටම නොමිලේ.',
    contactWhatsapp: 'WhatsApp (වේගවත්ම)',
    contactPhone: 'දුරකථන',
    contactLocation: 'ස්ථානය',
    contactLocationValue: 'කොළඹ, ශ්‍රී ලංකාව',
    contactEmail: 'විද්‍යුත් තැපෑල',

    // Form
    formStudent: 'සිසුවාගේ නම',
    formPhone: 'දුරකථන / WhatsApp',
    formSchool: 'පාසල',
    formGrade: 'ශ්‍රේණිය',
    formGradePlaceholder: 'ශ්‍රේණිය තෝරන්න',
    formGradeOption1: '12 ශ්‍රේණිය (2027 උසස් පෙළ)',
    formGradeOption2: '13 ශ්‍රේණිය (2026 උසස් පෙළ)',
    formGradeOption3: 'නැවත සිසුවෙක්',
    formClassType: 'කැමති පන්ති වර්ගය',
    formClassTypePlaceholder: 'පන්ති වර්ගය තෝරන්න',
    formClassTypeOption1: 'තියරි පන්තිය',
    formClassTypeOption2: 'පුනරීක්ෂණ පන්තිය',
    formClassTypeOption3: 'ප්‍රශ්න පත්‍ර පන්තිය',
    formClassTypeOption4: 'තුනම (සම්පූර්ණ පැකේජය)',
    formClassTypeOption5: 'නොදනී - කරුණාකර උපදෙස් දෙන්න',
    formMessage: 'පණිවිඩය',
    formMessagePlaceholder: 'ඔබ දැනගැනීමට කැමති දේ?',
    formSubmit: 'විමසුම යවන්න',
    formSubmitting: 'යවමින්...',
    formNote1: 'හෝ වේගවත් පිළිතුරක් සඳහා කෙලින්ම ',
    formNote2: ' හරහා පණිවිඩ යවන්න.',

    // Footer
    footerTagline:
      'විද්‍යාත්මක ගැඹුරක් සහිත ජීව විද්‍යා ඉගැන්වීම - දිනපතා මෙම විද්‍යාව සමඟ වැඩ කරන ගුරුවරයකුගෙන්.',
    footerColClasses: 'පන්ති',
    footerColCompany: 'සමාගම',
    footerColTouch: 'සම්බන්ධ වන්න',
    footerCopyright: 'සඳුනිකා මිස් උසස් පෙළ ජීව විද්‍යා පන්ති. සියලු හිමිකම් ඇවිරිණි.',
    footerDemo: 'නිර්මාණය කළේ',

    // Toast
    toastMissing: 'කරුණාකර ඔබේ නම සහ දුරකථන අංකය පුරවන්න.',
    toastSuccess: 'ස්තූතියි! අපි ඉක්මනින් WhatsApp හරහා ඔබ හා සම්බන්ධ වන්නෙමු.',
    toastError: 'යම් දෝෂයක් සිදුවිය. කරුණාකර WhatsApp හරහා උත්සාහ කරන්න.',

    formStudentPlaceholder: 'උදා: කවිඳු පෙරේරා',
    formPhonePlaceholder: '+94 77 XXX XXXX',
    formSchoolPlaceholder: 'උදා: රාජකීය විද්‍යාලය',
  },
};

// =========================================================
// CONTENT ARRAYS (bilingual)
// =========================================================
const classTypesData = {
  en: [
    {
      icon: '📖',
      title: 'Theory Classes',
      subtitle: 'Full Syllabus Coverage',
      desc: 'Structured, concept-first teaching that covers the entire A/L Biology syllabus - from cell biology to recombinant DNA technology.',
      includes: [
        'Complete unit-by-unit coverage',
        'Handwritten notes & diagrams',
        'Past paper integration from day one',
        'Weekly progress tests',
      ],
    },
    {
      icon: '🔁',
      title: 'Revision Classes',
      subtitle: 'Pre-Exam Consolidation',
      desc: 'Rapid, high-yield revision sessions that condense the entire syllabus into structured recall - perfect for the months before the exam.',
      includes: [
        'Condensed summary notes',
        'Mind maps & flowcharts',
        'Common exam traps & tips',
        'Concept-clarification Q&A',
      ],
    },
    {
      icon: '📝',
      title: 'Paper Classes',
      subtitle: 'Exam Technique & Practice',
      desc: 'Timed past paper practice with detailed marking - training students to answer precisely, manage time, and score full marks.',
      includes: [
        'Past papers (2015 – present)',
        'Structured essay practice',
        'MCQ technique & speed',
        'Individual marked feedback',
      ],
    },
  ],
  si: [
    {
      icon: '📖',
      title: 'තියරි පන්ති',
      subtitle: 'සම්පූර්ණ විෂය නිර්දේශය',
      desc: 'සෛල ජීව විද්‍යාවේ සිට ප්‍රතිසංයෝජිත DNA තාක්ෂණය දක්වා - සම්පූර්ණ උසස් පෙළ ජීව විද්‍යා විෂය නිර්දේශය ආවරණය කරන ව්‍යුහගත, සංකල්ප-පළමු ඉගැන්වීම.',
      includes: [
        'සම්පූර්ණ ඒකක ආවරණය',
        'අත්-ලිඛිත සටහන් සහ රූප සටහන්',
        'පළමු දිනයේ සිට පසුගිය ප්‍රශ්න පත්‍ර',
        'සතිපතා ප්‍රගති පරීක්ෂණ',
      ],
    },
    {
      icon: '🔁',
      title: 'පුනරීක්ෂණ පන්ති',
      subtitle: 'විභාගයට පෙර තහවුරු කිරීම',
      desc: 'සම්පූර්ණ විෂය නිර්දේශය ව්‍යුහගත සිහිපත් කිරීම් බවට සංක්ෂේප කරන වේගවත්, ඉහළ-ඵලදායී පුනරීක්ෂණ සැසි - විභාගයට මාස කිහිපයකට පෙර සුදුසුයි.',
      includes: [
        'සංක්ෂිප්ත සාරාංශ සටහන්',
        'මනස් සිතියම් සහ ප්‍රවාහ සටහන්',
        'පොදු විභාග උගුල් සහ ඉඟි',
        'සංකල්ප පැහැදිලි කිරීමේ ප්‍රශ්නෝත්තර',
      ],
    },
    {
      icon: '📝',
      title: 'ප්‍රශ්න පත්‍ර පන්ති',
      subtitle: 'විභාග තාක්ෂණය සහ පුහුණුව',
      desc: 'සවිස්තර ලකුණු කිරීම සමඟ කාල නියමිත පසුගිය ප්‍රශ්න පත්‍ර පුහුණුව - නිවැරදිව පිළිතුරු දීමට, කාලය කළමනාකරණය කිරීමට සහ සම්පූර්ණ ලකුණු ලබා ගැනීමට සිසුන් පුහුණු කිරීම.',
      includes: [
        'පසුගිය ප්‍රශ්න පත්‍ර (2015 – වර්තමානය)',
        'ව්‍යුහගත රචනා පුහුණුව',
        'MCQ තාක්ෂණය සහ වේගය',
        'තනි පුද්ගල ලකුණු කළ ප්‍රතිචාර',
      ],
    },
  ],
};

const researchAreasData = {
  en: [
    {
      icon: '🧬',
      title: 'BioProcess Engineering',
      desc: 'Advanced research in bioprocess systems, fermentation, and industrial-scale biological production.',
    },
    {
      icon: '🔬',
      title: 'Biotechnology',
      desc: 'Molecular biology, recombinant DNA technology, and genetic engineering applications.',
    },
    {
      icon: '🌱',
      title: 'Agricultural Sciences',
      desc: 'Plant biology, crop science, and sustainable agricultural systems research.',
    },
    {
      icon: '⚗️',
      title: 'Polymer Technology',
      desc: 'Bio-based polymers, biomaterials, and their applications in modern science.',
    },
  ],
  si: [
    {
      icon: '🧬',
      title: 'ජෛව ක්‍රියාවලි ඉංජිනේරු',
      desc: 'ජෛව ක්‍රියාවලි පද්ධති, පැසවීම සහ කාර්මික-පරිමාණ ජෛව නිෂ්පාදනය පිළිබඳ උසස් පර්යේෂණ.',
    },
    {
      icon: '🔬',
      title: 'ජෛව තාක්ෂණය',
      desc: 'අණුක ජීව විද්‍යාව, ප්‍රතිසංයෝජිත DNA තාක්ෂණය සහ ප්‍රවේණි ඉංජිනේරු යෙදුම්.',
    },
    {
      icon: '🌱',
      title: 'කෘෂි විද්‍යාව',
      desc: 'ශාක ජීව විද්‍යාව, බෝග විද්‍යාව සහ තිරසාර කෘෂි පද්ධති පර්යේෂණ.',
    },
    {
      icon: '⚗️',
      title: 'පොලිමර් තාක්ෂණය',
      desc: 'ජෛව-පාදක පොලිමර්, ජෛව ද්‍රව්‍ය සහ නවීන විද්‍යාවේ ඒවායේ යෙදුම්.',
    },
  ],
};

const whyPointsData = {
  en: [
    {
      icon: '🔬',
      title: 'Taught by an Active Researcher',
      desc: 'You are learning from someone who works with this science daily - not just someone who studied it years ago.',
    },
    {
      icon: '📚',
      title: 'Real-World Molecular Biology',
      desc: 'Units 7 & 9 (Molecular Biology, Recombinant DNA) are taught from hands-on lab experience.',
    },
    {
      icon: '👥',
      title: 'Small Batch Sizes',
      desc: 'Maximum 10 students per batch so every student gets individual attention and feedback.',
    },
    {
      icon: '📊',
      title: 'Weekly Progress Reports',
      desc: 'Parents receive structured updates with test scores, strengths, and areas to improve.',
    },
    {
      icon: '🕐',
      title: 'Flexible Batch Options',
      desc: 'Weekday, weekend, and online batches available - choose the schedule that fits your life.',
    },
    {
      icon: '🆓',
      title: 'Free Trial Class',
      desc: 'Attend your first class free - no commitment, no payment, no pressure.',
    },
  ],
  si: [
    {
      icon: '🔬',
      title: 'ක්‍රියාකාරී පර්යේෂකයෙකු විසින් ඉගැන්වීම',
      desc: 'ඔබ ඉගෙන ගන්නේ දිනපතා මෙම විද්‍යාව සමඟ වැඩ කරන කෙනෙකුගෙන් - වසර ගණනාවකට පෙර ඉගෙන ගත් කෙනෙකුගෙන් නොවේ.',
    },
    {
      icon: '📚',
      title: 'සැබෑ ලෝකයේ අණුක ජීව විද්‍යාව',
      desc: 'ඒකක 7 සහ 9 (අණුක ජීව විද්‍යාව, ප්‍රතිසංයෝජිත DNA) ප්‍රායෝගික රසායනාගාර අත්දැකීම් මතින් ඉගැන්වෙනවා.',
    },
    {
      icon: '👥',
      title: 'කුඩා කණ්ඩායම්',
      desc: 'එක් කණ්ඩායමකට උපරිම සිසුන් 10ක් - එවිට සෑම සිසුවෙකුටම තනි අවධානය සහ ප්‍රතිචාර ලැබෙනවා.',
    },
    {
      icon: '📊',
      title: 'සතිපතා ප්‍රගති වාර්තා',
      desc: 'දෙමාපියන්ට පරීක්ෂණ ලකුණු, ශක්තීන් සහ වැඩිදියුණු කළ යුතු ක්ෂේත්‍ර සමඟ ව්‍යුහගත යාවත්කාලීන ලැබෙනවා.',
    },
    {
      icon: '🕐',
      title: 'නම්‍යශීලී කණ්ඩායම්',
      desc: 'සතියේ දින, සති අන්ත සහ ඔන්ලයින් කණ්ඩායම් ඇත - ඔබට ගැලපෙන කාලසටහන තෝරන්න.',
    },
    {
      icon: '🆓',
      title: 'නොමිලේ පන්තිය',
      desc: 'පළමු පන්තියට නොමිලේ සහභාගී වන්න - කිසිදු බැඳීමක්, ගෙවීමක් හෝ පීඩනයක් නැත.',
    },
  ],
};

const scheduleData = {
  en: [
    { day: 'Monday', time: '4:00 PM – 6:00 PM', class: 'Grade 12 - Theory', mode: 'Physical' },
    { day: 'Tuesday', time: '4:00 PM – 6:00 PM', class: 'Grade 13 - Theory', mode: 'Physical' },
    { day: 'Wednesday', time: '3:30 PM – 5:30 PM', class: 'Grade 12 - Theory (Repeat)', mode: 'Online' },
    { day: 'Thursday', time: '4:00 PM – 6:00 PM', class: 'Grade 13 - Revision', mode: 'Physical' },
    { day: 'Friday', time: '4:00 PM – 6:30 PM', class: 'Combined Theory - Both Grades', mode: 'Online' },
    { day: 'Saturday', time: '8:30 AM – 11:30 AM', class: 'Paper Class (Grade 12 & 13)', mode: 'Physical' },
    { day: 'Sunday', time: '10:00 AM – 12:00 PM', class: 'Special Topics & Q&A', mode: 'Physical' },
  ],
  si: [
    { day: 'සඳුදා', time: 'ප.ව. 4:00 – 6:00', class: '12 ශ්‍රේණිය - තියරි', mode: 'Physical' },
    { day: 'අඟහරුවාදා', time: 'ප.ව. 4:00 – 6:00', class: '13 ශ්‍රේණිය - තියරි', mode: 'Physical' },
    { day: 'බදාදා', time: 'ප.ව. 3:30 – 5:30', class: '12 ශ්‍රේණිය - තියරි (නැවත)', mode: 'Online' },
    { day: 'බ්‍රහස්පතින්දා', time: 'ප.ව. 4:00 – 6:00', class: '13 ශ්‍රේණිය - පුනරීක්ෂණ', mode: 'Physical' },
    { day: 'සිකුරාදා', time: 'ප.ව. 4:00 – 6:30', class: 'ඒකාබද්ධ තියරි - ශ්‍රේණි දෙකම', mode: 'Online' },
    { day: 'සෙනසුරාදා', time: 'පෙ.ව. 8:30 – 11:30', class: 'ප්‍රශ්න පත්‍ර පන්තිය (12 සහ 13)', mode: 'Physical' },
    { day: 'ඉරිදා', time: 'පෙ.ව. 10:00 – 12:00', class: 'විශේෂ මාතෘකා සහ ප්‍රශ්න', mode: 'Physical' },
  ],
};

const testimonialsData = {
  en: [
    {
      quote:
        'My daughter got an A in Biology - her dream. What made the difference was how clearly the molecular biology units were taught. Having a teacher who actually does research shows in every class.',
      name: 'Ms. Rajapaksha',
      role: 'Parent of 2025 A/L student',
    },
    {
      quote:
        'I was failing Biology in Grade 12. I joined the theory class and by the end of the year I was getting Bs. The paper class especially changed everything - I finally understood how to answer properly.',
      name: 'Thisara Fernando',
      role: 'Current A/L student, Grade 13',
    },
    {
      quote:
        "The weekly parent updates were invaluable. We always knew exactly how our son was progressing. Highly recommended for any parent serious about their child's A/L results.",
      name: 'Mr. Weerasinghe',
      role: 'Parent of 2024 A/L student',
    },
  ],
  si: [
    {
      quote:
        'මගේ දුවට ජීව විද්‍යාවෙන් A ශ්‍රේණිය ලැබුණා - ඇගේ සිහිනය. වෙනස ඇති කළේ අණුක ජීව විද්‍යා ඒකක කොතරම් පැහැදිලිව ඉගැන්වුවාද යන්නයි. ඇත්තටම පර්යේෂණ කරන ගුරුවරියක් සිටීම සෑම පන්තියකම පෙනෙනවා.',
      name: 'රාජපක්ෂ මිය',
      role: '2025 උසස් පෙළ සිසුවියකගේ මව',
    },
    {
      quote:
        '12 ශ්‍රේණියේදී මම ජීව විද්‍යාවෙන් අසමත් වුණා. මම තියරි පන්තියට එකතු වුණා, වසර අවසානයේ මට B ශ්‍රේණි ලැබුණා. විශේෂයෙන්ම ප්‍රශ්න පත්‍ර පන්තිය සියල්ල වෙනස් කළා - අවසානයේ නිවැරදිව පිළිතුරු දෙන්නේ කොහොමද කියලා මට තේරුණා.',
      name: 'තිසර ප්‍රනාන්දු',
      role: 'වර්තමාන උසස් පෙළ සිසුවෙක්, 13 ශ්‍රේණිය',
    },
    {
      quote:
        'සතිපතා දෙමාපිය යාවත්කාලීන ඉතා වටිනා වුණා. අපේ පුතා කොහොමද දියුණු වෙනවාද කියලා අපි හැමවිටම දැනගෙන හිටියා. තම දරුවාගේ උසස් පෙළ ප්‍රතිඵල ගැන බැරෑරුම් වන ඕනෑම දෙමාපියෙකුට නිර්දේශ කරනවා.',
      name: 'වීරසිංහ මහතා',
      role: '2024 උසස් පෙළ සිසුවෙකුගේ පියා',
    },
  ],
};

const faqsData = {
  en: [
    {
      q: 'What is the difference between Theory, Revision, and Paper classes?',
      a: 'Theory classes cover the full syllabus unit-by-unit over the year. Revision classes condense the syllabus into high-yield summaries for the months before the exam. Paper classes focus entirely on past paper practice and exam technique.',
    },
    {
      q: 'Do you cover the full A/L Biology syllabus?',
      a: 'Yes. All 10 units of the A/L Biology syllabus are covered in full - from Introduction to Biology through to Immunology. Nothing is skipped.',
    },
    {
      q: 'Are classes in Sinhala or English medium?',
      a: 'Classes are conducted primarily in English medium with Sinhala explanations where helpful. Notes are provided in English to match the exam paper.',
    },
    {
      q: 'Do you provide notes and past papers?',
      a: 'Yes. Every student receives comprehensive printed notes, past paper sets (2015 – present), and structured worksheets as part of the class.',
    },
    {
      q: 'Can I join mid-year?',
      a: 'In most cases yes - especially for Revision and Paper classes. Join the free trial first, and we will assess how to help you catch up if needed.',
    },
    {
      q: 'What are the class fees?',
      a: 'Fees depend on the class type and grade. Please contact us on WhatsApp for the current fee structure - we will share everything clearly.',
    },
    {
      q: 'Do you offer online classes?',
      a: 'Yes. Weekday repeat classes and the Friday combined theory class are available fully online via Zoom. Physical classes are held in Colombo.',
    },
  ],
  si: [
    {
      q: 'තියරි, පුනරීක්ෂණ සහ ප්‍රශ්න පත්‍ර පන්ති අතර වෙනස කුමක්ද?',
      a: 'තියරි පන්ති වසර පුරා සම්පූර්ණ විෂය නිර්දේශය ඒකකයෙන් ඒකකය ආවරණය කරනවා. පුනරීක්ෂණ පන්ති විභාගයට පෙර මාසවලදී විෂය නිර්දේශය ඉහළ-ඵලදායී සාරාංශ බවට සංක්ෂේප කරනවා. ප්‍රශ්න පත්‍ර පන්ති සම්පූර්ණයෙන්ම පසුගිය ප්‍රශ්න පත්‍ර පුහුණුව සහ විභාග තාක්ෂණය කෙරෙහි අවධානය යොමු කරනවා.',
    },
    {
      q: 'ඔබ සම්පූර්ණ උසස් පෙළ ජීව විද්‍යා විෂය නිර්දේශය ආවරණය කරනවාද?',
      a: 'ඔව්. උසස් පෙළ ජීව විද්‍යා විෂය නිර්දේශයේ සියලුම ඒකක 10 සම්පූර්ණයෙන්ම ආවරණය වනවා - ජීව විද්‍යාවට හැඳින්වීමේ සිට ප්‍රතිශක්ති විද්‍යාව දක්වා. කිසිවක් අත් නොහරිනවා.',
    },
    {
      q: 'පන්ති සිංහල මාධ්‍යයෙන්ද ඉංග්‍රීසි මාධ්‍යයෙන්ද?',
      a: 'පන්ති ප්‍රධාන වශයෙන් ඉංග්‍රීසි මාධ්‍යයෙන් පවත්වන අතර අවශ්‍ය තැනදී සිංහල පැහැදිලි කිරීම් සමඟින්. විභාග ප්‍රශ්න පත්‍රයට ගැලපෙන පරිදි සටහන් ඉංග්‍රීසියෙන් ලබා දෙනවා.',
    },
    {
      q: 'ඔබ සටහන් සහ පසුගිය ප්‍රශ්න පත්‍ර ලබා දෙනවාද?',
      a: 'ඔව්. සෑම සිසුවෙකුටම පන්තියේ කොටසක් ලෙස සවිස්තර මුද්‍රිත සටහන්, පසුගිය ප්‍රශ්න පත්‍ර කට්ටල (2015 – වර්තමානය) සහ ව්‍යුහගත වැඩ පත්‍රිකා ලැබෙනවා.',
    },
    {
      q: 'මට වසර මැදදී එකතු විය හැකිද?',
      a: 'බොහෝ අවස්ථාවලදී ඔව් - විශේෂයෙන්ම පුනරීක්ෂණ සහ ප්‍රශ්න පත්‍ර පන්ති සඳහා. පළමුව නොමිලේ පන්තියට එකතු වන්න, අවශ්‍ය නම් ඔබට හිලව් වීමට උපකාර කරන්නේ කෙසේදැයි අපි තක්සේරු කරන්නෙමු.',
    },
    {
      q: 'පන්ති ගාස්තු කීයද?',
      a: 'ගාස්තු පන්ති වර්ගය සහ ශ්‍රේණිය අනුව වෙනස් වෙනවා. වර්තමාන ගාස්තු ව්‍යුහය සඳහා කරුණාකර WhatsApp හරහා අප හා සම්බන්ධ වන්න - අපි සියල්ල පැහැදිලිව බෙදා ගන්නෙමු.',
    },
    {
      q: 'ඔබ ඔන්ලයින් පන්ති ලබා දෙනවාද?',
      a: 'ඔව්. සතියේ නැවත පන්ති සහ සිකුරාදා ඒකාබද්ධ තියරි පන්තිය Zoom හරහා සම්පූර්ණයෙන්ම ඔන්ලයින් ලෙස ලබා ගත හැකියි. භෞතික පන්ති කොළඹ පවත්වනවා.',
    },
  ],
};

// =========================================================
// MILESTONES
// =========================================================
const milestonesData = {
  en: [
    {
      year: '2016',
      title: 'BSc (Hons) Graduated',
      subtitle: 'Uva Wellassa University',
      desc: 'Graduated with a BSc (Hons) in Industrial Information Technology — specializing in BioProcess Engineering and Biotechnology.',
      icon: '🎓',
    },
    {
      year: '2017',
      title: 'Started Teaching A/L Biology',
      subtitle: 'First Batch — 6 Students',
      desc: 'Began teaching G.C.E. A/L Biology with a small pilot batch, focusing on molecular biology and genetics.',
      icon: '📖',
    },
    {
      year: '2019',
      title: 'Expanded to Full A/L Curriculum',
      subtitle: '300+ Students Taught',
      desc: 'Grew from a pilot batch to a full A/L Biology program covering all 10 units — with 92% of students achieving A/B grades.',
      icon: '🏆',
    },
    {
      year: '2021',
      title: 'Launched Paper Classes',
      subtitle: 'Exam-Focused Training',
      desc: 'Introduced dedicated paper classes with past paper sets from 2015 onward, focusing entirely on exam technique and time management.',
      icon: '📝',
    },
    {
      year: '2023',
      title: 'Research Published',
      subtitle: 'BioProcess Engineering',
      desc: 'Published research findings in BioProcess Engineering — bringing active scientific work directly into the classroom.',
      icon: '🔬',
    },
    {
      year: '2025',
      title: 'Launched Online Batches',
      subtitle: 'Serving Students Island-Wide',
      desc: 'Introduced fully online classes to reach students outside Colombo — expanding access without compromising class quality.',
      icon: '🌐',
    },
  ],
  si: [
    {
      year: '2016',
      title: 'BSc (Hons) උපාධිය',
      subtitle: 'ඌව වෙල්ලස්ස විශ්වවිද්‍යාලය',
      desc: 'කර්මාන්ත තොරතුරු තාක්ෂණය පිළිබඳ BSc (Hons) උපාධිය — ජෛව ක්‍රියාවලි ඉංජිනේරු සහ ජෛව තාක්ෂණ විශේෂඥතාව සමඟින්.',
      icon: '🎓',
    },
    {
      year: '2017',
      title: 'උසස් පෙළ ජීව විද්‍යා ඉගැන්වීම ආරම්භ කළා',
      subtitle: 'පළමු කණ්ඩායම — සිසුන් 6',
      desc: 'සුළු ප්‍රායෝගික කණ්ඩායමක් සමඟ උසස් පෙළ ජීව විද්‍යා ඉගැන්වීම ආරම්භ කළා — අණුක ජීව විද්‍යාව සහ ප්‍රවේණි විද්‍යාව කෙරෙහි අවධානය යොමු කරමින්.',
      icon: '📖',
    },
    {
      year: '2019',
      title: 'සම්පූර්ණ උසස් පෙළ විෂය නිර්දේශයට ව්‍යාප්ත විය',
      subtitle: 'සිසුන් 300+ ක් ඉගැන්වූ',
      desc: 'ප්‍රායෝගික කණ්ඩායමක සිට සම්පූර්ණ උසස් පෙළ ජීව විද්‍යා වැඩසටහනක් දක්වා වර්ධනය විය — සිසුන්ගෙන් 92% ක් A/B ශ්‍රේණි ලබා ගනිමින්.',
      icon: '🏆',
    },
    {
      year: '2021',
      title: 'ප්‍රශ්න පත්‍ර පන්ති ආරම්භ කළා',
      subtitle: 'විභාග-කේන්ද්‍රී පුහුණුව',
      desc: '2015 සිට පසුගිය ප්‍රශ්න පත්‍ර කට්ටල සමඟ කැපවූ ප්‍රශ්න පත්‍ර පන්ති හඳුන්වා දුන්නා — සම්පූර්ණයෙන්ම විභාග තාක්ෂණය සහ කාල කළමනාකරණය කෙරෙහි අවධානය යොමු කරමින්.',
      icon: '📝',
    },
    {
      year: '2023',
      title: 'පර්යේෂණය ප්‍රකාශයට පත් කළා',
      subtitle: 'ජෛව ක්‍රියාවලි ඉංජිනේරු',
      desc: 'ජෛව ක්‍රියාවලි ඉංජිනේරු විද්‍යාව පිළිබඳ පර්යේෂණ සොයාගැනීම් ප්‍රකාශයට පත් කළා — ක්‍රියාකාරී විද්‍යාත්මක කටයුතු කෙලින්ම පන්ති කාමරයට ගෙන එමින්.',
      icon: '🔬',
    },
    {
      year: '2025',
      title: 'ඔන්ලයින් කණ්ඩායම් ආරම්භ කළා',
      subtitle: 'දිවයින පුරා සිසුන් සඳහා',
      desc: 'කොළඹින් පිටත සිසුන්ට ළඟා වීමට සම්පූර්ණයෙන්ම ඔන්ලයින් පන්ති හඳුන්වා දුන්නා — පන්ති ගුණාත්මකභාවයට හානි නොවන ලෙස ප්‍රවේශය පුළුල් කරමින්.',
      icon: '🌐',
    },
  ],
};

// =========================================================
// VIDEO
// =========================================================
// Replace VIDEO_ID below with the actual YouTube video ID
// Example: https://www.youtube.com/watch?v=xbpVIi8uESk → ID is "xbpVIi8uESk"
const YOUTUBE_VIDEO_ID = 'xbpVIi8uESk';

// =========================================================
// GALLERY
// =========================================================
// Replace image paths with real photos once available.
// Recommended: 6–9 images, landscape orientation, ~1200×800px
const galleryItemsData = {
  en: [
    { src: '/image/class-present.png', caption: 'Classroom Session', tag: 'Theory' },
    { src: '/image/lab.png', caption: 'Laboratory Practical', tag: 'Lab' },
    { src: '/image/paper-class.jpg', caption: 'Paper Class Discussion', tag: 'Papers' },
    { src: '/image/acive.jpg', caption: 'Student Achievements', tag: 'Results' },
    { src: '/image/group.jpg', caption: 'Group Study Session', tag: 'Class' },
    { src: '/image/online-class.jpg', caption: 'Online Class Snapshot', tag: 'Online' },
  ],
  si: [
    { src: '/image/project/baby room.png', caption: 'පන්ති කාමර සැසිය', tag: 'තියරි' },
    { src: '/image/project/neohouse.png', caption: 'රසායනාගාර ප්‍රායෝගික', tag: 'රසායනාගාරය' },
    { src: '/image/project/safelink.jpg', caption: 'ප්‍රශ්න පත්‍ර සාකච්ඡාව', tag: 'ප්‍රශ්න පත්‍ර' },
    { src: '/image/AJ_saloon.png', caption: 'සිසු ජයග්‍රහණ', tag: 'ප්‍රතිඵල' },
    { src: '/image/project/event tune.jpg', caption: 'කණ්ඩායම් අධ්‍යයන සැසිය', tag: 'පන්තිය' },
    { src: '/image/project/gobus.png', caption: 'ඔන්ලයින් පන්ති දසුන', tag: 'ඔන්ලයින්' },
  ],
};

// =========================================================
// COMPONENT
// =========================================================
export default function MsSandunikaTuition() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const t = translations[lang];
  const classTypes = classTypesData[lang];
  const researchAreas = researchAreasData[lang];
  const whyPoints = whyPointsData[lang];
  const schedule = scheduleData[lang];
  const testimonials = testimonialsData[lang];
  const faqs = faqsData[lang];

  const WhatsAppMessage =
    lang === 'si'
      ? "ආයුබෝවන් මිස්, මට ඔබේ උසස් පෙළ ජීව විද්‍යා පන්ති ගැන දැනගැනීමට අවශ්‍යයි."
      : "Hello Ma'am, I'd like to know more about your A/L Biology classes.";
  const WhatsAppLink = `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(
    WhatsAppMessage
  )}`;

  // Load saved language on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('Sandunika-lang');
    if (saved === 'si' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  // Close lightbox on ESC key
useEffect(() => {
  const handler = (e) => {
    if (e.key === 'Escape') setLightboxIndex(null);
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);

  // Persist language + update <html lang>
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('Sandunika-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'si' : 'en'));

  const closeMenu = () => setMenuOpen(false);

const navLinks = [
  { label: t.navHome, href: '#home' },
  { label: t.navAbout, href: '#about' },
  { label: t.milestonesEyebrow, href: '#milestones' },
  { label: t.navClasses, href: '#classes' },
  { label: t.galleryEyebrow, href: '#gallery' },
  { label: t.navSchedule, href: '#schedule' },
  { label: t.navContact, href: '#contact' },
];

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const openLightbox = (index) => setLightboxIndex(index);
const closeLightbox = () => setLightboxIndex(null);
const nextImage = () =>
  setLightboxIndex((i) => (i === galleryItems.length - 1 ? 0 : i + 1));
const prevImage = () =>
  setLightboxIndex((i) => (i === 0 ? galleryItems.length - 1 : i - 1));

const galleryItems = galleryItemsData[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = {
      studentName: e.target.studentName.value.trim(),
      phone: e.target.phone.value.trim(),
      school: e.target.school.value.trim(),
      grade: e.target.grade.value,
      classType: e.target.classType.value,
      message: e.target.message.value.trim(),
      language: lang,
    };

    if (!formData.studentName || !formData.phone) {
      setSending(false);
      showToast({ type: 'error', text: t.toastMissing });
      return;
    }

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_Sandunika_FORM_URL || '';

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            ...formData,
            source: 'Ms. Sandunika A/L Biology Demo',
          }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }

      e.target.reset();
      showToast({ type: 'success', text: t.toastSuccess });
    } catch (err) {
      console.error(err);
      showToast({ type: 'error', text: t.toastError });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          {lang === 'si'
            ? 'සඳුනිකා මිස් - උසස් පෙළ ජීව විද්‍යා පන්ති | තියරි, පුනරීක්ෂණ සහ ප්‍රශ්න පත්‍ර'
            : "Ms. Sandunika - G.C.E. A/L Biology Classes | Theory, Revision & Papers"}
        </title>
        <meta
          name="description"
          content={
            lang === 'si'
              ? 'ඌව වෙල්ලස්ස විශ්වවිද්‍යාලයේ BSc (Hons) උපාධිධාරී ජෛව තාක්ෂණ පර්යේෂකයෙකු විසින් මෙහෙයවන උසස් පෙළ ජීව විද්‍යා පන්ති. තියරි, පුනරීක්ෂණ සහ ප්‍රශ්න පත්‍ර පන්ති.'
              : 'A/L Biology classes taught by a Biotechnology researcher with a BSc (Hons) from Uva Wellassa University. Theory, Revision and Paper classes. Small batches, free trial class.'
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Sinhala:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ═══ NAVBAR ═══ */}
      <nav className="nt-nav">
        <div className="nt-nav-inner">
          <a href="#home" className="nt-logo" onClick={closeMenu}>
            <span className="nt-logo-mark">🧬</span>
            <span className="nt-logo-text">
              {t.brandName}
              <small>{t.brandTag}</small>
            </span>
          </a>

          <ul className="nt-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            className="nt-lang-toggle"
            onClick={toggleLang}
            aria-label={
              lang === 'en' ? 'Switch to Sinhala' : 'Switch to English'
            }
            title={
              lang === 'en' ? 'Switch to Sinhala' : 'Switch to English'
            }
          >
            <span className="nt-lang-icon" aria-hidden="true">
              🌐
            </span>
            <span className="nt-lang-label">
              {lang === 'en' ? 'සිංහල' : 'English'}
            </span>
          </button>

          <a
            href={WhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nt-nav-cta"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.51 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.94L0 24l6.38-1.67a11.8 11.8 0 005.68 1.45h.01c6.55 0 11.86-5.31 11.86-11.86 0-3.16-1.23-6.13-3.41-8.34zM12.07 21.5h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.6 9.6 0 01-1.47-5.1c0-5.3 4.31-9.6 9.61-9.6 2.57 0 4.98 1 6.8 2.83a9.57 9.57 0 012.8 6.78c0 5.3-4.31 9.6-9.6 9.6z" />
            </svg>
            {t.navCta}
          </a>

          <button
            className={`nt-burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nt-mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <button
            className="nt-mobile-lang"
            onClick={() => {
              toggleLang();
              closeMenu();
            }}
          >
            🌐 {lang === 'en' ? 'සිංහල' : 'English'}
          </button>

          <a
            href={WhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nt-mobile-cta"
            onClick={closeMenu}
          >
            {t.navCta}
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="home" className="nt-hero">
        <div className="nt-hero-bg" aria-hidden="true">
          <div className="nt-hero-dot nt-hero-dot-1" />
          <div className="nt-hero-dot nt-hero-dot-2" />
          <div className="nt-hero-dot nt-hero-dot-3" />
        </div>

        <div className="nt-container nt-hero-grid">
          <div className="nt-hero-content">
            <div className="nt-badge">
              <span className="nt-badge-dot" />
              {t.heroBadge}
            </div>

            <h1 className="nt-hero-title">
              {t.heroTitle1}
              <em>{t.heroTitleEm}</em>
            </h1>

            <p className="nt-hero-sub">{t.heroSub}</p>

            <div className="nt-hero-actions">
              <a
                href={WhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nt-btn nt-btn-primary"
              >
                {t.heroCtaPrimary}
              </a>
              <a href="#classes" className="nt-btn nt-btn-ghost">
                {t.heroCtaSecondary}
              </a>
            </div>

            <div className="nt-hero-stats">
              <div className="nt-stat">
                <strong>8+</strong>
                <span>{t.statYears}</span>
              </div>
              <div className="nt-stat">
                <strong>300+</strong>
                <span>{t.statStudents}</span>
              </div>
              <div className="nt-stat">
                <strong>92%</strong>
                <span>{t.statPassRate}</span>
              </div>
              <div className="nt-stat">
                <strong>4.9★</strong>
                <span>{t.statRating}</span>
              </div>
            </div>
          </div>

          <div className="nt-hero-visual">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="nt-hero-svg">
              <defs>
                <linearGradient id="ntDnaBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8F5EF" />
                  <stop offset="100%" stopColor="#D1FAE5" />
                </linearGradient>
                <radialGradient id="ntDnaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="250" cy="250" r="220" fill="url(#ntDnaBg)" />
              <circle cx="250" cy="250" r="220" fill="url(#ntDnaGlow)" />
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="#10B981"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                strokeDasharray="6 8"
              />

              <g transform="translate(250 250)">
                <path
                  d="M 0 -170 Q 90 -130 0 -85 Q -90 -40 0 5 Q 90 50 0 95 Q -90 140 0 185"
                  stroke="#136B54"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 -170 Q -90 -130 0 -85 Q 90 -40 0 5 Q -90 50 0 95 Q 90 140 0 185"
                  stroke="#10B981"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />

                {[-127.5, -42.5, 42.5, 127.5].map((y) => (
                  <line
                    key={`bp-${y}`}
                    x1="-45"
                    y1={y}
                    x2="45"
                    y2={y}
                    stroke="#A7F3D0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="2 4"
                  />
                ))}

                {[-127.5, -42.5, 42.5, 127.5].map((y) => (
                  <g key={`dots-${y}`}>
                    <circle cx="-45" cy={y} r="6" fill="#136B54" />
                    <circle cx="45" cy={y} r="6" fill="#10B981" />
                  </g>
                ))}
              </g>

              <g transform="translate(105 115)">
                <circle r="32" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                <text textAnchor="middle" y="9" fontSize="24" fontWeight="700" fill="#136B54" fontFamily="Fraunces, serif">
                  G
                </text>
              </g>

              <g transform="translate(395 135)">
                <circle r="28" fill="#FFFFFF" stroke="#136B54" strokeWidth="2" />
                <text textAnchor="middle" y="8" fontSize="22" fontWeight="700" fill="#10B981" fontFamily="Fraunces, serif">
                  C
                </text>
              </g>

              <g transform="translate(400 385)">
                <circle r="30" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                <text textAnchor="middle" y="9" fontSize="26">
                  🧪
                </text>
              </g>

              <g transform="translate(100 395)">
                <circle r="30" fill="#FFFFFF" stroke="#136B54" strokeWidth="2" />
                <text textAnchor="middle" y="9" fontSize="26">
                  🔬
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="nt-section nt-section-alt">
        <div className="nt-container">
          <div className="nt-section-head">
            <span className="nt-eyebrow">{t.aboutEyebrow}</span>
            <h2 className="nt-heading">
              {t.aboutTitle1}
              <em>{t.aboutTitleEm}</em>
            </h2>
          </div>

          <div className="nt-about-grid">
            <div className="nt-about-portrait">
              <div className="nt-portrait-frame">
                <div className="nt-portrait-initials">MS</div>
                <div className="nt-portrait-name">
                  <strong>{t.brandName}</strong>
                  <span>{t.credDegreeSub}</span>
                </div>
              </div>
            </div>

            <div className="nt-about-copy">
              <p>
                {t.aboutP1a}
                <strong>{t.aboutP1b}</strong>
              </p>
              <p>
                {t.aboutP2a}
                <strong>{t.aboutP2b}</strong>
                {t.aboutP2c}
              </p>
              <p>{t.aboutP3}</p>

              <div className="nt-credentials">
                <div className="nt-credential">
                  <span className="nt-cred-icon">🎓</span>
                  <div>
                    <strong>{t.credDegree}</strong>
                    <span>{t.credDegreeSub}</span>
                  </div>
                </div>
                <div className="nt-credential">
                  <span className="nt-cred-icon">🔬</span>
                  <div>
                    <strong>{t.credResearcher}</strong>
                    <span>{t.credResearcherSub}</span>
                  </div>
                </div>
                <div className="nt-credential">
                  <span className="nt-cred-icon">🧬</span>
                  <div>
                    <strong>{t.credSpecialized}</strong>
                    <span>{t.credSpecializedSub}</span>
                  </div>
                </div>
                <div className="nt-credential">
                  <span className="nt-cred-icon">📚</span>
                  <div>
                    <strong>{t.credTeacher}</strong>
                    <span>{t.credTeacherSub}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MILESTONES ═══ */}
{/* <section id="milestones" className="nt-section">
  <div className="nt-container">
    <div className="nt-section-head nt-section-head-center">
      <span className="nt-eyebrow">{t.milestonesEyebrow}</span>
      <h2 className="nt-heading">
        {t.milestonesTitle1}
        <em>{t.milestonesTitleEm}</em>
      </h2>
      <p className="nt-section-sub">{t.milestonesSub}</p>
    </div>

    <div className="nt-timeline">
      {milestonesData[lang].map((item, i) => (
        <div
          key={item.year}
          className={`nt-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="nt-timeline-marker">
            <span className="nt-timeline-icon">{item.icon}</span>
          </div>

          <div className="nt-timeline-card">
            <span className="nt-timeline-year">{item.year}</span>
            <h3 className="nt-timeline-title">{item.title}</h3>
            <div className="nt-timeline-subtitle">{item.subtitle}</div>
            <p className="nt-timeline-desc">{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="nt-timeline-line" aria-hidden="true" />
    </div>
  </div>
</section> */}

      {/* ═══ CLASS TYPES ═══ */}
      <section id="classes" className="nt-section">
        <div className="nt-container">
          <div className="nt-section-head nt-section-head-center">
            <span className="nt-eyebrow">{t.classesEyebrow}</span>
            <h2 className="nt-heading">
              {t.classesTitle1}
              <em>{t.classesTitleEm}</em>
            </h2>
            <p className="nt-section-sub">{t.classesSub}</p>
          </div>

          <div className="nt-classes-grid">
            {classTypes.map((item) => (
              <div key={item.title} className="nt-class-card">
                <div className="nt-class-icon">{item.icon}</div>
                <h3 className="nt-class-title">{item.title}</h3>
                <div className="nt-class-subtitle">{item.subtitle}</div>
                <p className="nt-class-desc">{item.desc}</p>
                <ul className="nt-class-includes">
                  {item.includes.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href={WhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nt-class-link"
                >
                  {t.classEnquire}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESEARCH AREAS ═══ */}
      <section id="research" className="nt-section nt-section-alt">
        <div className="nt-container">
          <div className="nt-section-head nt-section-head-center">
            <span className="nt-eyebrow">{t.researchEyebrow}</span>
            <h2 className="nt-heading">
              {t.researchTitle1}
              <em>{t.researchTitleEm}</em>
            </h2>
            <p className="nt-section-sub">{t.researchSub}</p>
          </div>

          <div className="nt-research-grid">
            {researchAreas.map((area) => (
              <div key={area.title} className="nt-research-card">
                <div className="nt-research-icon">{area.icon}</div>
                <h3 className="nt-research-title">{area.title}</h3>
                <p className="nt-research-desc">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="nt-research-note">
            <div className="nt-research-note-icon">💡</div>
            <div>
              <strong>{t.researchNoteTitle}</strong>
              <p>{t.researchNoteBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═══ */}
      <section className="nt-section">
        <div className="nt-container">
          <div className="nt-section-head nt-section-head-center">
            <span className="nt-eyebrow">{t.whyEyebrow}</span>
            <h2 className="nt-heading">
              {t.whyTitle1}
              <em>{t.whyTitleEm}</em>
            </h2>
          </div>

          <div className="nt-why-grid">
            {whyPoints.map((point) => (
              <div key={point.title} className="nt-why-card">
                <div className="nt-why-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO ═══ */}
<section id="video" className="nt-section">
  <div className="nt-container">
    <div className="nt-section-head nt-section-head-center">
      <span className="nt-eyebrow">{t.videoEyebrow}</span>
      <h2 className="nt-heading">
        {t.videoTitle1}
        <em>{t.videoTitleEm}</em>
      </h2>
      <p className="nt-section-sub">{t.videoSub}</p>
    </div>

    <div className="nt-video-card">
      <div className="nt-video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
          title={t.videoCaption}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="nt-video-caption">
        <span className="nt-video-play-icon">▶</span>
        {t.videoCaption}
      </div>
    </div>
  </div>
</section>

      {/* ═══ SCHEDULE ═══ */}
      <section id="schedule" className="nt-section nt-section-alt">
        <div className="nt-container">
          <div className="nt-section-head">
            <span className="nt-eyebrow">{t.scheduleEyebrow}</span>
            <h2 className="nt-heading">
              {t.scheduleTitle1}
              <em>{t.scheduleTitleEm}</em>
            </h2>
            <p className="nt-section-sub">{t.scheduleSub}</p>
          </div>

          <div className="nt-schedule-wrap">
            <table className="nt-schedule">
              <thead>
                <tr>
                  <th>{t.tableDay}</th>
                  <th>{t.tableTime}</th>
                  <th>{t.tableClass}</th>
                  <th>{t.tableMode}</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.day + row.time}>
                    <td data-label={t.tableDay}>
                      <strong>{row.day}</strong>
                    </td>
                    <td data-label={t.tableTime}>{row.time}</td>
                    <td data-label={t.tableClass}>{row.class}</td>
                    <td data-label={t.tableMode}>
                      <span
                        className={`nt-mode nt-mode-${row.mode.toLowerCase()}`}
                      >
                        {row.mode === 'Physical'
                          ? t.modePhysical
                          : t.modeOnline}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
<section id="gallery" className="nt-section nt-section-alt">
  <div className="nt-container">
    <div className="nt-section-head nt-section-head-center">
      <span className="nt-eyebrow">{t.galleryEyebrow}</span>
      <h2 className="nt-heading">
        {t.galleryTitle1}
        <em>{t.galleryTitleEm}</em>
      </h2>
      <p className="nt-section-sub">{t.gallerySub}</p>
    </div>

    <div className="nt-gallery-grid">
      {galleryItems.map((item, i) => (
        <button
          key={i}
          className="nt-gallery-item"
          onClick={() => openLightbox(i)}
          aria-label={item.caption}
        >
          <img src={item.src} alt={item.caption} loading="lazy" />
          <div className="nt-gallery-overlay">
            <span className="nt-gallery-tag">{item.tag}</span>
            <span className="nt-gallery-caption">{item.caption}</span>
          </div>
        </button>
      ))}
    </div>
  </div>

  {/* Lightbox */}
  {lightboxIndex !== null && (
    <div className="nt-lightbox" onClick={closeLightbox}>
      <button
        className="nt-lightbox-close"
        onClick={closeLightbox}
        aria-label={t.galleryClose}
      >
        ✕
      </button>

      <button
        className="nt-lightbox-nav nt-lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <div
        className="nt-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={galleryItems[lightboxIndex].src}
          alt={galleryItems[lightboxIndex].caption}
        />
        <div className="nt-lightbox-caption">
          <span className="nt-gallery-tag">
            {galleryItems[lightboxIndex].tag}
          </span>
          {galleryItems[lightboxIndex].caption}
        </div>
      </div>

      <button
        className="nt-lightbox-nav nt-lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  )}
</section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="nt-section">
        <div className="nt-container">
          <div className="nt-section-head nt-section-head-center">
            <span className="nt-eyebrow">{t.testEyebrow}</span>
            <h2 className="nt-heading">
              {t.testTitle1}
              <em>{t.testTitleEm}</em>
            </h2>
          </div>

          <div className="nt-testimonials-grid">
            {testimonials.map((item, i) => (
              <div key={i} className="nt-testimonial">
                <div className="nt-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="nt-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="nt-author">
                  <div className="nt-author-avatar">
                    {item.name.split(' ').pop()[0]}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="nt-section nt-section-alt">
        <div className="nt-container">
          <div className="nt-section-head nt-section-head-center">
            <span className="nt-eyebrow">{t.faqEyebrow}</span>
            <h2 className="nt-heading">
              {t.faqTitle1}
              <em>{t.faqTitleEm}</em>
            </h2>
          </div>

          <div className="nt-faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`nt-faq-item ${openFaq === i ? 'open' : ''}`}
              >
                <button
                  className="nt-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="nt-faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="nt-faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="nt-section">
        <div className="nt-container">
          <div className="nt-section-head">
            <span className="nt-eyebrow">{t.contactEyebrow}</span>
            <h2 className="nt-heading">
              {t.contactTitle1}
              <em>{t.contactTitleEm}</em>
            </h2>
            <p className="nt-section-sub">{t.contactSub}</p>
          </div>

          <div className="nt-contact-grid">
            <div className="nt-contact-info">

              <div className="nt-contact-card">
                <div className="nt-contact-icon">📞</div>
                <div>
                  <strong>{t.contactPhone}</strong>
                  <span>+94 77 020 2138</span>
                </div>
              </div>

              <div className="nt-contact-card">
                <div className="nt-contact-icon">📍</div>
                <div>
                  <strong>{t.contactLocation}</strong>
                  <span>{t.contactLocationValue}</span>
                </div>
              </div>

              <div className="nt-contact-card">
                <div className="nt-contact-icon">✉️</div>
                <div>
                  <strong>{t.contactEmail}</strong>
                  <span>hello@MsSandunika.lk</span>
                </div>
              </div>
            </div>

            <form className="nt-form" onSubmit={handleSubmit}>
              <div className="nt-form-row">
                <div className="nt-form-group">
                  <label htmlFor="studentName">{t.formStudent} *</label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder={t.formStudentPlaceholder}
                    required
                  />
                </div>
                <div className="nt-form-group">
                  <label htmlFor="phone">{t.formPhone} *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.formPhonePlaceholder}
                    required
                  />
                </div>
              </div>

              <div className="nt-form-row">
                <div className="nt-form-group">
                  <label htmlFor="school">{t.formSchool}</label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    placeholder={t.formSchoolPlaceholder}
                  />
                </div>
                <div className="nt-form-group">
                  <label htmlFor="grade">{t.formGrade}</label>
                  <select id="grade" name="grade" defaultValue="">
                    <option value="">{t.formGradePlaceholder}</option>
                    <option>{t.formGradeOption1}</option>
                    <option>{t.formGradeOption2}</option>
                    <option>{t.formGradeOption3}</option>
                  </select>
                </div>
              </div>

              <div className="nt-form-group">
                <label htmlFor="classType">{t.formClassType}</label>
                <select id="classType" name="classType" defaultValue="">
                  <option value="">{t.formClassTypePlaceholder}</option>
                  <option>{t.formClassTypeOption1}</option>
                  <option>{t.formClassTypeOption2}</option>
                  <option>{t.formClassTypeOption3}</option>
                  <option>{t.formClassTypeOption4}</option>
                  <option>{t.formClassTypeOption5}</option>
                </select>
              </div>

              <div className="nt-form-group">
                <label htmlFor="message">{t.formMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t.formMessagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="nt-btn nt-btn-primary nt-btn-full"
                disabled={sending}
              >
                {sending ? t.formSubmitting : t.formSubmit}
              </button>

              <p className="nt-form-note">
                {t.formNote1}
                <a href={WhatsAppLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                {t.formNote2}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="nt-footer">
        <div className="nt-container">
          <div className="nt-footer-grid">
            <div className="nt-footer-brand">
              <div className="nt-logo nt-logo-light">
                <span className="nt-logo-mark">🧬</span>
                <span className="nt-logo-text">
                  {t.brandName}
                  <small>{t.brandTag}</small>
                </span>
              </div>
              <p>{t.footerTagline}</p>
            </div>

            <div className="nt-footer-col">
  <h4>{t.footerColClasses}</h4>
  <a href="#classes">{t.navClasses}</a>
  <a href="#schedule">{t.navSchedule}</a>
  <a href="#video">{t.videoEyebrow}</a>
  <a href="#gallery">{t.galleryEyebrow}</a>
</div>

            <div className="nt-footer-col">
              <h4>{t.footerColCompany}</h4>
              <a href="#about">{t.navAbout}</a>
              <a href="#contact">{t.navContact}</a>
            </div>

            <div className="nt-footer-col">
              <h4>{t.footerColTouch}</h4>
              <a href={WhatsAppLink} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="tel:+94770202138">+94 77 020 2138</a>
              <a href="mailto:hello@MsSandunika.lk">hello@MsSandunika.lk</a>
            </div>
          </div>

          <div className="nt-footer-bottom">
            <div>
              © {new Date().getFullYear()} {t.footerCopyright}
            </div>
            <div className="nt-footer-demo-note">
              {t.footerDemo}{' '}
              <Link href="/" target="_blank" rel="noopener noreferrer">
                Cybernaxe Solutions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING WHATSAPP ═══ */}
      <a
        href={WhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="nt-whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.51 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.94L0 24l6.38-1.67a11.8 11.8 0 005.68 1.45h.01c6.55 0 11.86-5.31 11.86-11.86 0-3.16-1.23-6.13-3.41-8.34zM12.07 21.5h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.6 9.6 0 01-1.47-5.1c0-5.3 4.31-9.6 9.61-9.6 2.57 0 4.98 1 6.8 2.83a9.57 9.57 0 012.8 6.78c0 5.3-4.31 9.6-9.6 9.6zm5.28-7.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.61.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.19 2.05 3.14 4.98 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.17-.55-.31z" />
        </svg>
      </a>

      {/* ═══ TOAST ═══ */}
      {toast && (
        <div className={`nt-toast nt-toast-${toast.type}`}>
          <span>{toast.type === 'success' ? '✓' : '!'}</span>
          {toast.text}
        </div>
      )}
      {/* ═══ FLOATING COMMENT WIDGET ═══ */}
      <CommentWidget />
    </>
  );
}