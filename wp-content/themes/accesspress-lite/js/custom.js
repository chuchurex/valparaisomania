var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
jQuery(function($){
    
  jQuery(window).resize(function(){
    jQuery('.slider-caption').each(function(){
    var cap_height = jQuery(this).actual( 'outerHeight' );
    jQuery(this).css('margin-top',-(cap_height/2));
    });
    }).resize();;
  
    jQuery('.testimonial-slider').bxSlider({
   controls:false,
   auto:true,
   mode:'fade',
   speed:1000
  });
  jQuery('.commentmetadata').after('<div class="clear"></div>');

  jQuery('.menu-toggle').click(function(){
    jQuery('#site-navigation .menu').slideToggle('slow');
  });
    
    jQuery('.thumbnail-gallery .gallery-item a').each(function(){
        jQuery(this).addClass('fancybox-gallery').attr('data-lightbox-gallery','gallery');
    });
    
    jQuery(".fancybox-gallery").nivoLightbox();
    jQuery(".image_feature_lightbox").nivoLightbox();
    
    jQuery('.search_one').click(function(){
         jQuery('.searchform').show();
         jQuery('.search_one').hide();
         
    });
    $('#secondary-right, #primary').theiaStickySidebar({additionalMarginTop: 35});
    $('#secondary-left, #primary').theiaStickySidebar({additionalMarginTop: 35});
 });

}

/*
     FILE ARCHIVED ON 22:39:47 Feb 08, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:25:56 Feb 12, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.518
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.027
  esindex: 0.031
  cdx.remote: 68.285
  LoadShardBlock: 202.97 (3)
  PetaboxLoader3.datanode: 353.424 (5)
  load_resource: 341.175 (2)
  PetaboxLoader3.resolve: 141.561 (2)
*/