$(document).ready(function(){
    // hide
    $('#btnhide').click(function(){
        $('.redbox1').hide(1000);
    });
    // show
    $('#btnshow').click(function(){
        $('.redbox1').show(1000);
    });
    // toggle
    $('#s_h_toggle').click(function(){
        $('.redbox1').toggle(1000);
    });
    // addclass
    $('#addclass').click(function(){
        $('#addclassp').addClass('yellowbg');
    });
    // removeClass
    $('#removeclass').click(function(){
        $('#addclassp').removeClass('yellowbg');
    });
    // fade out
    $('#fadeoutbtn').click(function(){
        $('.redbox2').fadeOut();
    });
    // fade in
    $('#fadeinbtn').click(function(){
        $('.redbox2').fadeIn(1000);
    });
    // fade toggle
    $('#fadetglbtn').click(function(){
        $('.redbox2').fadeToggle();
    });
    // fadeTo
    $('#fadetobtn').click(function(){
        $('.redbox2').fadeTo(1000, 0.5);
    });
    // slidetoggle
    $('#question').click(function(){
        $('#answer').slideToggle();
    });
    $('#question2').click(function(){
        $('#answer2').slideToggle();
    });
    // draggable1
    $( "#draggable1" ).draggable();
    // draggable2 & 3
    $( "#draggable2" ).draggable({ axis: "y" });
    $( "#draggable3" ).draggable({ axis: "x" });
    // accordion
    $( "#accordion" ).accordion({
        collapsible: true,
        icons: { "header": "ui-icon-help", "activeHeader": "ui-icon-check" },
        event: "click",
        animate: 2000,
        active:1,
      });
    //   Autocomplete
    var customTags = [
        "Bangladesh",
        "Australia",
        "India",
        "Pakistan",
        "Newzeland",
        "Afganistan",
        "Srilanka",
        "Zimbabwe",
        "South Africa",
        "West Indies",
        "England",
        
      ];
      $( "#tags" ).autocomplete({
        source: customTags
      });
    //   datepicker
    $( "#datepicker" ).datepicker({
        showAnim: "clip",
        changeMonth: true,
      changeYear: true
      });
    //   select menu
    $( "#random" ).selectmenu();
 
    $( "#catagorized" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "number_max_height" );
    $( "#g_type" ).selectmenu();
    // with avatar
    $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function( ul, item ) {
          var li = $( "<li>" ),
            wrapper = $( "<div>", { text: item.label } );
   
          if ( item.disabled ) {
            li.addClass( "ui-state-disabled" );
          }
   
          $( "<span>", {
            style: item.element.attr( "data-style" ),
            "class": "ui-icon " + item.element.attr( "data-class" )
          })
            .appendTo( wrapper );
   
          return li.append( wrapper ).appendTo( ul );
        }
      });
      $( "#people" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget")
        .addClass( "ui-menu-icons avatar" );
    
        // circle maker
        var circle = $( "#circle" );
 
    $( "#radius" ).selectmenu({
      change: function( event, data ) {
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
     });
 
    $( "#color" ).selectmenu({
       change: function( event, data ) {
         circle.css( "background", data.item.value );
       }
     });
    //  tooltip
    $( "#show-option" ).tooltip({
        show: {
          effect: "blind",
          delay: 250
        }
      });
    // Menu
    $( "#menu" ).menu();
    // tabs
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });

});