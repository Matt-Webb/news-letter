<?php

/*
Plugin Name: Motive8 Custom News Letter
Description: A simple jquery based email subscription box. This loads only on the WP static home page.
Author: Matthew Webb
Version: 1.0.0
License: GPL3
*/
?>

<?php

  function news_letter_signup_template() {

      echo '<!-- ========== Motive8 News Letter ========== -->
          		<input id="m8-news-letter" name="m8-news-letter" type="checkbox" class="hiddenInput" />
          		<div class="slickModals m8-news-letter">
          			<label for="m8-news-letter" class="overlay linear fastest black"></label>
          			<div class="window m8-subscribe center rotateIn ease fast white shadow">
          				<label for="m8-news-letter" class="icon close white"></label>
          				<div class="wrap m8-subscribe">
          					<div class="title">Get fresh weekly news for free!</div>
          					<p>Signup to our awesome newsletter and receive our updates.</p>

          					<form name="signup" id="signup" action="//dmtrk.com/signup.ashx" method="post" onsubmit="return validate_signup(this)">
          					  <input type="hidden" name="addressbookid" value="1356611">
          					  <!-- UserID - required field, do not remove -->
          					  <input type="hidden" name="userid" value="74121">
          					  <!-- ReturnURL - when the user hits submit, theyll get sent here -->
          					  <input type="hidden" name="ReturnURL" value="http://www.m8north.co.uk/newsletter-subscribe-thank-you">
          					  <!-- Email - the users email address -->
          					  <input type="text" name="Email" class="field" placeholder="Your email goes here">
          					  <input type="Submit" name="Submit" class="submit" value="Sign me up">
          					</form>

          				</div>
          				<div class="cta m8-subscribe">
          					<span class="icon"></span>
          					<p>Or check out our <span>latest blog posts</span></p>
          				</div>
          			</div>
          		</div>
        		<!-- ========== END  OF Motive8 News Letter ========== -->';
    }
    add_action ('news_letter_signup_template','news_letter_signup_template');


    function add_template_to_home_page() {

        if ( is_front_page() && is_home() ) {
            // Default homepage
        } elseif ( is_front_page() ) {
            // static homepage
            wp_enqueue_script('m8-news-letter', plugins_url('js/m8-news-letter.js', __FILE__), array('jquery') );
            wp_enqueue_style('m8-news-letter', plugins_url('css/m8-news-letter.css', __FILE__) );
            news_letter_signup_template();
        }
    }

    add_action ('wp_head','add_template_to_home_page');

  ?>
