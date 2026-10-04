// ==========================================
// 1. تحديد واستخراج اسم المادة من الرابط (URL)
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
// دعم المتغيرين 'subject' و 'name' للتوافق التام
const rawSubjectParam = urlParams.get('subject') || urlParams.get('name') || 'المادة الدراسية';
const subjectName = decodeURIComponent(rawSubjectParam);

// تحديث عنوان المادة في هيدر الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('subjectTitle');
    if (titleElement) {
        titleElement.innerText = subjectName;
    }
});

// ==========================================
// 2. مفاتيح التخزين الموحدة للمادة في LocalStorage
// ==========================================
const filesKey = `files_${subjectName}`;
const quizzesKey = `quizzes_${subjectName}`;
const messagesKey = `messages_${subjectName}`;

// تحميل البيانات المخزنة مسبقاً
let savedFiles = JSON.parse(localStorage.getItem(filesKey) || '[]');
let savedQuizzes = JSON.parse(localStorage.getItem(quizzesKey) || '[]');
let savedMessages = JSON.parse(localStorage.getItem(messagesKey) || JSON.stringify([
    {
        sender: "النظام",
        text: `أهلاً بكِ في قروب مادة (${subjectName})! يمكنكِ مشاركة الملفات، الاستفسارات، والكويزات مع زميلاتكِ هنا.`,
        isSystem: true
    }
]));

// تشغيل تبويب الملفات تلقائياً عند فتح الصفحة
window.onload = function() {
    loadTab('files');
};

