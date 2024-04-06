<?php

function enqueue_my_styles() {
    wp_enqueue_style('my-style', get_theme_file_uri('/css/style.css'));
}
add_action('wp_enqueue_scripts', 'enqueue_my_styles');

