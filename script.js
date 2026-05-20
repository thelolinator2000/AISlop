document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Test the CV Button
    const cvUploadBtn = document.getElementById('cv-upload-btn');
    if (cvUploadBtn) {
        cvUploadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SUCCESS: The CV button is alive and talking to your HTML!");
        });
    } else {
        console.error("ERROR: JavaScript cannot find an ID named 'cv-upload-btn'");
    }

    // 2. Test the Login Button
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    if (authSubmitBtn) {
        authSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("SUCCESS: The Login button is alive and talking to your HTML!");
        });
    } else {
        console.error("ERROR: JavaScript cannot find an ID named 'auth-submit-btn'");
    }

});