<?php

require_once('store.php');

require_once('functions.php');

require_once('header.php');

?>

    <!-- Intro -->
    <section id="intro">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="section-title">
                        <?= $intro['title']; ?>
                    </h1>
                </div>
                <?php foreach($intro['list'] as $item) : ?>
                    <div class="col-sm-4">
                        <div class="intro-item">
                            <div class="icon" style="background-image: url('<?= $item['image'];?>')"></div>
                            <div class="title"><?= $item['title'];?></div>
                        </div>
                    </div>
                <?php endforeach;?>
            </div>
        </div>
    </section>


<?php
require_once('footer.php');