<?php

/**
 * @file
 * Preprocess Paragraph Tabs.
 */

if (isset($paragraph_values)) {
  $accordions_items = [];
  // field_section.
  if (_sales_field_check($paragraph_values, 'field_paragraph')) {
    $accordions_entities = $paragraph_values->get('field_paragraph')->referencedEntities();
    // For each Tab references.
    foreach ($accordions_entities as $accordions) {
      $accordions_array = [];
      // Section Entity Id.
      $accordions_array['id'] = $accordions->id();
      // Section Title.
      if (_sales_field_check($accordions, 'field_section_title')) {
        $accordions_array['title'] = $accordions->get('field_section_title')->getString();
      }
      // Body.
      if (_sales_field_check($accordions, 'field_paragraph')) {
        $accordions_array['content'] = TRUE;
      }
      $accordions_items[] = $accordions_array;
    }
  }

  if (!empty($accordions_items)) {
    $variables['accordions'] = [
      'items' => $accordions_items,
    ];
  }
}
