$('.submit').on('click',function(){
    if($('.name').val() !== "" && $('.theComment').val() !== ""){

        $('.content').prepend(`        <div class = post>
        <img class="postImg" src="https://static.thenounproject.com/png/3521198-200.png">
        <div class = "mainPost">
            <div class = "postStuff">
                <div class = "postName">` + $('.name').val() + `</div>
                <div class = "postOptions">
                    <div class = "edit">Edit</div>
                    <div class = "delete">Delete</div>
                </div>
            </div>
            <div class = "postComment">
                <div class = "postComment">` + $('.theComment').val() +`</div>
            </div>
            <div class = "hidden">
                <div class = "editBox">
                    <input class = "editText" placeholder = "comment"></input>
                    <div class = "editSubmit">Submit</div>
                </div>
            </div>
        </div>
    </div>`);
}
  })

$('.content').on('click', '.delete',function(){
    post1 = $(this).parent();
    post2 = $(post1).parent();
    post3 = $(post2).parent();
    post4 = $(post3).parent();
    post4.remove();
})
$('.content').on('click', '.edit',function(){
    edit1 = $(this).parent();
    edit2 = $(edit1).parent();
    edit3 = $(edit2).next();
    edit4 = $(edit3).next();
    $(edit4).toggleClass('hidden');
    
})
$('.content').on('click','.editSubmit',function(){
    editText1 = $(this).prev();
    editTextFinal = $(editText1).val()

    editComment1 = $(this).parent();
    editComment2 = $(editComment1).parent();
    editComment3 = $(editComment2).prev();
    editCommentFinal = $(editComment3).html();

    $(editComment3).empty()
    $(editComment3).append(editTextFinal)
    $(edit4).toggleClass('hidden');
})


