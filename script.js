//Single Click
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.querySelector('.forgot-password');

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();  
        this.style.color = '#ff69b4'; 
        setTimeout(() => {
            this.style.color = 'purple'; 
        },2000) ;
        
        alert("Password reset instructions will be sent to your email.");
    });
});


//Doubleclick
document.getElementById('fashionTitle').addEventListener('dblclick', function() {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 500);
});

//Hover Effect On Login Button
const fashionCollage = document.querySelector('.fashion-collage');

fashionCollage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
    this.style.boxShadow = '#96AE8D ';
});

fashionCollage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
});
