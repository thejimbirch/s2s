<?php

/**
 * @file
 * Preprocess Paragraphs for Block Reference.
 */

if (isset($paragraph_values)) {
  // Heading.
  if (_sales_field_check($paragraph_values, 'field_heading')) {
    $variables['block_data']['heading'] = $paragraph_values->get('field_heading')->getString();
  }
  $blocks_array = [];
  if (_sales_field_check($paragraph_values, 'field_block_reference')) {
    foreach ($paragraph_values->field_block_reference as $block) {
      $blocks_array[] = $block->plugin_id;
    }
  }
  if (!empty($blocks_array)) {
    $variables['block_data']['references'] = $blocks_array;
  }
}
