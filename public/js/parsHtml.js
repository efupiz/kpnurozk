$.get("./json/parseS.json",function(data,status){
   console.log(data);
   if ($( "#by" ).hasClass('darkmode') ){
      console.log("darck");
     
      data.forEach(function (dtS) {
         $("#parsS").append(
         '<div class=""style="display: grid; grid-template-columns: 20% 40% 40%;">'
               +'<div id="imgWeather" class="'+dtS.class+'">'
               +'<img id="d410" src="images/icons/'+dtS.class+"l"+'.svg" width="100%;" style="margin: 12px -10px;"></img>'
               +'</div>'
               +'<div>'
                  +'<h3 class="textStyle textStyle18px marg">'+dtS.day+'</h3>'
                  +'<h3 class="textStyle textStyle16px marg">'+dtS.date+' '+dtS.month+'</h3>' 
               +'</div>'
               +'<div>'
                  +'<p class="textStyle textStyle18px block_time marg ">'+dtS.max+" C"+'</p>'
                  +'<p class="textStyle textStyle16px block_time marg">'+dtS.min+" C"+'</p>' 
               +'</div>'
         +"</div>"
         +'<div class="" style="display: grid;grid-template-columns: 70% 30%; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">'
            +'<h4 class="textStyle textStyle16px marg">'+dtS.title+'</h4>'
            
         +"</div>"
         
         /*+'<img class="'+dt.class+'" src="'+dt.img+'" width="100px;">'*/
         );
      });
   
   }else{
      data.forEach(function (dtS) {
         $("#parsS").append(
         '<div class=""style="display: grid; grid-template-columns: 20% 40% 40%;">'
               +'<div id="imgWeather" class="'+dtS.class+'">'
               +'<img id="d410" src="images/icons/'+dtS.class+'.svg" width="100%;" style="margin: 12px -10px;"></img>'
               +'</div>'
               +'<div>'
                  +'<h3 class="textStyle textStyle18px marg">'+dtS.day+'</h3>'
                  +'<h3 class="textStyle textStyle16px marg">'+dtS.date+' '+dtS.month+'</h3>' 
               +'</div>'
               +'<div>'
                  +'<p class="textStyle textStyle18px block_time marg ">'+dtS.max+" C"+'</p>'
                  +'<p class="textStyle textStyle16px block_time marg">'+dtS.min+" C"+'</p>' 
               +'</div>'
         +"</div>"
         +'<div class="" style="display: grid;grid-template-columns: 70% 30%; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">'
            +'<h4 class="textStyle textStyle16px marg">'+dtS.title+'</h4>'
            
         +"</div>"
         
         /*+'<img class="'+dt.class+'" src="'+dt.img+'" width="100px;">'*/
         );
      });
   }
 });
 $.get("./json/parseSTitle.json",function(data,status){
   console.log(data);
   data.forEach(function (dtSTitle) {
      $("#parsSTitle").append(
         '<p class="textStyle textStyle14px">'+dtSTitle.title+'</p>'
      );
   });
   if ($( "#imgWeather" ).hasClass('weatherIco d410') && $( "#by" ).hasClass('darkmode') ){
      d200.style.cssText = `display: block !important; margin: 12px -10px;`;
      console.log("true");
   }
});
 $.get("./json/parseN.json",function(data,status){
   console.log(data);
   data.forEach(function (dtN) {
      $("#parsN").append(
      '<div class="cards pZero">'
      +'<a href="'+dtN.url+'">'
         +'<img class="imgBRad" src="'+dtN.img+'" width="100%;">' 
      +'</a>'
         +'<div class="pCard">'
            +'<a class="textStyle textStyle18px marg" href="'+dtN.url+'">'+dtN.title+'</a>'
            +'<div class=" margDM "style="display: grid; grid-template-columns: 50% 50%; border-top: 1px solid rgba(255, 255, 255, 0.2);">'  
               +'<h3 class="textStyle textStyle16px marg">'+dtN.data+'</h3>' 
               +'<h4 class="textStyle textStyle16px marg">'+dtN.autor+'</h4>'
            +"</div>"

         +"</div>"
      +"</div>"
      );
   });
});
