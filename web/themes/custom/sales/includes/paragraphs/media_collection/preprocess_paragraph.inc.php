<?php

/**
 * @file
 * Preprocess Paragraph Media Collection.
 */

if (isset($paragraph_values)) {
  // Heading.
  if (_sales_field_check($paragraph_values, 'field_heading')) {
    $variables['collection']['heading'] = $paragraph_values->get('field_heading')->getString();
  }
  // Display Mode. Default is gallery.
  $variables['collection']['display_mode'] = 'gallery';
  if (_sales_field_check($paragraph_values, 'field_display_mode')) {
    $variables['collection']['display_mode'] = $paragraph_values->get('field_display_mode')->getString();
  }

  // Media colleciton.
  $media_items = [];
  $variables['collection']['media_items'] = FALSE;
  if (_sales_field_check($paragraph_values, 'field_media_multiple')) {
    foreach ($paragraph_values->field_media_multiple as $media_item) {
      $media_entity = $media_item->entity;
      $media_entity_id = $media_entity->id();
      $media_entity_bundle_type = $media_entity->bundle();
      $variables['#cache']['tags'][] = 'media:' . $media_entity_id;
      if ($media_entity->status->getString() == 1) {
        $media_items[] = [
          'id' => $media_entity_id,
          'type' => $media_entity_bundle_type,
        ];
      }
    }
  }
  if (!empty($media_items)) {
    $variables['collection']['media_items'] = $media_items;
  }
}
