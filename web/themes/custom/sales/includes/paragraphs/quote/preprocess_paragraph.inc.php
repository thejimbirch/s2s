<?php

/**
 * @file
 * Preprocess Paragraph Quote.
 */

if (isset($paragraph_values)) {
  // Alignment field_text_alignment.
  $variables['quote']['alignment'] = 'left';
  if (_sales_field_check($paragraph_values, 'field_text_alignment')) {
    $variables['quote']['alignment'] = $paragraph_values->get('field_text_alignment')->getString();
  }
  // Quote field_description.
  if (_sales_field_check($paragraph_values, 'field_description')) {
    $variables['quote']['quote'] = $paragraph_values->get('field_description')->view();
  }
  // Quote field_quote_source.
  if (_sales_field_check($paragraph_values, 'field_quote_source')) {
    $variables['quote']['source'] = $paragraph_values->get('field_quote_source')->getString();
  }
}
