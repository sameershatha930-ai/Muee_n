document.addEventListener('DOMContentLoaded', function () {
    const collegeSelect = document.getElementById('college');
    const specSelect = document.getElementById('specialization');
    const form = document.getElementById('selectionForm');

    // خريطة جميع الكليات والتخصصات التابعة لها
    const specializations = {
        cs: [
            { value: 'computer-science', label: 'علوم الحاسب' },
            { value: 'computer-engineering', label: 'هندسة الحاسب' },
            { value: 'it', label: 'تقنية المعلومات' }
        ],
        engineering: [
            { value: 'civil_eng', label: 'الهندسة المدنية' },
            { value: 'electrical_eng', label: 'الهندسة الكهربائية' },
            { value: 'mechanical_eng', label: 'الهندسة الميكانيكية' },
            { value: 'industrial_eng', label: 'الهندسة الصناعية' }
        ],
        arts: [
            { value: 'arabic', label: 'اللغة العربية' },
            { value: 'english', label: 'اللغة الإنجليزية' }
        ],
        business: [
            { value: 'management', label: 'إدارة الأعمال' },
            { value: 'accounting', label: 'المحاسبة' },
            { value: 'finance', label: 'التمويل والاستثمار' },
            { value: 'marketing', label: 'التسويق' }
        ],
        science: [
            { value: 'math', label: 'الرياضيات' },
            { value: 'physics', label: 'الفيزياء' },
            { value: 'chemistry', label: 'الكيمياء' },
            { value: 'biology', label: 'أحياء' }
        ],
        medicine: [
            { value: 'medicine_surgery', label: 'الطب والجراحة' }
        ],
        applied_medical: [
            { value: 'nursing', label: 'التمريض' },
            { value: 'lab_tech', label: 'تقنية المختبرات الطبية' },
            { value: 'radiology', label: 'علاج طبيعي' }
        ],
        pharmacy: [
            { value: 'pharm_d', label: 'دكتور صيدلي (PharmD)' }
        ]
    };

    // دالة تحديث قائمة التخصصات بحسب الكلية المختارة
    function updateSpecializations() {
        if (!collegeSelect || !specSelect) return;
        const selectedCollege = collegeSelect.value.trim();
        specSelect.innerHTML = '<option value="">-- اختر التخصص --</option>';

        if (specializations[selectedCollege]) {
            specializations[selectedCollege].forEach(function (spec) {
                const opt = document.createElement('option');
                opt.value = spec.value;
                opt.textContent = spec.label;
                specSelect.appendChild(opt);
            });
        } else {
            specSelect.innerHTML = '<option value="">-- اختر الكلية أولاً --</option>';
        }
    }

    // تشغيل الدالة عند تغيير خيار الكلية
    if (collegeSelect) {
        collegeSelect.addEventListener('change', updateSpecializations);
    }

    // تشغيل الدالة فور تحميل الصفحة
    updateSpecializations();

    // التوجيه للخطّة الخاصة بالتخصص مع الفحص
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const selectedSpec = specSelect ? specSelect.value : '';

            // 1. التأكد من اختيار تخصص أولاً
            if (!selectedSpec) {
                alert('الرجاء اختيار التخصص أولاً');
                return;
            }

            // 2. قائمة التخصصات المتاحة حالياً في المنصة
            const availableMajors = ['it', 'computer-science', 'computer-engineering'];

            // 3. التحقق والتوجيه
            if (availableMajors.includes(selectedSpec)) {
                window.location.href = `courses.html?major=${selectedSpec}`;
            } else {
                alert('عفواً، الخطة الدراسية لهذا التخصص غير متوفرة حالياً في منصة مُعِين.');
            }
        });
    }
});