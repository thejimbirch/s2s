<?php

/**
 * @file
 * Preprocess Paragraphs for Jump Menu.
 */

if (isset($paragraph_values)) {
  $jump_menu_items = [];
  // Alignment field_flex_justify_content.
  $alignment = 'justify-content-start';
  if (_sales_field_check($paragraph_values, 'field_flex_justify_content')) {
    $alignment = $paragraph_values->get('field_flex_justify_content')->getString();
  }
  // field_section.
  if (_sales_field_check($paragraph_values, 'field_section')) {
    $section_entities = $paragraph_values->get('field_section')->referencedEntities();
    // For each Section references.
    foreach ($section_entities as $section) {
      $section_array = [];
      // Section Entity Id.
      $section_array['id'] = $section->id();
      // Section Title.
      if (_sales_field_check($section, 'field_section_title')) {
        $section_array['title'] = $section->get('field_section_title')->getString();
      }
      // Section id.
      if (_sales_field_check($section, 'field_section_id')) {
        $section_array['href'] = $section->get('field_section_id')->getString();
      }
      // Body.
      if (_sales_field_check($section, 'field_section_body')) {
        $section_array['body'] = TRUE;
      }
      $jump_menu_items[] = $section_array;
    }
  }

  if (!empty($jump_menu_items)) {
    $variables['jump_menu'] = [
      'alignment' => $alignment,
      'items' => $jump_menu_items,
    ];
  }
}
