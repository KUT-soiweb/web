
      function onChange(num) {
        var img = document.getElementById("Lab_main");
        var sub = document.getElementsByName("Lab_sub");
        img.src = sub[num].src;
      }
