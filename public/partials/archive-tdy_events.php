<?php 

	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$loop = new WP_Query( array( 'post_type' => 'tdy_events',
	        'posts_per_page' => 10,
	        'paged'          => $paged )
	);

	get_header();
?>

	<main role="main" aria-label="Content" class="tdy_photo_album">

		<nav class="pagination">
        <?php tdy_se_pagination_bar( $loop ); ?>
    </nav>

    <h1> Events </h1>

		<?php 
			if($loop->have_posts()) : while($loop->have_posts()) : $loop->the_post(); 

			$meta_data = get_post_meta(get_the_ID());

			$date = $meta_data['_tdy_se_date_meta'][0];
		  $location = $meta_data['_tdy_se_location_meta'][0];
		  $description = $meta_data['_tdy_se_description_meta'][0];
		  // $photo = $meta_data['_tdy_se_photo_meta'][0];
		  $photoString = $meta_data['_tdy_se_photo_meta'][0];
		  $photoArray = json_decode($photoString);
		  $photoSrc = $photoArray[0]->src;	  

			?>

		<!-- section -->
			<div class="tdy_event">
				<div class="tdy_wrapper">
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<h3><?php echo $location; ?></h3>
					<h4><?php echo $date; ?></h4>
					<div class="album">
						<div class="photo link">
							<img class="mimage" src="<?php echo $photoSrc; ?>">
							<a class="fa fa-search" href="<?php echo $photoSrc; ?>"></a>
						</div>
				</div>
					</div>
				</div> 
			</div>	



			<?php endwhile; endif; ?>

			<?php wp_reset_postdata(); ?>

			<nav class="pagination">
        <?php tdy_se_pagination_bar( $loop ); ?>
    </nav>

	</main>

<?php get_footer(); ?>