// ==========================================
// 3. إدارة التنقل بين التبويبات (الملفات / النقاش / الكويزات)
// ==========================================
function loadTab(tabName, eventObj) {
    // إيقاف مؤقت الكويز إذا كان يعمل
    if (window.quizTimerInterval) {
        clearInterval(window.quizTimerInterval);
    }

    // تحديث شكل الأزرار المفعّلة (Active Class)
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (eventObj && eventObj.target) {
        eventObj.target.classList.add('active');
    } else {
        const activeBtn = document.querySelector(`.nav-btn[onclick*="'${tabName}'"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    const contentArea = document.getElementById('contentArea');
    if (!contentArea) return;

    // --- 1. تبويب الملفات والمحاضرات ---
    if (tabName === 'files') {
        let filesHtml = '';
        if (savedFiles.length === 0) {
            filesHtml = '<p class="empty-msg" style="text-align: center; color: #666; margin-top: 30px;">لم يتم رفع أي ملفات حتى الآن</p>';
        } else {
            savedFiles.forEach((file, index) => {
                filesHtml += `
                    <div style="background: white; padding: 12px 15px; margin-top: 10px; border-radius: 6px; border: 1px solid #c8e6c9; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                        <a href="${file.url}" target="_blank" style="text-decoration: none; color: #0b4f34; font-weight: bold; cursor: pointer;">📁 ${file.name} (اضغط للعرض)</a>
                        <button onclick="deleteFile(${index})" style="background-color: #d9534f; color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">حذف</button>
                    </div>
                `;
            });
        }

        contentArea.innerHTML = `
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #0b4f34; margin: 0;">الملفات الدراسية والمحاضرات</h3>
                <input type="file" id="fileInput" style="display: none;" onchange="handleFileSelected(event)">
                <button class="add-btn" onclick="document.getElementById('fileInput').click()" style="background-color: #0b4f34; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-weight: bold;">+ رفع ملف من الجهاز</button>
            </div>
            <div class="files-container" style="margin-top: 20px;">
                <div id="filesList" style="flex: 1;">
                    ${filesHtml}
                </div>
            </div>
        `;
    } 
    // --- 2. تبويب قروب النقاش ---
    else if (tabName === 'discussion') {
        let msgHtml = '';
        savedMessages.forEach((msg, index) => {
            if (msg.isSystem) {
                msgHtml += `<div style="background: #ffffff; padding: 10px 15px; border-radius: 8px; max-width: 80%; align-self: flex-start; border-right: 4px solid #0b4f34; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><strong>${msg.sender}</strong><br><span style="font-size: 0.85rem; color: #444;">${msg.text}</span></div>`;
            } else {
                let deleteBtn = `<button onclick="deleteMessage(${index})" style="background: none; border: none; color: #d9534f; cursor: pointer; font-size: 0.8rem; margin-right: 10px;" title="حذف الرسالة">🗑️ حذف</button>`;
                msgHtml += `
                    <div style="background: #ffffff; padding: 10px 15px; border-radius: 8px; max-width: 75%; align-self: flex-end; border-left: 4px solid #0b4f34; word-break: break-word; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <strong style="color: #0b4f34;">${msg.sender}:</strong>
                            ${deleteBtn}
                        </div>
                        <span style="color: #222;">${msg.text}</span>
                    </div>
                `;
            }
        });

        contentArea.innerHTML = `
            <div class="section-header">
                <h3 style="color: #0b4f34; margin: 0 0 15px 0;">قروب النقاش التفاعلي</h3>
            </div>
            <div class="chat-container" style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0;">
                <div id="chatMessages" style="height: 350px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; margin-bottom: 15px; padding-right: 5px;">
                    ${msgHtml}
                </div>
                <div style="display: flex; gap: 10px; background: white; padding: 8px; border-radius: 8px; border: 1px solid #ccc;">
                    <input type="text" id="chatInput" placeholder="اكتبي رسالتك هنا..." style="flex: 1; padding: 10px; border: 1px solid #eee; border-radius: 6px; outline: none;" onkeypress="if(event.key === 'Enter') sendChatMessage()">
                    <button onclick="sendChatMessage()" style="background-color: #0b4f34; color: white; border: none; padding: 0 20px; border-radius: 6px; cursor: pointer; font-weight: bold;">إرسال</button>
                </div>
            </div>
        `;
        const chatContainer = document.getElementById('chatMessages');
        if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
    } 
    // --- 3. تبويب الكويزات والتدريبات ---
    else if (tabName === 'quizzes') {
        let quizzesHtml = '';
        if (savedQuizzes.length === 0) {
            quizzesHtml = '<p class="empty-msg" style="text-align: center; color: #666; margin-top: 30px;">لا توجد كويزات متاحة حالياً، اضغطي على إضافة كويز للبدء</p>';
        } else {
            savedQuizzes.forEach((quiz, index) => {
                quizzesHtml += `
                    <div style="background: white; padding: 15px; margin-top: 10px; border-radius: 8px; border: 1px solid #c8e6c9; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                        <div>
                            <strong style="color: #0b4f34;">📝 ${quiz.title}</strong>
                            <p style="font-size: 0.85rem; color: #666; margin: 5px 0 0 0;">الوقت: ${quiz.durationMinutes} دقائق | عدد الأسئلة: ${quiz.questions.length}</p>
                        </div>
                        <div>
                            <button onclick="startQuiz(${index})" style="background-color: #0b4f34; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; margin-left: 5px;">ابدأ الاختبار</button>
                            <button onclick="deleteQuiz(${index})" style="background-color: #d9534f; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer;">حذف</button>
                        </div>
                    </div>
                `;
            });
        }

        contentArea.innerHTML = `
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: #0b4f34; margin: 0;">الكويزات والتدريبات الذاتية</h3>
                <button class="add-btn" onclick="addNewQuiz()" style="background-color: #0b4f34; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-weight: bold;">+ إضافة كويز جديد</button>
            </div>
            <div class="quizzes-container" style="margin-top: 20px;">
                <div id="quizzesList" style="flex: 1;">
                    ${quizzesHtml}
                </div>
            </div>
        `;
    }
}

