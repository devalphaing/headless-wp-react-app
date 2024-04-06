<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php wp_title(); ?>
    </title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
</head>

<body <?php body_class(); ?>>
    <!-- Your header content here -->
    <header class="site-header">
        <div class="nav-container">
            <div class="head-home">
                <a href="<?php echo esc_url(home_url()); ?>" class="a-tag-behaviour">Home</a>
            </div>
            <div class="head-blogs">
                <a href="<?php echo site_url('blog'); ?>" class="a-tag-behaviour">Blogs</a>
            </div>
            <div class="head-about">
                <a href="<?php echo esc_url(home_url('/about')); ?>" class="a-tag-behaviour">About</a>
            </div>
        </div>
    </header>