$(document).ready(function () {
    $('.menu1').click(function () {
        $(this).toggleClass('open');
    });

    $('.menu1').click(function () {
        $('.right_menu').slideToggle();
    });


    // Image slider 
    jQuery(".all_client").owlCarousel({
        autoplay: true,
        margin: 0,
        loop: true,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },

            600: {
                items: 4
            },

            1024: {
                items: 7
            }
        }
    });


    // editor 
    var btn = document.querySelector(".sai");
        var getText = document.querySelector(".getText");
        var content = document.querySelector(".getcontent");
        var editorContent = document.querySelector(".editor");

        btn.addEventListener("click", function () {
            var s = editorContent.innerHTML;
            content.style.display = "block";
            content.textContent = s;
        });

        getText.addEventListener("click", function () {
            const old = editorContent.textContent;
            content.style.display = "block";
            content.textContent = old;
        });

        function link() {
            var url = prompt("Enter the URL");
            document.execCommand("createLink", false, url);

        }

        function copy() {
            document.execCommand("copy", false, "");
          
        }

        function changeColor() {
            var color = prompt("Enter your color in hex ex:#f1f233");
            document.execCommand("foreColor", false, color);
           
        }


        function getImage() {
            var file = document.querySelector("input[type=file]").files[0];

            var reader = new FileReader();

            let dataURI;

            reader.addEventListener(
                "load",
                function () {
                    dataURI = reader.result;

                    const img = document.createElement("img");
                    img.src = dataURI;
                    editorContent.appendChild(img);
                },
                false
            );

            if (file) {
                console.log("s");
                reader.readAsDataURL(file);
            }
        }
        function printMe() {
            if (confirm("Check your Content before print")) {
                const body = document.body;
                let s = body.innerHTML;
                body.textContent = editorContent.innerHTML;

                document.execCommandShowHelp;
                body.style.whiteSpace = "pre";
                window.print();
                location.reload();
            }
        }

    
})

 // upload image 
 document.getElementById('readUrl').addEventListener('change', function(){
    if (this.files[0] ) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener('load', function(event) {
        document.getElementById('uploadedImage').setAttribute('src', event.target.result);
        document.getElementById('uploadedImage').style.display = 'block';
      });
    }
  });