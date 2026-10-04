// دالة الانتقال لتفاصيل المادة عند الضغط عليها
function openSubject(subjectName) {
    window.location.href = `subject_details.html?name=${encodeURIComponent(subjectName)}`;
}

// عرض اسم المادة في أعلى صفحة التفاصيل (إن وجدت في الصفحة)
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseName = urlParams.get('name');
    const courseTitleElem = document.getElementById('coursetitle');
    
    if (courseName && courseTitleElem) {
        courseTitleElem.innerText = decodeURIComponent(courseName);
    }
});

// دالة التبويبات (الملفات، النقاش، الكويزات)
function showTab(tabName) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const contentArea = document.getElementById('tabContent');
    if (!contentArea) return;

    if (tabName === 'files') {
        contentArea.innerHTML = '<h3>الملفات الدراسية</h3><p>تظهر هنا ملفات المحاضرات وملفات الملخصات الخاصة بالمادة.</p>';
    } else if (tabName === 'discussion') {
        contentArea.innerHTML = '<h3>لوحة النقاش</h3><p>هنا يمكنك مناقشة الزملاء وطرح الأسئلة حول المقرر الدراسي.</p>';
    } else if (tabName === 'quizzes') {
        contentArea.innerHTML = '<h3>الكويزات والتدريبات</h3><p>الاختبارات القصيرة لتقييم مستواك في المادة.</p>';
    }
}
// عرض محتوى الملفات افتراضياً عند فتح الصفحة document.addEventListener('DOMContentLoaded', () => { document.getElementById('tabContent').innerHTML = '<h3>الملفات الدراسية</h3><p>هنا ستظهر ملفات المحاضرات وملخصات الطلاب.</p>'; });