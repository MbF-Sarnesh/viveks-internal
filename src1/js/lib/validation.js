$(function(){
	$(".form-wrap .input-item").not(".non-mandatory").bind({                
	  keyup: function() {
	      var $thisValue = $(this).val();
	      var errorText  = $(this).parents('.form-row').find('label').attr('data-error');        
	      if ($thisValue.length != 0) {
	          $(this).parents('.form-row').removeClass('error-row');
	          $(this).parents('.form-row').find('.error-message').slideUp(function(){
	              $(this).remove();
	          });
	      }
	  }, 
	  blur: function() {
	      var $thisValue = $(this).val();
	      var $errorText  = $(this).parents('.form-row').find('label').attr('data-error');
         $(this).parent('.floating-item').removeClass('input-animate'); 
	      if ($thisValue.length == 0) {
	          $(this).parents('.form-row').addClass('error-row');
	          if($(this).parents('.form-row').find('.error-message').length==0) {
	              $('<div class="error-message">'+$errorText+'</div>').appendTo($(this).parents('.form-row')).slideDown();
	          }
	      } else {
	          $(this).parents('.form-row').removeClass('error-row');
	      }
	  }
	});
});