// Translation Dictionary (English & Arabic)
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navEducation: "Education",
        navSkills: "Skills",
        navExperience: "Experience",
        navServices: "Focus Areas",
        navProjects: "Projects",
        navWorkflow: "Workflow",
        navExploring: "Exploring",
        navContact: "Contact",
        
        heroGreeting: "HELLO, I'M",
        heroQuote: "Each algorithm I craft isn't just numbers or lines of code — it's a small step on a patient's journey seeking healing, and a ray of hope I strive to deliver before it fades.",
        btnGetInTouch: "Get In Touch",
        btnViewWork: "View My Work",
        btnDownloadCV: "Download CV",
        
        aboutTag: "Get To Know Me",
        aboutTitle: "Story Behind Me",
        aboutStoryHeader: "AI & Biomedical Informatics",
        aboutStory1: "I’m an Artificial Intelligence and Biomedical Informatics specialist passionate about applying AI, machine learning, and computational biology to healthcare problems.",
        aboutStory2: "My interests include medical AI, bioinformatics pipelines, biological data analysis, machine learning, and data-driven healthcare solutions. I’m continuously building practical projects that connect computational methods with real-world biomedical challenges.",
        aboutStory3: "Not everyone who heals holds a scalpel. I write code to build intelligent systems that assist clinicians, discover insights in genomic sequence data, and improve health outcomes.",
        aboutExpLabel: "Years Active",
        aboutStudentLabel: "AI & Bio Informatics",
        
        skillsTag: "TECHNICAL STACK",
        skillsTitle: "Skills & Technologies",
        skillCatProg: "Programming Languages",
        skillCatAI: "AI & Machine Learning",
        skillCatDS: "Data Science",
        skillCatBio: "Bioinformatics",
        skillCatDB: "Databases",
        skillCatTools: "Tools & Environments",
        skillCatDeploy: "Deployment & Web UI",
        
        expTag: "TRAINING & INTERNSHIPS",
        expTitle: "Hands-On Experience",
        eduTag: "Academic Journey",
        eduSectionTitle: "Education & Training",
        eduDegree: "Faculty of Artificial Intelligence and Information",
        eduInst: "Horus University in Egypt • Level 3",
        eduDetails: "Specializing in Artificial Intelligence and Biomedical Informatics.",
        eduGrade: "Good",
        eduGpaLabel: "GPA",
        courseraTitle: "Bioinformatics Methods I & II",
        courseraInst: "University of Toronto (Coursera)",
        highlightsLabel: "Key Highlights",
        courseraHighlight1: "Learned the core foundations of Bioinformatics through hands-on, project-based learning.",
        courseraHighlight2: "Completed practical projects applying sequence alignment, BLAST, and computational biology concepts.",
        certifiedLabel: "Certified",
        aiHealthTitle: "Foundation and Potential of AI in Healthcare",
        aiHealthInst: "University of Colorado System (Coursera)",
        aiHealthHighlight1: "Harnessed AI and analytics to understand healthcare data systems, decision support, and clinical challenges.",
        aiHealthHighlight2: "Built practical skills to design, evaluate, and apply AI solutions responsibly for healthcare problems.",
        
        servicesTag: "WHAT I WORK WITH",
        servicesTitle: "Areas of Focus",
        srv1Title: "Medical AI & Computer Vision",
        srv1Desc: "Building deep learning and machine learning models for medical image analysis, risk classification, and diagnostic decision support.",
        srv2Title: "Bioinformatics Data Analysis",
        srv2Desc: "Genomic sequence analysis, pairwise/multiple sequence alignment (BLAST, Clustal), variant analysis, and Biopython computational workflows.",
        srv3Title: "Machine Learning",
        srv3Desc: "Custom machine learning pipelines for classification, prediction, feature selection, and statistical evaluation on real-world datasets.",
        srv4Title: "Healthcare Data",
        srv4Desc: "Interactive web dashboards (Streamlit / Flask) that turn clinical research datasets into clear, structured visual insights.",
        srv5Title: "Genomic Data Analysis",
        srv5Desc: "Parsing, cleaning, and transforming biological sequence files (FASTA, GenBank) into structured inputs for computational modeling.",
        srv6Title: "Python Automation",
        srv6Desc: "Automating repetitive scientific data extraction, preprocessing tasks, and laboratory pipeline routines with clean Python scripts.",
        
        projectsTag: "TECHNICAL PROJECTS",
        projectsTitle: "Featured Projects",
        projectsDesc: "Selected AI Medical models, Bioinformatics implementations, and interactive platforms.",
        proj1Title: "Lung Cancer Risk Classifier Platform",
        proj1Desc: "Streamlit web application that prompts patient gender, age, and 13 clinical symptoms, utilizing a Random Forest classification model to output personal cancer probability with Low/High Risk classification.",
        proj2Title: "Genomic Sequence Variant Classifier",
        proj2Desc: "Computational bio-pipeline to align DNA sequences, detect genetic mutations, and classify pathogenic variant markers using Biopython and alignment tools.",
        proj3Title: "Clinical Health Insights Dashboard",
        proj3Desc: "Interactive clinical analytics portal for processing patient diagnostic data, performing exploratory analysis, and displaying key diagnostic risk trends.",
        btnCaseStudy: "View Case Study",
        btnDemo: "Demo",
        
        workflowTag: "METHODOLOGY",
        workflowTitle: "How I Approach Problems",
        workflowDesc: "A systematic 6-step computational workflow from problem definition to deployed model.",
        step1Title: "Understand Problem",
        step1Desc: "Identify the medical or biological objective, clinical parameters, and target outcome.",
        step2Title: "Collect & Clean Data",
        step2Desc: "Wrangle clinical records or sequence files (FASTA/CSV), handling missing values and encoding features.",
        step3Title: "Analyze Data",
        step3Desc: "Perform exploratory analysis, sequence alignment (BLAST), and statistical feature correlation.",
        step4Title: "Build AI / ML Model",
        step4Desc: "Train classification algorithms (Random Forest, Scikit-learn) or bio-pipelines tuned for domain features.",
        step5Title: "Evaluate Results",
        step5Desc: "Validate model accuracy, precision/recall, and generalization before deployment.",
        step6Title: "Deploy & Communicate",
        step6Desc: "Build intuitive web interfaces (Streamlit) to present clear diagnostic risk insights.",
        
        exploringTag: "CONTINUOUS LEARNING",
        exploringTitle: "Currently Exploring",
        exp1Title: "Genomic Data Analysis",
        exp1Desc: "Exploring Next-Generation Sequencing (NGS) analysis techniques and variant call format (VCF) processing.",
        exp2Title: "Deep Learning for Healthcare",
        exp2Desc: "Studying neural network architectures for medical signal classification and diagnostic prediction models.",
        exp3Title: "Medical Data Science",
        exp3Desc: "Applying statistical data science and feature selection to high-dimensional clinical datasets.",
        exp4Title: "Computational Biology",
        exp4Desc: "Refining algorithmic problem-solving for biological sequence comparison and phylogenetic analysis.",
        exp5Title: "Linux & Bio-Pipelines",
        exp5Desc: "Writing bash and shell automation for scalable bioinformatics command-line tools in Linux environments.",
        
        contactTag: "COLLABORATION & INQUIRIES",
        contactTitle: "Have a biomedical or AI problem to explore?",
        contactDesc: "I’m open to research collaborations, internships, and AI & bioinformatics projects.",
        contactDirect: "Direct Reach",
        contactQuote: "// Ready to transform medical & biological data into intelligent solutions.",
        lblFormName: "Your Name",
        lblFormEmail: "Email Address",
        lblFormSubject: "Subject",
        lblFormMsg: "Message",
        btnSend: "Send Message",
        btnSending: "Sending...",
        msgSuccess: "Thank you! Your message has been sent successfully.",
        msgError: "Unable to send message directly. Opening your email app..."
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "نبذة عني",
        navEducation: "التعليم",
        navSkills: "المهارات",
        navExperience: "الخبرات",
        navServices: "مجالات التركيز",
        navProjects: "المشاريع",
        navWorkflow: "منهجية العمل",
        navExploring: "المجالات الحالية",
        navContact: "تواصل معي",
        
        heroGreeting: "أهلاً بك، أنا",
        heroQuote: "كل خوارزمية بكتبها... مش أرقام وكود بس، هي خطوة صغيرة في طريق مريض بيدور على شفا، وأمل بحاول أوصله قبل ما يفقده.",
        btnGetInTouch: "تواصل معي",
        btnViewWork: "عرض أعمالي",
        btnDownloadCV: "تحميل السيرة الذاتية",
        
        aboutTag: "تعرف عليّ",
        aboutTitle: "القصة وراء التخصص",
        aboutStoryHeader: "الذكاء الاصطناعي والمعلوماتية الحيوية الطبية",
        aboutStory1: "أنا متخصص في الذكاء الاصطناعي والمعلوماتية الحيوية الطبية، شغوف بتطبيق التعلم الآلي والبيولوجيا الحاسوبية لحل المشكلات الصحية والطبية.",
        aboutStory2: "تركز اهتماماتي على الذكاء الاصطناعي الطبي، تحليل البيانات الجينية، البيولوجيا الحاسوبية، والتعلم الآلي. أعمل باستمرار على بناء مشاريع عملية تربط بين الأساليب الحاسوبية والتحديات الطبية الحقيقية.",
        aboutStory3: "ليس كل من يداوي يمسك مبضعًا؛ أكتب الكود لبناء أنظمة ذكية تدعم الأطباء والباحثين في تحليل البيانات الجينية وتحسين نتائج الرعاية الصحية.",
        aboutExpLabel: "سنوات نشاط",
        aboutStudentLabel: "الذكاء الاصطناعي والمعلوماتية الحيوية",
        
        skillsTag: "التقنيات والأدوات",
        skillsTitle: "المهارات والتقنيات",
        skillCatProg: "لغات البرمجة",
        skillCatAI: "الذكاء الاصطناعي والتعلم الآلي",
        skillCatDS: "علوم البيانات",
        skillCatBio: "المعلوماتية الحيوية",
        skillCatDB: "قواعد البيانات",
        skillCatTools: "الأدوات وبيئة العمل",
        skillCatDeploy: "النشر وواجهات الويب",
        
        expTag: "التدريب والخبرة",
        expTitle: "الخبرة العملية والتدريب",
        eduTag: "التعليم الأكاديمي",
        eduSectionTitle: "التعليم والشهادات",
        eduDegree: "كلية الذكاء الاصطناعي والمعلومات",
        eduInst: "جامعة حورس في مصر • المستوى الثالث",
        eduDetails: "تخصص الذكاء الاصطناعي والمعلوماتية الحيوية الطبية.",
        eduGrade: "جيد",
        eduGpaLabel: "المعدل التراكمي",
        courseraTitle: "Bioinformatics Methods I & II",
        courseraInst: "جامعة تورنتو (Coursera)",
        highlightsLabel: "أبرز المحاور",
        courseraHighlight1: "تعلم أساسيات المعلوماتية الحيوية عبر مشاريع تطبيقية عملية.",
        courseraHighlight2: "إنجاز مشاريع تطبيقية في محاذاة التسلسلات وتطبيقات BLAST.",
        certifiedLabel: "شهادة معتمدة",
        aiHealthTitle: "أسس وإمكانات الذكاء الاصطناعي في الرعاية الصحية",
        aiHealthInst: "جامعة كولورادو (Coursera)",
        aiHealthHighlight1: "استخدام الذكاء الاصطناعي وتحليل البيانات لفهم أنظمة البيانات الصحية ودعم القرار السريري.",
        aiHealthHighlight2: "بناء مهارات عملية لتصميم وتقييم وتطبيق حلول الذكاء الاصطناعي بمسؤولية.",
        
        servicesTag: "مجالات العمل والتركيز",
        servicesTitle: "مجالات التركيز",
        srv1Title: "Medical AI & Computer Vision",
        srv1Desc: "بناء نماذج التعلم الآلي والعميق لتحليل الصور الطبية وتصنيف المخاطر التشخيصية.",
        srv2Title: "Bioinformatics Data Analysis",
        srv2Desc: "تحليل التسلسلات الجينية، محاذاة DNA (BLAST, Clustal)، تحليل الطفرات، وسكريبتات Biopython.",
        srv3Title: "Machine Learning",
        srv3Desc: "نماذج تعلم آلي مخصصة للتصنيف، التنبؤ، اختيار الخصائص، والتقييم الإحصائي.",
        srv4Title: "Healthcare Data",
        srv4Desc: "لوحات تحكم تفاعلية (Streamlit / Flask) لتحويل البيانات السريرية والبحثية إلى رؤى بصريية.",
        srv5Title: "Genomic Data Analysis",
        srv5Desc: "معالجة وتنظيف وتحويل ملفات التسلسل البيولوجي (FASTA, GenBank) إلى مدخلات حاسوبية.",
        srv6Title: "Python Automation",
        srv6Desc: "أتمتة المهام واستخراج البيانات البيولوجية وتجهيزها عبر سكريبتات Python ناعمة.",
        
        projectsTag: "المشاريع التقنية",
        projectsTitle: "المشاريع المميزة",
        projectsDesc: "نماذج مختارة من تطبيقات الذكاء الاصطناعي الطبي والمعلوماتية الحيوية.",
        proj1Title: "منصة تصنيف مخاطر سرطان الرئة",
        proj1Desc: "تطبيق ويب Streamlit يستقبل البيانات والـ 13 عرضاً سريرياً ويعالجها بواسطة نموذج Random Forest لحساب احتمالية الإصابة.",
        proj2Title: "مصنف الطفرات والتسلسلات الجينية",
        proj2Desc: "خط معالجة حيوي حاسوبي لمحاذاة تسلسلات الـ DNA واكتشاف الطفرات الجينية وتصنيفها باستعمال Biopython.",
        proj3Title: "لوحة تحليلات البيانات السريرية",
        proj3Desc: "بوابة تفاعلية لتحليل بيانات المرضى والتشخيص وتصوير الاتجاهات الصحية والمخاطر.",
        btnCaseStudy: "عرض دراسة الحالة",
        btnDemo: "معاينة",
        
        workflowTag: "منهجية العمل",
        workflowTitle: "كيف أتعامل مع المشكلات",
        workflowDesc: "مسار عمل حاسوبي منظم يتكون من 6 خطوات من تعريف المشكلة حتى النشر النهائي.",
        step1Title: "فهم المشكلة",
        step1Desc: "تحديد الهدف الطبي أو البيولوجي والمتغيرات السريرية المحددة.",
        step2Title: "جمع وتنظيف البيانات",
        step2Desc: "معالجة البيانات السريرية أو ملفات التسلسل (FASTA/CSV) وتنظيف القيم المفقودة.",
        step3Title: "تحليل البيانات",
        step3Desc: "إجراء التحليل الاستكشافي، محاذاة التسلسلات (BLAST)، والتحليل الإحصائي.",
        step4Title: "بناء نموذج الذكاء الاصطناعي",
        step4Desc: "تدريب خوارزميات التصنيف (Random Forest, Scikit-learn) وخطوط التحليل الحيوي.",
        step5Title: "تقييم النتائج",
        step5Desc: "التحقق من دقة النموذج، مقاييس الأداء، والتعميم قبل النشر.",
        step6Title: "نشر النموذج",
        step6Desc: "بناء واجهات تفاعلية (Streamlit) لتقديم رؤى وتقييمات بصرية دقيقة.",
        
        exploringTag: "التعلم المستمر",
        exploringTitle: "أعمل على استكشافه حالياً",
        exp1Title: "Genomic Data Analysis",
        exp1Desc: "دراسة تقنيات تحليل تسلسل الجيل التالي (NGS) ومعالجة طفرات VCF.",
        exp2Title: "Deep Learning for Healthcare",
        exp2Desc: "دراسة الشبكات العصبية لتصنيف الإشارات الطبية والتنبؤ التشخيصي.",
        exp3Title: "Medical Data Science",
        exp3Desc: "تطبيق الإحصاء واختيار الخصائص على البيانات السريرية عالية الأبعاد.",
        exp4Title: "Computational Biology",
        exp4Desc: "تطوير الخوارزميات لمقارنة التسلسلات البيولوجية والتحليل النسيجي.",
        exp5Title: "Linux & Bio-Pipelines",
        exp5Desc: "كتابة سكريبتات Bash لأتمتة أدوات المعلوماتية الحيوية في بيئة Linux.",
        
        contactTag: "التواصل والاستفسارات",
        contactTitle: "هل لديك مشروع أو فكرة في الذكاء الاصطناعي الطبي تود استكشافها؟",
        contactDesc: "أرحب بالتعاون البحثي، الفرص التدريبية، ومشاريع الذكاء الاصطناعي والمعلوماتية الحيوية.",
        contactDirect: "بيانات التواصل",
        contactQuote: "// مستعد لتحويل البيانات الطبية والبيولوجية إلى حلول برمجة وذكاء اصطناعي.",
        lblFormName: "الاسم الكامل",
        lblFormEmail: "البريد الإلكتروني",
        lblFormSubject: "موضوع الرسالة",
        lblFormMsg: "تفاصيل الرسالة",
        btnSend: "إرسال الرسالة",
        btnSending: "جاري الإرسال...",
        msgSuccess: "شكراً لك! تم إرسال رسالتك بنجاح.",
        msgError: "تعذر الإرسال المباشر، جاري فتح تطبيق البريد الخاص بك..."
    }
};

