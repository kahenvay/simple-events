<?php 
	get_header(); 

	// Retrieves the stored value from the database

	global $post;

	date_default_timezone_set('Europe/Lisbon'); //make this edtable
	function isSameDay($day1,$day2){
		return date('Y-m-d',strtotime($day1)) === date('Y-m-d',strtotime($day2));
	}

	wp_nonce_field( basename( __FILE__ ), 'tdy_meta_nonce' );
	$meta_data = get_post_meta(get_the_ID());

	$startDate = $meta_data['tdy_se_start_date'][0];
	// $startDate = date('Y-m-d',strtotime($meta_data['tdy_se_start_date'][0]));
	$endDate = $meta_data['tdy_se_end_date'][0];
  $location = $meta_data['tdy_se_location'][0];
  $main_title = $meta_data['tdy_se_main_title'][0];
  $main_description = $meta_data['tdy_se_main_description'][0];
  $sub_description = $meta_data['tdy_se_sub_description'][0];
  $sub_title = $meta_data['tdy_se_sub_title'][0];
  $photoUrl = $meta_data['tdy_se_photo_url'][0];
  $photoAlt = $meta_data['tdy_se_photo_alt'][0];
  // $photoString = $meta_data['_tdy_se_photo_meta'][0];
  // $photoArray = json_decode($photoString);
  // $photoSrc = $photoArray[0]->src;

?>

	<main role="main" aria-label="Content" class="tdy_event">
			<div class="tdy_event__header"> 
				<h2><?php echo $location; ?></h2>

				<?php if(isSameDay($startDate,$endDate)): ?>
					<p><?php echo date('d/m/Y H:i',strtotime($startDate)) ?></p>
					<p><?php echo date('H:i',strtotime($endDate)) ?></p>
					<p>Europe/Lisbon</p>
				<?php else: ?>
					<p><?php echo date('d/m/Y H:i',strtotime($startDate)) ?></p>
					<p><?php echo date('d/m/Y H:i',strtotime($endDate)) ?></p>
					<p>Europe/Lisbon</p>
				<?php endif; ?>

				<h1><?php echo $main_title; ?></h1>
					<img class="tdy_event__header__image" src="<?php echo $photoUrl; ?>" alt="<?php echo $photoAlt; ?>">
			</div> 
			<div>
				<p><?php echo $main_description; ?></p>
				<div>
					<h2><?php echo $sub_title; ?></h2>
					<p><?php echo $sub_description; ?></p>
				</div>
			</div>
	</main>

<?php get_footer(); ?>
