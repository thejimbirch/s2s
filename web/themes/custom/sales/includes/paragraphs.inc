<?php

/**
 * @file
 * Functions to support theming in the sales theme.
 */

/**
 * Implements hook_preprocess_paragraph().
 */
function sales_preprocess_paragraph(&$variables) {
  $paragraph_values = $variables['paragraph'];
  if ($paragraph_values) {
    $paragraph_type = $paragraph_values->type->getValue()[0]['target_id'];
  }
  // Paragraph preprocessing by Paragraph Type.
  if (isset($paragraph_type)) {
    if (file_exists(dirname(__FILE__) . '/paragraphs/' . $paragraph_type . '/preprocess_paragraph.inc.php')) {
      include 'paragraphs/' . $paragraph_type . '/preprocess_paragraph.inc.php';
    }
  }
}
