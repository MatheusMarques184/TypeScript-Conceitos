// Nao funciona pois o body pode ser null
// const body = document.querySelector('body');
// body.style.background = 'red';

// Type assestion
const body = document.querySelector('body') as HTMLBodyElement;
body.style.background = 'red';
