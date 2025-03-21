
jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{variant.id}}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });
      const activeMenuLevel0 = localStorage.getItem('active-menu')
      const activeMenuLevel1 = localStorage.getItem('active-menu1')
      const activeMenuLevel2 = localStorage.getItem('active-menu2');
      if(activeMenuLevel0){
        $(`[href="${activeMenuLevel0}"]`).parent().addClass('is--opend')
        $(`[href="${activeMenuLevel0}"]`).parent().find('.t4s-sub-menu').show()
      }
      if(activeMenuLevel1){
        $(`[href="${activeMenuLevel1}"]`).parent().addClass('is--opend');
        $(`[href="${activeMenuLevel1}"]`).parent().find('.t4s-sub-sub-menu').show()
      }
  if(activeMenuLevel2){
        $(`[href="${activeMenuLevel2}"]`).parent().addClass('is--opend');
        $(`[href="${activeMenuLevel2}"]`).parent().find('.t4s-sub-sub-sub-menu').show()
      }
      $('.t4s-sub-menu .t4s-item-level-1 > a').on('click',function(e){
          e.preventDefault();
          localStorage.setItem('active-menu1',$(this).attr('href'));
          if(!e.target.classList.contains('t4s-mb-nav__icon')){
            window.location=$(this).attr('href')
          }
          
      })
   $('.t4s-sub-menu .t4s-item-level-2 > a').on('click',function(e){
          e.preventDefault();
          localStorage.setItem('active-menu2',$(this).attr('href'));
          if(!e.target.classList.contains('t4s-mb-nav__icon')){
            window.location=$(this).attr('href')
          }
          
      })
      $('.t4s-item-level-0.t4s-menu-item-has-children > a').on('click',function(e){
          e.preventDefault();
          localStorage.setItem('active-menu',$(this).attr('href'));
           if(!e.target.classList.contains('t4s-mb-nav__icon')){
            window.location=$(this).attr('href')
          }
      })

    if($('.t4s-form-message--success').length > 0){
      setTimeout(function(){
        $('.t4s-form-message--success').addClass('hidden')
      },5000)
    }

});