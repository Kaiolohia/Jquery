$("form").on("submit", (e) => {
  e.preventDefault();
  const title = $("input").eq(0);
  if(title.val().length < 2) {
    alert('Title needs to be more than two charectors')
    return
  }
  const rating = $("input").eq(1);
  $("ul").append($(`<li><p>${title.val()}, Rating: ${rating.val()}</p> <input type="button" value='Remove Review'></li>`));
  title.val("");
  rating.val("");
});

$("ul").on('click', 'li', (e) => {
    if($(e.target).is('input')) {
        $(e.target).parent().remove()
    }
})