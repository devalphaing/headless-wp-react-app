<?php
get_header(); // Include header
?>

<?php
if (get_the_title() === 'Blog') {
    ?>

    <div class="page-blog-heading-container">
        <div class="page-blog-heading-head">Blogs</div>
    </div>

    <?php
    // The Query
    $blog_query = new WP_Query(
        array(
            'post_type' => 'post', // Retrieves blog posts
            'posts_per_page' => -1, // Retrieves all posts
        )
    ); ?>

    <div >

    </div>

    <?php
    // The Loop
    if ($blog_query->have_posts()) {
        while ($blog_query->have_posts()) {
            $blog_query->the_post();
            ?>

            <div class="page-blog-blogContainer">
                <a href="<?php the_permalink(); ?>" class="page-blog-heading">
                    <?php the_title(); ?>
                </a>
                <div class="page-blog-excerpt">
                    <?php the_excerpt(); ?>
                </div>
                <hr>
            </div>

            <?php
        }
    } else {
        // No posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();
    ?>



<?php } else { ?>

    <div class="page-about-heading-container">
        <div class="page-about-heading-head">About Us</div>
    </div>

    <div class="page-about-info-container">
        <div class="page-about-info-text">
            <?php echo get_the_content(); ?>
        </div>
    </div>

<?php } ?>

<?php
get_footer(); // Include footer
?>