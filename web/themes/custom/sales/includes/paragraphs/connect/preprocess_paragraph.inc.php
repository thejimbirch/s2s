<?php

/**
 * @file
 * Preprocess Paragraphs for Icon Card.
 */

if (isset($paragraph_values)) {
  // Connect Type.
  if (_sales_field_check($paragraph_values, 'field_connect_type')) {
    $variables['connect']['type'] = $paragraph_values->get('field_connect_type')->getString();
  }
  // Connect link.
  if (_sales_field_check($paragraph_values, 'field_connect_link')) {
    $variables['connect']['link'] = $paragraph_values->get('field_connect_link')->getString();
  }
  // Connect Text.
  if (_sales_field_check($paragraph_values, 'field_connect_text')) {
    $variables['connect']['text'] = $paragraph_values->get('field_connect_text')->getString();
  }
}
