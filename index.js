$(document).ready(() => {
    if(localStorage.getItem('students2') != null){
        var array = JSON.parse(localStorage.getItem('students2'));
        $('#studentsCount').text(array.length);
    }
})
