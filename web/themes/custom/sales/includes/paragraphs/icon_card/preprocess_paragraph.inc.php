<?php

/**
 * @file
 * Preprocess Paragraphs for Icon Card.
 */

if (isset($paragraph_values)) {
  // Alignment field_alignment.
  $variables['card_icon']['alignment'] = 'left';
  if (_sales_field_check($paragraph_values, 'field_alignment')) {
    $variables['card_icon']['alignment'] = $paragraph_values->get('field_alignment')->getString();
  }

  // Heading field_heading.
  if (_sales_field_check($paragraph_values, 'field_heading')) {
    $variables['card_icon']['headline'] = $paragraph_values->get('field_heading')->getString();
  }

  // Description field_description.
  if (_sales_field_check($paragraph_values, 'field_description')) {
    $variables['card_icon']['description'] = $paragraph_values->get('field_description')->view();
  }

  // Icon field_media.
  if (_sales_field_check($paragraph_values, 'field_card_media')) {
    $card_media_entity = $paragraph_values->get('field_card_media')->entity;
    $variables['card_icon']['image'] = _sales_image_with_focal($card_media_entity->get('field_media_image'));
    $variables['#cache']['tags'][] = 'media:' . $card_media_entity->id();
  }
}
