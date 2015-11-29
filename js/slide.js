index=-1;
        function UppDateImg (index)
        {
            index++;
            if (index>3)
                index=0;
            var elementsStart = document.getElementById("StartPageImg").style;
            elementsStart.background = FileName[index];
            elementsStart.backgroundSize = "cover";
            //alert("Uppdate!");
            setTimeout(function(){UppDateImg(index)}, 3000);
        }
        setTimeout(function(){UppDateImg(index)}, 3000);
        
        var FileName = ["url('images/home-bg.jpg') center bottom no-repeat","url('images/home-bg1.jpg') center bottom no-repeat","url('images/home-bg2.jpg') center bottom no-repeat"];     