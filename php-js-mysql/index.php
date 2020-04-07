<?php
include 'includes/header.php';
include 'includes/classes/User.php';
include 'includes/classes/Post.php';

if (isset($_POST['post'])) {
    $post = new Post($conn, $userLoggedIn);
    $post->submitPost($_POST['post_text'], 'none');
    header("Location: index.php");
}

?>
<div class="user_details column">
    <a href="#"><img src="<?php echo $user['profile_pic']; ?>" alt="<?php echo $user['username']; ?>"></a>
    <div class="user_details_left_right">
        <a href=" <?php echo "$userLoggedIn"; ?>">
            <?php
            echo $user['first_name'] . " " . $user['last_name'];
            ?></a>
        <?php echo "Posts: " . $user['num_posts'] . '<br/>';
        echo "Likes: " . $user['num_likes']; ?>

    </div>
</div>

<div class="main_column column">
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" class="post_form">
        <textarea name="post_text" id="post_text" placeholder="Got something to say?"></textarea>
        <input type="submit" value="Post" id="post_button" name="post">
    </form>
    <hr>
    <?php
    // $post = new Post($conn, $userLoggedIn);
    // $post->loadPostsFriends();
    ?>
    <div class="posts_area">

    </div>
    <img id="loading" src="assets/icons/loading.gif" alt="loading">
</div>

<script>
    const userLoggedIn = '<?php echo $userLoggedIn; ?>';
    console.log(userLoggedIn);
    $(document).ready(function() {
        $('#loading').show();
        // Origingal ajax request for loading first posts
        $.ajax({
            url: "includes/handlers/ajax_load_posts.php",
            type: "POST",
            data: "page=1&userLoggedIn=" + userLoggedIn,
            cache: false,
            success: function(data) {
                $('#loading').hide();
                $('.posts_area').html(data);
            }
        });

        $(window).scroll(function() {
            let height = $('.posts_area').height(); // Div containing posts
            let scroll_top = $(this).scrollTop();
            let page = $('.posts_area').find('.nextPage').val();
            let noMorePosts = $('.posts_area').find('.noMorePosts').val();

            if ((document.body.scrollHeight == document.body.scrollTop + window.innerHeight) && noMorePosts == false) {
                $('#loading').show();

                let ajaxReq = $.ajax({
                    url: "includes/handlers/ajax_load_posts.php",
                    type: "POST",
                    data: "page=" + page + "&userLoggedIn=" + userLoggedIn,
                    cache: false,
                    success: function(response) {
                        $('.posts_area').find('.nextPage').remove();
                        $('.posts_area').find('.noMorePosts').remove();
                        $('#loading').hide();
                        $('.posts_area').append(response);
                    }
                });
            }
            return false;
        });
    });
</script>
<?php
require 'includes/footer.php';

?>