// ==========================================
// 4. وظائف إدارة الملفات (رفع / حذف)
// ==========================================
function handleFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
        const fileUrl = URL.createObjectURL(file);
        savedFiles.push({ name: file.name, url: fileUrl });
        localStorage.setItem(filesKey, JSON.stringify(savedFiles));
        loadTab('files');
    }
}

function deleteFile(index) {
    if (confirm("هل أنتِ متأكدة من حذف هذا الملف؟")) {
        savedFiles.splice(index, 1);
        localStorage.setItem(filesKey, JSON.stringify(savedFiles));
        loadTab('files');
    }
}

// ==========================================
// 5. وظائف قروب النقاش (إرسال / حذف)
// ==========================================
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (text !== "") {
        savedMessages.push({ sender: "أنتِ", text: text, isSystem: false });
        localStorage.setItem(messagesKey, JSON.stringify(savedMessages));
        loadTab('discussion');
    }
}

function deleteMessage(index) {
    if (confirm("هل أنتِ متأكدة من حذف هذه الرسالة؟")) {
        savedMessages.splice(index, 1);
        localStorage.setItem(messagesKey, JSON.stringify(savedMessages));
        loadTab('discussion');
    }
}

// ==========================================
// 6. وظائف إنشاء وإدارة الاختبارات الذاتية (Quizzes)
// ==========================================
function addNewQuiz() {
    const title = prompt("أدخلي عنوان أو اسم الكويز:");
    if (!title || title.trim() === "") return;

    const minsInput = prompt("كم وقت الكويز بالدقائق؟ (مثلاً: 2 أو 5):");
    if (!minsInput || isNaN(minsInput)) return;
    const durationMinutes = parseInt(minsInput);

    const countInput = prompt("كم عدد الأسئلة التي تريدين إضافتها؟ (مثلاً: 3):");
    if (!countInput || isNaN(countInput)) return;
    const count = parseInt(countInput);

    let questions = [];

    for (let i = 0; i < count; i++) {
        let type = prompt(`السؤال رقم ${i+1}:\nاختر نوع هذا السؤال:\n1. اختيار من متعدد\n2. صح وخطأ\n(اكتب 1 أو 2):`);
        
        if (type === "1") {
            let qText = prompt(`أدخلي نص السؤال رقم ${i+1}:`);
            let correct = prompt("أدخلي الإجابة الصحيحة:");
            let wrong1 = prompt("خيار خاطئ أول:");
            let wrong2 = prompt("خيار خاطئ ثاني:");

            if (!qText || !correct) return;

            questions.push({
                type: "mcq",
                text: qText,
                options: shuffleArray([correct, wrong1, wrong2].filter(Boolean)),
                correct: correct.trim()
            });
        } else if (type === "2") {
            let qText = prompt(`أدخلي نص السؤال (صح وخطأ) رقم ${i+1}:`);
            let correct = prompt("حدد الإجابة الصحيحة (اكتب: صح أو خطأ):");

            if (!qText || !correct) return;

            questions.push({
                type: "tf",
                text: qText,
                correct: correct.trim()
            });
        } else {
            alert("إدخال غير صحيح، تم إلغاء العملية.");
            return;
        }
    }

    savedQuizzes.push({
        title: title,
        durationMinutes: durationMinutes,
        questions: questions
    });

    localStorage.setItem(quizzesKey, JSON.stringify(savedQuizzes));
    loadTab('quizzes');
}

