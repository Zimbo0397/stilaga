

$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 22,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1,
            nav: true
        },
        580: {
            items: 2,
            nav: true
        },
        992: {
            items: 3,
            nav: true
        },
        1300: {
            items: 4,
            nav: true
        },
        1540: {
            items: 5,
            nav: true
        }
    }
});

var owl = $('.owl-carousel2').owlCarousel({
    loop: false,
    margin: 22,
    responsiveClass: true,
    responsive:{
        0: {
            items: 2,
            nav: false
        },
        480: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1200: {
            items: 3,
            nav: true
        },
        1540: {
            items: 4,
            nav: true
        }
    }
});


var owl = $('.owl-carousel9').owlCarousel({
    loop: true,
    items: 1,
    nav: true
});


$(window).on('load', function() {
    $('#jsProdSlider .owl-item.active .item').eq(0).addClass('border');
});

  $('#jsProdSlider .owl-item').each(function(i) {
    $(this).on('click', function(event) {
          
          var $mainImgTarg = $('#image-targ'),
          $curentSlide = $(this),
          videoAttr = $curentSlide.find('.image-holder').attr('data-video');

          $('#jsProdSlider .item').removeClass('border');
          $('#jsProdSlider .owl-item').removeClass('border');
          $curentSlide.addClass('border');

          if ($curentSlide.find('.prod-item .image-holder').hasClass('video')) {
            $mainImgTarg.addClass('video').attr('data-video', videoAttr);
          } else {
            $mainImgTarg.removeClass('video').attr('data-video', '');
          }

          $mainImgTarg.html($curentSlide.find('.prod-item .image-holder').html());


          $('#image-targ.video').on('click', function() {

            $mainImgTarg.html('<iframe src="https://www.youtube.com/embed/'+videoAttr+'?enablejsapi=1" id="ytVid" frameborder="0" allowfullscreen></iframe>');

            $('#ytVid').on('load', function() {
              document.getElementById("ytVid").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            });

            $mainImgTarg.removeClass('video');

          });

    });
  });




owl.on('changed.owl.carousel', function(event) {

  var $mainImgTarg = $('#image-targ'),
      owlCurIndex = event.item.index,
      $curentSlide = $('#jsProdSlider .item').eq(owlCurIndex),
      videoAttr = $curentSlide.find('.image-holder').attr('data-video');

      $('#jsProdSlider .item').removeClass('border');
      $curentSlide.addClass('border');

      if ($curentSlide.find('.prod-item .image-holder').hasClass('video')) {
        $mainImgTarg.addClass('video').attr('data-video', videoAttr);
      } else {
        $mainImgTarg.removeClass('video').attr('data-video', '');
      }

      $mainImgTarg.html($curentSlide.find('.prod-item .image-holder').html());


      $('#image-targ.video').on('click', function() {

        $mainImgTarg.html('<iframe src="https://www.youtube.com/embed/'+videoAttr+'?enablejsapi=1" id="ytVid" frameborder="0" allowfullscreen></iframe>');

        $('#ytVid').on('load', function() {
          document.getElementById("ytVid").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });

        $mainImgTarg.removeClass('video');

      });

});

$(window).on('load', function() {
  $('#image-targ.video').on('click', function() {
    var $mainImgTarg = $('#image-targ.video'),
        videoAttr = $mainImgTarg.attr('data-video');

        $($mainImgTarg).css('height', $($mainImgTarg).height());
        $mainImgTarg.html('<iframe src="https://www.youtube.com/embed/'+videoAttr+'?enablejsapi=1" id="ytVid" frameborder="0" allowfullscreen></iframe>');

    $('#ytVid').on('load', function() {
      document.getElementById("ytVid").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

    $mainImgTarg.removeClass('video');
          
  });
});

$(window).on('load', function() {
  $('#image-targ .video').on('click', function() {
    var $mainImgTarg = $('#image-targ .video'),
        videoAttr = $mainImgTarg.attr('data-video');

        $($mainImgTarg).css('height', $($mainImgTarg).height());
        $mainImgTarg.html('<iframe src="https://www.youtube.com/embed/'+videoAttr+'?enablejsapi=1" id="ytVid" frameborder="0" allowfullscreen></iframe>');

    $('#ytVid').on('load', function() {
      document.getElementById("ytVid").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

    $mainImgTarg.removeClass('video');
          
  });
});

$(window).on('load', function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 148, 1574 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.values[ 0 ]);
        $( "#amount2" ).val(ui.values[ 1 ] );
      }
    });
    $( "#amount1" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ));
});



