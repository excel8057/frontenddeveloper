// JS 와 jQuery 차이점
// Javascript
window.addEventListener("load", function(){
    // 문서 로딩이 완료된 후 수행
    // 버튼 자신의 배경색 : black, 글자색 : yellow, 글자 크기 : 20px 
    document.querySelector("#jsBtn").addEventListener("click", function(){
        this.style.backgroundColor = "black";
        this.style.color = "yellow";
        this.style.fontSize = "20px";
    });

    document.getElementById("colorChange").addEventListener("click", function(){
        let wrapper = document.getElementById("wrapper"); //div태그
        let ul = wrapper.getElementsByTagName("ul");//div하위 ul태그
        let li = ul[0].getElementsByTagName("li");//ul하위 li태그
        
        for(let i=0; i < li.length; i++){
            let l = li[i];
            if(l.className=="three"){// li태그의 클래스명
                let txt = l.getElementsByTagName("span");
                txt[0].style.color = "red";//span 태그의 글자색 변경
            }
        }
    });
}); 

/*
// jQuery
$(document).ready(function(){
    $("#jQueryBtn").on("click", function(){
        //$(this).css("background-color", "black").css("color", "yellow").css("font-size", "20px");
        
        $(this).css({
            "background-color":"black",
            "color":"yellow",
            "font-size":"20px"
        });
    });

    $("#colorChange").on("click", function(){
        $("#wrapper > ul > li.three > span").css("color", "blue");
    });
});
*/