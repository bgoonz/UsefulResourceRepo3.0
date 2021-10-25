<?php 

// tumblr-like post titles in feeds
function tumblrFeedTitles($permalink) {
  	global $wp_query;
  	if ($url = get_post_meta($wp_query->post->ID, 'TumblrURL', true)) {
  		return $url;
  	}
  	return $permalink;
  }
  add_filter('the_permalink_rss', 'tumblrFeedTitles');

  // tumblr-like post titles in posts
  function tumblrPostTitles() { 
  	global $post; 
  	$permalink = get_permalink(get_post($post->ID));
  	$tumblr_keys = get_post_custom_keys($post->ID); 
  	if ($tumblr_keys) {
    		foreach ($tumblr_keys as $tumblr_key) {
      		if ($tumblr_key == 'TumblrURL') {
        			$tumblr_vals = get_post_custom_values($tumblr_key);
      		}
    		}
    		if ($tumblr_vals) {
  			echo $tumblr_vals[0];
    		} else {
      		echo $permalink;
    		}
  	} else {
    		echo $permalink;
  	}
  }

  // link-back for Tumblr-like posts
  function tumblrLinkBacks($content) {
  	global $wp_query, $post;
  	$post_id = get_post($post->ID);
  	$posttitle = $post_id->post_title;
  	$permalink = get_permalink(get_post($post->ID));
  	$tumblr_keys = get_post_custom_keys($post->ID);
  	if (get_post_meta($wp_query->post->ID, 'TumblrURL', true)) {
  		if ($tumblr_keys) {
  		  	foreach ($tumblr_keys as $tumblr_key) {
      			if ($tumblr_key == 'TumblrURL') {
        				$tumblr_vals = get_post_custom_values($tumblr_key);
      			}
    			}
    			if ($tumblr_vals) {
  				if (is_feed()) {
  					$content .= '<p><a href="'.$tumblr_vals[0].'" title="Direct link to featured article">Direct Link to Article</a> &#8212; ';
  					$content .= '<a href="'.$permalink.'">Permalink</a></p>';
  					return $content;
  				} else {
  					return $content;
  				}
  			}
  		}
  	} else {
  		$content = $content;
  		return $content;
  	}
  }
  add_filter('the_content', 'tumblrLinkBacks');

?>