var markersArr = [
  {
    lat: -34.297,
    lng: 150.544,
    icon: 'img/icons/board.png'
  },
  {
    lat: -34.397,
    lng: 150.644,
    icon: 'img/icons/board.png'
  },
  {
    lat: -34.197,
    lng: 150.344,
    icon: 'img/icons/board.png'
  },
  {
    lat: -34.697,
    lng: 150.844,
    icon: 'img/icons/board.png'
  },
  {
    lat: -34.997,
    lng: 150.944,
    icon: 'img/icons/board.png'
  }
];

var infoWindows = [],
  markers = [];

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });



  for(var i = 0; i < markersArr.length; i++) {


    var marker = new google.maps.Marker({
        position: {lat: markersArr[i].lat, lng: markersArr[i].lng},
        map: map,
        icon: markersArr[i].icon,
        title: 'marker'+[i]+''
      });

      markers.push(marker);

  };

  markers.map(function (marker, i) {

  });

  }


$('.content-nav li a').each(function() {
  var atrrNum = $(this).attr('data-tab');
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.content-nav li a').removeClass('active');
    $(this).addClass('active');

    $('#main-tabs .tab-item').removeClass('active');
    $('#main-tabs .tab-item').eq(atrrNum).addClass('active');
  });
});
$('.content-nav li a').eq(0).trigger('click');



$('.quan').each(function() {
  var inc = $(this).find('.incr'),
      dec = $(this).find('.dec'),
      $input = $(this).find('input'),
      inputVal = $input.val();

      function increment() {
        inputVal++;
        $input.val(inputVal);
      };
      function decrement() {
        if(inputVal <= 1) {
          inputVal = 1;
        } else {
          inputVal--;
          $input.val(inputVal);
        }
      };

    $(inc).on('click', function(e) {
      e.preventDefault();
      increment();
    });
    $(dec).on('click', function(e) {
      e.preventDefault();
      decrement();
    });
});

// $('.contacts ul').on('click', function() {
//   $(this).toggleClass('active');
// });
$('#mobile-nav-btn').on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('open');
});


$('.filters-btn').on('click', function(e) {
  e.preventDefault();
  $('.aside-panel').addClass('open');
})

$('.aside-panel .close-btn').on('click', function(e) {
  e.preventDefault();
  $('.aside-panel').removeClass('open');
})



$('.text-over-toggle').each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    $(this).closest('.text-container').find('.text-holder-over').toggleClass('active');
    $(this).closest('.text-container').find('.btn-holder').toggleClass('active');
  });
})


$('.location .news-item').each(function() {
  $(this).on('click', function() {
    var top = $('#map').offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  })
});


$('.rem-btn').each(function() {
  $(this).on('click', function() {
    $(this).closest('tr').remove();
  })
});

$('.type-sw').each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.order-modal').toggleClass('call');
    $('.type-sw').removeClass('active')
    $(this).addClass('active')
  });
});


$('.js-ship .order-row input').each(function() {
  $(this).on('change', function() {
    var val = $(this).val();

    if (val == 'samo') {
      $('.js-ship-type').removeClass('samo');
    } else {
      $('.js-ship-type').addClass('samo');
    }
  })
});


$('.list-item').each(function() {
  $(this).on('click', function() {
    $(this).siblings('.list-item').removeClass('active');
    $(this).toggleClass('active');
  });
});




$('.prod-sizes .option').each(function() {
  var $self = $(this);
  $self.on('click', function(e) {
    e.preventDefault();
    var val = $self.text(),
        targ = $self.closest('.prod-sizes').find('select').val(val);
      $('.option').removeClass('active');
      $self.addClass('active');
  });
});


$('.js-reg-field').each(function() {
  $(this).on('keyup', function() {
    console.log(1);
    var $tel = $(this).find('.js-valid-phone');
      var telRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      if (!telRegex.test($tel.val())) {
        err = $($tel);
        $($tel).removeClass('confirm').addClass('error');
      } else {

        $($tel).removeClass('error').addClass('confirm')
      }
  });
});

