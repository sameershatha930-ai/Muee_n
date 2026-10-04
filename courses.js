const studyPlans = {
  // ----------------------------------------------------
  // 1. خطة هندسة الحاسب (10 مستويات)
  // ----------------------------------------------------
  "computer-engineering": {
    title: "المواد الدراسية لتخصص هندسة الحاسب",
    semesters: [
      {
        name: "المستوى الأول",
        courses: [
          { code: "ARAB_1101", name: "ARAB 1101 - مهارات اللغة العربية", shared: true },
          { code: "CID_1101", name: "CID 1101 - مهارات الاتصال", shared: true },
          { code: "ELS_1101", name: "ELS 1101 - اللغة الانجليزية (1)", shared: true },
          { code: "MATH_1101", name: "MATH 1101 - مقدمة في الرياضيات", shared: true },
          { code: "PHYS_1101", name: "PHYS 1101 - أساسيات الفيزياء", shared: true },
          { code: "CSC_1102", name: "CSC 1102 - حل المشكلات بالحوسبة", shared: true }
        ]
      },
      {
        name: "المستوى الثاني",
        courses: [
          { code: "EDUF_1102", name: "EDUF 1102 - مهارات التفكير الناقد وتطبيقاته المعاصرة", shared: true },
          { code: "ELS_1102", name: "ELS 1102 - اللغة الانجليزية (2)", shared: true },
          { code: "ISLS_1101", name: "ISLS 1101 - الثقافة الاسلامية بين الاصالة والمعاصرة", shared: true },
          { code: "MATH_1102", name: "MATH 1102 - حساب التفاضل", shared: true },
          { code: "CSC_1103", name: "CSC 1103 - مقدمة في البرمجة", shared: true }
        ]
      },
      {
        name: "المستوى الثالث",
        courses: [
          { code: "CSC_1201", name: "CSC 1201 - البرمجة الشيئية", shared: true },
          { code: "CSC_1202", name: "CSC 1202 - تنظيم الحاسب والبرمجة بلغة التجميع", shared: false },
          { code: "MATH_1251", name: "MATH 1251 - الرياضيات الحاسوبية والمتقطعة", shared: true },
          { code: "PHYS_1251", name: "PHYS 1251 - الفيزياء العامة", shared: true }
        ]
      },
      {
        name: "المستوى الرابع",
        courses: [
          { code: "ISLS_1201", name: "ISLS 1201 - الأخلاق والقيم الحضارية في الاسلام", shared: true },
          { code: "CSC_1203", name: "CSC 1203 - طرق البرمجة المتقدمة", shared: true },
          { code: "CSC_1204", name: "CSC 1204 - تراكيب البيانات والخوارزميات", shared: true },
          { code: "MATH_1201", name: "MATH 1201 - اساسيات التكامل", shared: true },
          { code: "CEN_1201", name: "CEN 1201 - المنطق الرقمي (1)", shared: false }
        ]
      },
      {
        name: "المستوى الخامس",
        courses: [
          { code: "LANT_1252", name: "LANT 1252 - الكتابة التقنية", shared: true },
          { code: "STAT_1252", name: "STAT 1252 - نظرية الاحتمالات", shared: true },
          { code: "CEN_1301", name: "CEN 1301 - الدوائر الكهربائية", shared: false },
          { code: "CEN_1302", name: "CEN 1302 - المنطق الرقمي (2)", shared: false },
          { code: "MATH_1204", name: "MATH 1204 - معادلات تفاضلية عادية", shared: true }
        ]
      },
      {
        name: "المستوى السادس",
        courses: [
          { code: "CSC_1304", name: "CSC 1304 - نظم التشغيل", shared: true },
          { code: "MATH_1205", name: "MATH 1205 - الجبر الخطي", shared: true },
          { code: "CEN_1303", name: "CEN 1303 - مقدمة في معالجة الإشارات", shared: false },
          { code: "CEN_1304", name: "CEN 1304 - النبائط الالكترونية", shared: false }
        ]
      },
      {
        name: "المستوى السابع",
        courses: [
          { code: "CEN_1401", name: "CEN 1401 - معالجة الاشارات الرقمية", shared: false },
          { code: "CEN_1402", name: "CEN 1402 - اتصالات البيانات", shared: false },
          { code: "CEN_1403", name: "CEN 1403 - عمارة وتصميم الحاسب", shared: false },
          { code: "CEN_1404", name: "CEN 1404 - الدوائر الالكترونية", shared: false }
        ]
      },
      {
        name: "المستوى الثامن",
        courses: [
          { code: "CEN_1405", name: "CEN 1405 - شبكات الحاسب", shared: true },
          { code: "CEN_1406", name: "CEN 1406 - المعالجات الدقيقة والنظم المضمنة", shared: false },
          { code: "CEN_1407", name: "CEN 1407 - النبائط المنطقية القابلة للبرمجة", shared: false },
          { code: "CEN_1408", name: "CEN 1408 - التحكم الرقمي", shared: false }
        ]
      },
      {
        name: "المستوى التاسع",
        courses: [
          { code: "CEN_1409", name: "CEN 1409 - الروبوتية", shared: false },
          { code: "CEN_1410", name: "CEN 1410 - أمن الحاسب والشبكات", shared: true },
          { code: "CEN_1498", name: "CEN 1498 - مشروع (1)", shared: false }
        ]
      },
      {
        name: "المستوى العاشر",
        courses: [
          { code: "CEN_1411", name: "CEN 1411 - الأخلاقيات والممارسة والمهنية الهندسية", shared: true },
          { code: "CEN_1495", name: "CEN 1495 - تدريب", shared: false },
          { code: "CEN_1499", name: "CEN 1499 - مشروع (2)", shared: false }
        ]
      }
    ]
  },

  // ----------------------------------------------------
  // 2. خطة علوم الحاسب (8 مستويات)
  // ----------------------------------------------------
  "computer-science": {
    title: "المواد الدراسية لتخصص علوم الحاسب",
    semesters: [
      {
        name: "المستوى الأول",
        courses: [
          { code: "COMM_001", name: "COMM 001 - مهارات الاتصال", shared: true },
          { code: "CSC_001", name: "CSC 001 - مهارات الحاسب وتطبيقاته", shared: true },
          { code: "ECE_001", name: "ECE 001 - اللغة الإنجليزية للمجالات التقنية (1)", shared: true },
          { code: "MATH_100", name: "MATH 100 - الرياضيات (1)", shared: true },
          { code: "PHYS_101", name: "PHYS 101 - الفيزياء العامة", shared: true }
        ]
      },
      {
        name: "المستوى الثاني",
        courses: [
          { code: "LTS_001", name: "LTS 001 - مهارات التعلم والتفكير والبحث", shared: true },
          { code: "ECE_002", name: "ECE 002 - اللغة الإنجليزية للمجالات التقنية (2)", shared: true },
          { code: "BIO_101", name: "BIO 101 - احياء عامة", shared: false },
          { code: "CHEM_101", name: "CHEM 101 - كيمياء عامة", shared: false },
          { code: "MATH_101", name: "MATH 101 - رياضيات (2)", shared: true }
        ]
      },
      {
        name: "المستوى الثالث",
        courses: [
          { code: "ARB_101", name: "ARB 101 - مهارات لغوية", shared: true },
          { code: "ISLS_101", name: "ISLS 101 - الثقافة الإسلامية (1)", shared: true },
          { code: "CSC_101", name: "CSC 101 - برمجة الحاسب (1)", shared: true },
          { code: "MATH_200", name: "MATH 200 - أساسيات التكامل", shared: true },
          { code: "ELS_210", name: "ELS 210 - لغة إنجليزية لطلاب الحاسب", shared: true },
          { code: "MATH_251", name: "MATH 251 - أسس الرياضيات", shared: true }
        ]
      },
      {
        name: "المستوى الرابع",
        courses: [
          { code: "ARB_201", name: "ARB 201 - مهارات الكتابة", shared: true },
          { code: "ISLS_201", name: "ISLS 201 - الثقافة الإسلامية (2)", shared: true },
          { code: "STAT_201", name: "STAT 201 - احصاء عام", shared: true },
          { code: "CEN_210", name: "CEN 210 - التصميم المنطقي", shared: true },
          { code: "CSC_102", name: "CSC 102 - برمجة الحاسب (2)", shared: true },
          { code: "CSC_109", name: "CSC 109 - اخلاقيات مهنة الحاسب", shared: true },
          { code: "PHYS_281", name: "PHYS 281 - معمل الفيزياء العامة", shared: true }
        ]
      },
      {
        name: "المستوى الخامس",
        courses: [
          { code: "CSC_210", name: "CSC 210 - تنظيم الحاسب والبرمجة بلغة التجميع", shared: true },
          { code: "CEN_211", name: "CEN 211 - معمل التصميم المنطقي", shared: false },
          { code: "CSC_220", name: "CSC 220 - تراكيب البيانات والخوارزميات", shared: true },
          { code: "CIT_230", name: "CIT 230 - تقنية الانترنت والويب", shared: true },
          { code: "MATH_241", name: "MATH 241 - جبر خطي", shared: true },
          { code: "STAT_311", name: "STAT 311 - نظرية الاحتمالات (1)", shared: true }
        ]
      },
      {
        name: "المستوى السادس",
        courses: [
          { code: "ISLS_301", name: "ISLS 301 - الثقافة الإسلامية (3)", shared: true },
          { code: "CSC_221", name: "CSC 221 - هندسة البرمجيات", shared: true },
          { code: "ELS_301", name: "ELS 301 - الكتابة التقنية", shared: true },
          { code: "CEN_312", name: "CEN 312 - عمارة الحاسب", shared: true },
          { code: "CSC_321", name: "CSC 321 - تصميم وتحليل الخوارزميات", shared: false },
          { code: "CIS_340", name: "CIS 340 - نظم قواعد البيانات", shared: true },
          { code: "CSC_390", name: "CSC 390 - تدريب ميداني لطلبة علوم الحاسب", shared: false }
        ]
      },
      {
        name: "المستوى السابع",
        courses: [
          { code: "CSC_300", name: "CSC 300 - لغات البرمجة", shared: false },
          { code: "CEN_330", name: "CEN 330 - شبكات الحاسب", shared: true },
          { code: "CSC_410", name: "CSC 410 - نظم التشغيل", shared: true },
          { code: "CSC_420", name: "CSC 420 - نظرية الحوسبة", shared: false },
          { code: "CSC_490", name: "CSC 490 - مشروع تخرج (1)", shared: false }
        ]
      },
      {
        name: "المستوى الثامن",
        courses: [
          { code: "ISLS_401", name: "ISLS 401 - الثقافة الإسلامية (4)", shared: true },
          { code: "CSC_450", name: "CSC 450 - الذكاء الصناعي", shared: false },
          { code: "CSC_491", name: "CSC 491 - مشروع تخرج (2)", shared: false }
        ]
      }
    ]
  },

  // ----------------------------------------------------
  // 3. خطة تقنية المعلومات (تمت إضافة الاختصارات لضمان عملها)
  // ----------------------------------------------------
  "it": informationTechnologyPlan(),
  "information-technology": informationTechnologyPlan(),
  "information_technology": informationTechnologyPlan()
};

