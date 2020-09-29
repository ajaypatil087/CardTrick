var card = [20];
var clicks = 0;
$(document).ready(function(){
    for(let i = 0; i < 21; i++)
    {
        card[i] = i; //initializing cards to array
    }

    function shuffle()//shuffles card
    {
        //Fisher-Yates Shuffle 
        for (let i = card.length - 1; i>0; i--) 
        {
            let rand = Math.floor(Math.random() * (i + 1));
            let temp = card[i];
            card[i] = card[rand];
            card[rand] = temp;
        }
        columnView();
    }
    shuffle();

    //for mobile
    if(400 < $(window).width() && 700 > $(window).width()){
        $(".inst1 .p").text("Choose any Card, Keep it in your mind and tap on that row where that Card is present");
        $(".columns").text("Row");
        $(".clicks").text("Tap");
    }

    $(".shuffle").click(function(){
        shuffle();
    });

    $(".replay").click(function(){
        location.reload();
    });

    //instructions 
    $(".instructionBtn").click(function(){
        $(".instructionBody").show(1000);
        $("main").css({"z-index":"0"});
    });

    $(".closeInstruction").click(function(){
        $(".instructionBody").hide(1000);
        $("main").css({"z-index":"1"});
    })


    $(".about").click(function(){
        $(".aboutDes").show(1000);
        $("main").css({"opacity":".3","z-index":"0"});
    });

    $(".closeBtn").click(function(){
        $(".aboutDes").hide(1000);
        $("main").css({"opacity":"1","z-index":"1"});
    });



    function columnView()//aligns cards in columns
    {
       let link,mainCards; 
       let col1 = $(".column1");
       let col2 = $(".column2");
       let col3 = $(".column3");
       col1.empty();
       col2.empty();
       col3.empty();
       for(let i=0;i<21;i++){
            link = "images/cards/"+card[i]+".png";
            mainCards = "<div class='images slot"+i+"'><img scr='' alt='cards' class='main-cards' height='160px' draggable='false'></div>";
            col1.append(mainCards);
            $(".column1 .main-cards:last").attr("src",link);
            i++;
            link = "images/cards/"+card[i]+".png";
            mainCards = "<div class='images slot"+i+"'><img scr='' alt='cards' class='main-cards' height='160px' draggable='false'></div>";
            col2.append(mainCards);
            $(".column2 .main-cards:last").attr("src",link);
            i++;
            link = "images/cards/"+card[i]+".png";
            mainCards = "<div class='images slot"+i+"'><img scr='' alt='cards' class='main-cards' height='160px' draggable='false'></div>";
            col3.append(mainCards);
            $(".column3 .main-cards:last").attr("src",link);
       }

       col1.show(100);
       col2.show(100);
       col3.show(100);
    }

    function column1()
    {
        let temp = [];

        for(let i=0,j=0;i<21;i++,j++)
        {
            temp[j] = card[i];
            i++;
            temp[j+7] = card[i];
            i++;
            temp[j+7+7] = card[i];
        }
        for(let i=0;i<21;i++) 
            card[i] = temp[i];


        //------------reversing array---------------
        for(let i=0;i<21;i++){
            temp[i] = card[i];
        }
        for(let i=0,j=6;i<7;i++,j--){
            card[i] = temp[j];
        }
        for(let i=7,j=13;i<14;i++,j--){
            card[i] = temp[j];
        }
        for(let i=14,j=20;i<21;i++,j--){
            card[i] = temp[j];
        }

        /*let rand = Math.floor(Math.random()*(20+1));
        if(rand < 7 && rand>0)
            rand = 7;
        else if(rand < 14 && rand >7 && rand >0 )
            rand = 14;
        else 
            rand = 21;
        alert(rand);*/
            
        //swaping columns----------------
        for(let i=0,j=7;i<7;i++,j++){
            temp[i] = card[j];
            card[j] = card[i];
            card[i] = temp[i];
        }
    }

    function column2()
    {
        let temp = [];

        for(let i=0,j=0;i<21;i++,j++)
        {
            temp[j] = card[i];
            i++;
            temp[j+7] = card[i];
            i++;
            temp[j+7+7] = card[i];
        }
        for(let i=0;i<21;i++) 
            card[i] = temp[i];

        //------------reversing array---------------
        for(let i=0;i<21;i++){
            temp[i] = card[i];
        }
        for(let i=0,j=6;i<7;i++,j--){
            card[i] = temp[j];
        }
        for(let i=7,j=13;i<14;i++,j--){
            card[i] = temp[j];
        }
        for(let i=14,j=20;i<21;i++,j--){
            card[i] = temp[j];
        }
        //swaping columns----------------
        for(let i=0,j=14;i<7;i++,j++){
            temp[i] = card[j];
            card[j] = card[i];
            card[i] = temp[i];
        }
    }

    function column3()
    {
        let temp = [];

        for(let i=0,j=0;i<21;i++,j++)
        {
            temp[j] = card[i];
            i++;
            temp[j+7] = card[i];
            i++;
            temp[j+7+7] = card[i];
        }
        for(let i=0;i<21;i++) 
            card[i] = temp[i];

        //------------reversing array---------------
        for(let i=0;i<21;i++){
            temp[i] = card[i];
        }
        for(let i=0,j=6;i<7;i++,j--){
            card[i] = temp[j];
        }
        for(let i=7,j=13;i<14;i++,j--){
            card[i] = temp[j];
        }
        for(let i=14,j=20;i<21;i++,j--){
            card[i] = temp[j];
        }
        //swaping columns----------------
        for(let i=7,j=14;i<14;i++,j++){
            temp[i] = card[j];
            card[j] = card[i];
            card[i] = temp[i];
        }
    }

    //function to manage instructions
    function instructions(){
        if(clicks == 1){
            if(400 < $(window).width() && 700 > $(window).width()){
                $(".inst2 .p").text("Once again tap on the row where the Card is present");
            }
            $(".inst1").fadeOut(10);
            $(".inst2").fadeIn(10);
        }
        if(clicks == 2){
            if(400 < $(window).width() && 700 > $(window).width()){
                $(".inst3 .p").text("You're almost done Tap on the row where the Card is present for one last time");
            }
            $(".inst2").fadeOut(10);
            $(".inst3").fadeIn(10);
        }
        if(clicks == 3){
            $(".inst3").fadeOut(10);
            $(".inst4").fadeIn(1500);
        }
    }



     $(".column1").click(function(){
        $(".shuffle").hide(100);
        clicks++;
        instructions();
         //check for number of clicks on columns
        if(clicks > 2){
            column1();
            answer();
        }
        else{
            column1();
            columnView();
        } 
     });



    $(".column2").click(function(){
        $(".shuffle").hide(100);
        clicks++;
        instructions();
        //check for number of clicks on columns
        if(clicks > 2){
            column2();
            answer();
        }
        else{
            column2();
            columnView();
        }
        
    });

    
    $(".column3").click(function(){
        $(".shuffle").hide(100);
        clicks++;
        instructions();
        //check for number of clicks on columns
        if(clicks > 2){
           column3(); 
            answer();
        }
        else{
            column3();
            columnView();
        }
        
    });


    function answer(){
        $(".inst").hide(10);
        for(let i=0;i<21;i++){
            $("div .slot"+i).animate({
                position: "absolute",
                width: "0px", 
                height: "0px", 
                opacity: "0.1", 
                marginLeft: "-100%",
                display: "none"},
                {
                    duration: 2000
                });
        }
        link = "images/cards/"+card[10]+".png";
        mainCards = "<div class='answer'><img scr='' alt='cards' class='answerCard' draggable='false'></div>";
        $(".result").append(mainCards);
        $(".result .answerCard:last").attr("src",link);
        $(".deck").animate({
            display: "none"
        },{duration: 2000});


        $(".column1, .column2 , .column3").hide(2000);

        $(".result").show(100);

    }


    //function to calculate number of visitors
    function visitors(){
        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == 1){
                    return;
                }
                else{
                    alert("visitor module error");   
                }
            }
        };
        xhttp.open("GET", "http://cardtrick.c1.biz/index.php", true);
        xhttp.send(); 
    }

    visitors();
    
});
