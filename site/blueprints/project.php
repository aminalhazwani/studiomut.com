<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
fields:
  title:
    label: Title
    type:  text
  titl:
    label: Title on homepage
    type:  textarea
  visibility:
    label: Visibility
    type: radio
    default: archive
    options:
      homepage: Homepage
      archive: Archive
  cover:
    label: Cover image
    type: image
  client:
    label: Client
    type: text
  headercolor:
    label: Header text color
    type: color
    width: 1/2
    default: ffffff
  bkcolor:
    label: Slider background color
    type: color
    default: 1f1f1f
    width: 1/2
  text:
    label: Description for SEO and Open Graph
    type: textarea
files:
  sortable: true
  fields: 
    measure:
      label: Slide size
      type: radio
      default: enclosed
      options:
        full: Full
        enclosed: Enclosed
    slidebgcolor:
      label: Slide background color
      type: color
      default: 1f1f1f
    overtextcolor:
      label: Slide text color
      type: color
      default: ffffff
    overtext: 
      label: Slide text
      type: textarea
    video:
      type: checkbox
      text: Video?