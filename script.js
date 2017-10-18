            var start = new Date().getTime();
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
            function randomAppear(){
                
                if(Math.random() > 0.5 ){
                    document.getElementById("shape").style.borderRadius = "50%";
                }
                else {
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                document.getElementById("shape").style.display = "block";
                document.getElementById("shape").style.top = Math.floor(Math.random() * 200) + "px";
                document.getElementById("shape").style.left = Math.floor(Math.random() * 200) + "px";
                document.getElementById("shape").style.width = (Math.random() * 200 + 100) + "px";
                document.getElementById("shape").style.height = (Math.random() * 200 + 100) + "px";
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                start = new Date().getTime();
            }
            
            document.getElementById("shape").onclick = function(){
                var end = new Date().getTime();
                var period = end - start ;  
                document.getElementById("timeCount").innerHTML = "it's " +(period/1000) + "seconds";
                document.getElementById("shape").style.display = "none";
                setTimeout(randomAppear,Math.random()*2000);
                
                
            }