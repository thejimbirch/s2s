<?php

/**
 * @file
 * Preprocess Paragraph Tabs.
 */

if (isset($paragraph_values)) {
  $tab_items = [];
  // Alignment field_flex_justify_content.
  $alignment = 'justify-content-start';
  if (_sales_field_check($paragraph_values, 'field_flex_justify_content')) {
    $alignment = $paragraph_values->get('field_flex_justify_content')->getString();
  }
  // field_section.
  if (_sales_field_check($paragraph_values, 'field_paragraph')) {
    $tab_entities = $paragraph_values->get('field_paragraph')->referencedEntities();
    // For each Tab references.
    foreach ($tab_entities as $tab) {
      $tab_array = [];
      // Section Entity Id.
      $tab_array['id'] = $tab->id();
      // Section Title.
      if (_sales_field_check($tab, 'field_section_title')) {
        $tab_array['title'] = $tab->get('field_section_title')->getString();
      }
      // Body.
      if (_sales_field_check($tab, 'field_paragraph')) {
        $tab_array['content'] = TRUE;
      }
      $tab_items[] = $tab_array;
    }
  }

  if (!empty($tab_items)) {
    $variables['tabs'] = [
      'alignment' => $alignment,
      'items' => $tab_items,
    ];
  }
}
