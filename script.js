hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
      navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    }



    const map = document.querySelector('.map');
    L.mapquest.key = '4VDbsJyyMboafA2JkgxZj0ceyvHZYmws';
    L.mapquest.map('map', {
      center: [0.36499097044202927, 32.60579891120432],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

    L.mapquest.geocoding().geocode('0.36499097044202927, 32.60579891120432');




