<?php

/**
 * @file
 * Preprocess Paragraphs for Card Make Paragraph Type.
 */

if (isset($paragraph_values)) {
  // Heading.
  if (_sales_field_check($paragraph_values, 'field_heading')) {
    $variables['card']['title'] = $paragraph_values->get('field_heading')->getString();
  }
  // Description.
  if (_sales_field_check($paragraph_values, 'field_description_plain')) {
    $variables['card']['description'] = $paragraph_values->get('field_description_plain')->getString();
  }
  // Date.
  if (_sales_field_check($paragraph_values, 'field_date')) {
    $variables['card']['date'] = $paragraph_values->get('field_date')->view('full');
  }
  // Image.
  if (_sales_field_check($paragraph_values, 'field_card_media')) {
    $card_media_entity = $paragraph_values->get('field_card_media')->entity;
    $variables['card']['image'] = _sales_image_with_focal($card_media_entity->get('field_media_image'));
    $variables['#cache']['tags'][] = 'media:' . $card_media_entity->id();
  }
  // Call To Actions.
  if (_sales_field_check($paragraph_values, 'field_call_to_action')) {
    // Strech the link to fill the card if the link is only one.
    if (count($paragraph_values->field_call_to_action) == 1) {
      $variables['card']['stretched_link'] = TRUE;
      $variables['card']['card_modifiers'][] = 'has-stretched-link';
    }
    $variables['card']['links'] = [];
    foreach ($paragraph_values->field_call_to_action as $link) {
      $variables['card']['links'][] = _sales_link_helper($link);
    }
  }
}