function informationTechnologyPlan() {
  return {
    title: "المواد الدراسية لتخصص تقنية المعلومات",
    semesters: [
      {
        name: "المستوى الأول",
        courses: [
          { code: "CID_1101", name: "CID 1101 - مهارات الاتصال" },
          { code: "CSC_1102", name: "CSC 1102 - مهارات الاتصال" },
          { code: "ELS_1001", name: "ELS 1001 - حل المشكلات بالحوسبة" },
          { code: "ISLS_1101", name: "ISLS 1101 - اللغة الانجليزية (1)" },
          { code: "MATH_1101", name: "MATH 1101 - الثقافة الاسلامية بين الاصالة والمعاصرة" }
        ]
      },
      {
        name: "المستوى الثاني",
        courses: [
          { code: "ARAB_1101", name: "ARAB 1101 - مهارات اللغة العربية" },
          { code: "CSC_1103", name: "CSC 1103 - مقدمة في البرمجة" },
          { code: "EDUF_1102", name: "EDUF 1102 - مهارات التفكير الناقد وتطبيقاته المعاصرة" },
          { code: "ELS_1002", name: "ELS 1002 - اللغة الانجليزية (2)" },
          { code: "MATH_1102", name: "MATH 1102 - حساب التفاضل" },
          { code: "PHYS_1101", name: "PHYS 1101 - أساسيات الفيزياء" }
        ]
      },
      {
        name: "المستوى الثالث",
        courses: [
          { code: "CSC_1201", name: "CSC 1201 - البرمجة الشيئية" },
          { code: "CSC_1202", name: "CSC 1202 - تنظيم الحاسب و البرمجة بلغة التجميع" },
          { code: "MATH_1201", name: "MATH 1201 - اساسيات التكامل" },
          { code: "MATH_1251", name: "MATH 1251 - الرياضيات الحاسوبية والمتقطعة" }
        ]
      },
      {
        name: "المستوى الرابع",
        courses: [
          { code: "ISLS_1201", name: "ISLS 1201 - الأخلاق والقيم الحضارية في الاسلام" },
          { code: "CSC_1203", name: "CSC 1203 - طرق البرمجة المتقدمة" },
          { code: "CSC_1204", name: "CSC 1204 - تراكيب البيانات والخوارزميات" },
          { code: "CIT_1201", name: "CIT 1201 - تفاعل الانسان والالة" },
          { code: "CIT_1202", name: "CIT 1202 - شبكات الحاسب" }
        ]
      },
      {
        name: "المستوى الخامس",
        courses: [
          { code: "CSC_1301", name: "CSC 1301 - هندسة البرمجيات" },
          { code: "LANT_1252", name: "LANT 1252 - الكتابة التقنية" },
          { code: "STAT_1252", name: "STAT 1252 - نظرية الاحتمالات" },
          { code: "CIT_1301", name: "CIT 1301 - أنظمة الوسائط المتعددة" },
          { code: "CIT_1302", name: "CIT 1302 - شبكات الحاسب المتقدمة" },
          { code: "CIT_1303", name: "CIT 1303 - تصميم مواقع الويب المتقدمة" }
        ]
      },
      {
        name: "المستوى السادس",
        courses: [
          { code: "CSC_1303", name: "CSC 1303 - تطوير تطبيقات الأجهزة المتنقلة" },
          { code: "CSC_1304", name: "CSC 1304 - نظم التشغيل" },
          { code: "MATH_1205", name: "MATH 1205 - الجبر الخطي" },
          { code: "CIT_1304", name: "CIT 1304 - ادراة مشاريع تقنية المعلومات" },
          { code: "CIT_1305", name: "CIT 1305 - نظم قواعد البيانات" }
        ]
      },
      {
        name: "المستوى السابع",
        courses: [
          { code: "CSC_1402", name: "CSC 1402 - أخلاقيات مهنة الحاسب" },
          { code: "CIT_1401", name: "CIT 1401 - تكامل وعمارة الأنظمة" },
          { code: "CIT_1402", name: "CIT 1402 - أمن الحاسب والمعلومات" },
          { code: "CIT_1403", name: "CIT 1403 - تطبيقات الذكاء الاصطناعي" },
          { code: "CIT_1404", name: "CIT 1404 - نظم قواعد البيانات المتقدمة" },
          { code: "CIT_1498", name: "CIT 1498 - مشروع" }
        ]
      },
      {
        name: "المستوى الثامن",
        courses: [
          { code: "CIT_1495", name: "CIT 1495 - تدريب" }
        ]
      }
    ]
  };
}

