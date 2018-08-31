<?php 
	get_header(); 

	// Retrieves the stored value from the database

	global $post;

	wp_nonce_field( basename( __FILE__ ), 'tdy_meta_nonce' );

	$meta_data = get_post_meta(get_the_ID());

	$date = $meta_data['_tdy_se_date_meta'][0];
  $location = $meta_data['_tdy_se_location_meta'][0];
  $description = $meta_data['_tdy_se_description_meta'][0];
  // $photo = $meta_data['_tdy_se_photo_meta'][0];
  $photoString = $meta_data['_tdy_se_photo_meta'][0];
  $photoArray = json_decode($photoString);
  $photoSrc = $photoArray[0]->src;

?>

	<main role="main" aria-label="Content" class="tdy_photo_album">
		<!-- section -->
			<section class="tdy_event">
				<div class="tdy_wrapper">
					<h1><?php the_title(); ?></h1>
					<h2><?php echo $location; ?></h2>
					<h3><?php echo $date; ?></h3>
					<div class="album">
						<div class="photo link">
							<img class="mimage" src="<?php echo $photoSrc; ?>">
							<a class="fa fa-search" href="<?php echo $photoSrc; ?>"></a>
						</div>
				</div>
			</div> 
		</section>	
	</main>

<?php get_footer(); ?>
