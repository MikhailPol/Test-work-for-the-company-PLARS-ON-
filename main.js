function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }
  
  ready(function() {
    console.log('Страница загружена');
    alert('Страница загружена');
  });
  