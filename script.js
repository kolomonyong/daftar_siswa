let students = [];

function addStudent() {
    const name = document.getElementById('studentName').value;
    const grade = parseFloat(document.getElementById('studentGrade').value);
    if (name && !isNaN(grade)) {
        students.push({ name, grade });
        displayStudents();
    }
}

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${student.name} - ${student.grade}
            <button class="delete" onclick="deleteStudent(${index})">Hapus</button>
            <button class="update" onclick="updateStudent(${index})">Ubah</button>`;
        studentList.appendChild(li);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function updateStudent(index) {
    const newGrade = prompt('Masukkan nilai baru:', students[index].grade);
    if (newGrade !== null) {
        students[index].grade = parseFloat(newGrade);
        displayStudents();
    }
}

function calculateAverage() {
    if (students.length > 0) {
        const total = students.reduce((sum, student) => sum + student.grade, 0);
        const average = total / students.length;
        document.getElementById('result').innerText = `Nilai Rata-Rata: ${average.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Tidak ada siswa.';
    }
}

function showHighestLowest() {
    if (students.length > 0) {
        const highest = students.reduce((max, student) => student.grade > max.grade ? student : max, students[0]);
        const lowest = students.reduce((min, student) => student.grade < min.grade ? student : min, students[0]);
        document.getElementById('result').innerText = `Nilai Tertinggi: ${highest.name} - ${highest.grade}, Nilai Terendah: ${lowest.name} - ${lowest.grade}`;
    } else {
        document.getElementById('result').innerText = 'Tidak ada siswa.';
    }
}
