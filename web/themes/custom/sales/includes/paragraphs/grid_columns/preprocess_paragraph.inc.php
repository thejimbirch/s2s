<?php

/**
 * @file
 * Preprocess Paragraphs for Grid Columns.
 */

if (isset($paragraph_values)) {
  $variables['grid']['desktop'] = '3';
  $variables['grid']['tablet'] = '2';
  $variables['grid']['mobile'] = '1';
  $variables['grid']['justify_content'] = 'justify-content-start';
  $variables['grid']['gutter'] = '4';

  // Desktop number of columns field_columns_desktop.
  if (_sales_field_check($paragraph_values, 'field_columns_desktop')) {
    $variables['grid']['desktop'] = $paragraph_values->get('field_columns_desktop')->getString();
  }
  // Tablet number of columns field_columns_tablet.
  if (_sales_field_check($paragraph_values, 'field_columns_tablet')) {
    $variables['grid']['tablet'] = $paragraph_values->get('field_columns_tablet')->getString();
  }
  // Mobile number of columns field_columns_mobile.
  if (_sales_field_check($paragraph_values, 'field_columns_mobile')) {
    $variables['grid']['mobile'] = $paragraph_values->get('field_columns_mobile')->getString();
  }
  // Flex Justify Content.
  if (_sales_field_check($paragraph_values, 'field_flex_justify_content')) {
    $variables['grid']['justify_content'] = $paragraph_values->get('field_flex_justify_content')->getString();
  }
  // Column Gutters.
  if (_sales_field_check($paragraph_values, 'field_column_gutters')) {
    $variables['grid']['gutter'] = $paragraph_values->get('field_column_gutters')->getString();
  }
  // Heading.
  if (_sales_field_check($paragraph_values, 'field_heading')) {
    $variables['grid']['heading'] = $paragraph_values->get('field_heading')->getString();
  }
  // Description.
  if (_sales_field_check($paragraph_values, 'field_description')) {
    $variables['grid']['description'] = $paragraph_values->get('field_description')->view('full');
  }
  // Columns field_paragraph.
  $columns = [];
  $variables['grid']['columns'] = FALSE;
  if (_sales_field_check($paragraph_values, 'field_paragraph')) {
    foreach ($paragraph_values->field_paragraph as $column) {
      if ($column->entity->status->getString() == 1) {
        $columns[] = $column->target_id;
      }
    }
  }
  if (!empty($columns)) {
    $variables['grid']['columns'] = $columns;
  }
}
