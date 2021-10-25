import React from "react";
import "../../App.css";

const links = [
  {
    name: "Mac",
    image: "apple.svg",
    subNav: [
      { name: "MacBook", image: "images/mac/macbook_dark_large.svg" },
      { name: "MacBook Air", image: "images/mac/macbookair_dark_large.svg" },
      { name: "MacBook Pro", image: "images/mac/macbookpro_dark_large.svg" },
      { name: "iMac", image: "images/mac/imac_dark_large.svg" },
      { name: "iMac Pro", image: "images/mac/imac_pro_dark_large.svg" },
      { name: "Mac Pro", image: "images/mac/macpro_dark_large.svg" },
      { name: "Mac mini", image: "images/mac/macmini_dark_large.svg" },
      { name: "Accessories", image: "images/mac/mac_acc_dark_large.svg" },
      { name: "High Sierra", image: "images/mac/mac_osx_dark_large.svg" },
      { name: "Compare", image: "images/mac/mac_comp_dark_large.svg" }
    ]
  },
  {
    name: "iPad",
    image: "apple.svg",
    subNav: [
      { name: "iPad Pro", image: "images/ipad/ipadpro_light_large.svg" },
      { name: "iPad", image: "images/ipad/ipad_large.svg" },
      { name: "iPad mini 4", image: "images/ipad/ipadmini_large.svg" },
      { name: "iOS 11", image: "images/ipad/ipad_ios10_large.svg" },
      { name: "Accessories", image: "images/ipad/ipad_acc_large.svg" },
      { name: "Compare", image: "images/ipad/ipad_comp_large.svg" }
    ]
  },
  {
    name: "iPhone",
    image: "apple.svg",
    subNav: [
      { name: "iPhone X", image: "images/iphone/iphonex_large.svg" },
      { name: "iPhone 8", image: "images/iphone/iphone8_large.svg" },
      { name: "iPhone 7", image: "images/iphone/iphone7_large.svg" },
      { name: "iPhone 6s", image: "images/iphone/iphone6s_large.svg" },
      { name: "iPhone SE", image: "images/iphone/iphonese_large.svg" },
      { name: "iOS 11", image: "images/iphone/iphone_ios_large.svg" },
      { name: "Accessories", image: "images/iphone/iphone_acc_large.svg" },
      { name: "Compare", image: "images/iphone/iphone_comp_large.svg" }
    ]
  },
  {
  name: "Watch",
  image: "apple.svg",
  subNav: [
    { name: "Apple Watch Series 3", image: "images/watch/watch_nav_series_2_large.svg" },
    { name: "Apple Watch Nike+", image: "images/watch/watch_nav_nike_large.svg" },
    { name: "Apple Watch Hermes", image: "images/watch/watch_nav_hermes_large.svg" },
    { name: "Apple Watch Edition", image: "images/watch/watch_nav_edition_large.svg" },
    { name: "Apple Watch Series 1", image: "images/watch/watch_nav_series_1_large.svg" },
    { name: "watchOS", image: "images/watch/watch_nav_watch_os_large.svg" },
    { name: "Bands", image: "images/watch/watch_nav_bands_large.svg" },
    { name: "Accessories", image: "images/watch/watch_nav_accessories_large.svg" },
    { name: "Compare", image: "images/watch/watch_nav_compare_large.svg" }
  ]
},
{
  name: "TV",
  image: "apple.svg",
  subNav: [
    { name: "Apple TV 4K", image: "images/tv/apple_tv_dark_large.svg" },
    { name: "Apple TV", image: "images/tv/apple_tv_dark_large.svg" },
    { name: "TV App", image: "images/tv/tvapp_dark_large.svg" },
    { name: "Accessories", image: "images/tv/accessories_dark_large.svg" },
    { name: "Compare", image: "images/tv/compare_dark_large.svg" }
  ]
},
{
  name: "Music",
  image: "apple.svg",
  subNav: [
    { name: "Apple Music", image: "images/music/apple_music_large.svg" },
    { name: "iTunes", image: "images/music/itunes_large.svg" },
    { name: "HomePod", image: "images/music/homepod_icon_large.svg" },
    { name: "Music Accessories", image: "images/music/accessories_large.svg" },
    { name: "Gift Cards", image: "images/music/gift_cards_large.svg" }
  ]
}
];

const SubNav = props => {
  // reference the upperLink
  const upperLink = links.find(link => link.name === props.match.params.name);

  return (
    <div class="subnav-wrapper-wrapper">
      <div class="subnav-wrapper">
        {upperLink.subNav.map(item => (
          <div className="image-name-wrapper" key={Math.random()}>
            <img src={item.image} alt="apple product" />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNav;
