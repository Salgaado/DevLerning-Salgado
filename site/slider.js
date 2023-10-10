(function () {
  "use strict";

  
  const vertical_slider = {

      
      slider_class: ".slider",

      
      show_slide: function (slide_id, context_item) {
          const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
          if (slide_container) {
              const slides = slide_container.querySelectorAll(".slide");
              if (slides && slides[slide_id]) {

                  
                  slide_container.scrollTo({
                      top: slides[slide_id].offsetTop,
                      behavior: "smooth"
                  });

       
                 
                  const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                  if (active_context_item) {
                      active_context_item.classList.remove("active");
                  }

                  context_item.classList.add("active");
              }
          }
      }, 

      
      init_slider: function (slider) {

          const navigation_items = slider.querySelectorAll(".slide_navigation a");
          
          
           
          if (navigation_items) {
              Object.keys(navigation_items).forEach(function (key) {
                  navigation_items[key].onclick = function (e) {
                      e.preventDefault();

                      vertical_slider.show_slide(key, navigation_items[key]);
                  };
              });
          }

      },

      
      init: function () {

          
          document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));

      }
  };

  
  vertical_slider.init();
}());