// ====================================================
// عرض الخطة الدراسية بناءً على التخصص المختار
// ====================================================

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let selectedMajor = urlParams.get("major") || localStorage.getItem("selectedMajor") || "computer-engineering";

  const currentPlan = studyPlans[selectedMajor] || studyPlans["computer-engineering"];

  // تحديث العنوان الرئيسي بالصفحة
  const headerElement = document.querySelector(".section-header h3, .main-title, h1");
  if (headerElement) {
    headerElement.textContent = currentPlan.title;
  }

  const container = document.getElementById("courses-container") || document.querySelector(".courses-container");
  if (!container) return;

  // إذا كانت الخطة فارغة
  if (!currentPlan.semesters || currentPlan.semesters.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: #555;">
        <p style="font-size: 1.2rem; font-weight: bold; margin-bottom: 8px;">الخطة غير متاحة حالياً</p>
        <p style="font-size: 0.95rem; color: #777;">سيتم توفير المواد والخطة الدراسية فور اعتمادها.</p>
      </div>
    `;
    return;
  }

  let htmlContent = "";

  currentPlan.semesters.forEach((semester) => {
    htmlContent += `
      <section class="year-group">
        <h2>${semester.name}</h2>
        <div class="grid-cards">
    `;

    semester.courses.forEach((course) => {
      const subjectKey = encodeURIComponent(course.code);
      const subjectTitle = encodeURIComponent(course.name);

      htmlContent += `
        <div class="class-card">
          <span class="class-course-card">${course.name}</span>
          <a href="subject_details.html?code=${subjectKey}&name=${subjectTitle}" 
             onclick="openSubject('${course.code}', '${course.name}')" class="card-link">
              عرض المادة والتكاليف
          </a>
        </div>
      `;
    });

    htmlContent += `
        </div>
      </section>
    `;
  });

  container.innerHTML = htmlContent;
});
function openSubject(code, name) {
    localStorage.setItem("currentSubjectCode", code);
    localStorage.setItem("currentSubjectName", name);
    window.location.href = `subject_details.html?code=${code}&name=${encodeURIComponent(name)}`;
}
