<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('name'); ?>|<?php bloginfo('description'); ?>" />
    <!-- Open Graph -->
    <meta property="og:url" content="" />
    <meta property="og:title" content="<?php bloginfo('name'); ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="<?php bloginfo('description'); ?>" />
    <meta property="og:image" content="" />
    <title><?php bloginfo('name'); ?>|<?php bloginfo('description'); ?></title>
    <?php wp_head(); ?>
</head>

<body<?php body_class(); ?>>

    <header>
        <a href="<?php echo home_url(); ?>">
            <div class="top" id="#top">
                <p><?php bloginfo('description'); ?></p>
                <div class="site-title">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logp-b.png" alt="ロゴ" class="logo">
                    <h1 class="title"><?php bloginfo('name'); ?></h1>

                </div>
            </div>
        </a>
    </header>

    <nav class="gnav">
        <ul class="gnav-list">
            <?=
            wp_nav_menu([
                'container' => false,
                'menu_class' => 'gnav-list',
                'items_wrap' => '%3$s',
            ]);
            ?>
        </ul>
    </nav>