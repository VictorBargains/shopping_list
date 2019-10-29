  
$(function() {
    $("#js-shopping-list-form").on("submit", function(event) {
      event.preventDefault();
      let item = $(event.currentTarget)
        .find('input[name="shopping-list-entry"]')
        .val();
      $(".shopping-list").append(`<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
    });
    $("ul").on("click", ".shopping-item-delete", function(event) {
      $(this).closest("li").remove();
    });
    $("ul").on("click", ".shopping-item-toggle", function(event) {
      let span = $(event.currentTarget).closest("li").find(".shopping-item");
      if (span.hasClass("shopping-item__checked")) {
        span.removeClass("shopping-item__checked");
      }
      else {
        span.addClass("shopping-item__checked");
      };
    });
  });