$(document).ready(function(e) {
    "use strict";

    //mailchimp
    $('#mailchimp-subscription-form-footer').ajaxChimp({
      callback: mailChimpCallBack,
      url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
    });

    function mailChimpCallBack(resp) {
      // Hide any previous response text
      var $mailchimpform = $('#mailchimp-subscription-form-footer'),
          $response = '';
      $mailchimpform.children(".alert").remove();
      if (resp.result === 'success') {
          $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
      } else if (resp.result === 'error') {
          $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
      }
      $mailchimpform.prepend($response);
    }

    // Mailchimp Subscription Form Validation-->
    $('#mailchimp-subscription-form').ajaxChimp({
        callback: mailChimpCallBackTwo,
        url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
    });

    function mailChimpCallBackTwo(resp) {
        // Hide any previous response text
        var $mailchimpform = $('#mailchimp-subscription-form'),
            $response = '';
        $mailchimpform.children(".alert").remove();
        if (resp.result === 'success') {
            $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
        } else if (resp.result === 'error') {
            $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
        }
        $mailchimpform.prepend($response);
    }

    //Contact Form Validation
    $("#contact_form").validate({
      submitHandler: function(form) {
        var form_btn = $(form).find('button[type="submit"]');
        var form_result_div = '#form-result';
        $(form_result_div).remove();
        form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
        var form_btn_old_msg = form_btn.html();
        form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
        $(form).ajaxSubmit({
          dataType:  'json',
          success: function(data) {
            if( data.status == 'true' ) {
              $(form).find('.form-control').val('');
            }
            form_btn.prop('disabled', false).html(form_btn_old_msg);
            $(form_result_div).html(data.message).fadeIn('slow');
            setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
          }
        });
      }
    });

    //flipclock
    var clock;
    // Grab the current date
    var currentDate = new Date();
    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date(2017, 6, 10, 16, 24); //Date(year, month, day, hours, minutes, seconds, milliseconds); 
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    // Instantiate a coutdown FlipClock
    clock = $('#flipclock1').FlipClock(diff, {
      clockFace: 'DailyCounter',
      countdown: true
    });

    //Clock Script
    $('#month-week-offset-clock1').countdown('2020/10/10', function(event) {
      var $this = $(this).html(event.strftime('%w weeks and %d days'));
    });

    // Final Countdown Timer Script
    $('#legacy-clock').countdown('2018/07/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span>%D</span> Days | '
        + '<span>%H</span> Hours | '
        + '<span>%M</span> Minutes | '
        + '<span>%S</span> Seceonds '));
    });
              

    // Script for Donation Form Custom Amount
    var $donation_form = $("#paypal_donate_form_onetime_recurring");
    //toggle custom amount
    var $custom_other_amount = $donation_form.find("#custom_other_amount");
    $custom_other_amount.hide();
    $donation_form.find("select[name='amount']").change(function() {
        var $this = $(this);
        if ($this.val() == 'other') {
          $custom_other_amount.show().append('<div class="input-group"><span class="input-group-addon">$</span> <input id="input_other_amount" type="text" name="amount" class="form-control" value="100"/></div>');
        }
        else{
          $custom_other_amount.children( ".input-group" ).remove();
          $custom_other_amount.hide();
        }
    });

    //toggle donation_type_choice
    var $donation_type_choice = $donation_form.find("#donation_type_choice");
    $donation_type_choice.hide();
    $("input[name='payment_type']").change(function() {
        if (this.value == 'recurring') {
            $donation_type_choice.show();
        }
        else {
            $donation_type_choice.hide();
        }
    });

    // submit form on click
    $donation_form.on('submit', function(e){
        $( "#paypal_donate_form-onetime" ).submit();
        var item_name = $donation_form.find("select[name='item_name'] option:selected").val();
        var currency_code = $donation_form.find("select[name='currency_code'] option:selected").val();
        var amount = $donation_form.find("select[name='amount'] option:selected").val();
        var t3 = $donation_form.find("input[name='t3']:checked").val();

        if ( amount == 'other') {
          amount = $donation_form.find("#input_other_amount").val();
        }

        // submit proper form now
        if ( $("input[name='payment_type']:checked", $donation_form).val() == 'recurring' ) {
            var recurring_form = $('#paypal_donate_form-recurring');

            recurring_form.find("input[name='item_name']").val(item_name);
            recurring_form.find("input[name='currency_code']").val(currency_code);
            recurring_form.find("input[name='a3']").val(amount);
            recurring_form.find("input[name='t3']").val(t3);

            recurring_form.find("input[type='submit']").trigger('click');

        } else if ( $("input[name='payment_type']:checked", $donation_form).val() == 'one_time' ) {
            var onetime_form = $('#paypal_donate_form-onetime');

            onetime_form.find("input[name='item_name']").val(item_name);
            onetime_form.find("input[name='currency_code']").val(currency_code);
            onetime_form.find("input[name='amount']").val(amount);

            onetime_form.find("input[type='submit']").trigger('click');
        }
        return false;
    });
});



