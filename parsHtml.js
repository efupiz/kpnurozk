$.get("parseS.json",function(data,status){
    console.log(data);
    data.forEach(function (dtS) {
       $("#parsS").append(
       '<div class=""style="display: grid; grid-template-columns: 33% 20% 47%;">'
          +'<div >'
          +'<h3 class="textStyle textStyle18px marg">'+dtS.day+'</h3>'
          +'<h3 class="textStyle textStyle16px marg">'+dtS.date+' '+dtS.month+'</h3>' 
          +'</div>'
          +'<img src="images/icons/overcast 1.svg" width="35px;" style="margin: 25px;"">'
          
          +'<p class="textStyle textStyle18px block_time">'+dtS.max+" C"+'</p>'
       +"</div>"
       +'<div class="" style="display: grid;grid-template-columns: 70% 30%; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">'
          +'<h4 class="textStyle textStyle16px marg">'+dtS.title+'</h4>'
          +'<p class="textStyle textStyle14px block_time">'+dtS.min+" C"+'</p>'
       +"</div>"
       /*+'<img class="'+dt.class+'" src="'+dt.img+'" width="100px;">'*/
       );
    });
 });
 $.get("parseSTitle.json",function(data,status){
   console.log(data);
   data.forEach(function (dtSTitle) {
      $("#parsSTitle").append(
         '<p class="textStyle textStyle14px">'+dtSTitle.title+'</p>'
      );
   });
});
 $.get("parseN.json",function(data,status){
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
