<?php
get_header(); // Include header
?>

<div class="index-heading-container">
    <div class="index-heading-head">
        <?php echo get_the_title(); ?>
    </div>
</div>


<div class="index-content-container">
    <?php echo get_the_content(); ?>
</div>

<?php
get_footer(); // Include footer
?>