function deleteQuiz(index) {
    if (confirm("هل أنتِ متأكدة من حذف هذا الكويز؟")) {
        savedQuizzes.splice(index, 1);
        localStorage.setItem(quizzesKey, JSON.stringify(savedQuizzes));
        loadTab('quizzes');
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ==========================================
// 7. تشغيل الاختبار وحساب النتيجة والعداد
// ==========================================
function startQuiz(index) {
    const quiz = savedQuizzes[index];
    const contentArea = document.getElementById('contentArea');

    let htmlContent = '';
    quiz.questions.forEach((q, qIdx) => {
        if (q.type === "mcq") {
            let opts = '';
            q.options.forEach(opt => {
                opts += `<label style="display: block; margin-top: 8px; cursor: pointer;"><input type="radio" name="q_${qIdx}" value="${opt}"> ${opt}</label>`;
            });
            htmlContent += `
                <div style="margin-bottom: 20px; background: white; padding: 12px; border-radius: 6px; border: 1px solid #c8e6c9;" data-correct="${q.correct}">
                    <p style="margin: 0; color: #0b4f34;"><strong>${qIdx + 1}. ${q.text} (درجة واحدة)</strong></p>
                    ${opts}
                </div>
            `;
        } else if (q.type === "tf") {
            htmlContent += `
                <div style="margin-bottom: 20px; background: white; padding: 12px; border-radius: 6px; border: 1px solid #c8e6c9;" data-correct="${q.correct}">
                    <p style="margin: 0; color: #0b4f34;"><strong>${qIdx + 1}. ${q.text} (درجة واحدة)</strong></p>
                    <label style="display: block; margin-top: 8px; cursor: pointer;"><input type="radio" name="q_${qIdx}" value="صح"> صح</label>
                    <label style="display: block; margin-top: 5px; cursor: pointer;"><input type="radio" name="q_${qIdx}" value="خطأ"> خطأ</label>
                </div>
            `;
        }
    });

    contentArea.innerHTML = `
        <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; border: 1px solid #0b4f34;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0b4f34; padding-bottom: 10px; margin-bottom: 20px;">
                <h3 style="color: #0b4f34; margin: 0;">${quiz.title}</h3>
                <div id="quizTimer" style="background: #ffffff; color: #0b4f34; padding: 5px 15px; border-radius: 20px; font-weight: bold; border: 1px solid #0b4f34;">الوقت الباقي: <span id="timeCount">${quiz.durationMinutes}:00</span></div>
            </div>

            <form id="quizForm">
                ${htmlContent}
                <button type="button" onclick="submitQuiz(${index})" style="background-color: #0b4f34; color: white; border: none; padding: 10px 25px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem; margin-top: 10px;">إنهاء وتسليم الاختبار</button>
            </form>
            
            <div id="quizResult" style="margin-top: 20px; font-size: 1.2rem; font-weight: bold;"></div>
        </div>
        <button onclick="loadTab('quizzes')" style="margin-top: 15px; background: #666; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer;">العودة لقائمة الكويزات</button>
    `;

    let totalSeconds = quiz.durationMinutes * 60;
    window.quizTimerInterval = setInterval(() => {
        totalSeconds--;
        let mins = Math.floor(totalSeconds / 60);
        let secs = totalSeconds % 60;
        let timeFormatted = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
        
        const timerSpan = document.getElementById('timeCount');
        if (timerSpan) {
            timerSpan.innerText = timeFormatted;
        }

        if (totalSeconds <= 0) {
            clearInterval(window.quizTimerInterval);
            alert("انتهى وقت الاختبار!");
            submitQuiz(index);
        }
    }, 1000);
}

function submitQuiz(index) {
    if (window.quizTimerInterval) {
        clearInterval(window.quizTimerInterval);
    }

    const quiz = savedQuizzes[index];
    let score = 0;
    const questionDivs = document.querySelectorAll('#quizForm > div');

    questionDivs.forEach((div, qIdx) => {
        const correctVal = div.getAttribute('data-correct');
        const selected = div.querySelector(`input[name="q_${qIdx}"]:checked`);
        if (selected && selected.value.trim() === correctVal.trim()) {
            score++;
        }
    });

    const total = quiz.questions.length;
    const resultDiv = document.getElementById('quizResult');
    if (resultDiv) {
        resultDiv.innerHTML = `نتيجة الاختبار: <span style="color: ${score === total ? '#107c41' : '#d9534f'};">${score} من ${total}</span>`;
    }
}