const rolesData = {
    en: [
        "AI & Biomedical Informatics Specialist",
        "Medical AI Developer",
        "Bioinformatics Pipeline Builder",
        "Data Science Practitioner"
    ],
    ar: [
        "متخصص ذكاء اصطناعي ومعلوماتية حيوية",
        "مطور ذكاء اصطناعي طبي",
        "مطور خطوط تحليل حيوي",
        "ممارس علوم البيانات"
    ]
};

/* Authentic Case Studies Dictionary based strictly on available project work */
const CASE_STUDIES = {
    lung_cancer: {
        tag: "Medical AI / Risk Classification",
        title: "Lung Cancer Risk Classifier Platform",
        problem: "Assessing individual lung cancer risk based on self-reported clinical symptoms and demographic parameters to provide an accessible, early-stage risk score.",
        dataset: "Survey dataset capturing gender, age, and 13 clinical symptom indicators (Smoking, Yellow Fingers, Anxiety, Peer Pressure, Chronic Disease, Fatigue, Allergy, Wheezing, Alcohol Consumption, Coughing, Shortness of Breath, Swallowing Difficulty, Chest Pain).",
        approach: "Implemented an interactive web platform with Streamlit. Preprocessed clinical categorical factors and trained a Random Forest classifier using Scikit-Learn to output risk probability scores.",
        technologies: ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn", "joblib"],
        pipeline: ["Patient Inputs (Demographics & 13 Symptoms)", "Data Encoding & Preprocessing", "Feature Vector Construction", "Random Forest Classifier", "Risk Score (%) & Classification Output"],
        results: "Functional web app providing immediate risk score outputs and visual breakdown for clinical survey parameters.",
        challenges: "Ensuring proper handling of binary symptom features and presenting risk output clearly without over-simplifying clinical nuances.",
        learned: "End-to-end model deployment with Streamlit, model persistence using joblib, and structuring clear medical risk survey interfaces.",
        github: "https://github.com/RedaKarm-netizen/-lung-cancer-detection"
    },
    genomic_variant: {
        tag: "Bioinformatics / Computational Biology",
        title: "Genomic Sequence Variant Classifier",
        problem: "Automating the detection and categorization of nucleotide variations within DNA sequences to support computational genomics research.",
        dataset: "Reference genomic sequence files (FASTA and GenBank sequence formats).",
        approach: "Utilized Biopython and sequence alignment tools to compare query sequences against reference genomes, identifying single nucleotide polymorphisms (SNPs) and sequence mutations.",
        technologies: ["Python", "Biopython", "BLAST", "R / Bioconductor", "Computational Genomics"],
        pipeline: ["Raw FASTA Sequence Input", "Pairwise / BLAST Sequence Alignment", "Mutation & SNP Identification", "Variant Classification", "Automated Summary Report"],
        results: "Functional computational pipeline capable of reading sequence files, extracting mutation points, and generating alignment logs.",
        challenges: "Parsing complex biological file formats efficiently and handling sequence gaps during alignment.",
        learned: "Handling biological sequence objects in Python, leveraging NCBI BLAST tools programmatically, and building modular bio-pipelines.",
        github: "https://github.com/RedaKarm-netizen"
    },
    clinical_dashboard: {
        tag: "Healthcare Data Science / Analytics",
        title: "Clinical Health Insights Dashboard",
        problem: "Aggregating and visualizing clinical patient diagnostic metrics to enable clear exploratory analysis of patient health trends.",
        dataset: "Structured clinical health datasets containing patient diagnostic indicators and demographic parameters.",
        approach: "Built interactive data visualization components to explore feature distributions, correlation matrices, and diagnostic risk classifications.",
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Clinical Data Wrangling"],
        pipeline: ["Raw Diagnostic Data Input", "Data Cleaning & Imputation", "Statistical Aggregation", "Correlation & Distribution Viz", "Interactive Clinical Dashboard"],
        results: "Clear visual portal highlighting diagnostic trends and feature distributions across patient cohorts.",
        challenges: "Managing missing diagnostic values and designing non-cluttered visualizations suitable for clinical metrics.",
        learned: "Statistical data analysis, clinical feature correlation, and communicating complex health data effectively.",
        github: "https://github.com/RedaKarm-netizen"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("app_lang") || "en";
    let currentTheme = localStorage.getItem("app_theme") || "dark";

    const langBtn = document.getElementById("lang-btn");
    const langText = document.getElementById("lang-text");
    const themeBtn = document.getElementById("theme-btn");
    const themeIcon = document.getElementById("theme-icon");
    const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
    const mobileCloseBtn = document.getElementById("mobile-close-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

    applyTheme(currentTheme);
    applyLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "ar" : "en";
            localStorage.setItem("app_lang", currentLang);
            applyLanguage(currentLang);
            startSequentialTypewriter(currentLang);
        });
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            currentTheme = currentTheme === "dark" ? "light" : "dark";
            localStorage.setItem("app_theme", currentTheme);
            applyTheme(currentTheme);
        });
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        if (themeIcon) {
            themeIcon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
        }
    }

    function applyLanguage(lang) {
        document.documentElement.setAttribute("lang", lang);
        document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        if (langText) {
            langText.textContent = lang === "en" ? "عربي" : "English";
        }

        const i18nElements = document.querySelectorAll("[data-i18n]");
        i18nElements.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    if (mobileToggleBtn && mobileMenu) {
        mobileToggleBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
    }
    if (mobileCloseBtn && mobileMenu) {
        mobileCloseBtn.addEventListener("click", () => mobileMenu.classList.remove("open"));
    }
    mobileNavItems.forEach((item) => {
        item.addEventListener("click", () => mobileMenu && mobileMenu.classList.remove("open"));
    });

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    const submitBtn = document.getElementById("contact-submit-btn");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.getElementById("form-name").value.trim();
            const email = document.getElementById("form-email").value.trim();
            const subject = document.getElementById("form-subject").value.trim();
            const message = document.getElementById("form-message").value.trim();

            if (!name || !email || !message) return;

            if (submitBtn) {
                submitBtn.disabled = true;
                const sendingText = translations[currentLang]?.btnSending || "Sending...";
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${sendingText}</span>`;
            }

            if (formStatus) {
                formStatus.className = "form-status-alert";
                formStatus.style.display = "none";
            }

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.className = "form-status-alert success active";
                        formStatus.style.display = "flex";
                        const successText = translations[currentLang]?.msgSuccess || "Thank you! Your message has been sent successfully.";
                        formStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${successText}</span>`;
                    }
                    contactForm.reset();
                } else {
                    throw new Error("Form submission error");
                }
            } catch (err) {
                if (formStatus) {
                    formStatus.className = "form-status-alert error active";
                    formStatus.style.display = "flex";
                    const errText = translations[currentLang]?.msgError || "Unable to send directly. Opening your email app...";
                    formStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>${errText}</span>`;
                }

                setTimeout(() => {
                    const mailtoUri = `mailto:engabotoqi@gmail.com?subject=${encodeURIComponent(subject || 'Medical AI Inquiry')}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
                    window.location.href = mailtoUri;
                }, 1200);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const sendText = translations[currentLang]?.btnSend || "Send Message";
                    submitBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i> <span id="btn-send-text" data-i18n="btnSend">${sendText}</span>`;
                }
            }
        });
    }

    startSequentialTypewriter(currentLang);
    initHeroScopedDnaCanvas();

    const navbar = document.getElementById("navbar");
    const heroSection = document.getElementById("hero");

    function updateNavbar() {
        if (!navbar || !heroSection) return;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 80;
        if (window.scrollY > heroBottom - 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
            updateActiveNavLink();
        }, { passive: true });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");
        let currentSectionId = "";

        sections.forEach((sec) => {
            const sectionTop = sec.offsetTop - 120;
            const sectionHeight = sec.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    }

    triggerHeroEntrance();
    initCardTiltAndSpotlight();
    initMagneticAndRipple();
    initScrollReveal();
    initNumberCounters();
});

function triggerHeroEntrance() {
    const heroContent = document.querySelector(".hero-content");
    if (!heroContent) return;
    const children = heroContent.querySelectorAll(".terminal-tag, .hero-greeting, .hero-name-title, .hero-role-wrapper, .code-quote-box, .hero-actions, .social-links");
    children.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
        requestAnimationFrame(() => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 60 + i * 80);
        });
    });
    const avatarWrapper = document.querySelector(".hero-avatar-wrapper");
    if (avatarWrapper) {
        avatarWrapper.style.opacity = "0";
        avatarWrapper.style.transform = "translateX(30px) scale(0.97)";
        avatarWrapper.style.transition = "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s";
        setTimeout(() => {
            avatarWrapper.style.opacity = "1";
            avatarWrapper.style.transform = "translateX(0) scale(1)";
        }, 200);
    }
}

let typewriterTimer = null;
function startSequentialTypewriter(lang) {
    if (typewriterTimer) clearTimeout(typewriterTimer);
    const typewriterEl = document.getElementById("typewriter-text");
    if (!typewriterEl) return;

    const roles = rolesData[lang] || rolesData.en;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeStep() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 30 : 65;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400;
        }

        typewriterTimer = setTimeout(typeStep, typeSpeed);
    }

    typeStep();
}

/* Scoped Biological DNA Helix Canvas Animation */
function initHeroScopedDnaCanvas() {
    const canvas = document.getElementById("dna-canvas");
    if (!canvas) return;
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        canvas.style.display = "none";
        return;
    }

    const ctx = canvas.getContext("2d");
    
    function updateCanvasDimensions() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);

    const numPairs = 30;
    const helixRadius = 70;
    let angle = 0;

    const baseColors = [
        { name: "A-T", color1: "rgba(0, 230, 180, ", color2: "rgba(79, 172, 254, " },
        { name: "C-G", color1: "rgba(16, 185, 129, ", color2: "rgba(255, 183, 3, " }
    ];

    const bioTokens = ["A", "T", "C", "G", "DNA", "RNA", "AI", "01", "p53", "ML", "DICOM", "FASTA"];
    const particlesCount = 20;
    const particles = [];

    for (let p = 0; p < particlesCount; p++) {
        particles.push({
            x: Math.random() * (canvas.width || 1000),
            y: Math.random() * (canvas.height || 600),
            text: bioTokens[Math.floor(Math.random() * bioTokens.length)],
            speedY: 0.15 + Math.random() * 0.25,
            speedX: (Math.random() - 0.5) * 0.1,
            fontSize: 10 + Math.random() * 8,
            opacity: 0.1 + Math.random() * 0.2
        });
    }

    function render() {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        const isRtl = document.documentElement.getAttribute("dir") === "rtl";

        // Floating nucleotide tokens
        for (let p = 0; p < particlesCount; p++) {
            const part = particles[p];
            part.y -= part.speedY;
            part.x += part.speedX;
            if (part.y < -20) { part.y = height + 20; part.x = Math.random() * width; }
            ctx.font = `${part.fontSize}px 'Fira Code', monospace`;
            ctx.fillStyle = isLight ? `rgba(0, 119, 182, ${part.opacity})` : `rgba(0, 230, 180, ${part.opacity})`;
            ctx.fillText(part.text, part.x, part.y);
        }

        // 3D DNA Double Helix
        const centerX = width > 992
            ? (isRtl ? width * 0.2 : width * 0.8)
            : width * 0.5;
        const startY = 40;
        const spacing = (height - 80) / numPairs;
        angle += 0.012;

        // Strand 1
        ctx.beginPath();
        for (let i = 0; i < numPairs; i++) {
            const a = angle + i * 0.22;
            const y = startY + i * spacing;
            const x = centerX + Math.sin(a) * helixRadius;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = isLight ? "rgba(0, 119, 182, 0.45)" : "rgba(0, 230, 180, 0.45)";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Strand 2
        ctx.beginPath();
        for (let i = 0; i < numPairs; i++) {
            const a = angle + i * 0.22 + Math.PI;
            const y = startY + i * spacing;
            const x = centerX + Math.sin(a) * helixRadius;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = isLight ? "rgba(5, 150, 105, 0.45)" : "rgba(16, 185, 129, 0.45)";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Base pairs & Nodes
        for (let i = 0; i < numPairs; i++) {
            const a = angle + i * 0.22;
            const y = startY + i * spacing;
            const sin = Math.sin(a);
            const cos = Math.cos(a);
            const x1 = centerX + sin * helixRadius;
            const x2 = centerX - sin * helixRadius;
            const scale1 = (cos + 2) / 3;
            const scale2 = (-cos + 2) / 3;
            const basePair = baseColors[i % baseColors.length];

            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            ctx.strokeStyle = isLight ? "rgba(100, 116, 139, 0.2)" : "rgba(255, 255, 255, 0.14)";
            ctx.lineWidth = 1;
            ctx.stroke();

            [{ x: x1, scale: scale1, col: basePair.color1 },
             { x: x2, scale: scale2, col: basePair.color2 }].forEach(({ x, scale, col }) => {
                const r = 4.5 * scale;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = col + (0.75 * scale) + ")";
                ctx.fill();
            });
        }

        requestAnimationFrame(render);
    }

    render();
}

/* Case Study Modal Logic */
function openCaseStudy(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data) return;
    const contentEl = document.getElementById("caseStudyContent");
    if (!contentEl) return;

    const techBadges = data.technologies.map(t => `<span class="tag-badge">${t}</span>`).join(" ");
    const pipelineBoxes = data.pipeline.map((p, idx) => `
        <span class="pipeline-box">${p}</span>
        ${idx < data.pipeline.length - 1 ? '<i class="fa-solid fa-arrow-right pipeline-arrow"></i>' : ''}
    `).join(" ");

    contentEl.innerHTML = `
        <div class="case-study-header">
            <span class="case-study-tag">${data.tag}</span>
            <h2 class="case-study-title">${data.title}</h2>
        </div>

        <div class="case-study-grid">
            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-circle-question"></i> 01 &mdash; Problem Statement</div>
                <div class="case-study-sec-content">${data.problem}</div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-database"></i> 02 &mdash; Dataset</div>
                <div class="case-study-sec-content">${data.dataset}</div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-lightbulb"></i> 03 &mdash; Approach &amp; Methodology</div>
                <div class="case-study-sec-content">${data.approach}</div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-code"></i> 04 &mdash; Technologies</div>
                <div class="case-study-sec-content">${techBadges}</div>
            </div>

            <div class="case-study-sec" style="grid-column: 1 / -1;">
                <div class="case-study-sec-title"><i class="fa-solid fa-diagram-project"></i> 05 &mdash; Workflow Pipeline</div>
                <div class="case-study-sec-content">
                    <div class="pipeline-diagram">${pipelineBoxes}</div>
                </div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-chart-line"></i> 06 &mdash; Results &amp; Outputs</div>
                <div class="case-study-sec-content">${data.results}</div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-triangle-exclamation"></i> 07 &mdash; Technical Challenges</div>
                <div class="case-study-sec-content">${data.challenges}</div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-graduation-cap"></i> 08 &mdash; Key Learnings</div>
                <div class="case-study-sec-content">${data.learned}</div>
            </div>

            <div class="case-study-sec">
                <div class="case-study-sec-title"><i class="fa-solid fa-link"></i> 09 &mdash; Repository &amp; Code</div>
                <div class="case-study-sec-content">
                    <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary project-btn">
                        <i class="fa-brands fa-github"></i> View GitHub Repository
                    </a>
                </div>
            </div>
        </div>
    `;

    const overlay = document.getElementById("caseStudyModalOverlay");
    if (overlay) {
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeCaseStudy() {
    const overlay = document.getElementById("caseStudyModalOverlay");
    if (overlay) {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}

/* Experience Details Modal */
const EXP_DETAILS = {
    depi: {
        logo: "images/depi-logo.png",
        title: "AI & Data Science",
        company: "Digital Egypt Pioneers Initiative (DEPI)",
        date: "Jul 2026 - Present",
        desc: "An IBM-designed track covering the data science lifecycle - from Python and SQL fundamentals to machine learning modeling.",
        list: [
            "Working across the full data science lifecycle: Python, SQL, and EDA methodology.",
            "Cleaning, exploring, and visualizing datasets with Python, Pandas, NumPy, and Matplotlib.",
            "Building and evaluating Machine Learning models with Scikit-Learn."
        ]
    },
    biotech: {
        logo: "images/biotech-logo.jpg",
        title: "Bioinformatics & Computational Biology",
        company: "Biotech World Company, Egypt",
        date: "May 2026 - Present",
        desc: "Hands-on work applying computational biology and bioinformatics tools to real biological datasets.",
        list: [
            "Running sequence alignment (BLAST) and processing genomic data with modern bioinformatics tools.",
            "Writing custom Python scripts to automate biological data extraction, preprocessing, and pipeline analysis.",
            "Applying computational biology methods and molecular visualization tools to study nucleic acid structures."
        ]
    },
    nti: {
        logo: "images/nti-logo.jpg",
        title: "Artificial Intelligence & Model Development",
        company: "National Telecommunication Institute (NTI), Egypt",
        date: "May 2026 - Jun 2026",
        desc: "Specialized training in AI algorithms and model development.",
        list: [
            "Implementing core AI and machine learning algorithms from the ground up.",
            "Applying feature selection techniques to highlight variables that drive model performance.",
            "Tuning model hyperparameters and evaluating accuracy on real datasets."
        ]
    }
};

function openExpModal(id) {
    const data = EXP_DETAILS[id];
    if (!data) return;
    const body = document.getElementById("expModalBody");
    const listHtml = data.list && data.list.length
        ? `<div class="exp-modal-list">${data.list.map((item, i) => `
            <div class="exp-modal-bullet${i === 0 ? " exp-modal-bullet-highlight" : ""}">
                <i class="fa-solid fa-play"></i>
                <span>${item}</span>
            </div>`).join("")}</div>`
        : "";
    body.innerHTML = `
        <div class="exp-modal-logo"><img src="${data.logo}" alt="${data.company}"></div>
        <h3 class="exp-modal-title">${data.title}</h3>
        <div class="exp-modal-company">${data.company}</div>
        <span class="exp-modal-date-badge"><i class="fa-regular fa-calendar"></i> ${data.date}</span>
        <p class="exp-modal-desc">${data.desc}</p>
        ${listHtml}
    `;
    document.getElementById("expModalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeExpModal() {
    document.getElementById("expModalOverlay").classList.remove("active");
    document.body.style.overflow = "";
}

function initCardTiltAndSpotlight() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const cards = document.querySelectorAll(".glass-card, .exp-card, .project-card, .service-card, .exploring-card, .workflow-step, .skill-category-card");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--spotlight-x", `${x}px`);
            card.style.setProperty("--spotlight-y", `${y}px`);
        }, { passive: true });
    });
}

function initMagneticAndRipple() {
    const magneticElements = document.querySelectorAll(".btn, .social-icon, .control-btn, .back-to-top-btn");
    if (!window.matchMedia("(pointer: coarse)").matches) {
        magneticElements.forEach((el) => {
            el.addEventListener("mousemove", (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
            }, { passive: true });

            el.addEventListener("mouseleave", () => {
                el.style.transform = "";
            });
        });
    }

    document.addEventListener("click", (e) => {
        const targetBtn = e.target.closest(".btn, .social-icon, .control-btn, .project-btn, .exp-details-btn");
        if (!targetBtn) return;

        const rect = targetBtn.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "ripple-wave";

        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        targetBtn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
    });
}

function initScrollReveal() {
    const revealTargets = document.querySelectorAll(
        ".section-header, .about-story-grid > div, .timeline-item, .skill-category-card, .service-card, .project-card, .exp-card, .contact-info-card, .contact-form-card, .workflow-step, .exploring-card, .footer-ayah"
    );

    revealTargets.forEach((el) => {
        el.classList.add("reveal-item");
        if (el.parentElement) {
            const siblings = Array.from(el.parentElement.children);
            const siblingIndex = siblings.indexOf(el);
            if (siblingIndex > 0 && siblingIndex <= 6) {
                el.classList.add(`delay-${siblingIndex}`);
            }
        }
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
    });

    revealTargets.forEach((el) => observer.observe(el));
}

function initNumberCounters() {
    const counters = document.querySelectorAll(".counter-val");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute("data-target")) || 0;
                const decimals = parseInt(el.getAttribute("data-decimals")) || 0;
                const suffix = el.getAttribute("data-suffix") || "";
                const duration = 1400;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const currentVal = target * easeOut;

                    el.textContent = `${currentVal.toFixed(decimals)}${suffix}`;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.textContent = `${target.toFixed(decimals)}${suffix}`;
                    }
                }

                requestAnimationFrame(updateCounter);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach((c) => observer.observe(c));
}

/* Project Image Slider */
function slideProject(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    const slides = slider.querySelectorAll('.proj-slide');
    const dots   = slider.querySelectorAll('.proj-dot');
    let current  = [...slides].findIndex(s => s.classList.contains('active'));
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + direction + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
}

function goToSlide(sliderId, index) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    const slides = slider.querySelectorAll('.proj-slide');
    const dots   = slider.querySelectorAll('.proj-dot');
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function openProjDemo(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjDemo(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

/* Global Escape Key Listener */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeExpModal();
        closeCaseStudy();
        document.querySelectorAll('.proj-demo-overlay.open').forEach(o => {
            o.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
});
